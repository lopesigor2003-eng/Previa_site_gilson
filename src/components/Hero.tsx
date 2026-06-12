/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageSquareCode, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="inicio"
      className="relative pt-28 pb-16 lg:pt-40 lg:pb-28 bg-gradient-to-b from-brand-navy via-brand-navy to-brand-blue overflow-hidden text-white"
    >
      {/* Visual background atmospheric lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-brand-rust/5 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      {/* Grid container with standard max-w */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy Content (Left Side) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline/Certification identifier */}
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 rounded-md w-fit select-none text-slate-300">
              CRECI 28586 F • ESPECIALISTA REGIONAL
            </div>

            {/* Main title h1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Gilson Luiz <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rust via-brand-rust to-brand-gold">
                Rujanowsky
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-display font-medium text-slate-200 mb-4 tracking-wide">
              Seu Especialista Imobiliário no Litoral Norte Catarinense
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 font-sans font-light leading-relaxed mb-8 max-w-2xl">
              Encontre as melhores oportunidades para morar ou investir com segurança e valorização na região que mais se valoriza no Brasil.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5547997321808"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Inicar atendimento exclusivo pelo WhatsApp"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-display font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group focus:ring-4 focus:ring-brand-gold/30"
              >
                <span>Consultoria Personalizada</span>
                <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#empreendimentos"
                aria-label="Ver lista de empreendimentos na praia"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 hover:bg-white/10 text-white font-sans font-medium px-6 py-4 rounded-xl transition-all duration-200 active:scale-95"
              >
                <span>Explorar Oportunidades</span>
              </a>
            </div>

            {/* Trust highlights under CTA */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl font-display font-semibold text-brand-gold">13+ Anos</span>
                <span className="text-xs text-slate-400 font-sans">Vivência na região</span>
              </div>
              <div>
                <span className="block text-2xl font-display font-semibold text-brand-gold">100%</span>
                <span className="text-xs text-slate-400 font-sans">Garantia Jurídica</span>
              </div>
              <div>
                <span className="block text-2xl font-display font-semibold text-brand-gold">4 Cidades</span>
                <span className="text-xs text-slate-400 font-sans">Foco e especialização</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Section (Right Side) */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Decorative background visual shape behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-rust to-brand-gold rounded-3xl opacity-20 filter blur-xl transform rotate-3" />
            
            {/* Luxury image frame wrapper */}
            <div className="relative w-full max-w-[360px] lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-brand-navy">
              <img 
                src="https://i.postimg.cc/g2RZZs9d/Whats-App-Image-2026-06-10-at-08-54-20.jpg" 
                alt="Retrato de perfil corporativo do consultor Gilson Luiz Rujanowsky"
                className="w-full h-auto object-cover aspect-[4/5] object-center scale-102 hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              
              {/* Bottom tag inside picture */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel-dark text-white p-4 rounded-xl border border-white/10 select-none">
                <span className="block font-display font-medium text-sm text-brand-gold">Especialista Litoral Catarinense</span>
                <p className="text-[11px] text-slate-300 font-sans mt-0.5 font-light">Assessoria estratégica focada em alta valorização patrimonial.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
