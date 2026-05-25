import type { Language } from '@/types/learning';

export const languages: Language[] = [
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: `https://flagcdn.com/w320/es.png`,
    color: '#FF6B35',
    description: 'The world\'s second most spoken language. Spoken across Spain, Latin America, and more.',
    totalLearners: 4200000,
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: `https://flagcdn.com/w320/fr.png`,
    color: '#4D88FF',
    description: 'The language of love, art, and diplomacy. Spoken across Europe, Africa, and Canada.',
    totalLearners: 2800000,
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: `https://flagcdn.com/w320/jp.png`,
    color: '#FF4D8D',
    description: 'A rich and unique language with three writing systems. Essential for anime, manga, and travel.',
    totalLearners: 1900000,
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: `https://flagcdn.com/w320/de.png`,
    color: '#21C16B',
    description: 'The most widely spoken language in Europe. Key for science, engineering, and business.',
    totalLearners: 1600000,
  },
];

export function getLanguageByCode(code: string): Language | undefined {
  return languages.find((lang) => lang.code === code);
}
