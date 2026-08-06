'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Rocket, Shield, Zap, Briefcase, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { achievements } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Shield,
  Zap,
  Trophy,
  Briefcase,
  Star,
  Award,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <Trophy size={14} className="text-orange-500" />
            <span className="text-xs font-semibold text-slate-700">Milestones</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-2 font-display">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
          Notable recognitions and career highlights that showcase my impact and dedication.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {achievements.map(({ icon, title, description }, i) => {
            const Icon = iconMap[icon] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 shadow-lg">
                  <Icon size={22} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-1.5">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}