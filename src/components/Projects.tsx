'use client';

import { motion } from 'framer-motion';
import { Layers, ExternalLink, Building2, Calendar, ArrowUpRight, Bot, Radio, Shield, Plane, Lock, Settings, LucideIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/portfolio';

// Icon mapping for different project types
const iconMap: Record<string, LucideIcon> = {
  bot: Bot,
  nfc: Radio,
  shield: Shield,
  plane: Plane,
  lock: Lock,
  settings: Settings,
};

export default function Projects() {
  return (
    <section className="pt-28 pb-16 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <Layers size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">Featured Work</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight font-display">
            Projects & <span className="gradient-text">Case Studies</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
            A curated selection of impactful projects across AI, defence, IoT, and enterprise domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, i) => {
            const ProjectIcon = iconMap[project.iconType] || Bot;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-0">
                  {/* LEFT - Visual with Icon */}
                  <div className={`relative bg-gradient-to-br ${project.gradient} p-8 md:p-10 flex flex-col justify-between min-h-[400px] overflow-hidden`}>
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

                    <div className="relative z-10">
                      {/* Big Icon in white circle */}
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/30">
                        <ProjectIcon size={48} className="text-white" strokeWidth={1.5} />
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex px-3 py-1 border rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur text-slate-900">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">{project.subtitle}</p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="relative z-10 grid grid-cols-2 gap-2 mt-6">
                      {project.highlights.map((h, j) => (
                        <div key={j} className="bg-white/15 backdrop-blur rounded-xl p-3 border border-white/20">
                          <div className="text-lg font-bold text-white">{h.metric}</div>
                          <div className="text-[10px] text-white/80 uppercase tracking-wide">{h.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT - Details */}
                  <div className="p-6 md:p-8 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <Building2 size={12} /> {project.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} /> {project.period}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-100 rounded-md font-semibold text-slate-600">
                        {project.tag}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed mb-5 text-sm">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-5 flex-1">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 4).map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-blue-500 mt-1 flex-shrink-0">▹</span>
                            <span className="leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, j) => (
                          <span key={j} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-medium text-slate-700 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-all"
                        >
                          <FaGithub size={14} />
                          View Code
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                          <Shield size={14} />
                          Confidential Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}