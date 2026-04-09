import React from 'react';
import { Mail, Phone, MapPin, Link, Globe } from 'lucide-react';
import { useResumeStore } from '../../../store/useResumeStore';

const MinimalTemplate = ({ themeColor = '#3b82f6' }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = useResumeStore();

  const ContactIcon = ({ icon: Icon, value }) => (
    <span className="flex items-center gap-1.5 text-sm text-slate-600">
      <Icon className="w-3.5 h-3.5" style={{ color: themeColor }} />
      {value}
    </span>
  );

  return (
    <div className="p-8 md:p-12 text-slate-800">
      {/* Header */}
      <div className="text-center border-b-2 pb-6 mb-8" style={{ borderColor: themeColor }}>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        {personalInfo.jobTitle && (
          <p className="text-lg text-slate-600 mt-1">{personalInfo.jobTitle}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {personalInfo.email && <ContactIcon icon={Mail} value={personalInfo.email} />}
          {personalInfo.phone && <ContactIcon icon={Phone} value={personalInfo.phone} />}
          {personalInfo.location && <ContactIcon icon={MapPin} value={personalInfo.location} />}
          {personalInfo.linkedin && <ContactIcon icon={Link} value={personalInfo.linkedin} />}
          {personalInfo.portfolio && <ContactIcon icon={Globe} value={personalInfo.portfolio} />}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: themeColor }}>
            Professional Summary
          </h2>
          <p className="text-slate-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: themeColor }}>
            Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-slate-900">{exp.role}</h3>
                  <span className="text-sm text-slate-500">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{exp.company}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: themeColor }}>
            Education
          </h2>
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-slate-900">{edu.degree}</h3>
                  <span className="text-sm text-slate-500">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-1">{edu.institution}</p>
                {edu.description && <p className="text-sm text-slate-700">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: themeColor }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: themeColor }}>
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="font-semibold text-slate-900">{proj.name}</h3>
                {proj.url && <p className="text-xs text-slate-500 mb-1">{proj.url}</p>}
                <p className="text-sm text-slate-700">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: themeColor }}>
            Certifications
          </h2>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-semibold text-slate-900">{cert.name}</h3>
                <p className="text-sm text-slate-600">
                  {cert.issuer} {cert.date && `• ${cert.date}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
