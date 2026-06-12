/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, MapPin, Award } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="sobre"
      className="py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Grid of Qualifications (Left Side) */}
          <motion.div 
            className="lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Highlight Card 1 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-start gap-4">
                <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-navy">Administrador</h3>
                  <p className="text-xs text-slate-500 font-sans mt-1">Formado em Administração de Empresas, fornecendo análise estruturada e negócios sólidos.</p>
                </div>
              </div>

              {/* Highlight Card 2 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-start gap-4">
                <div className="p-3 bg-brand-rust/10 text-brand-rust rounded-xl">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-navy">Especialista Logística</h3>
                  <p className="text-xs text-slate-500 font-sans mt-1">Pós-graduado em logística, garantindo inteligência urbana de fluxo e valorização geográfica.</p>
                </div>
              </div>

              {/* Highlight Card 3 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-start gap-4">
                <div className="p-3 bg-brand-navy/10 text-brand-navy rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-navy">13 Anos + Local</h3>
                  <p className="text-xs text-slate-500 font-sans mt-1">Morador e atuante direto do litoral catarinense, conhecendo cada detalhe do desenvolvimento local.</p>
                </div>
              </div>

              {/* Highlight Card 4 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-start gap-4">
                <div className="p-3 bg-slate-900/10 text-slate-900 rounded-xl">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-navy">Investidor Ativo</h3>
                  <p className="text-xs text-slate-500 font-sans mt-1 font-light">Visão prática de quem compra, vende e analisa na pele o crescimento imobiliário regional.</p>
                </div>
              </div>

            </div>

            {/* Decorative background note */}
            <div className="mt-8 bg-brand-gold p-6 rounded-2xl text-white shadow-xl shadow-stone-200">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-70 mb-2 font-sans">Oportunidades de Valorização</p>
              <p className="text-xl font-serif italic mb-4 leading-snug">"Investindo em uma das regiões costeiras que mais crescem e valorizam no Brasil com embasamento estatístico."</p>
              <div className="h-1 w-12 bg-brand-rust rounded-full"></div>
            </div>
          </motion.div>

          {/* Text Paragraph Narrative (Right Side) */}
          <motion.div 
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-slate-400 mb-4 italic block">
              Credibilidade & Competência
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy mb-6 leading-tight">
              Conheça Gilson Luiz Rujanowsky
            </h2>
            
            <div className="space-y-5 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              <p>
                Apaixonado pelo mercado imobiliário e pelo potencial de crescimento do litoral norte catarinense, Gilson Luiz Rujanowsky atua auxiliando clientes na compra e venda de imóveis com foco em segurança, valorização e boas oportunidades.
              </p>
              <p>
                Formado em Administração e pós-graduado em Logística, combina visão estratégica, análise de mercado e atendimento personalizado para ajudar cada cliente a tomar decisões com confiança.
              </p>
              <p>
                Morador e investidor na região há mais de 13 anos, acompanha de perto a evolução de cidades como Barra Velha, Penha, Navegantes e Balneário Piçarras, identificando tendências e oportunidades que fazem a diferença para quem busca investir ou realizar o sonho do imóvel próprio.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex gap-1.5 items-center">
                <span className="h-2 w-2 rounded-full bg-brand-gold animate-ping" />
                <span className="text-xs font-semibold text-brand-navy uppercase tracking-wider font-sans">
                  CRECI SC 28586 F
                </span>
              </div>
              <div className="text-slate-400">|</div>
              <p className="text-xs font-medium text-slate-500 font-sans">
                Atendimento consultivo exclusivo nas melhores praias de SC.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
