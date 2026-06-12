/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { DEVELOPMENTS } from '../data';
import { FileText, ArrowUpRight, CheckCircle2, MapPin, Building } from 'lucide-react';

export default function Empreendimentos() {
  return (
    <section 
      id="empreendimentos"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative gradient blur background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-rust/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title bar */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-slate-400 mb-4 italic block">
            Catálogo Seletivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy mb-4">
            Empreendimentos e Oportunidades
          </h2>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Explore materiais técnicos, plantas e catálogos completos dos principais projetos imobiliários em destaque na região do litoral norte.
          </p>
        </div>

        {/* Developments Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEVELOPMENTS.map((dev) => (
            <div 
              key={dev.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 group"
            >
              
              {/* Card top banner graphic decoration (luxury styling) */}
              <div className="h-48 bg-gradient-to-tr from-brand-navy to-brand-blue relative p-6 flex flex-col justify-between text-white overflow-hidden">
                {/* Diagonal overlay shading */}
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                
                {/* Decorative house wireframe icon */}
                <div className="absolute -right-8 -bottom-8 opacity-10 text-white group-hover:scale-110 transition-transform duration-500">
                  <Building size={160} />
                </div>

                {/* Badges container */}
                <div className="flex justify-between items-start relative z-10">
                  <span className="inline-flex items-center gap-1 bg-white/20 glass-panel border border-white/25 px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold tracking-wider text-white">
                    <MapPin size={12} className="text-brand-gold" />
                    <span>{dev.city}</span>
                  </span>
                  
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-display font-bold tracking-wider uppercase shadow-sm ${
                    dev.status === 'Lançamento' ? 'bg-brand-rust text-white' :
                    dev.status === 'Em Obras' ? 'bg-amber-100 text-amber-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {dev.status}
                  </span>
                </div>

                {/* Metric banner inside design */}
                <div className="relative z-10 select-none">
                  <span className="block text-2xl font-display font-bold text-white tracking-tight leading-none">
                    {dev.highlightMetric}
                  </span>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-slate-300">
                    {dev.highlightLabel}
                  </span>
                </div>

              </div>

              {/* Card body content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-display font-semibold text-brand-navy group-hover:text-brand-gold transition-colors duration-200">
                  {dev.title}
                </h3>
                
                <span className="block text-xs font-sans text-brand-rust mt-1 font-medium italic">
                  {dev.tagline}
                </span>

                <p className="text-slate-600 font-sans text-xs sm:text-sm mt-4 leading-relaxed line-clamp-4">
                  {dev.description}
                </p>

                {/* Feature checklist */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-slate-400 block mb-2">Destaques do projeto</span>
                  {dev.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-sans font-light">
                      <CheckCircle2 size={14} className="text-brand-gold shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card buttons footer */}
              <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3">
                <a
                  href={dev.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visualizar material em PDF do ${dev.title}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-blue text-white font-sans font-semibold text-xs py-3 px-4 rounded-xl shadow-sm hover:shadow active:scale-95 transition-all duration-150"
                >
                  <FileText size={14} className="text-brand-gold" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={`https://wa.me/5547997321808?text=Olá%20Gilson,%20gostaria%20de%20receber%20detalhes%20sobre%20o%20${encodeURIComponent(dev.title)}%20no%20Litoral%20Norte.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar sobre ${dev.title} no WhatsApp`}
                  className="inline-flex items-center justify-center gap-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-brand-navy font-sans font-semibold text-xs py-3 px-4 rounded-xl active:scale-95 transition-all duration-150"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight size={14} className="text-slate-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA recommendation box */}
        <div className="mt-14 p-6 bg-white border border-slate-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl hidden sm:block">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="font-display font-medium text-brand-navy text-sm sm:text-base">Gostaria de receber uma seleção exclusiva adaptada ao seu perfil?</h4>
              <p className="text-xs text-slate-500 font-sans mt-0.5">Receba no seu e-mail ou celular as melhores tabelas de valores atualizadas de todas as incorporadoras.</p>
            </div>
          </div>
          <a
            href="https://wa.me/5547997321808?text=Olá%20Gilson,%20gostaria%20de%20receber%20a%20lista%20de%20tabelas%20de%20preços%20atualizadas%20das%20incorporadoras%20locais."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar lista de preços exclusivos"
            className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 bg-brand-rust hover:bg-brand-rust/95 text-white font-sans font-semibold text-xs py-3 px-5 rounded-xl transition-all active:scale-95"
          >
            <span>Solicitar Tabelas de Preços</span>
          </a>
        </div>

      </div>
    </section>
  );
}
