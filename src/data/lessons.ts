import type { Lesson } from '@/types/learning';

// ─── Spanish Lessons ─────────────────────────────────────────────────────────

export const spanishUnit1Lessons: Lesson[] = [
  {
    id: 'es-u1-l1',
    unitId: 'es-u1',
    order: 1,
    title: 'Greetings',
    description: 'Say hello and introduce yourself in Spanish.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    goals: [
      { description: 'Learn 5 common greetings', xpReward: 10 },
      { description: 'Introduce yourself by name', xpReward: 10 },
    ],
    activities: [
      {
        id: 'es-u1-l1-a1',
        type: 'vocabulary',
        title: 'Basic Greetings',
        description: 'Learn the most common Spanish greetings.',
        vocabulary: [
          {
            word: 'Hola',
            translation: 'Hello',
            pronunciation: 'OH-lah',
            example: 'Hola, ¿cómo estás?',
            exampleTranslation: 'Hello, how are you?',
          },
          {
            word: 'Buenos días',
            translation: 'Good morning',
            pronunciation: 'BWEH-nos DEE-as',
            example: 'Buenos días, profesor.',
            exampleTranslation: 'Good morning, teacher.',
          },
          {
            word: 'Buenas noches',
            translation: 'Good night',
            pronunciation: 'BWEH-nas NOH-ches',
            example: 'Buenas noches, mamá.',
            exampleTranslation: 'Good night, mom.',
          },
          {
            word: 'Adiós',
            translation: 'Goodbye',
            pronunciation: 'ah-DYOS',
            example: 'Adiós, hasta mañana.',
            exampleTranslation: 'Goodbye, see you tomorrow.',
          },
          {
            word: 'Gracias',
            translation: 'Thank you',
            pronunciation: 'GRAH-syahs',
            example: 'Gracias por tu ayuda.',
            exampleTranslation: 'Thank you for your help.',
          },
        ],
      },
      {
        id: 'es-u1-l1-a2',
        type: 'phrase',
        title: 'Introduce Yourself',
        description: 'Practice introducing yourself in Spanish.',
        phrases: [
          {
            phrase: 'Me llamo...',
            translation: 'My name is...',
            pronunciation: 'meh YAH-moh',
            context: 'Use this to tell someone your name.',
          },
          {
            phrase: '¿Cómo te llamas?',
            translation: 'What is your name?',
            pronunciation: 'KOH-moh teh YAH-mas',
            context: 'Ask someone their name informally.',
          },
          {
            phrase: 'Mucho gusto.',
            translation: 'Nice to meet you.',
            pronunciation: 'MOO-choh GOOS-toh',
            context: 'Say this when you meet someone new.',
          },
        ],
      },
      {
        id: 'es-u1-l1-a3',
        type: 'quiz',
        title: 'Greetings Quiz',
        description: 'Test your knowledge of Spanish greetings.',
        questions: [
          {
            question: 'How do you say "Good morning" in Spanish?',
            options: [
              { text: 'Buenas noches', isCorrect: false },
              { text: 'Buenos días', isCorrect: true },
              { text: 'Hasta luego', isCorrect: false },
              { text: 'Por favor', isCorrect: false },
            ],
            explanation: '"Buenos días" literally means "good days" and is used in the morning.',
          },
          {
            question: 'What does "Mucho gusto" mean?',
            options: [
              { text: 'Good night', isCorrect: false },
              { text: 'Thank you very much', isCorrect: false },
              { text: 'Nice to meet you', isCorrect: true },
              { text: 'See you later', isCorrect: false },
            ],
            explanation: '"Mucho gusto" is used when you first meet someone, like "Pleased to meet you."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Lucia, a warm and encouraging Spanish teacher. You are teaching a complete beginner their very first Spanish greetings. Speak slowly, clearly, and use simple English explanations. Celebrate every small win with enthusiasm.',
      openingLine:
        '¡Hola! I\'m Lucia, your Spanish teacher! Today we\'re going to learn how to say hello and introduce yourself. Ready? Let\'s go!',
      topicFocus: 'Spanish greetings and basic introductions',
      teachingStyle: 'Warm, encouraging, slow-paced, celebratory',
    },
  },
  {
    id: 'es-u1-l2',
    unitId: 'es-u1',
    order: 2,
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Spanish.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    goals: [
      { description: 'Learn numbers 1 to 10', xpReward: 10 },
      { description: 'Use numbers in simple sentences', xpReward: 10 },
    ],
    activities: [
      {
        id: 'es-u1-l2-a1',
        type: 'vocabulary',
        title: 'Numbers 1–10',
        description: 'Learn to count to ten in Spanish.',
        vocabulary: [
          { word: 'uno', translation: 'one', pronunciation: 'OO-noh', example: 'Tengo uno.', exampleTranslation: 'I have one.' },
          { word: 'dos', translation: 'two', pronunciation: 'dohs', example: 'Hay dos gatos.', exampleTranslation: 'There are two cats.' },
          { word: 'tres', translation: 'three', pronunciation: 'trehs', example: 'Tres libros.', exampleTranslation: 'Three books.' },
          { word: 'cuatro', translation: 'four', pronunciation: 'KWAH-troh', example: 'Cuatro manzanas.', exampleTranslation: 'Four apples.' },
          { word: 'cinco', translation: 'five', pronunciation: 'SEEN-koh', example: 'Cinco minutos.', exampleTranslation: 'Five minutes.' },
          { word: 'seis', translation: 'six', pronunciation: 'seys', example: 'Seis días.', exampleTranslation: 'Six days.' },
          { word: 'siete', translation: 'seven', pronunciation: 'SYEH-teh', example: 'Siete días a la semana.', exampleTranslation: 'Seven days in a week.' },
          { word: 'ocho', translation: 'eight', pronunciation: 'OH-choh', example: 'Ocho horas.', exampleTranslation: 'Eight hours.' },
          { word: 'nueve', translation: 'nine', pronunciation: 'NWEH-veh', example: 'Nueve estudiantes.', exampleTranslation: 'Nine students.' },
          { word: 'diez', translation: 'ten', pronunciation: 'dyehs', example: 'Diez segundos.', exampleTranslation: 'Ten seconds.' },
        ],
      },
      {
        id: 'es-u1-l2-a2',
        type: 'quiz',
        title: 'Numbers Quiz',
        description: 'Practice what you learned about Spanish numbers.',
        questions: [
          {
            question: 'How do you say "five" in Spanish?',
            options: [
              { text: 'cuatro', isCorrect: false },
              { text: 'seis', isCorrect: false },
              { text: 'cinco', isCorrect: true },
              { text: 'siete', isCorrect: false },
            ],
            explanation: '"Cinco" means five. Remember: cinco sounds like "sink-oh."',
          },
          {
            question: 'What number is "ocho"?',
            options: [
              { text: '6', isCorrect: false },
              { text: '8', isCorrect: true },
              { text: '9', isCorrect: false },
              { text: '10', isCorrect: false },
            ],
            explanation: '"Ocho" means eight in Spanish.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Lucia, an energetic Spanish teacher. You are teaching numbers 1–10 to a beginner. Make counting fun by using real-world examples like counting objects around you. Encourage the student to repeat each number out loud.',
      openingLine:
        '¡Hola de nuevo! Today we\'re going to count from one to ten in Spanish. It\'s easier than you think — let\'s do it together!',
      topicFocus: 'Spanish numbers 1 to 10',
      teachingStyle: 'Energetic, repetition-based, uses real-world objects as examples',
    },
  },
];

// ─── French Lessons ───────────────────────────────────────────────────────────

export const frenchUnit1Lessons: Lesson[] = [
  {
    id: 'fr-u1-l1',
    unitId: 'fr-u1',
    order: 1,
    title: 'Bonjour!',
    description: 'Say hello and introduce yourself in French.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    goals: [
      { description: 'Learn 5 French greetings', xpReward: 10 },
      { description: 'Introduce yourself in French', xpReward: 10 },
    ],
    activities: [
      {
        id: 'fr-u1-l1-a1',
        type: 'vocabulary',
        title: 'French Greetings',
        description: 'Learn the most common French greetings.',
        vocabulary: [
          {
            word: 'Bonjour',
            translation: 'Hello / Good day',
            pronunciation: 'bon-ZHOOR',
            example: 'Bonjour, comment ça va?',
            exampleTranslation: 'Hello, how are you?',
          },
          {
            word: 'Bonsoir',
            translation: 'Good evening',
            pronunciation: 'bon-SWAHR',
            example: 'Bonsoir, madame.',
            exampleTranslation: 'Good evening, ma\'am.',
          },
          {
            word: 'Au revoir',
            translation: 'Goodbye',
            pronunciation: 'oh reh-VWAHR',
            example: 'Au revoir, à demain!',
            exampleTranslation: 'Goodbye, see you tomorrow!',
          },
          {
            word: 'Merci',
            translation: 'Thank you',
            pronunciation: 'mer-SEE',
            example: 'Merci beaucoup!',
            exampleTranslation: 'Thank you very much!',
          },
          {
            word: 'S\'il vous plaît',
            translation: 'Please',
            pronunciation: 'seel voo PLAY',
            example: 'Un café, s\'il vous plaît.',
            exampleTranslation: 'A coffee, please.',
          },
        ],
      },
      {
        id: 'fr-u1-l1-a2',
        type: 'phrase',
        title: 'Introduce Yourself',
        description: 'Learn how to say your name in French.',
        phrases: [
          {
            phrase: 'Je m\'appelle...',
            translation: 'My name is...',
            pronunciation: 'zhuh mah-PEL',
            context: 'The standard way to introduce your name in French.',
          },
          {
            phrase: 'Comment vous appelez-vous?',
            translation: 'What is your name? (formal)',
            pronunciation: 'koh-mahn voo zah-play VOO',
            context: 'Use formal with strangers, elders, or professionals.',
          },
          {
            phrase: 'Enchanté(e).',
            translation: 'Nice to meet you.',
            pronunciation: 'ahn-shahn-TAY',
            context: 'Add "e" at the end if you identify as female.',
          },
        ],
      },
      {
        id: 'fr-u1-l1-a3',
        type: 'quiz',
        title: 'French Greetings Quiz',
        description: 'Test your French greeting knowledge.',
        questions: [
          {
            question: 'How do you say "Thank you" in French?',
            options: [
              { text: 'Bonjour', isCorrect: false },
              { text: 'Merci', isCorrect: true },
              { text: 'Au revoir', isCorrect: false },
              { text: 'Bonsoir', isCorrect: false },
            ],
            explanation: '"Merci" means thank you. "Merci beaucoup" means thank you very much.',
          },
          {
            question: 'What does "Au revoir" mean?',
            options: [
              { text: 'Good morning', isCorrect: false },
              { text: 'Please', isCorrect: false },
              { text: 'Nice to meet you', isCorrect: false },
              { text: 'Goodbye', isCorrect: true },
            ],
            explanation: '"Au revoir" literally means "until we see each other again" — it\'s the standard farewell.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Sophie, a friendly and elegant French teacher from Paris. You are teaching a complete beginner their first French greetings. Use a gentle, encouraging tone. Pronounce words slowly and clearly. Occasionally add small fun cultural facts about France.',
      openingLine:
        'Bonjour! I\'m Sophie, and I\'m going to teach you French today! Let\'s start with something simple — how to say hello and introduce yourself. Ready?',
      topicFocus: 'French greetings and introductions',
      teachingStyle: 'Elegant, culturally rich, slow pronunciation, encouraging',
    },
  },
];

// ─── Japanese Lessons ─────────────────────────────────────────────────────────

export const japaneseUnit1Lessons: Lesson[] = [
  {
    id: 'jp-u1-l1',
    unitId: 'jp-u1',
    order: 1,
    title: 'こんにちは (Konnichiwa)',
    description: 'Learn basic Japanese greetings.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    goals: [
      { description: 'Learn 5 Japanese greetings', xpReward: 10 },
      { description: 'Say hello and goodbye in Japanese', xpReward: 10 },
    ],
    activities: [
      {
        id: 'jp-u1-l1-a1',
        type: 'vocabulary',
        title: 'Japanese Greetings',
        description: 'Learn everyday Japanese greetings.',
        vocabulary: [
          {
            word: 'こんにちは',
            translation: 'Hello / Good afternoon',
            pronunciation: 'kon-ni-chi-wa',
            example: 'こんにちは、田中さん。',
            exampleTranslation: 'Hello, Tanaka-san.',
          },
          {
            word: 'おはようございます',
            translation: 'Good morning (formal)',
            pronunciation: 'o-ha-yo-go-za-i-ma-su',
            example: 'おはようございます、先生。',
            exampleTranslation: 'Good morning, teacher.',
          },
          {
            word: 'こんばんは',
            translation: 'Good evening',
            pronunciation: 'kon-ban-wa',
            example: 'こんばんは！',
            exampleTranslation: 'Good evening!',
          },
          {
            word: 'さようなら',
            translation: 'Goodbye (formal)',
            pronunciation: 'sa-yo-na-ra',
            example: 'さようなら、またね。',
            exampleTranslation: 'Goodbye, see you again.',
          },
          {
            word: 'ありがとう',
            translation: 'Thank you',
            pronunciation: 'a-ri-ga-to',
            example: 'ありがとうございます。',
            exampleTranslation: 'Thank you very much.',
          },
        ],
      },
      {
        id: 'jp-u1-l1-a2',
        type: 'quiz',
        title: 'Japanese Greetings Quiz',
        description: 'Test your Japanese greeting knowledge.',
        questions: [
          {
            question: 'How do you say "Good morning" formally in Japanese?',
            options: [
              { text: 'こんにちは', isCorrect: false },
              { text: 'こんばんは', isCorrect: false },
              { text: 'おはようございます', isCorrect: true },
              { text: 'さようなら', isCorrect: false },
            ],
            explanation: '"おはようございます" is the formal good morning. Informally it\'s "おはよう."',
          },
          {
            question: 'What does "ありがとう" mean?',
            options: [
              { text: 'Goodbye', isCorrect: false },
              { text: 'Good evening', isCorrect: false },
              { text: 'Thank you', isCorrect: true },
              { text: 'Hello', isCorrect: false },
            ],
            explanation: '"ありがとう" means thank you. The more formal version is "ありがとうございます."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Hana, a patient and enthusiastic Japanese teacher. You are teaching a complete beginner their first Japanese greetings. Break down the pronunciation carefully, syllable by syllable. Mention that Japanese has formal and informal forms and keep it light and fun.',
      openingLine:
        'こんにちは! I\'m Hana! Today we\'ll learn how to greet people in Japanese. Don\'t worry — I\'ll break it down step by step. Let\'s go!',
      topicFocus: 'Japanese greetings and formal vs informal speech',
      teachingStyle: 'Patient, syllable-by-syllable pronunciation, culturally aware',
    },
  },
];

// ─── German Lessons ───────────────────────────────────────────────────────────

export const germanUnit1Lessons: Lesson[] = [
  {
    id: 'de-u1-l1',
    unitId: 'de-u1',
    order: 1,
    title: 'Hallo!',
    description: 'Learn basic German greetings and introductions.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    goals: [
      { description: 'Learn 5 German greetings', xpReward: 10 },
      { description: 'Introduce yourself in German', xpReward: 10 },
    ],
    activities: [
      {
        id: 'de-u1-l1-a1',
        type: 'vocabulary',
        title: 'German Greetings',
        description: 'Learn the most common German greetings.',
        vocabulary: [
          {
            word: 'Hallo',
            translation: 'Hello',
            pronunciation: 'HAH-loh',
            example: 'Hallo, wie geht\'s?',
            exampleTranslation: 'Hello, how are you?',
          },
          {
            word: 'Guten Morgen',
            translation: 'Good morning',
            pronunciation: 'GOO-ten MOR-gen',
            example: 'Guten Morgen, Herr Müller.',
            exampleTranslation: 'Good morning, Mr. Müller.',
          },
          {
            word: 'Guten Abend',
            translation: 'Good evening',
            pronunciation: 'GOO-ten AH-bent',
            example: 'Guten Abend, alle!',
            exampleTranslation: 'Good evening, everyone!',
          },
          {
            word: 'Auf Wiedersehen',
            translation: 'Goodbye',
            pronunciation: 'owf VEE-der-zayn',
            example: 'Auf Wiedersehen, bis morgen!',
            exampleTranslation: 'Goodbye, until tomorrow!',
          },
          {
            word: 'Danke',
            translation: 'Thank you',
            pronunciation: 'DAHN-keh',
            example: 'Danke schön!',
            exampleTranslation: 'Thank you very much!',
          },
        ],
      },
      {
        id: 'de-u1-l1-a2',
        type: 'phrase',
        title: 'Introduce Yourself',
        description: 'Learn how to say your name in German.',
        phrases: [
          {
            phrase: 'Ich heiße...',
            translation: 'My name is...',
            pronunciation: 'ikh HY-seh',
            context: 'The standard way to give your name in German.',
          },
          {
            phrase: 'Wie heißen Sie?',
            translation: 'What is your name? (formal)',
            pronunciation: 'vee HY-sen zee',
            context: 'Use formal "Sie" with strangers or in professional settings.',
          },
          {
            phrase: 'Freut mich.',
            translation: 'Nice to meet you.',
            pronunciation: 'froyt mikh',
            context: 'Short and common. You\'ll hear this often.',
          },
        ],
      },
      {
        id: 'de-u1-l1-a3',
        type: 'quiz',
        title: 'German Greetings Quiz',
        description: 'Test your German greeting knowledge.',
        questions: [
          {
            question: 'How do you say "Good morning" in German?',
            options: [
              { text: 'Guten Abend', isCorrect: false },
              { text: 'Hallo', isCorrect: false },
              { text: 'Guten Morgen', isCorrect: true },
              { text: 'Auf Wiedersehen', isCorrect: false },
            ],
            explanation: '"Guten Morgen" is the formal good morning greeting in German.',
          },
          {
            question: 'What does "Danke" mean?',
            options: [
              { text: 'Hello', isCorrect: false },
              { text: 'Goodbye', isCorrect: false },
              { text: 'Please', isCorrect: false },
              { text: 'Thank you', isCorrect: true },
            ],
            explanation: '"Danke" means thank you. "Danke schön" means thank you very much.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Klaus, a confident and clear German teacher. You are teaching a complete beginner their first German greetings. Speak clearly, explain the formal vs informal distinction in German ("Sie" vs "du"), and make the student feel capable of learning German.',
      openingLine:
        'Hallo! I\'m Klaus, your German teacher. Today we\'re going to start with the basics — how to say hello and introduce yourself. German sounds tough at first, but I promise it\'s very logical. Let\'s begin!',
      topicFocus: 'German greetings and formal vs informal address',
      teachingStyle: 'Clear, confident, logical explanations, encouraging',
    },
  },
];
