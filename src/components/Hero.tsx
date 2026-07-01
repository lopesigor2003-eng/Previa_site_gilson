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
      className="relative pt-36 pb-16 lg:pt-48 lg:pb-28 bg-gradient-to-b from-brand-navy via-brand-navy to-brand-blue overflow-hidden text-white"
    >
      {/* Visual background atmospheric lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-brand-rust/5 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      {/* Grid container with standard max-w */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Image Section (Left Side on Desktop, Second on Mobile) */}
          <motion.div 
            className="lg:col-span-5 order-2 lg:order-1 relative flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Clean image without frame container, positioned lower on the page (bottom-aligned) with overlap */}
            <div className="relative w-full max-w-[320px] lg:max-w-[380px] flex flex-col items-center select-none overflow-visible">
              <img 
                src="https://i.postimg.cc/MG7NY7KY/22.png" 
                alt="Retrato de perfil corporativo de Gilson Luis Rujanowsky"
                className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-[1.02] relative z-0 translate-y-12 lg:translate-y-16"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
              />
              
              {/* Overlapping text badge in front of the image */}
              <div className="relative z-10 -mt-2 sm:-mt-6 glass-panel-dark text-white p-4 rounded-xl border border-white/15 w-full text-center max-w-[320px] shadow-2xl backdrop-blur-md">
                <span className="block font-display font-medium text-sm text-brand-gold">Especialista Litoral Catarinense</span>
                <p className="text-[11px] text-slate-300 font-sans mt-0.5 font-light">Assessoria estratégica focada em alta valorização patrimonial.</p>
              </div>
            </div>
          </motion.div>

          {/* Main Copy Content (Right Side on Desktop, First on Mobile) */}
          <motion.div 
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center items-center text-center lg:pl-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Centered logo above the CRECI certification badge */}
            <div className="flex justify-center mb-6 select-none w-full px-4">
              <img 
                src="https://i.postimg.cc/2jsRdSzz/12313.png" 
                alt="Logotipo Gilson Luis Rujanowsky"
                className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
                decoding="async"
              />
            </div>

            {/* Tagline/Certification identifier */}
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 rounded-md w-fit select-none text-slate-300 mx-auto">
              CRECI 28586 F • ESPECIALISTA REGIONAL
            </div>

            {/* Main title h1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
              Seu Especialista Imobiliário no Litoral Norte Catarinense
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 font-sans font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Encontre as melhores oportunidades para morar ou investir com segurança e valorização na região que mais se valoriza no Brasil.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a
                href="https://wa.me/5547997321808?text=Ol%C3%A1%20Gilson!%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20im%C3%B3vel%20no%20litoral%20norte%20catarinense.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Iniciar atendimento exclusivo pelo WhatsApp"
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
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 w-full max-w-lg mx-auto text-center">
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

        </div>
      </div>
    </section>
  );
}
