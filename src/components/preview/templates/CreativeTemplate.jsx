import React from 'react';
import { Mail, Phone, MapPin, Link, Globe } from 'lucide-react';
import { useResumeStore } from '../../../store/useResumeStore';

const CreativeTemplate = ({ themeColor = '#7c3aed' }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = useResumeStore();

  return (
    <div className="flex min-h-full">
      {/* Sidebar */}
      <div className="w-1/3 text-white p-8 flex flex-col" style={{ backgroundColor: themeColor }}>
        {/* Profile */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold leading-tight mb-1">
            {personalInfo.firstName}
          </h1>
          <h1 className="text-2xl font-bold leading-tight mb-3">
            {personalInfo.lastName}
          </h1>
          {personalInfo.jobTitle && (
            <p className="text-sm opacity-90">{personalInfo.jobTitle}</p>
          )}
        </div>

        {/* Contact */}
        <div className="space-y-3 text-sm mb-8">
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 opacity-70" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 opacity-70" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 opacity-70" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Link className="w-4 h-4 opacity-70" />
              <span className="truncate">{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.portfolio && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 opacity-70" />
              <span className="truncate">{personalInfo.portfolio}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/30 pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/20 rounded text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/30 pb-2">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-sm font-semibold">{edu.degree}</p>
                  <p className="text-xs opacity-80">{edu.institution}</p>
                  <p className="text-xs opacity-70">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-slate-50">
        {/* Summary */}
        {summary && (
          <section className="mb-8">
            <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-3 pb-2 border-b-2" style={{ borderColor: themeColor }}>
              About Me
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b-2" style={{ borderColor: themeColor }}>
              Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-sm" style={{ color: themeColor }}>{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-500 whitespace-nowrap ml-4">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b-2" style={{ borderColor: themeColor }}>
              Projects
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-sm text-slate-900">{proj.name}</h3>
                  {proj.url && <p className="text-xs text-slate-500 mb-1">{proj.url}</p>}
                  <p className="text-xs text-slate-600 mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b-2" style={{ borderColor: themeColor }}>
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between text-sm bg-white px-4 py-2 rounded">
                  <span className="font-medium text-slate-900">{cert.name}</span>
                  <span className="text-slate-500">{cert.issuer} {cert.date && `• ${cert.date}`}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CreativeTemplate;
