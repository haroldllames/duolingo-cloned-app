import type { Unit } from '@/types/learning';
import {
    frenchUnit1Lessons,
    germanUnit1Lessons,
    japaneseUnit1Lessons,
    spanishUnit1Lessons,
} from './lessons';

export const units: Unit[] = [
  // ─── Spanish ──────────────────────────────────────────────────────────────
  {
    id: 'es-u1',
    languageCode: 'es',
    order: 1,
    title: 'Getting Started',
    description: 'Learn greetings, numbers, and basic expressions in Spanish.',
    color: '#FF6B35',
    icon: '👋',
    lessons: spanishUnit1Lessons,
  },

  // ─── French ───────────────────────────────────────────────────────────────
  {
    id: 'fr-u1',
    languageCode: 'fr',
    order: 1,
    title: 'Getting Started',
    description: 'Learn greetings, introductions, and basic expressions in French.',
    color: '#4D88FF',
    icon: '👋',
    lessons: frenchUnit1Lessons,
  },

  // ─── Japanese ─────────────────────────────────────────────────────────────
  {
    id: 'ja-u1',
    languageCode: 'ja',
    order: 1,
    title: 'Getting Started',
    description: 'Learn Japanese greetings and the basics of formal and informal speech.',
    color: '#FF4D8D',
    icon: '👋',
    lessons: japaneseUnit1Lessons,
  },

  // ─── German ───────────────────────────────────────────────────────────────
  {
    id: 'de-u1',
    languageCode: 'de',
    order: 1,
    title: 'Getting Started',
    description: 'Learn greetings, introductions, and core expressions in German.',
    color: '#21C16B',
    icon: '👋',
    lessons: germanUnit1Lessons,
  },
];

export function getUnitsByLanguage(languageCode: string): Unit[] {
  return units.filter((unit) => unit.languageCode === languageCode);
}

export function getLessonById(lessonId: string) {
  for (const unit of units) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getUnitById(unitId: string): Unit | undefined {
  return units.find((unit) => unit.id === unitId);
}
