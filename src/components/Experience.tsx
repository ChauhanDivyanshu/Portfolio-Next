'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, GraduationCap, Award, Trophy, Building2 } from 'lucide-react';
import { experience, education, certifications, achievements } from '@/data/portfolio';

export default function Experience() {
  return (
    <section className="pt-20 pb-16 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <Briefcase size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">Journey</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
            Professional <span className="gradient-text">Experience</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
            My career journey building AI-powered solutions and enterprise-grade applications.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Briefcase size={20} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk' }}>
              Work Experience
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-300" />

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-14 pb-6 last:pb-0"
              >
                <div className={`absolute left-2.5 top-2 w-4 h-4 rounded-full border-4 ${
                  exp.current ? 'bg-green-500 border-green-200 animate-pulse' : 'bg-white border-blue-500'
                } shadow-md`} />

                <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-4 flex-wrap text-sm">
                        <span className="text-blue-600 font-semibold flex items-center gap-1.5">
                          <Building2 size={13} /> {exp.company}
                        </span>
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <MapPin size={13} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                      exp.current
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-slate-100 text-slate-600 border border-slate-300'
                    }`}>
                      <Calendar size={12} /> {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mt-3">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <span className="text-blue-500 mt-1 flex-shrink-0">▹</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
              <GraduationCap size={20} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk' }}>
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <GraduationCap size={20} className="text-white" />
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-bold">
                    CGPA {edu.cgpa}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <p className="text-sm text-blue-600 font-semibold">{edu.institution}</p>
                <p className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
                  <MapPin size={12} /> {edu.location} · {edu.period}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {edu.focus.map((f, j) => (
                    <span key={j} className="px-2.5 py-1 bg-slate-100 rounded-lg text-[11px] font-medium text-slate-600">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
              <Award size={20} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk' }}>
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5 leading-tight truncate">{cert.name}</h4>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Trophy size={20} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk' }}>
              Key Achievements
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-2">{a.icon}</div>
                <h4 className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: 'Space Grotesk' }}>{a.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}