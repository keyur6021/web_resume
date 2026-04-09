import React from 'react';
import { Mail, Phone, MapPin, Link, Globe } from 'lucide-react';
import { useResumeStore } from '../../../store/useResumeStore';

const ProfessionalTemplate = ({ themeColor = '#1e40af' }) => {
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
      <div className="flex justify-between items-start mb-8 pb-6 border-b-2" style={{ borderColor: themeColor }}>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          {personalInfo.jobTitle && (
            <p className="text-lg mt-1" style={{ color: themeColor }}>{personalInfo.jobTitle}</p>
          )}
        </div>
        <div className="text-right space-y-1 text-sm">
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
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-8 h-1 rounded" style={{ backgroundColor: themeColor }}></span>
            Summary
          </h2>
          <p className="text-slate-700 leading-relaxed pl-10">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-1 rounded" style={{ backgroundColor: themeColor }}></span>
            Professional Experience
          </h2>
          <div className="space-y-6 pl-10">
            {experience.map((exp) => (
              <div key={exp.id} className="relative border-l-2 border-slate-200 pl-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-sm font-medium px-2 py-0.5 rounded" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-700">{exp.company}</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-1 rounded" style={{ backgroundColor: themeColor }}></span>
            Education
          </h2>
          <div className="space-y-4 pl-10">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  <span className="text-sm text-slate-500">{edu.startDate} — {edu.endDate}</span>
                </div>
                <p className="text-sm text-slate-600">{edu.institution}</p>
                {edu.description && <p className="text-sm text-slate-600 mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Two Column: Skills + Projects/Certs */}
      <div className="grid grid-cols-2 gap-8">
        {skills.length > 0 && (
          <section>
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-1 rounded" style={{ backgroundColor: themeColor }}></span>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 pl-10">
              {skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 text-sm font-medium text-white rounded" style={{ backgroundColor: themeColor }}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-8 h-1 rounded" style={{ backgroundColor: themeColor }}></span>
              Projects
            </h2>
            <div className="space-y-3 pl-10">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <h3 className="font-semibold text-slate-900 text-sm">{proj.name}</h3>
                  <p className="text-xs text-slate-600">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {certifications.length > 0 && (
        <section className="mt-8">
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-8 h-1 rounded" style={{ backgroundColor: themeColor }}></span>
            Certifications
          </h2>
          <div className="space-y-2 pl-10">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between text-sm">
                <span className="font-medium text-slate-900">{cert.name}</span>
                <span className="text-slate-500">{cert.issuer} {cert.date && `• ${cert.date}`}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
