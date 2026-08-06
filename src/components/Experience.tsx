'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
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
            2+ years of building production-grade AI systems, backend platforms, and DevOps automation.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-4">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Dot on timeline */}
                <div className="hidden md:flex absolute left-0 top-5 w-12 h-12 rounded-xl bg-white border-2 border-slate-200 items-center justify-center shadow-sm">
                  <Briefcase size={18} className="text-slate-700" />
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-slate-300 transition-all">
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 border border-green-200 rounded-full text-[10px] font-bold text-green-700 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 flex-wrap">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}