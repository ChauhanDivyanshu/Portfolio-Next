'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section className="pt-20 pb-8 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <Briefcase size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">Career Journey</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight font-display">
            Professional <span className="gradient-text">Experience</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
            2+ years of building production-grade AI systems, scalable backend platforms, and DevOps automation across AI, defence, and enterprise domains.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 hover:shadow-md hover:border-slate-300 transition-all"
            >
              {/* Header Row */}
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={20} className="text-slate-700" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">{exp.role}</h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 border border-green-200 rounded-full text-[10px] font-bold text-green-700 uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-blue-600 font-semibold mb-2">
                      <Building2 size={13} />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              {exp.description && (
                <p className="text-slate-700 text-sm leading-relaxed mb-4 pl-14">
                  {exp.description}
                </p>
              )}

              {/* Achievements */}
              <div className="pl-14">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Key Achievements & Impact
                </h4>
                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                {exp.tech && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t, k) => (
                        <span key={k} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-medium text-slate-700 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}