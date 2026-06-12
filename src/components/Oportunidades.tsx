/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, LineChart, Building2, HelpCircle } from 'lucide-react';

export default function Oportunidades() {
  const steps = [
    {
      icon: <Building2 className="text-brand-gold h-6 w-6" />,
      title: 'Patrimônio Sólido',
      text: 'Imóveis selecionados em bairros com infraestrutura consolidada ou promissora.'
    },
    {
      icon: <ShieldCheck className="text-brand-rust h-6 w-6" />,
      title: 'Segurança Jurídica',
      text: 'Análise minuciosa de toda a documentação cartorária e histórico de construtoras.'
    },
    {
      icon: <LineChart className="text-brand-navy h-6 w-6" />,
      title: 'Valorização Garantida',
      text: 'Foco em cidades com altos índices de valorização de m² de Santa Catarina.'
    }
  ];

  return (
    <section 
      id="oportunidades"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden"
    >
      {/* Visual top and bottom lines for high contrast separation */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Section Heading & Descriptive Copy (Left) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-slate-400 mb-4 italic block">
              Decisão Inteligente
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy mb-6 leading-tight">
              Encontre as melhores oportunidades do litoral norte catarinense
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              <p className="font-medium text-slate-800">
                Comprar um imóvel vai muito além de uma negociação. É uma decisão que envolve patrimônio, qualidade de vida e futuro.
              </p>
              <p>
                Com profundo conhecimento do mercado imobiliário do litoral norte de Santa Catarina e mais de 13 anos acompanhando o desenvolvimento da região, Gilson Luiz Rujanowsky auxilia clientes a encontrar imóveis com real potencial de valorização, seja para moradia ou investimento.
              </p>
              <p className="border-l-4 border-brand-gold pl-4 italic text-slate-500 text-sm">
                Atendimento próximo, transparência e orientação baseada em experiência prática de quem também investe na região.
              </p>
            </div>
          </motion.div>

          {/* Interactive highlight blocks (Right) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex items-start gap-4"
              >
                <div className="p-3 bg-slate-50 rounded-xl">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-navy text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-brand-navy text-white p-5 rounded-2xl shadow-md flex items-center justify-between gap-4 mt-2">
              <div className="font-display text-sm font-light text-slate-200">
                Está buscando uma oportunidade sob medida? Fale agora com Gilson.
              </div>
              <a 
                href="https://wa.me/5547997321808" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Pedir recomendação de imóvel no WhatsApp"
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy p-3 rounded-xl transition-all duration-200 active:scale-95"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Minimal arrow vector icon
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={props.className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}
