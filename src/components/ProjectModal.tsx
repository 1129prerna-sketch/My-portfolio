import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white backdrop-blur-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4 text-white">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400 font-mono">
                {project.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">
                {project.title}
              </h3>
            </div>
            {project.metrics && (
              <span className="hidden sm:inline-block text-xs font-mono bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-indigo-200">
                {project.metrics}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider mb-2">
              System Architecture & Overview
            </h4>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase text-slate-900 dark:text-white tracking-wider mb-2">
              Engineering Highlights
            </h4>
            <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Responsive mobile-first interface optimized for touch devices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Zero client telemetry bottlenecks with optimized asset bundling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Automated regression testing and clean component isolation</span>
              </li>
            </ul>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors inline-flex items-center gap-2"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
