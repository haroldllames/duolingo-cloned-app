import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LessonProgressState {
  completedLessons: string[];
  currentLessonIds: Record<string, string>;
  markLessonComplete: (lessonId: string) => void;
  setCurrentLesson: (languageCode: string, lessonId: string) => void;
  resetProgress: () => void;
}

export const useLessonStore = create<LessonProgressState>()(
  persist(
    (set) => ({
      completedLessons: ['es-u1-l1', 'es-u1-l2', 'fr-u1-l1', 'fr-u1-l2', 'ja-u1-l1', 'de-u1-l1'],
      currentLessonIds: {
        es: 'es-u1-l3',
        fr: 'fr-u1-l3',
        ja: 'ja-u1-l2',
        de: 'de-u1-l2',
      },
      markLessonComplete: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
      setCurrentLesson: (languageCode, lessonId) =>
        set((state) => ({
          currentLessonIds: { ...state.currentLessonIds, [languageCode]: lessonId },
        })),
      resetProgress: () =>
        set({
          completedLessons: [],
          currentLessonIds: {},
        }),
    }),
    {
      name: 'lesson-progress-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
