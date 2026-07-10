'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="section-tag">
            <GraduationCap size={16} /> Education Journey
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-2">
            Academic <span className="gradient-text">Background</span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          A continuous learning journey in technology and computer science, building strong foundations for a career in software development.
        </p>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-[180px_1fr] gap-4 items-start"
            >
              <div className="text-center md:text-right md:pr-5 md:border-r-2 md:border-slate-200 relative">
                <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-500 px-3 py-1.5 rounded-full text-xs font-bold mb-1">
                  <Calendar size={12} />
                  {edu.period}
                </div>
                <p className="text-xs text-slate-500 font-medium">{edu.duration}</p>
                <div className="hidden md:block absolute -right-[9px] top-3 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-md" />
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-400 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-blue-500" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-0.5">{edu.degree}</h3>
                    <p className="text-xs text-slate-500">{edu.short}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-500 px-2.5 py-1 rounded-full text-xs font-bold">
                    <Award size={12} />
                    {edu.cgpa}
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <p className="text-xs text-blue-500 font-semibold flex items-center gap-1.5">
                    <BookOpen size={12} />
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <MapPin size={12} />
                    {edu.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-900 mb-2">Key Focus Areas:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.focus.map((f, j) => (
                      <span key={j} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-full text-[11px] font-medium text-slate-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}