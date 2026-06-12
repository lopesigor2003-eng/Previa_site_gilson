/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Development {
  id: string;
  title: string;
  tagline: string;
  description: string;
  city: string;
  features: string[];
  pdfUrl: string;
  status: 'Breve Lançamento' | 'Em Obras' | 'Pronto para Morar' | 'Lançamento';
  highlightMetric?: string;
  highlightLabel?: string;
  coverImage?: string;
}

export interface CityInfo {
  name: string;
  description: string;
  highlights: string[];
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}
