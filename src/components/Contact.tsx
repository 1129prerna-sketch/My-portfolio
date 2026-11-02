import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Clock, AlertCircle } from 'lucide-react';
import { UserProfile } from '../data/portfolioData';

interface ContactProps {
  profile: UserProfile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate real submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 700);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            06. Communication
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3">
            Have an open role, exciting project proposal, or technical question? Feel free to drop a message or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Direct Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            {/* Phone & Location */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Base Location</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* SLA / Response Time Card */}
            <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 flex items-center gap-3.5">
              <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="text-xs text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">Rapid Response Promise</p>
                <p>Usually replies within 24 hours on weekdays.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will review it promptly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:ring-rose-400/30'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500/30 focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. sarah@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-400/30'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500/30 focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject / Topic <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="e.g. Full-Stack Engineering Role / Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? 'border-rose-400 focus:ring-rose-400/30'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500/30 focus:border-indigo-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Share details about the role, project scope, or opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-400/30'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500/30 focus:border-indigo-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 transition-all shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
