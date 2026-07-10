'use client';

import { motion } from 'framer-motion';
import { Layers, Building2, Calendar, ArrowUpRight, Bot, Radio, Shield, Plane, Lock, Settings, LucideIcon, Database, GitBranch, Cpu, Server, Zap, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  bot: Bot,
  nfc: Radio,
  shield: Shield,
  plane: Plane,
  lock: Lock,
  settings: Settings,
};

// ============ VISUAL COMPONENTS ============

// 1. AI Pipeline Visual (RAG Chatbot)
const AIPipelineVisual = () => (
  <div className="relative z-10 mt-6 space-y-3">
    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">RAG Pipeline</div>
    {[
      { label: 'Document Ingestion', tech: 'PDF / DOCX / TXT' },
      { label: 'Chunking & Embedding', tech: 'OpenAI Embeddings' },
      { label: 'Vector Store', tech: 'pgvector + BM25' },
      { label: 'LLM Response', tech: 'GPT-4 / LangChain' },
    ].map((step, i) => (
      <div key={i} className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-lg bg-white/25 backdrop-blur flex items-center justify-center text-[10px] font-bold text-white border border-white/30">
          {i + 1}
        </div>
        <div className="flex-1 bg-white/10 backdrop-blur rounded-lg px-3 py-2 border border-white/20">
          <div className="text-xs font-semibold text-white">{step.label}</div>
          <div className="text-[10px] text-white/70 font-mono">{step.tech}</div>
        </div>
      </div>
    ))}
    {/* Code snippet */}
    <div className="bg-black/40 backdrop-blur rounded-lg p-3 mt-3 border border-white/10">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[10px] text-white/60 font-mono ml-1">rag_chain.py</span>
      </div>
      <pre className="text-[10px] text-white/90 font-mono leading-relaxed">
{`retriever = HybridSearch(
  vector=pgvector,
  keyword=bm25
)
chain = RAG(llm, retriever)`}
      </pre>
    </div>
  </div>
);

// 2. Backend API Visual (NFC App)
const BackendAPIVisual = () => (
  <div className="relative z-10 mt-6 space-y-3">
    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">System Architecture</div>
    <div className="space-y-2">
      {[
        { top: 'Desktop UI Layer', bot: 'CustomTkinter + Threading' },
        { top: 'Service Layer', bot: 'PC/SC Protocol Handler' },
        { top: 'Card Interface', bot: 'APDU Command Engine' },
      ].map((layer, i) => (
        <div key={i} className="bg-white/15 backdrop-blur rounded-lg p-3 border border-white/20 relative">
          <div className="text-xs font-semibold text-white">{layer.top}</div>
          <div className="text-[10px] text-white/70 font-mono mt-0.5">{layer.bot}</div>
          {i < 2 && (
            <div className="absolute left-1/2 -bottom-2 w-px h-2 bg-white/40" />
          )}
        </div>
      ))}
    </div>
    <div className="bg-black/40 backdrop-blur rounded-lg p-3 mt-3 border border-white/10">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[10px] text-white/60 font-mono ml-1">reader.py</span>
      </div>
      <pre className="text-[10px] text-white/90 font-mono leading-relaxed">
{`def read_ndef(uid):
    apdu = [0xFF, 0xB0, 0x00]
    return transmit(apdu)`}
      </pre>
    </div>
  </div>
);

