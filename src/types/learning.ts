export type LanguageCode = 'es' | 'fr' | 'jp' | 'de';

export type ActivityType = 'vocabulary' | 'phrase' | 'quiz' | 'listen' | 'speak';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  color: string;
  description: string;
  totalLearners: number;
}

export interface VocabItem {
  word: string;
  translation: string;
  pronunciation: string;
  example: string;
  exampleTranslation: string;
}

export interface PhraseItem {
  phrase: string;
  translation: string;
  pronunciation: string;
  context: string;
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  vocabulary?: VocabItem[];
  phrases?: PhraseItem[];
  questions?: QuizQuestion[];
  audioScript?: string;
}

export interface AITeacherPrompt {
  systemPrompt: string;
  openingLine: string;
  topicFocus: string;
  teachingStyle: string;
}

export interface LessonGoal {
  description: string;
  xpReward: number;
}

export interface Lesson {
  id: string;
  unitId: string;
  order: number;
  title: string;
  description: string;
  duration: number;
  difficulty: DifficultyLevel;
  xpReward: number;
  goals: LessonGoal[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  order: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  lessons: Lesson[];
}
