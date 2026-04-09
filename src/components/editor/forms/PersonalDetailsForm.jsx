import React from 'react';
import { useResumeStore } from '../../../store/useResumeStore';
import { motion } from 'framer-motion';

const PersonalDetailsForm = () => {
  const { personalInfo, setPersonalInfo } = useResumeStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ [name]: value });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Personal Details</h2>
        <p className="text-slate-500 text-sm">Tell us about yourself. This is the first thing employers will see.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">First Name</label>
          <input 
            type="text" 
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="John" 
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Last Name</label>
          <input 
            type="text" 
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Doe" 
          />
        </div>

        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Job Title</label>
          <input 
            type="text" 
            name="jobTitle"
            value={personalInfo.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="e.g. Senior Software Engineer" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="john@example.com" 
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Phone</label>
          <input 
            type="tel" 
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="+1 234 567 8900" 
          />
        </div>

        <div className="space-y-1.5 md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Location</label>
          <input 
            type="text" 
            name="location"
            value={personalInfo.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="San Francisco, CA" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">LinkedIn Profile</label>
          <input 
            type="url" 
            name="linkedin"
            value={personalInfo.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="linkedin.com/in/johndoe" 
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Portfolio / Website</label>
          <input 
            type="url" 
            name="portfolio"
            value={personalInfo.portfolio}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="johndoe.dev" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalDetailsForm;
