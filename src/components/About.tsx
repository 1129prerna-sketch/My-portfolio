import React from 'react';
import { FileText, Compass, Target, GraduationCap, CheckCircle2, Download, Languages, ExternalLink } from 'lucide-react';
import { UserProfile } from '../data/portfolioData';

interface AboutProps {
  profile: UserProfile;
  openResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, openResumeModal }) => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            01. Background & Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3">
            {profile.tagline}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Story & Paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
              {profile.fullBio.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Resume / CV CTA Container */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={profile.resumePdfUrl}
                download="Prerna_Sah_CV_Updated.pdf"
                className="px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Original CV (PDF)</span>
              </a>

              <button
                onClick={openResumeModal}
                className="px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Interactive Resume View</span>
              </button>
            </div>

            {/* Quick Core Strengths from CV */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Teamwork & Collaboration</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Experienced in organizing tech events and turning shared ideas into impactful outcomes.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Fast Learner & Problem Solver</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">2nd Runner Up in BPC TECH HUNT 3.0, with a rapid aptitude for full-stack and cloud skills.</p>
                </div>
              </div>
            </div>

            {/* Languages Section from CV */}
            <div className="pt-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5 mb-3">
                <Languages className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Languages Spoken
                </h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {profile.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <p className="font-bold text-sm text-slate-900 dark:text-white">{lang.name}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Career Interests & Professional Goals (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Career Interests Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Career Interests</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                {profile.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">·</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Goals Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-950/70 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Professional Goals</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                {profile.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-violet-600 dark:text-violet-400 font-bold">·</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Educational Background Quick Highlight */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">BIM Undergraduate</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Birgunj Public College (2024 – Present)</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Currently enrolled in the Bachelor in Information Management program, combining information systems with full-stack programming, cloud fundamentals, and community leadership.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