// 3. Database Schema Visual (Army Logistics)
const DatabaseSchemaVisual = () => (
  <div className="relative z-10 mt-6 space-y-3">
    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">PostgreSQL Schema</div>
    <div className="grid grid-cols-2 gap-2">
      {[
        { name: 'users', cols: 'id • role • zone', primary: false },
        { name: 'inventory', cols: 'item • qty • loc', primary: true },
        { name: 'transfers', cols: 'from • to • ts', primary: false },
        { name: 'audit_logs', cols: 'action • user', primary: false },
      ].map((tbl, i) => (
        <div key={i} className={`rounded-lg p-2.5 border ${tbl.primary ? 'bg-white/25 border-white/50' : 'bg-white/10 border-white/20'} backdrop-blur`}>
          <div className="text-xs font-bold text-white font-mono">{tbl.name}</div>
          <div className="text-[9px] text-white/70 font-mono">{tbl.cols}</div>
        </div>
      ))}
    </div>
    {/* REST endpoints */}
    <div className="space-y-1 mt-3">
      <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">REST Endpoints</div>
      {[
        { m: 'GET', p: '/api/inventory', c: 'bg-blue-400/30' },
        { m: 'POST', p: '/api/transfer', c: 'bg-green-400/30' },
        { m: 'WS', p: '/ws/live-sync', c: 'bg-purple-400/30' },
      ].map((e, i) => (
        <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-md px-2 py-1.5 border border-white/15">
          <span className={`${e.c} text-white text-[9px] font-bold px-1.5 py-0.5 rounded font-mono`}>{e.m}</span>
          <span className="text-[11px] text-white/90 font-mono">{e.p}</span>
        </div>
      ))}
    </div>
  </div>
);

// 4. Hierarchy Flow Visual (HAL SITS)
const HierarchyFlowVisual = () => (
  <div className="relative z-10 mt-6 space-y-3">
    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">Data Model Hierarchy</div>
    <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20 font-mono">
      {[
        { level: 0, name: 'Project', bold: true },
        { level: 1, name: '└─ Batch' },
        { level: 2, name: '   └─ Assembly' },
        { level: 3, name: '      └─ Sub-Component' },
        { level: 4, name: '         └─ Part' },
      ].map((h, i) => (
        <div key={i} className={`text-xs py-0.5 text-white ${h.bold ? 'font-bold' : ''}`}>
          {h.name}
        </div>
      ))}
    </div>
    {/* Workflow */}
    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-3 mb-1">Approval Flow</div>
    <div className="flex items-center gap-1.5">
      {['Request', 'FIFO', 'Approve', 'Audit'].map((s, i, arr) => (
        <div key={i} className="flex items-center gap-1.5 flex-1">
          <div className={`flex-1 text-center text-[10px] font-semibold py-1.5 rounded-md border ${i === arr.length - 1 ? 'bg-white/25 border-white/50' : 'bg-white/10 border-white/20'} backdrop-blur text-white`}>
            {s}
          </div>
          {i < arr.length - 1 && <span className="text-white/50 text-xs">→</span>}
        </div>
      ))}
    </div>
  </div>
);

