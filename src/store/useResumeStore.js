import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export const useResumeStore = create(
  persist(
    (set) => ({
      // Current selected template
      template: 'minimal',
      setTemplate: (templateName) => set({ template: templateName }),

      // Global theme color (if supported by template)
      themeColor: '#3b82f6',
      setThemeColor: (color) => set({ themeColor: color }),

      personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        jobTitle: 'Software Engineer',
        email: 'john.doe@example.com',
        phone: '+1 234 567 8900',
        location: 'New York, CA',
        linkedin: 'linkedin.com/in/johndoe',
        portfolio: 'johndoe.dev',
      },
      setPersonalInfo: (data) => set((state) => ({ personalInfo: { ...state.personalInfo, ...data } })),

      summary: 'Passionate and results-driven Software Engineer with 5+ years of experience in developing scalable web applications. Proficient in React, Node.js, and modern cloud architectures.',
      setSummary: (summary) => set({ summary }),

      experience: [
        {
          id: uuidv4(),
          company: 'Tech Solutions Inc.',
          role: 'Senior Frontend Developer',
          startDate: '2021-01',
          endDate: 'Present',
          description: 'Led the development of the core product dashboard using React and Tailwind CSS. Improved page load speed by 40% through code splitting and lazy loading. Mentored junior developers.',
        },
      ],
      addExperience: (exp) => set((state) => ({ experience: [...state.experience, { ...exp, id: uuidv4() }] })),
      updateExperience: (id, data) => set((state) => ({
        experience: state.experience.map((exp) => (exp.id === id ? { ...exp, ...data } : exp)),
      })),
      removeExperience: (id) => set((state) => ({
        experience: state.experience.filter((exp) => exp.id !== id),
      })),

      education: [
        {
          id: uuidv4(),
          institution: 'University of Technology',
          degree: 'B.S. in Computer Science',
          startDate: '2015-09',
          endDate: '2019-06',
          description: 'Graduated with Honors. Coursework included Data Structures, Algorithms, and Web Development.',
        },
      ],
      addEducation: (edu) => set((state) => ({ education: [...state.education, { ...edu, id: uuidv4() }] })),
      updateEducation: (id, data) => set((state) => ({
        education: state.education.map((edu) => (edu.id === id ? { ...edu, ...data } : edu)),
      })),
      removeEducation: (id) => set((state) => ({
        education: state.education.filter((edu) => edu.id !== id),
      })),

      skills: ['JavaScript', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'],
      setSkills: (skills) => set({ skills }),

      projects: [],
      addProject: (proj) => set((state) => ({ projects: [...state.projects, { ...proj, id: uuidv4() }] })),
      updateProject: (id, data) => set((state) => ({
        projects: state.projects.map((proj) => (proj.id === id ? { ...proj, ...data } : proj)),
      })),
      removeProject: (id) => set((state) => ({
        projects: state.projects.filter((proj) => proj.id !== id),
      })),
      
      certifications: [],
      addCertification: (cert) => set((state) => ({ certifications: [...state.certifications, { ...cert, id: uuidv4() }] })),
      updateCertification: (id, data) => set((state) => ({
        certifications: state.certifications.map((cert) => (cert.id === id ? { ...cert, ...data } : cert)),
      })),
      removeCertification: (id) => set((state) => ({
        certifications: state.certifications.filter((cert) => cert.id !== id),
      })),

      resetState: () => set({
        personalInfo: { firstName: '', lastName: '', jobTitle: '', email: '', phone: '', location: '', linkedin: '', portfolio: '' },
        summary: '',
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: []
      })
    }),
    {
      name: 'resume-storage', // name of item in the storage (must be unique)
    }
  )
);
