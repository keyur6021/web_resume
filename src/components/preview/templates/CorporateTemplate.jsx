import React from 'react';
import { Mail, Phone, MapPin, Link, Globe } from 'lucide-react';
import { useResumeStore } from '../../../store/useResumeStore';

const CorporateTemplate = ({ themeColor = '#1e3a8a' }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = useResumeStore();

  return (
    <div className="p-10 text-slate-800">
      {/* Header */}
      <div className="text-white p-6 -mx-10 -mt-10 mb-8" style={{ backgroundColor: themeColor }}>
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        {personalInfo.jobTitle && (
          <p className="text-lg opacity-90">{personalInfo.jobTitle}</p>
        )}
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          {personalInfo.email && (
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {personalInfo.phone}</span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {personalInfo.location}</span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1.5"><Link className="w-3.5 h-3.5" /> {personalInfo.linkedin}</span>
          )}
          {personalInfo.portfolio && (
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> {personalInfo.portfolio}</span>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <section className="mb-8 bg-slate-50 p-4 rounded border-l-4" style={{ borderColor: themeColor }}>
          <p className="text-slate-700 leading-relaxed italic">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 mb-4 pb-2 border-b" style={{ borderColor: themeColor }}>
            Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: themeColor }}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-sm text-slate-500">{exp.startDate} — {exp.endDate}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{exp.company}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 mb-4 pb-2 border-b" style={{ borderColor: themeColor }}>
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: themeColor }}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                    <span className="text-sm text-slate-500">{edu.startDate} — {edu.endDate}</span>
                  </div>
                  <p className="text-sm text-slate-600">{edu.institution}</p>
                  {edu.description && <p className="text-sm text-slate-600 mt-1">{edu.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 mb-4 pb-2 border-b" style={{ borderColor: themeColor }}>
            Core Competencies
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }}></span>
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects & Certifications */}
      {(projects.length > 0 || certifications.length > 0) && (
        <div className="grid grid-cols-2 gap-8">
          {projects.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 mb-4 pb-2 border-b" style={{ borderColor: themeColor }}>
                Key Projects
              </h2>
              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h3 className="font-semibold text-slate-900 text-sm">{proj.name}</h3>
                    <p className="text-xs text-slate-600">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900 mb-4 pb-2 border-b" style={{ borderColor: themeColor }}>
                Certifications
              </h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <p className="font-semibold text-sm text-slate-900">{cert.name}</p>
                    <p className="text-xs text-slate-500">{cert.issuer} {cert.date && `• ${cert.date}`}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default CorporateTemplate;
