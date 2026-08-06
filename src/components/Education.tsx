'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section className="py-16 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <GraduationCap size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">Academic Background</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight font-display">
            Education & <span className="gradient-text">Learning</span>
          </h2>

          <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
            Strong academic foundation in computer science with focus on modern software engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-10"
              >
                {/* Dot on timeline */}
                <div className="hidden md:block absolute -left-[9px] top-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg" />

                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Top row: Degree + CGPA */}
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 mb-0.5">{edu.degree}</h3>
                      <p className="text-sm text-slate-600 font-medium">{edu.institution}</p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 px-3 py-1.5 rounded-full flex-shrink-0">
                      <Award size={12} className="text-blue-600" />
                      <span className="text-xs font-bold text-slate-800">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>

                  {/* Meta info */}
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
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Focus Areas</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.focus.map((topic, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-medium text-slate-700"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
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