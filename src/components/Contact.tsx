'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal } from '@/data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="pt-20 pb-16 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <MessageCircle size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">Get In Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight font-display">
            Let&apos;s Build <span className="gradient-text">Something Amazing</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Looking to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Info Cards */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 font-display">Contact Info</h3>
                <div className="space-y-3">
                  <a href={`mailto:${personal.email}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs opacity-80">Email</div>
                      <div className="text-sm font-semibold truncate">{personal.email}</div>
                    </div>
                  </a>
                  <a href={`tel:${personal.phone}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-xs opacity-80">Phone</div>
                      <div className="text-sm font-semibold">{personal.phone}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-xs opacity-80">Location</div>
                      <div className="text-sm font-semibold">{personal.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-display">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href={personal.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-xl transition-all group">
                  <FaGithub size={18} />
                  <span className="text-sm font-semibold">GitHub</span>
                </a>
                <a href={personal.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-xl transition-all group">
                  <FaLinkedin size={18} />
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-50 border border-green-200 rounded-3xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="font-bold text-green-800 text-sm">Available for Work</span>
              </div>
              <p className="text-xs text-green-700 leading-relaxed">{personal.availableFor}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-1 font-display">Send a Message</h3>
            <p className="text-sm text-slate-500 mb-6">I&apos;ll respond within 24 hours</p>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} /> Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}