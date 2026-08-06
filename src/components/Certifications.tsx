'use client';

import { motion } from 'framer-motion';
import { Award, Brain, Link2, Sparkles, Cloud, MonitorPlay, Star, LucideIcon } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const icons: LucideIcon[] = [Brain, Link2, Sparkles, Cloud, MonitorPlay, Star];

export default function Certifications() {
  return (
    <section id="certifications" className="py-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="section-tag">
            <Award size={16} /> Certifications
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-2">
            Continuous <span className="gradient-text">Learning</span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          Industry-recognized certifications from top tech companies validating expertise in AI, cloud, and DevOps.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {certifications.map((cert, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 hover:border-blue-400 hover:translate-x-2 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                  <Icon className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-0.5">{cert.name}</h4>
                  <p className="text-xs text-slate-500">{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}