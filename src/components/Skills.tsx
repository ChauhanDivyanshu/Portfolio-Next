'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Code, Server, Palette, Database, Cloud, Cpu } from 'lucide-react';
import { skills } from '@/data/portfolio';

const categories = [
  { key: 'languages', title: 'Languages', icon: Code, gradient: 'from-blue-500 to-cyan-500' },
  { key: 'ai', title: 'AI / ML & LLM', icon: Cpu, gradient: 'from-purple-500 to-pink-500' },
  { key: 'frontend', title: 'Frontend', icon: Palette, gradient: 'from-orange-500 to-red-500' },
  { key: 'backend', title: 'Backend', icon: Server, gradient: 'from-green-500 to-emerald-500' },
  { key: 'database', title: 'Databases', icon: Database, gradient: 'from-indigo-500 to-blue-500' },
  { key: 'devops', title: 'DevOps & Cloud', icon: Cloud, gradient: 'from-cyan-500 to-teal-500' },
];

export default function Skills() {
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
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">Technical Expertise</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
            My <span className="gradient-text">Tech Arsenal</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
            A comprehensive toolkit spanning AI/ML, full-stack development, cloud infrastructure, and hardware integration.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {categories.map((cat, catIdx) => {
            const skillList = skills[cat.key as keyof typeof skills];
            const CatIcon = cat.icon;

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}>
                    <CatIcon size={20} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk' }}>
                    {cat.title}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {skillList.length} {skillList.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {skillList.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="group relative bg-white border border-slate-200 rounded-2xl p-3 flex flex-col items-center gap-2 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          width={36}
                          height={36}
                          className="object-contain group-hover:scale-110 transition-transform max-w-full max-h-full"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.onerror = null;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(skill.name)}&background=6366f1&color=fff&size=64&bold=true&format=svg`;
                          }}
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-700 text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AWS Production Badge */}{/* AWS Production Experience - Professional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-white border border-slate-200 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <Cloud size={20} className="text-slate-700" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">AWS Cloud</div>
              <div className="text-lg font-bold text-slate-900 font-display">Production Experience</div>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4 text-sm">
            Successfully deployed and managed <strong className="text-slate-900">2+ production applications</strong> using AWS Amplify for frontend, EC2 for backend services, and RDS for database management with CI/CD pipelines.
          </p>
          <div className="flex flex-wrap gap-2">
            {['EC2', 'S3', 'RDS', 'Amplify', 'CloudWatch', 'Route 53', 'VPC', 'CodePipeline'].map((service) => (
              <span key={service} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-semibold text-slate-700 font-mono">
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}