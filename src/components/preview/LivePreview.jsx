import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import MinimalTemplate from './templates/MinimalTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import CorporateTemplate from './templates/CorporateTemplate';
import ModernDarkTemplate from './templates/ModernDarkTemplate';
import TimelineTemplate from './templates/TimelineTemplate';

const templateMap = {
  minimal: MinimalTemplate,
  professional: ProfessionalTemplate,
  creative: CreativeTemplate,
  corporate: CorporateTemplate,
  'modern-dark': ModernDarkTemplate,
  timeline: TimelineTemplate,
};

const LivePreview = () => {
  const { template, themeColor } = useResumeStore();
  const TemplateComponent = templateMap[template] || MinimalTemplate;

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl print-container print:shadow-none print:w-full">
      <TemplateComponent themeColor={themeColor} />
    </div>
  );
};

export default LivePreview;
