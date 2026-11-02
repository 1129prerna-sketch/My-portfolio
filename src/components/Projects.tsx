import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, Layers } from 'lucide-react';
import { projectsList, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

type ProjectFilter = 'all' | 'web' | 'mobile' | 'ai' | 'fullstack';

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              04. Featured Showcase
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Projects Portfolio
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3">
              Production web applications, mobile architectures, and developer systems built with clean code and high reliability.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl overflow-x-auto self-start md:self-end">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Web & SaaS
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeFilter === 'mobile'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Mobile & Fintech
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeFilter === 'ai'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI & Developer Tools
            </button>
          </div>
        </div>

        {/* Bento Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-6 text-center';
                      placeholder.innerHTML = `<span class="font-bold text-lg text-white mb-2">${project.title}</span><span class="text-xs text-indigo-400 font-mono">${project.categoryLabel}</span>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />

                {/* Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Quick Category Tag on Image */}
                <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md text-xs font-medium text-white flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-indigo-400" />
                  <span>{project.categoryLabel}</span>
                </div>

                {/* Quick View Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold text-xs shadow-lg hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-indigo-600" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                    <span>{project.categoryLabel}</span>
                    {project.metrics && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{project.metrics}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons: Live Demo and Source Code */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
