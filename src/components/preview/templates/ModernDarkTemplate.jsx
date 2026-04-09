import React from 'react';
import { Mail, Phone, MapPin, Link, Globe } from 'lucide-react';
import { useResumeStore } from '../../../store/useResumeStore';

const ModernDarkTemplate = ({ themeColor = '#06b6d4' }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = useResumeStore();

  return (
    <div className="bg-slate-900 text-slate-200 p-10 min-h-full">
      {/* Header */}
      <header className="flex items-center justify-between mb-10 pb-6 border-b border-slate-700">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          {personalInfo.jobTitle && (
            <p className="text-lg mt-1" style={{ color: themeColor }}>{personalInfo.jobTitle}</p>
          )}
        </div>
        <div className="text-right space-y-1.5 text-sm text-slate-400">
          {personalInfo.email && (
            <span className="flex items-center justify-end gap-1.5"><Mail className="w-3.5 h-3.5" /> {personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center justify-end gap-1.5"><Phone className="w-3.5 h-3.5" /> {personalInfo.phone}</span>
          )}
          {personalInfo.location && (
            <span className="flex items-center justify-end gap-1.5"><MapPin className="w-3.5 h-3.5" /> {personalInfo.location}</span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center justify-end gap-1.5"><Link className="w-3.5 h-3.5" /> {personalInfo.linkedin}</span>
          )}
          {personalInfo.portfolio && (
            <span className="flex items-center justify-end gap-1.5"><Globe className="w-3.5 h-3.5" /> {personalInfo.portfolio}</span>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-10">
          <p className="text-slate-300 leading-relaxed text-lg italic border-l-2 pl-4" style={{ borderColor: themeColor }}>
            {summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-3">
            <span className="w-6 h-0.5" style={{ backgroundColor: themeColor }}></span>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-white">{exp.role}</h3>
                    <p className="text-sm" style={{ color: themeColor }}>{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono bg-slate-800 px-2 py-1 rounded">
                    {exp.startDate} → {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-3">
            <span className="w-6 h-0.5" style={{ backgroundColor: themeColor }}></span>
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start bg-slate-800/30 p-4 rounded">
                <div>
                  <h3 className="font-semibold text-white">{edu.degree}</h3>
                  <p className="text-sm text-slate-400">{edu.institution}</p>
                </div>
                <span className="text-xs text-slate-500 font-mono">{edu.startDate} — {edu.endDate}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-3">
            <span className="w-6 h-0.5" style={{ backgroundColor: themeColor }}></span>
            Tech Stack & Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1.5 text-xs font-mono rounded border" style={{ borderColor: themeColor, color: themeColor }}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-3">
            <span className="w-6 h-0.5" style={{ backgroundColor: themeColor }}></span>
            Projects
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-slate-800/50 p-4 rounded border border-slate-700/50">
                <h3 className="font-semibold text-white text-sm">{proj.name}</h3>
                {proj.url && <p className="text-xs text-slate-500 mb-1 font-mono">{proj.url}</p>}
                <p className="text-xs text-slate-400 mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-3">
            <span className="w-6 h-0.5" style={{ backgroundColor: themeColor }}></span>
            Certifications
          </h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between text-sm bg-slate-800/30 px-4 py-2 rounded">
                <span className="font-medium text-slate-300">{cert.name}</span>
                <span className="text-slate-500">{cert.issuer} {cert.date && `• ${cert.date}`}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ModernDarkTemplate;
