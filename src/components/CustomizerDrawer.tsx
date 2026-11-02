import React, { useState } from 'react';
import { X, RotateCcw, Check, Sparkles, User, Briefcase, Mail, MapPin } from 'lucide-react';
import { UserProfile, samplePresets, initialProfile } from '../data/portfolioData';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdateProfile: (newProfile: UserProfile) => void;
  onResetProfile: () => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onResetProfile,
}) => {
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [savedToast, setSavedToast] = useState(false);

  // Sync if profile changes from outside
  React.useEffect(() => {
    setFormData(profile);
  }, [profile]);

  if (!isOpen) return null;

  const handleChange = (field: keyof UserProfile, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'name' ? { initials: value.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() || 'ME' } : {})
    }));
  };

  const handleApplyPreset = (presetName: string) => {
    const preset = samplePresets[presetName];
    if (preset) {
      const updated = {
        ...formData,
        ...preset,
        initials: (preset.name || formData.name).split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
      };
      setFormData(updated);
      onUpdateProfile(updated);
      showToast();
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    showToast();
  };

  const showToast = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Personalize Portfolio</h3>
              <p className="text-xs text-slate-500">Live preview & customize fields</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {/* Quick Presets */}
          <div>
            <label className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Instant Sample Personas
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(samplePresets).map((presetKey) => (
                <button
                  key={presetKey}
                  type="button"
                  onClick={() => handleApplyPreset(presetKey)}
                  className="px-3 py-2 rounded-lg text-left border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 transition-all font-medium hover:bg-indigo-50/50"
                >
                  <p className="font-semibold text-[11px] truncate">{presetKey}</p>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Professional Title / Role
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Short Hero Introduction
              </label>
              <textarea
                rows={3}
                value={formData.shortBio}
                onChange={(e) => handleChange('shortBio', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Location & Availability
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Status Line
              </label>
              <input
                type="text"
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </form>

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onResetProfile();
              setFormData(initialProfile);
              showToast();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{savedToast ? 'Applied!' : 'Save & Update'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
