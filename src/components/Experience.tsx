import React, { useState } from 'react';
import { Briefcase, Award, ShieldCheck, BookOpen, ExternalLink, Calendar, MapPin, CheckCircle } from 'lucide-react';
import {
  experienceList,
  certificationsList,
  achievementsList,
  workshopsList,
} from '../data/portfolioData';

type ExperienceTab = 'experience' | 'certifications' | 'achievements' | 'workshops';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExperienceTab>('experience');

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            05. Career & Distinctions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience & Achievements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3">
            Industry roles, technical internships, recognized certifications, honors, and professional workshops.
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl overflow-x-auto mb-10 max-w-full scrollbar-none">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'experience'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Work & Internships</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'certifications'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Certifications</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'achievements'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Academic Achievements</span>
          </button>

          <button
            onClick={() => setActiveTab('workshops')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'workshops'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Workshops & Training</span>
          </button>
        </div>

        {/* Tab 1: Work & Internships */}
        {activeTab === 'experience' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {experienceList.map((exp) => (
              <div
                key={exp.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {exp.type === 'work' ? 'Full-Time Position' : 'Engineering Internship'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 font-mono">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-5">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{exp.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5 mb-6 text-sm text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0 mt-0.5">›</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack used */}
                {exp.techStack && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mr-1">Technologies:</span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      Issued {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
                    Credential ID: <span className="text-slate-800 dark:text-slate-200">{cert.credentialId}</span>
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>Verify Credential on Issuer Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Academic Achievements */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {achievementsList.map((ach) => (
              <div
                key={ach.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">
                      {ach.year}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {ach.organization}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    Distinction: {ach.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Workshops & Training */}
        {activeTab === 'workshops' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {workshopsList.map((ws) => (
              <div
                key={ws.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                    <span>{ws.instructor}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{ws.year}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {ws.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Key Focus: {ws.focus}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Certificate Completed</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
