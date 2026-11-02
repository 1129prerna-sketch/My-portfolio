import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { UserProfile } from '../data/portfolioData';

interface NavbarProps {
  profile: UserProfile;
  darkMode: boolean;
  toggleDarkMode: () => void;
  openCustomizer: () => void;
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

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  darkMode,
  toggleDarkMode,
  openCustomizer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 dark:bg-slate-950/90 bg-white/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4 sm:gap-8">
          {/* Zone 1: Brand wordmark / Initials */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <span className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              {profile.initials || 'AR'}
            </span>
            <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white transition-colors">
              {profile.name}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Theme Toggle, Customizer, CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Edit Portfolio Button */}
            <button
              onClick={openCustomizer}
              title="Personalize details & presets"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Customize profile information"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            {/* Dark/Light Mode Switch */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCustomizer();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Personalize Info</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