// 5. Auth Flow Visual (Smart Access)
const AuthFlowVisual = () => (
  <div className="relative z-10 mt-6 space-y-3">
    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">Authentication Pipeline</div>
    <div className="space-y-1.5">
      {[
        { num: 1, text: 'Card UID Detected' },
        { num: 2, text: 'Password Validation' },
        { num: 3, text: 'Memory Page Check' },
        { num: 4, text: 'Backend API Verify' },
        { num: '✓', text: 'Access Granted', success: true },
      ].map((step, i) => (
        <div key={i} className="flex items-center gap-2.5 bg-white/10 backdrop-blur rounded-lg px-3 py-2 border border-white/20">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step.success ? 'bg-green-400 text-slate-900' : 'bg-white/25 text-white'}`}>
            {step.num}
          </div>
          <span className="text-xs text-white font-medium">{step.text}</span>
        </div>
      ))}
    </div>
    {/* API Response */}
    <div className="bg-black/40 backdrop-blur rounded-lg p-3 mt-3 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-white/60 font-mono">POST /api/verify</span>
        <span className="text-[10px] text-green-400 font-mono font-bold">200 OK</span>
      </div>
      <pre className="text-[10px] text-white/90 font-mono leading-relaxed">
{`{ "access": "granted",
  "role": "admin" }`}
      </pre>
    </div>
  </div>
);

// 6. DevOps Pipeline Visual (CI/CD)
const DevOpsPipelineVisual = () => (
  <div className="relative z-10 mt-6 space-y-3">
    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">CI/CD Pipeline</div>
    {/* Pipeline stages */}
    <div className="flex items-center justify-between gap-1">
      {['Git', 'Build', 'Test', 'Deploy'].map((stage, i, arr) => (
        <div key={i} className="flex items-center gap-1 flex-1">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-[10px] font-bold text-white">
              {stage[0]}
            </div>
            <span className="text-[9px] text-white/80 mt-1 font-semibold">{stage}</span>
          </div>
          {i < arr.length - 1 && <div className="h-px flex-1 bg-white/30" />}
        </div>
      ))}
    </div>

    {/* Metrics comparison */}
    <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/20 mt-3">
      <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">Performance</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/70 w-12 font-mono">Before</span>
          <div className="flex-1 bg-red-400/30 rounded px-2 py-1 text-[10px] text-white font-bold">30 min</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/70 w-12 font-mono">After</span>
          <div className="w-1/4 bg-green-400/40 rounded px-2 py-1 text-[10px] text-white font-bold">5 min</div>
        </div>
      </div>
      <div className="text-center text-[11px] font-bold text-white mt-2">80% Faster Deployment</div>
    </div>

    {/* Tech icons */}
    <div className="flex gap-2 justify-center mt-2">
      {['Jenkins', 'Docker', 'AWS'].map((t, i) => (
        <span key={i} className="bg-white/15 backdrop-blur text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-white/20">
          {t}
        </span>
      ))}
    </div>
  </div>
);

// Visual selector
const VisualMap: Record<string, React.FC> = {
  'ai-pipeline': AIPipelineVisual,
  'backend-api': BackendAPIVisual,
  'database-schema': DatabaseSchemaVisual,
  'hierarchy-flow': HierarchyFlowVisual,
  'auth-flow': AuthFlowVisual,
  'devops-pipeline': DevOpsPipelineVisual,
};

// ============ MAIN COMPONENT ============

export default function Projects() {
  return (
    <section className="pt-28 pb-16 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <Layers size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">Featured Work</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight font-display">
            Projects & <span className="gradient-text">Case Studies</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Backend engineering, AI systems, and DevOps automation — a curated selection of production-grade work across AI, defence, and enterprise domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, i) => {
            const ProjectIcon = iconMap[project.iconType] || Bot;
            const VisualComponent = VisualMap[(project as any).visualType] || AIPipelineVisual;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-[1fr_1.3fr] gap-0">
                  {/* LEFT - Visual */}
                  <div className={`relative bg-gradient-to-br ${project.gradient} p-6 md:p-8 flex flex-col min-h-[500px] overflow-hidden`}>
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />

                    <div className="relative z-10">
                      {/* Icon + Status */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-white/30">
                          <ProjectIcon size={28} className="text-white" strokeWidth={1.8} />
                        </div>
                        <span className="inline-flex px-3 py-1 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur text-slate-900">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-display leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-xs mb-4">{project.subtitle}</p>
                    </div>

                    {/* Dynamic Visual */}
                    <VisualComponent />
                  </div>

                  {/* RIGHT - Details */}
                  <div className="p-6 md:p-8 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <Building2 size={12} /> {project.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} /> {project.period}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-100 rounded-md font-semibold text-slate-600">
                        {project.tag}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed mb-5 text-sm">
                      {project.description}
                    </p>

                    {/* Metrics inline */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {project.highlights.map((h, j) => (
                        <div key={j} className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-2.5">
                          <div className="text-sm font-bold text-slate-900 font-display">{h.metric}</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">{h.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-5 flex-1">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 4).map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, j) => (
                          <span key={j} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-medium text-slate-700 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-all"
                        >
                          <FaGithub size={14} />
                          View Code
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                          <Shield size={14} />
                          Confidential Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}