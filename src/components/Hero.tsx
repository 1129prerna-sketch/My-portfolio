import React from 'react';
import { ArrowDown, Mail, ArrowUpRight, Github, Linkedin, Facebook, Instagram, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { UserProfile } from '../data/portfolioData';

interface HeroProps {
  profile: UserProfile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] bg-gradient-to-tr from-indigo-600/15 via-violet-600/10 to-blue-500/10 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero: 2-column balanced grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability status line (clean unboxed text, no pills) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 inline-block animate-pulse" />
              <span>{profile.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 dark:from-indigo-400 dark:via-violet-400 dark:to-blue-400">{profile.name}</span>
            </h1>

            {/* Profession / Role */}
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
              {profile.title}
            </p>

            {/* Short Engaging Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
              {profile.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4" />
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 mr-2">
                Connect
              </span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:scale-110"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Interactive Floating Details */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative halo ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 -z-10" />

              {/* Main Developer Identity Card (No stock photo) */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-6 sm:p-7">
                
                {/* Header: Monogram & Bio lockup */}
                <div className="flex items-center gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-blue-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
                    {profile.initials}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                      {profile.name}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {profile.title}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {profile.location}
                    </p>
                  </div>
                </div>

                {/* Developer Terminal / Profile Console */}
                <div className="mt-5 rounded-2xl bg-slate-950 p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span>profile.ts</span>
                  </div>

                  <p className="text-indigo-400 font-semibold">// Birgunj Public College (BIM)</p>
                  <p><span className="text-violet-400">const</span> developer = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-400">"{profile.name}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">program:</span> <span className="text-emerald-400">"BIM (2024–Present)"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">skills:</span> [<span className="text-amber-300">"Full-Stack JS"</span>, <span className="text-amber-300">"AWS"</span>, <span className="text-amber-300">"Web"</span>],</p>
                  <p className="pl-4"><span className="text-slate-400">community:</span> <span className="text-emerald-400">"Code For Change Birgunj"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">award:</span> <span className="text-amber-400">"BPC TECH HUNT 3.0 Runner Up"</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Bottom Status strip */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-medium">BIM Undergraduate</span>
                  </div>
                  <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
                    Birgunj, Nepal
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Top Right Tech Pill */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl p-3 flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Focus</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Full-Stack JS · AWS</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left Experience Pill */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl p-3 flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tech Competition</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">BPC Tech Hunt 3.0 Runner Up</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Key Metrics Strip Below Split */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              BIM <span className="text-indigo-600 dark:text-indigo-400 text-lg">2024–Now</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Birgunj Public College</p>
          </div>
          <div className="text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              2nd <span className="text-indigo-600 dark:text-indigo-400 text-lg">Runner Up</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">BPC TECH HUNT 3.0</p>
          </div>
          <div className="text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              3<span className="text-indigo-600 dark:text-indigo-400">+</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Certified Trainings</p>
          </div>
          <div className="text-left">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              4 <span className="text-indigo-600 dark:text-indigo-400 text-lg">Languages</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Nepali, Hindi, English, Bhojpuri</p>
          </div>
        </div>

      </div>
    </section>
  );
};
