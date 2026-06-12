/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Development, CityInfo, Advantage } from './types';

export const DEVELOPMENTS: Development[] = [
  {
    id: 'residencial-exclusive',
    title: 'Residencial Exclusive',
    tagline: 'Sofisticação e Alto Padrão Frente Mar',
    description: 'Um projeto projetado para quem busca exclusividade e conexão direta com a natureza do litoral norte catarinense. Sinta a brisa do oceano em amplas suítes com acabamentos de altíssimo padrão.',
    city: 'Balneário Piçarras',
    features: [
      'Apartamentos de 3 e 4 suítes',
      'Vista panorâmica definitiva para o mar',
      'Área de lazer gourmet completa estilo clube',
      'Acabamento em porcelanato e gesso rebaixado'
    ],
    pdfUrl: 'https://drive.google.com/file/d/1DYYgN2-Wy1zdhaR5I1e7vTqHas8xP7Gz/view?usp=sharing',
    status: 'Lançamento',
    highlightMetric: 'Frente Mar',
    highlightLabel: 'Exclusividade',
    coverImage: 'https://i.postimg.cc/sD0YSmTX/residencial-excl.png'
  },
  {
    id: 'insisa-san-andreas',
    title: 'Insisa - San Andreas',
    tagline: 'Modernidade e Alto Potencial de Rentabilidade',
    description: 'Arquitetura cosmopolita planejada de modo estratégico para investidores. Infraestrutura completa de segurança e automação residencial, garantindo máxima valorização imobiliária em região com altíssima demanda turística.',
    city: 'Penha',
    features: [
      'Plantas modernas de 2 e 3 dormitórios',
      'A poucos minutos do Beto Carrero World',
      'Rooftop com piscina e bar panorâmico',
      'Baixo custo de condomínio e ótima liquidez'
    ],
    pdfUrl: 'https://drive.google.com/file/d/1SSqJksZs47SlJU5KTbm3dxy6j3-3zbgd/view?usp=sharing',
    status: 'Em Obras',
    highlightMetric: 'Alto ROI',
    highlightLabel: 'Próximo ao Mar',
    coverImage: 'https://i.postimg.cc/zXPCW7xx/sa.png'
  },
  {
    id: 'orla-da-barra',
    title: 'Orla da Barra',
    tagline: 'O privilégio de viver na Orla Marítima',
    description: 'Perfeito para viver as melhores lembranças com a família. Ambientes integrados com iluminação natural abundante, sacada com churrasqueira gourmet e localização privilegiada no cinturão de crescimento costeiro.',
    city: 'Barra Velha',
    features: [
      'Opções de 2 a 3 suítes amplas',
      'Sacada gourmet integrada com churrasqueira',
      'Acesso facilitado à BR-101 e praias centrais',
      'Excelente custo-benefício por m²'
    ],
    pdfUrl: 'https://drive.google.com/file/d/1YksjT0CVT_9ppVqMPPvxk1Rir4fRDGS/view?usp=sharing',
    status: 'Pronto para Morar',
    highlightMetric: 'Pronto',
    highlightLabel: 'Localização Premium',
    coverImage: 'https://i.postimg.cc/13npKFdj/orla.png'
  }
];

export const CITIES: CityInfo[] = [
  {
    name: 'Barra Velha',
    description: 'Conhecida por suas belas praias e proximidade estratégica com a BR-101. Oferece alta qualidade de vida e crescimento acelerado de infraestrutura urbana.',
    highlights: ['Praia do Cerro (Bandeira Azul)', 'Excelente mobilidade logística', 'Elevado potencial de valorização']
  },
  {
    name: 'Balneário Piçarras',
    description: 'Um dos destinos mais requisitados por turistas de alto padrão, reconhecido mundialmente pela limpeza de suas praias e rigoroso saneamento ecológico.',
    highlights: ['Praias com Certificação Bandeira Azul', 'Excelente polo náutico e gastronômico', 'Verticalização qualificada e valorizada']
  },
  {
    name: 'Penha',
    description: 'Cidade sede do maior parque temático do continente (Beto Carrero World). Combina lindas enseadas naturais intocadas com vigoroso turismo nacional.',
    highlights: ['Forte apelo de aluguel por temporada (Airbnb)', 'Mais de 19 belíssimas praias paradisíacas', 'Infraestrutura turística em constante expansão']
  },
  {
    name: 'Navegantes',
    description: 'Centro logístico portuário essencial com aeroporto próprio internacional, atraindo investimentos corporativos maciços e rápida expansão imobiliária.',
    highlights: ['Porto e Aeroporto de Navegantes', 'Praia do Gravatá de alta movimentação', 'Excelente valor de m² em ascensão']
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    icon: 'ShieldCheck',
    title: 'Segurança Jurídica',
    description: 'Analiso minunciosamente toda a documentação, histórico de incorporadoras e registros públicos para transações completamente seguras e transparentes.'
  },
  {
    icon: 'LineChart',
    title: 'Análise de Inteligência de Mercado',
    description: 'Estudo de dados de valorização de m², tendências de mercado, futuras instalações públicas e potencial de locação para otimizar ao máximo seu ROI residencial/comercial.'
  },
  {
    icon: 'Award',
    title: 'Anos de Experiência Local',
    description: 'Como morador e experiente investidor do litoral de Santa Catarina há mais de 13 anos, tenho profundo conhecimento das dinâmicas das praias de cada região.'
  }
];
