import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            02. Academic Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3">
            Formal qualifications, coursework, and academic distinctions shaping my engineering rigor.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {educationList.map((item, index) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 transition-transform" />

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                
                {/* Top Row: Degree & Completion Year */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                    <Calendar className="w-4 h-4" />
                    <span>Completed {item.completionYear} ({item.period})</span>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{item.institution}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  {item.gpa && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{item.gpa}</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Key Honors & Activities</span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-indigo-500 font-bold">›</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
