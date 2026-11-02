import React, { useState } from 'react';
import { Cpu, Code2, Wrench, MessageSquare, Lightbulb, Check } from 'lucide-react';
import { skillsList, SkillItem } from '../data/portfolioData';

type SkillCategory = 'all' | 'technical' | 'programming' | 'tools' | 'communication' | 'problem-solving';

const categoryTabs = [
  { id: 'all' as SkillCategory, label: 'All Skills', icon: Cpu },
  { id: 'technical' as SkillCategory, label: 'Technical Skills', icon: Cpu },
  { id: 'programming' as SkillCategory, label: 'Programming', icon: Code2 },
  { id: 'tools' as SkillCategory, label: 'Software & Tools', icon: Wrench },
  { id: 'communication' as SkillCategory, label: 'Communication', icon: MessageSquare },
  { id: 'problem-solving' as SkillCategory, label: 'Problem-Solving', icon: Lightbulb },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            03. Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical & Professional Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3">
            A comprehensive overview of my programming languages, frameworks, developer tools, and team collaboration strengths.
          </p>
        </div>

        {/* Filter Segmented Control Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl overflow-x-auto mb-10 max-w-full scrollbar-none">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Skill Name & Experience */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 shrink-0">
                    {skill.experience}
                  </span>
                </div>

                {/* Highlight/Description */}
                {skill.highlight && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {skill.highlight}
                  </p>
                )}
              </div>

              {/* Proficiency Bar */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-slate-600 dark:text-slate-400">Proficiency</span>
                  <span className="font-semibold text-slate-900 dark:text-white tabular-nums">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quick summary strip */}
        <div className="mt-12 p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">Continuous Learning & Upskilling</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Dedicated to staying current with emerging web standards, generative AI integrations, and high-concurrency systems.</p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg text-xs font-semibold text-indigo-600 dark:text-indigo-300 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 transition-colors whitespace-nowrap shrink-0"
          >
            See Skills in Action
          </a>
        </div>

      </div>
    </section>
  );
};
