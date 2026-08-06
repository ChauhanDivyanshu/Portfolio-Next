'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section className="py-8 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
              <GraduationCap size={18} className="text-slate-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
              Education
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Strong academic foundation in computer science with focus on modern software engineering.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-slate-300 transition-all"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-slate-700" />
                </div>
                <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                  <Award size={12} className="text-slate-700" />
                  <span className="text-xs font-bold text-slate-900">CGPA: {edu.cgpa}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-3">
                {edu.institution}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  {edu.location}
                </span>
              </div>

              {/* Focus Areas */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <BookOpen size={12} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Focus Areas</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.focus.map((topic, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-[11px] font-medium text-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}