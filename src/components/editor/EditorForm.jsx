import React, { useState } from 'react';
import { User, AlignLeft, Briefcase, GraduationCap, Code, FolderGit2, Award } from 'lucide-react';
import PersonalDetailsForm from './forms/PersonalDetailsForm';
import SummaryForm from './forms/SummaryForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import CertificationsForm from './forms/CertificationsForm';

const steps = [
  { id: 'personal', name: 'Personal', icon: User },
  { id: 'summary', name: 'Summary', icon: AlignLeft },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'skills', name: 'Skills', icon: Code },
  { id: 'projects', name: 'Projects', icon: FolderGit2 },
  { id: 'certifications', name: 'Certifications', icon: Award },
];

const EditorForm = () => {
  const [activeStep, setActiveStep] = useState('personal');

  const renderActiveForm = () => {
    switch (activeStep) {
      case 'personal': return <PersonalDetailsForm />;
      case 'summary': return <SummaryForm />;
      case 'experience': return <ExperienceForm />;
      case 'education': return <EducationForm />;
      case 'skills': return <SkillsForm />;
      case 'projects': return <ProjectsForm />;
      case 'certifications': return <CertificationsForm />;
      default: return <PersonalDetailsForm />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Horizontal Tabs */}
      <div className="flex overflow-x-auto shrink-0 border-b border-slate-200 hide-scrollbar section-tabs bg-slate-50/50">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 text-sm font-medium whitespace-nowrap transition-colors ${
                isActive 
                  ? 'border-blue-600 text-blue-600 bg-white' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {step.name}
            </button>
          );
        })}
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative">
        <div className="max-w-xl mx-auto w-full">
            {renderActiveForm()}
        </div>
      </div>
    </div>
  );
};

export default EditorForm;
