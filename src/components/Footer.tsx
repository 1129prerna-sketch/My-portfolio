import React from 'react';
import { ArrowUp, Github, Linkedin, Facebook, Instagram, Heart } from 'lucide-react';
import { UserProfile } from '../data/portfolioData';

interface FooterProps {
  profile: UserProfile;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100 dark:border-slate-800/80">
          
          {/* Logo & Initials */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-bold text-base flex items-center justify-center shadow-md shadow-indigo-500/20">
              {profile.initials}
            </span>
            <div>
              <p className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                {profile.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {profile.title}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Row: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
