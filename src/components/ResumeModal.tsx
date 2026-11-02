import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, FileText, ExternalLink } from 'lucide-react';
import { UserProfile, educationList, experienceList, skillsList, certificationsList, projectsList } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  const [activeTab, setActiveTab] = useState<'formatted' | 'pdf'>('formatted');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const content = `
${profile.name.toUpperCase()}
${profile.title}
Phone: ${profile.phone} | Email: ${profile.email}
Address: ${profile.location}

SUMMARY
${profile.shortBio}

SKILLS
- Communication Skills
- Fast Learner & Adaptability
- Teamwork & Collaboration
- Problem Solving
- Time Management
- Microsoft Office 365 (Certified 2024)
- Basic IT Support & Troubleshooting
- Full-Stack JavaScript Fundamentals (Karkhana Samuha 2026)
- AWS Cloud Fundamentals (One Cloud Utopia 2025)
- Web Development Basics (HTML5, CSS3, JavaScript)

EDUCATION
${educationList.map(e => `${e.degree} – ${e.institution} (${e.period})
${e.description}
Highlights: ${e.highlights.join('; ')}`).join('\n\n')}

CERTIFICATIONS
${certificationsList.map(c => `• ${c.title} (${c.date}) – ${c.issuer}`).join('\n')}

ACHIEVEMENTS & ACTIVITIES
• BPC TECH HUNT 3.0 – 2nd Runner Up (2023)
• Code For Change Birgunj (CFC) – General Member (2025)
• Tech Events Organizer & Community Volunteer (2024 – Present)

PROJECTS
${projectsList.map(p => `• ${p.title} (${p.categoryLabel})\n  Technologies: ${p.technologies.join(', ')}\n  Description: ${p.description}`).join('\n\n')}

LANGUAGES
${profile.languages.map(l => `${l.name} (${l.level})`).join(', ')}
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}_CV.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white">
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl my-8 overflow-hidden print:border-none print:shadow-none print:my-0 print:max-w-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar (hidden in print) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 print:hidden">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm text-slate-900 dark:text-white">Curriculum Vitae</span>
            <span className="text-xs text-slate-500 font-mono">({profile.name})</span>

            {/* View Switcher Tabs */}
            <div className="flex items-center bg-slate-200 dark:bg-slate-800 rounded-lg p-0.5 text-xs font-medium ml-2">
              <button
                onClick={() => setActiveTab('formatted')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === 'formatted'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Formatted View
              </button>
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === 'pdf'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Original PDF
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <a
              href={profile.resumePdfUrl}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF CV</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Text</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Formatted Document View */}
        {activeTab === 'formatted' ? (
          <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto print:max-h-none print:overflow-visible text-slate-800 dark:text-slate-200 print:text-slate-900">
            
            {/* Header */}
            <div className="border-b border-slate-200 dark:border-slate-700 pb-5 mb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-black">
                {profile.name}
              </h1>
              <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 print:text-indigo-700 mt-1">
                {profile.title}
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 dark:text-slate-400 print:text-slate-600 mt-3">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  {profile.phone}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  {profile.email}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {profile.location}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-slate-600 border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
                Summary
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 print:text-slate-800">
                {profile.shortBio}
              </p>
            </div>

            {/* Skills */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-slate-600 border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
                Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                <span>• Communication Skills</span>
                <span>• Fast Learner</span>
                <span>• Teamwork & Collaboration</span>
                <span>• Problem Solving</span>
                <span>• Time Management</span>
                <span>• Adaptability</span>
                <span>• Microsoft Office 365</span>
                <span>• Basic IT Support & Troubleshooting</span>
                <span>• Full-Stack JavaScript Fundamentals</span>
                <span>• AWS Cloud Fundamentals</span>
                <span>• Web Development Basics</span>
              </div>
            </div>

            {/* Education */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-slate-600 border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
                Education
              </h2>
              {educationList.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white print:text-black">
                    <span>{edu.degree} – {edu.institution}</span>
                    <span className="font-mono text-slate-500 dark:text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 print:text-slate-700 mt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-slate-600 border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                {certificationsList.map((c) => (
                  <li key={c.id}>
                    • <span className="font-semibold text-slate-900 dark:text-white print:text-black">{c.title}</span> – {c.issuer} ({c.date})
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements & Activities */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-slate-600 border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
                Achievements & Activities
              </h2>
              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                <li>• BPC TECH HUNT 3.0 – 2nd Runner Up (2023)</li>
                <li>• Code For Change Birgunj (CFC) – General Member (2025)</li>
                <li>• Tech Events Organizer & Community Volunteer (2024 – Present)</li>
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-slate-600 border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
                Projects
              </h2>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                {projectsList.map((p) => (
                  <li key={p.id}>
                    • <span className="font-semibold text-slate-900 dark:text-white print:text-black">{p.title}</span>: {p.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-slate-600 border-b border-slate-100 dark:border-slate-800 pb-1 mb-2">
                Languages
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                Nepali, Hindi, English, Bhojpuri
              </p>
            </div>

          </div>
        ) : (
          /* Tab 2: Embedded PDF Viewer */
          <div className="p-4 bg-slate-950 flex flex-col items-center justify-center">
            <iframe
              src={profile.resumePdfUrl}
              title="Prerna Sah CV PDF"
              className="w-full h-[70vh] rounded-xl border border-slate-800 bg-white"
            />
            <div className="mt-3 flex items-center justify-between w-full text-xs text-slate-400 px-2">
              <span>Viewing attached original CV document</span>
              <a
                href={profile.resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium"
              >
                <span>Open in full tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
