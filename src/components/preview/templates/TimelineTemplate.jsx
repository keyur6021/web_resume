import React from 'react';
import { Mail, Phone, MapPin, Link, Globe } from 'lucide-react';
import { useResumeStore } from '../../../store/useResumeStore';

const TimelineTemplate = ({ themeColor = '#0d9488' }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications } = useResumeStore();

  return (
    <div className="p-10 text-slate-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        {personalInfo.jobTitle && (
          <p className="text-lg mt-1" style={{ color: themeColor }}>{personalInfo.jobTitle}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-slate-600">
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
        <section className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-slate-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience Timeline */}
      {experience.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wider text-center mb-8" style={{ color: themeColor }}>
            Experience Timeline
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ backgroundColor: themeColor }}></div>

            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-12">
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 bg-white" style={{ borderColor: themeColor, backgroundColor: themeColor }}></div>

                  <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-sm font-medium" style={{ color: themeColor }}>{exp.company}</p>
                      </div>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Timeline */}
      {education.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wider text-center mb-8" style={{ color: themeColor }}>
            Education
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ backgroundColor: themeColor }}></div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-12">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 bg-white" style={{ borderColor: themeColor }}></div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-slate-900">{edu.degree}</h3>
                        <p className="text-sm text-slate-600">{edu.institution}</p>
                      </div>
                      <span className="text-xs text-slate-500">{edu.startDate} — {edu.endDate}</span>
                    </div>
                    {edu.description && <p className="text-sm text-slate-600 mt-2">{edu.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wider text-center mb-6" style={{ color: themeColor }}>
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white rounded-full shadow-sm border text-sm font-medium text-slate-700"
                style={{ borderColor: themeColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wider text-center mb-6" style={{ color: themeColor }}>
            Projects
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 text-sm">{proj.name}</h3>
                {proj.url && <p className="text-xs text-slate-500 mb-1">{proj.url}</p>}
                <p className="text-xs text-slate-600">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider text-center mb-6" style={{ color: themeColor }}>
            Certifications
          </h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white px-5 py-3 rounded-lg shadow-sm border border-slate-200 flex justify-between text-sm">
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

export default TimelineTemplate;
