'use client';

import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { achievements } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="py-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="section-tag">
            <Trophy size={16} /> Milestones
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-2">
            Key <span className="gradient-text">Achievements</span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          Notable recognitions and career highlights that showcase my impact and dedication.
        </p>

        <div className="space-y-3">
          {achievements.map(({ icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-slate-200 border-l-4 border-l-blue-500 rounded-xl p-4 flex gap-3 items-start hover:border-l-purple-500 hover:translate-x-2 hover:shadow-lg transition-all"
            >
              <Award className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="text-slate-900 font-semibold text-sm mb-1">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}