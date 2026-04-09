import React, { useState } from 'react';
import { useResumeStore } from '../../../store/useResumeStore';
import { motion } from 'framer-motion';
import { Plus, Trash2, Award } from 'lucide-react';

const CertificationsForm = () => {
  const { certifications, addCertification, updateCertification, removeCertification } = useResumeStore();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', issuer: '', date: '' });

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({ name: '', issuer: '', date: '' });
  };

  const handleEdit = (cert) => {
    setEditingId(cert.id);
    setFormData(cert);
  };

  const handleSave = () => {
    if (!formData.name) return;
    if (editingId) {
      updateCertification(editingId, formData);
    } else {
      addCertification(formData);
    }
    setEditingId(null);
    setFormData({ name: '', issuer: '', date: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Certifications</h2>
        <p className="text-slate-500 text-sm">Add professional certifications and licenses.</p>
      </div>

      {/* Existing Certifications */}
      <div className="space-y-3">
        {certifications.map((cert) => (
          <div key={cert.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-slate-400" />
                <h3 className="font-semibold text-slate-900 truncate">{cert.name}</h3>
              </div>
              <p className="text-sm text-slate-600 mt-1">{cert.issuer}</p>
              {cert.date && <p className="text-xs text-slate-500 mt-0.5">{cert.date}</p>}
            </div>
            <div className="flex gap-2 ml-4 shrink-0">
              <button onClick={() => handleEdit(cert)} className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                <Award className="w-4 h-4" />
              </button>
              <button onClick={() => removeCertification(cert.id)} className="p-1.5 text-slate-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form */}
      <div className="border-t border-slate-200 pt-6">
        <h3 className="font-semibold text-slate-800 mb-4">
          {editingId ? 'Edit Certification' : 'Add New Certification'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Certification Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="e.g. AWS Solutions Architect" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Issuing Organization</label>
            <input type="text" name="issuer" value={formData.issuer} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="e.g. Amazon Web Services" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date Issued (Optional)</label>
            <input type="text" name="date" value={formData.date} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm" placeholder="e.g. Jan 2024" />
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} disabled={!formData.name} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {editingId ? 'Update' : 'Add Certification'}
            </button>
            {editingId && (
              <button onClick={handleAddNew} className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationsForm;
