/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CITIES } from '../data';
import { Building, TrendingUp, Calculator, CalendarClock, DollarSign } from 'lucide-react';

export default function Investimento() {
  // Simulator State
  const [propertyValue, setPropertyValue] = useState(650000); // R$ 650.000
  const [years, setYears] = useState(5); // 5 anos
  const [appreciationRate, setAppreciationRate] = useState(12); // 12% ao ano

  // Calculations
  const totalValue = propertyValue * Math.pow(1 + appreciationRate / 100, years);
  const estimatedProfit = totalValue - propertyValue;
  const averageAnnualProfit = estimatedProfit / years;

  // Format currencies smoothly
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section 
      id="investimento"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & layout paragraphs */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-slate-400 mb-4 italic block">
            Crescimento Sustentável
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy mb-6">
            Invista em uma das regiões que mais crescem no Brasil
          </h2>
          <div className="space-y-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            <p>
              O litoral norte de Santa Catarina vem se consolidando como um dos mercados imobiliários mais promissores do país.
            </p>
            <p>
              Com forte desenvolvimento econômico, expansão da infraestrutura e crescente procura por imóveis, cidades como Barra Velha, Penha, Navegantes e Balneário Piçarras apresentam excelente potencial de valorização para investidores e famílias que desejam construir patrimônio.
            </p>
            <p className="font-medium text-brand-navy">
              O objetivo é simples: ajudar você a identificar oportunidades com fundamento, segurança e potencial de crescimento no longo prazo.
            </p>
          </div>
        </div>

        {/* 4 Cities focus presentation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-in-up">
          {CITIES.map((city) => (
            <div 
              key={city.name}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-slate-50"
            >
              <div>
                <div className="h-2 w-12 bg-brand-gold rounded-full mb-4" />
                <h3 className="font-display font-bold text-brand-navy text-lg mb-2">
                  {city.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed mb-6">
                  {city.description}
                </p>
              </div>
              
              {/* Highlights tags */}
              <ul className="space-y-2 border-t border-slate-200/60 pt-4">
                {city.highlights.map((hlt, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px] font-sans font-medium text-slate-600">
                    <span className="text-brand-rust mt-0.5">•</span>
                    <span>{hlt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive ROI Applet Simulator Box */}
        <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Subtle decoration vectors */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left sliders side */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6 text-brand-gold">
                <Calculator size={20} />
                <span className="font-display font-semibold text-xs uppercase tracking-wider">Simulador de Valorização Imobiliária</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-6">
                Projete o crescimento do seu patrimônio físico
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 font-sans mb-8">
                Ajuste os parâmetros abaixo baseados nos índices reais coletados por Gilson Rujanowsky no Litoral Norte para estimar seus lucros de ativos.
              </p>

              {/* Sliders loop */}
              <div className="space-y-6">
                
                {/* Property Value Slider */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-sans mb-2 font-medium">
                    <span className="text-slate-200">Valor Inicial do Imóvel</span>
                    <span className="text-brand-gold font-bold">{formatCurrency(propertyValue)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="300000" 
                    max="4000000" 
                    step="50000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full accent-brand-gold bg-slate-700/60 h-2 rounded-lg appearance-none cursor-pointer"
                    aria-label="Ajustar valor inicial do imóvel"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>R$ 300 Mil</span>
                    <span>R$ 4 Milhões</span>
                  </div>
                </div>

                {/* Years slider */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-sans mb-2 font-medium">
                    <span className="text-slate-200">Horizonte de Tempo</span>
                    <span className="text-brand-gold font-bold">{years} {years === 1 ? 'ano' : 'anos'}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-brand-gold bg-slate-700/60 h-2 rounded-lg appearance-none cursor-pointer"
                    aria-label="Ajustar horizonte de tempo em anos"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>1 ano</span>
                    <span>10 anos</span>
                  </div>
                </div>

                {/* Appreciation Rate sliders */}
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-sans mb-2 font-medium">
                    <span className="text-slate-200">Taxa de Valorização Estimada (Ano)</span>
                    <span className="text-brand-rust font-bold">{appreciationRate}% / ano</span>
                  </div>
                  <input 
                    type="range" 
                    min="6" 
                    max="22" 
                    step="1"
                    value={appreciationRate}
                    onChange={(e) => setAppreciationRate(Number(e.target.value))}
                    className="w-full accent-brand-rust bg-slate-700/60 h-2 rounded-lg appearance-none cursor-pointer"
                    aria-label="Ajustar taxa de valorização estimada"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>6% (Selic Mínima)</span>
                    <span>22% (Lançamento Premium)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right calculated outcomes side */}
            <div className="lg:col-span-5 bg-brand-blue/60 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-300 font-sans font-semibold">Resultado Projetado</span>
                
                {/* Result total */}
                <div className="mt-4 mb-6">
                  <span className="text-xs text-slate-400 block font-sans">Valor total acumulado</span>
                  <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    {formatCurrency(totalValue)}
                  </span>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-4 mb-6">
                  
                  {/* Estimated Profit */}
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-300 font-sans">Lucro Real Estimado:</span>
                    <span className="text-brand-gold font-semibold font-display">{formatCurrency(estimatedProfit)}</span>
                  </div>

                  {/* Profit equivalent multiplier */}
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-300 font-sans">Retorno percentual:</span>
                    <span className="text-brand-rust font-semibold">+{((estimatedProfit / propertyValue) * 100).toFixed(0)}% de valorização</span>
                  </div>

                  {/* Avg annual profit */}
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-300 font-sans">Média de lucro / ano:</span>
                    <span className="text-slate-100 font-sans">{formatCurrency(averageAnnualProfit)}</span>
                  </div>

                </div>
              </div>

              {/* Simulated notification message */}
              <div className="bg-white/5 p-4 rounded-xl text-center">
                <p className="text-[11px] text-slate-300 leading-normal mb-3 font-sans font-light">
                  *Este cálculo é uma simulação matemática estimando juros compostos de valorização patrimonial no litoral.
                </p>
                <a
                  href={`https://wa.me/5547997321808?text=Olá%20Gilson,%20utilizei%20seu%20simulador%20imobiliário%20e%20gostaria%20de%20analisar%20imóveis%20de%20R$%20${propertyValue/1000}k%20na%20região.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-display font-semibold text-xs py-2.5 px-4 rounded-lg shadow-sm hover:shadow active:scale-97 transition-all duration-200"
                >
                  <TrendingUp size={14} />
                  <span>Buscar Imóveis com esse Perfil</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
