/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialProfile, UserProfile, ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CustomizerDrawer } from './components/CustomizerDrawer';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('nexus_portfolio_profile_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === 'Prerna Sah') return parsed;
      }
    } catch (e) {
      // fallback
    }
    return initialProfile;
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('nexus_portfolio_theme');
      if (saved !== null) return saved === 'dark';
    } catch (e) {
      // fallback
    }
    return true; // Default to dark premium aesthetic as requested
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Sync dark class with document.documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('nexus_portfolio_theme', darkMode ? 'dark' : 'light');
    } catch (e) {
      // ignore
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleUpdateProfile = (updated: UserProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('nexus_portfolio_profile_v2', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleResetProfile = () => {
    setProfile(initialProfile);
    try {
      localStorage.removeItem('nexus_portfolio_profile_v2');
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300 transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        profile={profile}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        openCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero profile={profile} />

        {/* About Me Section */}
        <About
          profile={profile}
          openResumeModal={() => setIsResumeOpen(true)}
        />

        {/* Education Section */}
        <Education />

        {/* Skills Section */}
        <Skills />

        {/* Projects Showcase Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Experience & Achievements Section */}
        <Experience />

        {/* Contact Section */}
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Interactive Modals & Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />

      <CustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        onResetProfile={handleResetProfile}
      />
    </div>
  );
}
