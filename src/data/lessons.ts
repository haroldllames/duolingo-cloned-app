import type { Lesson } from '@/types/learning';

// ─── Spanish Lessons ─────────────────────────────────────────────────────────

export const spanishUnit1Lessons: Lesson[] = [
  {
    id: 'es-u1-l1',
    unitId: 'es-u1',
    order: 1,
    title: 'Greetings & Introductions',
    description: 'Say hello and introduce yourself in Spanish.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-greet-es/300/300',
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
    image: 'https://picsum.photos/seed/lingua-numbers-es/300/300',
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
            question: 'What number is "tres"?',
            options: [
              { text: '1', isCorrect: false },
              { text: '2', isCorrect: false },
              { text: '3', isCorrect: true },
              { text: '4', isCorrect: false },
            ],
            explanation: '"Tres" means three in Spanish.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Lucia, an energetic Spanish teacher. You are teaching numbers 1–10 to a beginner. Make counting fun by using real-world examples. Encourage the student to repeat each number out loud.',
      openingLine:
        '¡Hola de nuevo! Today we\'re going to count from one to ten in Spanish. It\'s easier than you think — let\'s do it together!',
      topicFocus: 'Spanish numbers 1 to 10',
      teachingStyle: 'Energetic, repetition-based, uses real-world objects as examples',
    },
  },
  {
    id: 'es-u1-l3',
    unitId: 'es-u1',
    order: 3,
    title: 'Daily Routines',
    description: 'Talk about your daily routine in Spanish.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-daily-es/300/300',
    goals: [
      { description: 'Learn 5 daily activity verbs', xpReward: 10 },
      { description: 'Describe a simple daily routine', xpReward: 10 },
    ],
    activities: [
      {
        id: 'es-u1-l3-a1',
        type: 'vocabulary',
        title: 'Daily Activities',
        description: 'Common Spanish verbs for daily life.',
        vocabulary: [
          { word: 'despertarse', translation: 'to wake up', pronunciation: 'des-per-TAR-seh', example: 'Me despierto a las 7.', exampleTranslation: 'I wake up at 7.' },
          { word: 'ducharse', translation: 'to shower', pronunciation: 'doo-CHAR-seh', example: 'Me ducho cada mañana.', exampleTranslation: 'I shower every morning.' },
          { word: 'desayunar', translation: 'to have breakfast', pronunciation: 'des-ah-yoo-NAR', example: 'Desayuno pan y café.', exampleTranslation: 'I have bread and coffee for breakfast.' },
          { word: 'trabajar', translation: 'to work', pronunciation: 'trah-bah-HAR', example: 'Trabajo ocho horas.', exampleTranslation: 'I work eight hours.' },
          { word: 'dormir', translation: 'to sleep', pronunciation: 'dor-MEER', example: 'Duermo a las 11.', exampleTranslation: 'I sleep at 11.' },
        ],
      },
      {
        id: 'es-u1-l3-a2',
        type: 'quiz',
        title: 'Daily Routine Quiz',
        description: 'Test your daily routine vocabulary.',
        questions: [
          {
            question: 'What does "desayunar" mean?',
            options: [
              { text: 'to sleep', isCorrect: false },
              { text: 'to shower', isCorrect: false },
              { text: 'to have breakfast', isCorrect: true },
              { text: 'to work', isCorrect: false },
            ],
            explanation: '"Desayunar" means to have breakfast. "Desayuno" is the noun for breakfast.',
          },
          {
            question: 'How do you say "to work" in Spanish?',
            options: [
              { text: 'dormir', isCorrect: false },
              { text: 'trabajar', isCorrect: true },
              { text: 'ducharse', isCorrect: false },
              { text: 'despertarse', isCorrect: false },
            ],
            explanation: '"Trabajar" means to work. "Trabajo" means I work.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Lucia, a friendly Spanish teacher. Teach daily routine verbs with relatable, real-life examples. Encourage the student to describe their own morning routine in Spanish.',
      openingLine:
        '¡Buenos días! Today we\'ll learn how to talk about your daily routine in Spanish. Ready to describe your day?',
      topicFocus: 'Spanish daily routine verbs and expressions',
      teachingStyle: 'Relatable, practical, encouraging repetition',
    },
  },
  {
    id: 'es-u1-l4',
    unitId: 'es-u1',
    order: 4,
    title: 'At the Restaurant',
    description: 'Order food and drinks at a Spanish restaurant.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-restaurant-es/300/300',
    goals: [
      { description: 'Learn key restaurant vocabulary', xpReward: 10 },
      { description: 'Practice ordering a meal', xpReward: 10 },
    ],
    activities: [
      {
        id: 'es-u1-l4-a1',
        type: 'vocabulary',
        title: 'Restaurant Words',
        description: 'Essential Spanish for dining out.',
        vocabulary: [
          { word: 'el menú', translation: 'the menu', pronunciation: 'el meh-NOO', example: '¿Me trae el menú?', exampleTranslation: 'Can you bring me the menu?' },
          { word: 'el agua', translation: 'the water', pronunciation: 'el AH-gwah', example: 'Quiero agua, por favor.', exampleTranslation: 'I want water, please.' },
          { word: 'la cuenta', translation: 'the bill', pronunciation: 'lah KWEN-tah', example: '¿Puedo tener la cuenta?', exampleTranslation: 'Can I have the bill?' },
          { word: 'pedir', translation: 'to order', pronunciation: 'peh-DEER', example: 'Quiero pedir una pizza.', exampleTranslation: 'I want to order a pizza.' },
          { word: 'delicioso', translation: 'delicious', pronunciation: 'deh-lee-SYOH-so', example: 'Esta paella es deliciosa.', exampleTranslation: 'This paella is delicious.' },
        ],
      },
      {
        id: 'es-u1-l4-a2',
        type: 'quiz',
        title: 'Restaurant Quiz',
        description: 'Test your restaurant Spanish.',
        questions: [
          {
            question: 'What does "la cuenta" mean?',
            options: [
              { text: 'the menu', isCorrect: false },
              { text: 'the water', isCorrect: false },
              { text: 'the bill', isCorrect: true },
              { text: 'the table', isCorrect: false },
            ],
            explanation: '"La cuenta" means the bill. You\'ll say "¿La cuenta, por favor?" to ask for it.',
          },
          {
            question: 'How do you say "delicious" in Spanish?',
            options: [
              { text: 'pedir', isCorrect: false },
              { text: 'delicioso', isCorrect: true },
              { text: 'agua', isCorrect: false },
              { text: 'menú', isCorrect: false },
            ],
            explanation: '"Delicioso" means delicious. You can use it to compliment a meal.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Lucia, an enthusiastic Spanish teacher. Teach restaurant vocabulary through roleplay — pretend the student is ordering at a Spanish restaurant. Keep it fun and practical.',
      openingLine:
        '¡Bienvenido! Imagine you\'re sitting at a beautiful restaurant in Madrid. Let\'s learn how to order food in Spanish!',
      topicFocus: 'Spanish restaurant vocabulary and ordering phrases',
      teachingStyle: 'Roleplay-based, practical, immersive',
    },
  },
  {
    id: 'es-u1-l5',
    unitId: 'es-u1',
    order: 5,
    title: 'Travel & Directions',
    description: 'Ask for and understand directions in Spanish.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-travel-es/300/300',
    goals: [
      { description: 'Learn direction vocabulary', xpReward: 10 },
      { description: 'Ask how to get somewhere', xpReward: 10 },
    ],
    activities: [
      {
        id: 'es-u1-l5-a1',
        type: 'vocabulary',
        title: 'Directions',
        description: 'Key Spanish words for navigating.',
        vocabulary: [
          { word: 'izquierda', translation: 'left', pronunciation: 'ees-KYEHR-dah', example: 'Gira a la izquierda.', exampleTranslation: 'Turn left.' },
          { word: 'derecha', translation: 'right', pronunciation: 'deh-REH-chah', example: 'Sigue a la derecha.', exampleTranslation: 'Go to the right.' },
          { word: 'recto', translation: 'straight ahead', pronunciation: 'REK-toh', example: 'Continúa recto.', exampleTranslation: 'Continue straight.' },
          { word: 'la estación', translation: 'the station', pronunciation: 'lah es-tah-SYOHN', example: 'La estación está cerca.', exampleTranslation: 'The station is nearby.' },
          { word: 'el aeropuerto', translation: 'the airport', pronunciation: 'el ah-eh-roh-PWER-toh', example: '¿Cómo llego al aeropuerto?', exampleTranslation: 'How do I get to the airport?' },
        ],
      },
      {
        id: 'es-u1-l5-a2',
        type: 'quiz',
        title: 'Directions Quiz',
        description: 'Test your knowledge of Spanish directions.',
        questions: [
          {
            question: 'How do you say "left" in Spanish?',
            options: [
              { text: 'derecha', isCorrect: false },
              { text: 'recto', isCorrect: false },
              { text: 'izquierda', isCorrect: true },
              { text: 'estación', isCorrect: false },
            ],
            explanation: '"Izquierda" means left. "Gira a la izquierda" means "turn left."',
          },
          {
            question: 'What does "recto" mean?',
            options: [
              { text: 'right', isCorrect: false },
              { text: 'straight ahead', isCorrect: true },
              { text: 'left', isCorrect: false },
              { text: 'stop', isCorrect: false },
            ],
            explanation: '"Recto" means straight ahead. "Sigue recto" means keep going straight.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Lucia, a helpful Spanish teacher. Teach direction vocabulary by guiding the student through a virtual walking tour of a Spanish city. Use real street scenarios.',
      openingLine:
        '¡Vamos! Imagine you\'re in Barcelona and you\'re lost. Today we\'ll learn how to ask for and understand directions in Spanish!',
      topicFocus: 'Spanish directions and travel vocabulary',
      teachingStyle: 'Scenario-based, visual, practical',
    },
  },
  {
    id: 'es-u1-l6',
    unitId: 'es-u1',
    order: 6,
    title: 'Family & Friends',
    description: 'Talk about your family members in Spanish.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-family-es/300/300',
    goals: [
      { description: 'Learn family member vocabulary', xpReward: 10 },
      { description: 'Describe your family in Spanish', xpReward: 10 },
    ],
    activities: [
      {
        id: 'es-u1-l6-a1',
        type: 'vocabulary',
        title: 'Family Members',
        description: 'Essential Spanish family vocabulary.',
        vocabulary: [
          { word: 'la familia', translation: 'the family', pronunciation: 'lah fah-MEE-lyah', example: 'Mi familia es grande.', exampleTranslation: 'My family is big.' },
          { word: 'la madre', translation: 'the mother', pronunciation: 'lah MAH-dreh', example: 'Mi madre se llama Ana.', exampleTranslation: 'My mother\'s name is Ana.' },
          { word: 'el padre', translation: 'the father', pronunciation: 'el PAH-dreh', example: 'Mi padre trabaja mucho.', exampleTranslation: 'My father works a lot.' },
          { word: 'el hermano', translation: 'the brother', pronunciation: 'el er-MAH-noh', example: 'Tengo un hermano.', exampleTranslation: 'I have one brother.' },
          { word: 'la hermana', translation: 'the sister', pronunciation: 'lah er-MAH-nah', example: 'Mi hermana es muy lista.', exampleTranslation: 'My sister is very smart.' },
        ],
      },
      {
        id: 'es-u1-l6-a2',
        type: 'quiz',
        title: 'Family Quiz',
        description: 'Test your Spanish family vocabulary.',
        questions: [
          {
            question: 'How do you say "mother" in Spanish?',
            options: [
              { text: 'el padre', isCorrect: false },
              { text: 'la hermana', isCorrect: false },
              { text: 'la madre', isCorrect: true },
              { text: 'la familia', isCorrect: false },
            ],
            explanation: '"La madre" means mother. Informally, Spanish speakers often say "mamá."',
          },
          {
            question: 'What does "el hermano" mean?',
            options: [
              { text: 'the father', isCorrect: false },
              { text: 'the sister', isCorrect: false },
              { text: 'the brother', isCorrect: true },
              { text: 'the family', isCorrect: false },
            ],
            explanation: '"El hermano" means brother. "La hermana" means sister.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Lucia, a warm Spanish teacher. Teach family vocabulary by having the student describe their own family. Make it personal and fun. Use simple sentence structures.',
      openingLine:
        '¡Hola! Today we\'re going to talk about family — la familia. Tell me about yours as we learn the vocabulary together!',
      topicFocus: 'Spanish family vocabulary',
      teachingStyle: 'Personal, conversational, warm',
    },
  },
];

// ─── French Lessons ───────────────────────────────────────────────────────────

export const frenchUnit1Lessons: Lesson[] = [
  {
    id: 'fr-u1-l1',
    unitId: 'fr-u1',
    order: 1,
    title: 'Greetings & Introductions',
    description: 'Say hello and introduce yourself in French.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-greet-fr/300/300',
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
            explanation: '"Au revoir" literally means "until we see each other again."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Sophie, a friendly and elegant French teacher from Paris. You are teaching a complete beginner their first French greetings. Use a gentle, encouraging tone. Pronounce words slowly and clearly.',
      openingLine:
        'Bonjour! I\'m Sophie, and I\'m going to teach you French today! Let\'s start with something simple — how to say hello and introduce yourself. Ready?',
      topicFocus: 'French greetings and introductions',
      teachingStyle: 'Elegant, culturally rich, slow pronunciation, encouraging',
    },
  },
  {
    id: 'fr-u1-l2',
    unitId: 'fr-u1',
    order: 2,
    title: 'Daily Life',
    description: 'Talk about everyday activities in French.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-daily-fr/300/300',
    goals: [
      { description: 'Learn 5 daily activity verbs', xpReward: 10 },
      { description: 'Describe a simple daily routine in French', xpReward: 10 },
    ],
    activities: [
      {
        id: 'fr-u1-l2-a1',
        type: 'vocabulary',
        title: 'Daily Activities',
        description: 'Common French verbs for daily life.',
        vocabulary: [
          { word: 'manger', translation: 'to eat', pronunciation: 'mahn-ZHAY', example: 'Je mange le matin.', exampleTranslation: 'I eat in the morning.' },
          { word: 'boire', translation: 'to drink', pronunciation: 'BWAHR', example: 'Je bois du café.', exampleTranslation: 'I drink coffee.' },
          { word: 'travailler', translation: 'to work', pronunciation: 'trah-vah-YAY', example: 'Je travaille tous les jours.', exampleTranslation: 'I work every day.' },
          { word: 'dormir', translation: 'to sleep', pronunciation: 'dor-MEER', example: 'Je dors huit heures.', exampleTranslation: 'I sleep eight hours.' },
          { word: 'marcher', translation: 'to walk', pronunciation: 'mar-SHAY', example: 'Je marche au parc.', exampleTranslation: 'I walk in the park.' },
        ],
      },
      {
        id: 'fr-u1-l2-a2',
        type: 'quiz',
        title: 'Daily Life Quiz',
        description: 'Test your French daily vocabulary.',
        questions: [
          {
            question: 'What does "dormir" mean?',
            options: [
              { text: 'to eat', isCorrect: false },
              { text: 'to work', isCorrect: false },
              { text: 'to sleep', isCorrect: true },
              { text: 'to walk', isCorrect: false },
            ],
            explanation: '"Dormir" means to sleep. "Je dors" means I sleep.',
          },
          {
            question: 'How do you say "to drink" in French?',
            options: [
              { text: 'manger', isCorrect: false },
              { text: 'travailler', isCorrect: false },
              { text: 'boire', isCorrect: true },
              { text: 'marcher', isCorrect: false },
            ],
            explanation: '"Boire" means to drink. "Je bois" means I drink.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Sophie, a friendly French teacher. Teach daily life vocabulary with vivid French lifestyle examples — morning café, walks along the Seine, etc.',
      openingLine:
        'Bonjour! Today we\'re going to learn how to talk about your daily life in French. Let\'s start with your morning!',
      topicFocus: 'French daily life verbs and routines',
      teachingStyle: 'Culturally rich, practical, encouraging',
    },
  },
  {
    id: 'fr-u1-l3',
    unitId: 'fr-u1',
    order: 3,
    title: 'At the Café',
    description: 'Order coffee, food, and more at a French café.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-cafe-fr/300/300',
    goals: [
      { description: 'Learn café vocabulary in French', xpReward: 10 },
      { description: 'Practice ordering at a French café', xpReward: 10 },
    ],
    activities: [
      {
        id: 'fr-u1-l3-a1',
        type: 'vocabulary',
        title: 'Café Vocabulary',
        description: 'Essential French for café visits.',
        vocabulary: [
          { word: 'un café', translation: 'a coffee', pronunciation: 'uhn kah-FAY', example: 'Je voudrais un café.', exampleTranslation: 'I would like a coffee.' },
          { word: 'un croissant', translation: 'a croissant', pronunciation: 'uhn krwah-SAHN', example: 'Un croissant, s\'il vous plaît.', exampleTranslation: 'A croissant, please.' },
          { word: 'un jus d\'orange', translation: 'an orange juice', pronunciation: 'uhn zhoo doh-RAHNZH', example: 'Je prends un jus d\'orange.', exampleTranslation: 'I\'ll have an orange juice.' },
          { word: 'l\'addition', translation: 'the bill', pronunciation: 'lah-dee-SYOHN', example: 'L\'addition, s\'il vous plaît.', exampleTranslation: 'The bill, please.' },
          { word: 'commander', translation: 'to order', pronunciation: 'koh-mahn-DAY', example: 'Je voudrais commander.', exampleTranslation: 'I would like to order.' },
        ],
      },
      {
        id: 'fr-u1-l3-a2',
        type: 'quiz',
        title: 'Café Quiz',
        description: 'Test your French café vocabulary.',
        questions: [
          {
            question: 'How do you say "the bill" in French?',
            options: [
              { text: 'un café', isCorrect: false },
              { text: 'commander', isCorrect: false },
              { text: 'l\'addition', isCorrect: true },
              { text: 'un croissant', isCorrect: false },
            ],
            explanation: '"L\'addition" means the bill. You say "L\'addition, s\'il vous plaît" to ask for it.',
          },
          {
            question: 'What does "commander" mean?',
            options: [
              { text: 'to drink', isCorrect: false },
              { text: 'to pay', isCorrect: false },
              { text: 'to eat', isCorrect: false },
              { text: 'to order', isCorrect: true },
            ],
            explanation: '"Commander" means to order. "Je voudrais commander" means "I would like to order."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Sophie, a cheerful French teacher. Roleplay as a friendly Parisian waiter/waitress teaching the student how to order at a café. Make it immersive and fun.',
      openingLine:
        'Bienvenue! Imagine you\'re sitting at a charming café in Paris. Today we\'ll learn how to order like a local!',
      topicFocus: 'French café vocabulary and ordering phrases',
      teachingStyle: 'Immersive, roleplay-based, culturally authentic',
    },
  },
  {
    id: 'fr-u1-l4',
    unitId: 'fr-u1',
    order: 4,
    title: 'Travel & Directions',
    description: 'Navigate French cities with confidence.',
    duration: 7,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-travel-fr/300/300',
    goals: [
      { description: 'Learn French direction vocabulary', xpReward: 10 },
      { description: 'Ask for directions in French', xpReward: 10 },
    ],
    activities: [
      {
        id: 'fr-u1-l4-a1',
        type: 'vocabulary',
        title: 'Directions & Places',
        description: 'Key French words for getting around.',
        vocabulary: [
          { word: 'à gauche', translation: 'to the left', pronunciation: 'ah GOHSH', example: 'Tournez à gauche.', exampleTranslation: 'Turn left.' },
          { word: 'à droite', translation: 'to the right', pronunciation: 'ah DRWAHT', example: 'C\'est à droite.', exampleTranslation: 'It\'s to the right.' },
          { word: 'tout droit', translation: 'straight ahead', pronunciation: 'too DRWAH', example: 'Allez tout droit.', exampleTranslation: 'Go straight ahead.' },
          { word: 'la gare', translation: 'the train station', pronunciation: 'lah GAR', example: 'La gare est loin.', exampleTranslation: 'The train station is far.' },
          { word: 'l\'hôtel', translation: 'the hotel', pronunciation: 'loh-TEL', example: 'Mon hôtel est ici.', exampleTranslation: 'My hotel is here.' },
        ],
      },
      {
        id: 'fr-u1-l4-a2',
        type: 'quiz',
        title: 'Directions Quiz',
        description: 'Test your French navigation vocabulary.',
        questions: [
          {
            question: 'How do you say "to the left" in French?',
            options: [
              { text: 'à droite', isCorrect: false },
              { text: 'tout droit', isCorrect: false },
              { text: 'à gauche', isCorrect: true },
              { text: 'la gare', isCorrect: false },
            ],
            explanation: '"À gauche" means to the left. "Tournez à gauche" means "turn left."',
          },
          {
            question: 'What does "la gare" mean?',
            options: [
              { text: 'the hotel', isCorrect: false },
              { text: 'the train station', isCorrect: true },
              { text: 'the street', isCorrect: false },
              { text: 'the airport', isCorrect: false },
            ],
            explanation: '"La gare" means the train station. France has an excellent train network — this word is very useful!',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Sophie, a knowledgeable French teacher. Guide the student through navigating Paris streets. Use vivid landmark-based examples to teach directions.',
      openingLine:
        'Imaginez! You\'re in Paris and need to find the Eiffel Tower. Let\'s learn how to ask for and understand directions in French!',
      topicFocus: 'French directions and navigation vocabulary',
      teachingStyle: 'Visual, landmark-based, immersive',
    },
  },
  {
    id: 'fr-u1-l5',
    unitId: 'fr-u1',
    order: 5,
    title: 'Shopping',
    description: 'Shop confidently in French markets and stores.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-shop-fr/300/300',
    goals: [
      { description: 'Learn French shopping vocabulary', xpReward: 10 },
      { description: 'Ask prices and make purchases', xpReward: 10 },
    ],
    activities: [
      {
        id: 'fr-u1-l5-a1',
        type: 'vocabulary',
        title: 'Shopping Words',
        description: 'Essential French for shopping trips.',
        vocabulary: [
          { word: 'combien', translation: 'how much', pronunciation: 'kohm-BYEHN', example: 'C\'est combien?', exampleTranslation: 'How much is it?' },
          { word: 'le marché', translation: 'the market', pronunciation: 'luh mar-SHAY', example: 'J\'aime le marché.', exampleTranslation: 'I like the market.' },
          { word: 'la boutique', translation: 'the shop', pronunciation: 'lah boo-TEEK', example: 'Cette boutique est belle.', exampleTranslation: 'This shop is beautiful.' },
          { word: 'cher', translation: 'expensive', pronunciation: 'SHAIR', example: 'C\'est trop cher.', exampleTranslation: 'It\'s too expensive.' },
          { word: 'bon marché', translation: 'cheap / affordable', pronunciation: 'bohn mar-SHAY', example: 'C\'est bon marché.', exampleTranslation: 'It\'s affordable.' },
        ],
      },
      {
        id: 'fr-u1-l5-a2',
        type: 'quiz',
        title: 'Shopping Quiz',
        description: 'Test your French shopping vocabulary.',
        questions: [
          {
            question: 'How do you ask "how much" in French?',
            options: [
              { text: 'le marché', isCorrect: false },
              { text: 'combien', isCorrect: true },
              { text: 'cher', isCorrect: false },
              { text: 'la boutique', isCorrect: false },
            ],
            explanation: '"Combien" means how much. "C\'est combien?" means "How much is it?"',
          },
          {
            question: 'What does "cher" mean?',
            options: [
              { text: 'cheap', isCorrect: false },
              { text: 'the market', isCorrect: false },
              { text: 'expensive', isCorrect: true },
              { text: 'the shop', isCorrect: false },
            ],
            explanation: '"Cher" means expensive. "C\'est trop cher!" means "It\'s too expensive!"',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Sophie, a fun French teacher. Teach shopping vocabulary by simulating a visit to a Parisian marché. Use price examples and bargaining scenarios.',
      openingLine:
        'Bonjour! Today we\'re going shopping — au marché! Let\'s learn how to ask prices and buy things in French.',
      topicFocus: 'French shopping vocabulary and price expressions',
      teachingStyle: 'Scenario-based, fun, practical',
    },
  },
  {
    id: 'fr-u1-l6',
    unitId: 'fr-u1',
    order: 6,
    title: 'Family & Friends',
    description: 'Talk about your family and describe people in French.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-family-fr/300/300',
    goals: [
      { description: 'Learn French family vocabulary', xpReward: 10 },
      { description: 'Describe your family in French', xpReward: 10 },
    ],
    activities: [
      {
        id: 'fr-u1-l6-a1',
        type: 'vocabulary',
        title: 'Family Members',
        description: 'Essential French family vocabulary.',
        vocabulary: [
          { word: 'la famille', translation: 'the family', pronunciation: 'lah fah-MEE', example: 'Ma famille est grande.', exampleTranslation: 'My family is big.' },
          { word: 'la mère', translation: 'the mother', pronunciation: 'lah MAIR', example: 'Ma mère est médecin.', exampleTranslation: 'My mother is a doctor.' },
          { word: 'le père', translation: 'the father', pronunciation: 'luh PAIR', example: 'Mon père aime cuisiner.', exampleTranslation: 'My father loves to cook.' },
          { word: 'le frère', translation: 'the brother', pronunciation: 'luh FRAIR', example: 'J\'ai un frère.', exampleTranslation: 'I have one brother.' },
          { word: 'la sœur', translation: 'the sister', pronunciation: 'lah SUHR', example: 'Ma sœur est drôle.', exampleTranslation: 'My sister is funny.' },
        ],
      },
      {
        id: 'fr-u1-l6-a2',
        type: 'quiz',
        title: 'Family Quiz',
        description: 'Test your French family vocabulary.',
        questions: [
          {
            question: 'How do you say "the father" in French?',
            options: [
              { text: 'la mère', isCorrect: false },
              { text: 'le frère', isCorrect: false },
              { text: 'le père', isCorrect: true },
              { text: 'la sœur', isCorrect: false },
            ],
            explanation: '"Le père" means the father. Informally, French people say "papa."',
          },
          {
            question: 'What does "la sœur" mean?',
            options: [
              { text: 'the mother', isCorrect: false },
              { text: 'the sister', isCorrect: true },
              { text: 'the brother', isCorrect: false },
              { text: 'the family', isCorrect: false },
            ],
            explanation: '"La sœur" means sister. "Le frère" means brother.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Sophie, a warm French teacher. Teach family vocabulary by encouraging the student to describe their own family in French. Keep the tone personal and encouraging.',
      openingLine:
        'Bonjour! Today we\'ll learn about la famille — the family. Let\'s start by talking about who is in your family!',
      topicFocus: 'French family vocabulary',
      teachingStyle: 'Personal, conversational, warm',
    },
  },
];

// ─── Japanese Lessons ─────────────────────────────────────────────────────────

export const japaneseUnit1Lessons: Lesson[] = [
  {
    id: 'ja-u1-l1',
    unitId: 'ja-u1',
    order: 1,
    title: 'Greetings & Introductions',
    description: 'Learn basic Japanese greetings and self-introductions.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-greet-ja/300/300',
    goals: [
      { description: 'Learn 5 Japanese greetings', xpReward: 10 },
      { description: 'Say hello and goodbye in Japanese', xpReward: 10 },
    ],
    activities: [
      {
        id: 'ja-u1-l1-a1',
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
        id: 'ja-u1-l1-a2',
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
        'You are Hana, a patient and enthusiastic Japanese teacher. You are teaching a complete beginner their first Japanese greetings. Break down the pronunciation carefully, syllable by syllable.',
      openingLine:
        'こんにちは! I\'m Hana! Today we\'ll learn how to greet people in Japanese. Don\'t worry — I\'ll break it down step by step. Let\'s go!',
      topicFocus: 'Japanese greetings and formal vs informal speech',
      teachingStyle: 'Patient, syllable-by-syllable pronunciation, culturally aware',
    },
  },
  {
    id: 'ja-u1-l2',
    unitId: 'ja-u1',
    order: 2,
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Japanese.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-numbers-ja/300/300',
    goals: [
      { description: 'Learn numbers 1–10 in Japanese', xpReward: 10 },
      { description: 'Use numbers in simple contexts', xpReward: 10 },
    ],
    activities: [
      {
        id: 'ja-u1-l2-a1',
        type: 'vocabulary',
        title: 'Japanese Numbers',
        description: 'Learn to count in Japanese.',
        vocabulary: [
          { word: 'いち', translation: 'one (1)', pronunciation: 'i-chi', example: 'いち、に、さん。', exampleTranslation: 'One, two, three.' },
          { word: 'に', translation: 'two (2)', pronunciation: 'ni', example: 'に人います。', exampleTranslation: 'There are two people.' },
          { word: 'さん', translation: 'three (3)', pronunciation: 'san', example: 'さんびき。', exampleTranslation: 'Three (animals).' },
          { word: 'し／よん', translation: 'four (4)', pronunciation: 'shi / yon', example: 'よんじ。', exampleTranslation: 'Four o\'clock.' },
          { word: 'ご', translation: 'five (5)', pronunciation: 'go', example: 'ごふん。', exampleTranslation: 'Five minutes.' },
        ],
      },
      {
        id: 'ja-u1-l2-a2',
        type: 'quiz',
        title: 'Numbers Quiz',
        description: 'Test your Japanese number knowledge.',
        questions: [
          {
            question: 'How do you say "three" in Japanese?',
            options: [
              { text: 'に', isCorrect: false },
              { text: 'さん', isCorrect: true },
              { text: 'ご', isCorrect: false },
              { text: 'いち', isCorrect: false },
            ],
            explanation: '"さん" means three. It\'s used in many contexts, including the greeting "さんびき."',
          },
          {
            question: 'What does "ご" mean?',
            options: [
              { text: 'one', isCorrect: false },
              { text: 'three', isCorrect: false },
              { text: 'five', isCorrect: true },
              { text: 'four', isCorrect: false },
            ],
            explanation: '"ご" means five. "ごふん" means five minutes.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Hana, an energetic Japanese teacher. Teach numbers 1–10 by having the student count real objects. Make it playful and repetitive to help memorization.',
      openingLine:
        'こんにちは! Today we\'re learning numbers in Japanese — かず! Let\'s count together from one to five first!',
      topicFocus: 'Japanese numbers 1–10',
      teachingStyle: 'Repetitive, playful, object-based counting',
    },
  },
  {
    id: 'ja-u1-l3',
    unitId: 'ja-u1',
    order: 3,
    title: 'Colors',
    description: 'Learn the names of colors in Japanese.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-colors-ja/300/300',
    goals: [
      { description: 'Learn 5 Japanese color words', xpReward: 10 },
      { description: 'Describe objects using colors', xpReward: 10 },
    ],
    activities: [
      {
        id: 'ja-u1-l3-a1',
        type: 'vocabulary',
        title: 'Japanese Colors',
        description: 'Common color words in Japanese.',
        vocabulary: [
          { word: '赤 (あか)', translation: 'red', pronunciation: 'a-ka', example: 'あかいりんご。', exampleTranslation: 'A red apple.' },
          { word: '青 (あお)', translation: 'blue', pronunciation: 'a-o', example: 'あおいそら。', exampleTranslation: 'A blue sky.' },
          { word: '緑 (みどり)', translation: 'green', pronunciation: 'mi-do-ri', example: 'みどりのき。', exampleTranslation: 'A green tree.' },
          { word: '黄色 (きいろ)', translation: 'yellow', pronunciation: 'ki-i-ro', example: 'きいろいほし。', exampleTranslation: 'A yellow star.' },
          { word: '白 (しろ)', translation: 'white', pronunciation: 'shi-ro', example: 'しろいねこ。', exampleTranslation: 'A white cat.' },
        ],
      },
      {
        id: 'ja-u1-l3-a2',
        type: 'quiz',
        title: 'Colors Quiz',
        description: 'Test your Japanese color vocabulary.',
        questions: [
          {
            question: 'How do you say "blue" in Japanese?',
            options: [
              { text: '赤 (あか)', isCorrect: false },
              { text: '青 (あお)', isCorrect: true },
              { text: '緑 (みどり)', isCorrect: false },
              { text: '白 (しろ)', isCorrect: false },
            ],
            explanation: '"青 (あお)" means blue. "あおいそら" means "a blue sky."',
          },
          {
            question: 'What color is "きいろ"?',
            options: [
              { text: 'red', isCorrect: false },
              { text: 'green', isCorrect: false },
              { text: 'white', isCorrect: false },
              { text: 'yellow', isCorrect: true },
            ],
            explanation: '"きいろ (黄色)" means yellow. "きいろいバナナ" means "a yellow banana."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Hana, a creative Japanese teacher. Teach colors by describing colorful scenes from Japan — cherry blossoms, Mount Fuji, red temples, etc.',
      openingLine:
        'こんにちは! Today we\'re going to paint with Japanese words — let\'s learn colors! いろ (iro) means color in Japanese.',
      topicFocus: 'Japanese color vocabulary',
      teachingStyle: 'Visual, culturally connected, descriptive',
    },
  },
  {
    id: 'ja-u1-l4',
    unitId: 'ja-u1',
    order: 4,
    title: 'Food & Dining',
    description: 'Order food and talk about what you like to eat.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-food-ja/300/300',
    goals: [
      { description: 'Learn Japanese food vocabulary', xpReward: 10 },
      { description: 'Order food in Japanese', xpReward: 10 },
    ],
    activities: [
      {
        id: 'ja-u1-l4-a1',
        type: 'vocabulary',
        title: 'Japanese Food',
        description: 'Common Japanese food and drink words.',
        vocabulary: [
          { word: 'ごはん', translation: 'rice / meal', pronunciation: 'go-han', example: 'ごはんをたべます。', exampleTranslation: 'I eat rice.' },
          { word: 'みず', translation: 'water', pronunciation: 'mi-zu', example: 'みずをください。', exampleTranslation: 'Water, please.' },
          { word: 'おちゃ', translation: 'green tea', pronunciation: 'o-cha', example: 'おちゃがすきです。', exampleTranslation: 'I like green tea.' },
          { word: 'パン', translation: 'bread', pronunciation: 'pan', example: 'パンをかいました。', exampleTranslation: 'I bought bread.' },
          { word: 'さかな', translation: 'fish', pronunciation: 'sa-ka-na', example: 'さかながすきです。', exampleTranslation: 'I like fish.' },
        ],
      },
      {
        id: 'ja-u1-l4-a2',
        type: 'quiz',
        title: 'Food Quiz',
        description: 'Test your Japanese food vocabulary.',
        questions: [
          {
            question: 'What does "おちゃ" mean?',
            options: [
              { text: 'water', isCorrect: false },
              { text: 'bread', isCorrect: false },
              { text: 'green tea', isCorrect: true },
              { text: 'fish', isCorrect: false },
            ],
            explanation: '"おちゃ" means green tea. It\'s a staple of Japanese culture!',
          },
          {
            question: 'How do you say "water" in Japanese?',
            options: [
              { text: 'ごはん', isCorrect: false },
              { text: 'さかな', isCorrect: false },
              { text: 'パン', isCorrect: false },
              { text: 'みず', isCorrect: true },
            ],
            explanation: '"みず" means water. "みずをください" means "Water, please."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Hana, a food-loving Japanese teacher. Teach food vocabulary by exploring Japanese cuisine — sushi, ramen, onigiri, and more. Make the student hungry to learn!',
      openingLine:
        'こんにちは! Today we\'re exploring Japanese food — たべもの! Japan has some of the best food in the world. Ready to learn what to eat?',
      topicFocus: 'Japanese food and dining vocabulary',
      teachingStyle: 'Food-focused, culturally immersive, engaging',
    },
  },
  {
    id: 'ja-u1-l5',
    unitId: 'ja-u1',
    order: 5,
    title: 'Getting Around',
    description: 'Navigate Japanese cities and use transportation.',
    duration: 7,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-travel-ja/300/300',
    goals: [
      { description: 'Learn Japanese transport vocabulary', xpReward: 10 },
      { description: 'Ask for directions in Japanese', xpReward: 10 },
    ],
    activities: [
      {
        id: 'ja-u1-l5-a1',
        type: 'vocabulary',
        title: 'Transport & Directions',
        description: 'Key Japanese words for getting around.',
        vocabulary: [
          { word: '右 (みぎ)', translation: 'right', pronunciation: 'mi-gi', example: 'みぎにまがってください。', exampleTranslation: 'Please turn right.' },
          { word: '左 (ひだり)', translation: 'left', pronunciation: 'hi-da-ri', example: 'ひだりにいきます。', exampleTranslation: 'I go to the left.' },
          { word: 'まっすぐ', translation: 'straight ahead', pronunciation: 'mas-su-gu', example: 'まっすぐいってください。', exampleTranslation: 'Please go straight.' },
          { word: '駅 (えき)', translation: 'train station', pronunciation: 'e-ki', example: 'えきはどこですか？', exampleTranslation: 'Where is the train station?' },
          { word: 'バス', translation: 'bus', pronunciation: 'ba-su', example: 'バスにのります。', exampleTranslation: 'I take the bus.' },
        ],
      },
      {
        id: 'ja-u1-l5-a2',
        type: 'quiz',
        title: 'Directions Quiz',
        description: 'Test your Japanese navigation vocabulary.',
        questions: [
          {
            question: 'How do you say "train station" in Japanese?',
            options: [
              { text: 'バス', isCorrect: false },
              { text: 'みぎ', isCorrect: false },
              { text: '駅 (えき)', isCorrect: true },
              { text: 'まっすぐ', isCorrect: false },
            ],
            explanation: '"えき (駅)" means train station. Japan has the best trains in the world!',
          },
          {
            question: 'What does "まっすぐ" mean?',
            options: [
              { text: 'left', isCorrect: false },
              { text: 'right', isCorrect: false },
              { text: 'straight ahead', isCorrect: true },
              { text: 'bus', isCorrect: false },
            ],
            explanation: '"まっすぐ" means straight ahead. "まっすぐいってください" means "Please go straight."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Hana, a helpful Japanese teacher. Teach navigation vocabulary by simulating a trip on Tokyo\'s famous train system. Use real landmarks and stations.',
      openingLine:
        'こんにちは! Today we\'ll navigate Tokyo together! Japan\'s train system is amazing — let\'s learn how to get around!',
      topicFocus: 'Japanese transport and directions vocabulary',
      teachingStyle: 'Scenario-based, landmark-focused, practical',
    },
  },
  {
    id: 'ja-u1-l6',
    unitId: 'ja-u1',
    order: 6,
    title: 'Family & Daily Life',
    description: 'Talk about your family and everyday activities in Japanese.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-family-ja/300/300',
    goals: [
      { description: 'Learn Japanese family words', xpReward: 10 },
      { description: 'Describe daily activities in Japanese', xpReward: 10 },
    ],
    activities: [
      {
        id: 'ja-u1-l6-a1',
        type: 'vocabulary',
        title: 'Family & Daily Activities',
        description: 'Japanese words for family and everyday life.',
        vocabulary: [
          { word: 'かぞく', translation: 'family', pronunciation: 'ka-zo-ku', example: 'かぞくがすきです。', exampleTranslation: 'I love my family.' },
          { word: 'おかあさん', translation: 'mother', pronunciation: 'o-kaa-san', example: 'おかあさんはやさしい。', exampleTranslation: 'My mother is kind.' },
          { word: 'おとうさん', translation: 'father', pronunciation: 'o-too-san', example: 'おとうさんははたらきます。', exampleTranslation: 'My father works.' },
          { word: 'おきます', translation: 'to wake up', pronunciation: 'o-ki-ma-su', example: 'まいあさおきます。', exampleTranslation: 'I wake up every morning.' },
          { word: 'ねます', translation: 'to sleep / go to bed', pronunciation: 'ne-ma-su', example: 'じゅうじにねます。', exampleTranslation: 'I go to bed at 10.' },
        ],
      },
      {
        id: 'ja-u1-l6-a2',
        type: 'quiz',
        title: 'Family Quiz',
        description: 'Test your Japanese family vocabulary.',
        questions: [
          {
            question: 'How do you say "mother" in Japanese?',
            options: [
              { text: 'おとうさん', isCorrect: false },
              { text: 'かぞく', isCorrect: false },
              { text: 'おかあさん', isCorrect: true },
              { text: 'ねます', isCorrect: false },
            ],
            explanation: '"おかあさん" means mother. "おかあさんはやさしい" means "My mother is kind."',
          },
          {
            question: 'What does "ねます" mean?',
            options: [
              { text: 'to wake up', isCorrect: false },
              { text: 'to eat', isCorrect: false },
              { text: 'to go to bed', isCorrect: true },
              { text: 'to work', isCorrect: false },
            ],
            explanation: '"ねます" means to sleep or go to bed. "じゅうじにねます" = "I go to bed at 10."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Hana, a warm Japanese teacher. Teach family vocabulary by having the student describe their own family in Japanese. Connect the words to real family relationships.',
      openingLine:
        'こんにちは! Today we\'ll talk about かぞく — family! Tell me a little about your family and we\'ll learn the Japanese words together.',
      topicFocus: 'Japanese family vocabulary and daily life verbs',
      teachingStyle: 'Personal, warm, conversational',
    },
  },
];

// ─── German Lessons ───────────────────────────────────────────────────────────

export const germanUnit1Lessons: Lesson[] = [
  {
    id: 'de-u1-l1',
    unitId: 'de-u1',
    order: 1,
    title: 'Greetings & Introductions',
    description: 'Learn basic German greetings and introductions.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-greet-de/300/300',
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
        'You are Klaus, a confident and clear German teacher. You are teaching a complete beginner their first German greetings. Speak clearly, explain the formal vs informal distinction in German ("Sie" vs "du").',
      openingLine:
        'Hallo! I\'m Klaus, your German teacher. Today we\'re going to start with the basics — how to say hello and introduce yourself. Let\'s begin!',
      topicFocus: 'German greetings and formal vs informal address',
      teachingStyle: 'Clear, confident, logical explanations, encouraging',
    },
  },
  {
    id: 'de-u1-l2',
    unitId: 'de-u1',
    order: 2,
    title: 'Numbers 1–10',
    description: 'Count from one to ten in German.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-numbers-de/300/300',
    goals: [
      { description: 'Learn German numbers 1–10', xpReward: 10 },
      { description: 'Use numbers in simple German sentences', xpReward: 10 },
    ],
    activities: [
      {
        id: 'de-u1-l2-a1',
        type: 'vocabulary',
        title: 'German Numbers',
        description: 'Count to ten in German.',
        vocabulary: [
          { word: 'eins', translation: 'one', pronunciation: 'ayns', example: 'Ich habe eins.', exampleTranslation: 'I have one.' },
          { word: 'zwei', translation: 'two', pronunciation: 'tsvay', example: 'Zwei Biere, bitte.', exampleTranslation: 'Two beers, please.' },
          { word: 'drei', translation: 'three', pronunciation: 'dry', example: 'Drei Kinder.', exampleTranslation: 'Three children.' },
          { word: 'vier', translation: 'four', pronunciation: 'feer', example: 'Vier Stunden.', exampleTranslation: 'Four hours.' },
          { word: 'fünf', translation: 'five', pronunciation: 'fewnf', example: 'Fünf Minuten.', exampleTranslation: 'Five minutes.' },
        ],
      },
      {
        id: 'de-u1-l2-a2',
        type: 'quiz',
        title: 'Numbers Quiz',
        description: 'Test your German number knowledge.',
        questions: [
          {
            question: 'How do you say "two" in German?',
            options: [
              { text: 'eins', isCorrect: false },
              { text: 'drei', isCorrect: false },
              { text: 'zwei', isCorrect: true },
              { text: 'vier', isCorrect: false },
            ],
            explanation: '"Zwei" means two. You\'ll often hear "zwei" when ordering at a German restaurant.',
          },
          {
            question: 'What number is "fünf"?',
            options: [
              { text: '3', isCorrect: false },
              { text: '4', isCorrect: false },
              { text: '5', isCorrect: true },
              { text: '6', isCorrect: false },
            ],
            explanation: '"Fünf" means five. The ü sound is unique to German — it\'s like saying "ee" with rounded lips.',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Klaus, an enthusiastic German teacher. Teach numbers by using practical German scenarios — ordering at a bakery, counting train platforms, etc.',
      openingLine:
        'Hallo! Today we\'re learning numbers in German — Zahlen! Let\'s count to five first, then ten. Ready?',
      topicFocus: 'German numbers 1–10',
      teachingStyle: 'Practical, scenario-based, clear pronunciation',
    },
  },
  {
    id: 'de-u1-l3',
    unitId: 'de-u1',
    order: 3,
    title: 'Colors',
    description: 'Describe colors and objects in German.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-colors-de/300/300',
    goals: [
      { description: 'Learn 5 German color words', xpReward: 10 },
      { description: 'Describe objects with colors', xpReward: 10 },
    ],
    activities: [
      {
        id: 'de-u1-l3-a1',
        type: 'vocabulary',
        title: 'German Colors',
        description: 'Common color words in German.',
        vocabulary: [
          { word: 'rot', translation: 'red', pronunciation: 'roht', example: 'Das Auto ist rot.', exampleTranslation: 'The car is red.' },
          { word: 'blau', translation: 'blue', pronunciation: 'blow', example: 'Der Himmel ist blau.', exampleTranslation: 'The sky is blue.' },
          { word: 'grün', translation: 'green', pronunciation: 'grewn', example: 'Das Gras ist grün.', exampleTranslation: 'The grass is green.' },
          { word: 'gelb', translation: 'yellow', pronunciation: 'gelp', example: 'Die Sonne ist gelb.', exampleTranslation: 'The sun is yellow.' },
          { word: 'weiß', translation: 'white', pronunciation: 'vice', example: 'Der Schnee ist weiß.', exampleTranslation: 'The snow is white.' },
        ],
      },
      {
        id: 'de-u1-l3-a2',
        type: 'quiz',
        title: 'Colors Quiz',
        description: 'Test your German color vocabulary.',
        questions: [
          {
            question: 'How do you say "blue" in German?',
            options: [
              { text: 'rot', isCorrect: false },
              { text: 'blau', isCorrect: true },
              { text: 'grün', isCorrect: false },
              { text: 'gelb', isCorrect: false },
            ],
            explanation: '"Blau" means blue. "Der Himmel ist blau" means "The sky is blue."',
          },
          {
            question: 'What does "grün" mean?',
            options: [
              { text: 'yellow', isCorrect: false },
              { text: 'white', isCorrect: false },
              { text: 'green', isCorrect: true },
              { text: 'red', isCorrect: false },
            ],
            explanation: '"Grün" means green. Germany\'s famous forests are called the "grüne Wälder."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Klaus, a methodical German teacher. Teach colors by describing famous German landscapes, flags, and objects. Emphasize the unique German vowel sounds.',
      openingLine:
        'Hallo! Today we\'re learning Farben — colors in German! Let\'s describe the world around us in German.',
      topicFocus: 'German color vocabulary',
      teachingStyle: 'Descriptive, methodical, pronunciation-focused',
    },
  },
  {
    id: 'de-u1-l4',
    unitId: 'de-u1',
    order: 4,
    title: 'At the Restaurant',
    description: 'Order food and drinks at a German restaurant.',
    duration: 6,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-restaurant-de/300/300',
    goals: [
      { description: 'Learn German restaurant vocabulary', xpReward: 10 },
      { description: 'Order a meal in German', xpReward: 10 },
    ],
    activities: [
      {
        id: 'de-u1-l4-a1',
        type: 'vocabulary',
        title: 'Restaurant Words',
        description: 'Essential German for dining out.',
        vocabulary: [
          { word: 'die Speisekarte', translation: 'the menu', pronunciation: 'dee SHPY-zeh-kar-teh', example: 'Die Speisekarte, bitte.', exampleTranslation: 'The menu, please.' },
          { word: 'das Wasser', translation: 'the water', pronunciation: 'das VAS-ser', example: 'Ein Wasser, bitte.', exampleTranslation: 'One water, please.' },
          { word: 'bestellen', translation: 'to order', pronunciation: 'beh-SHTEL-len', example: 'Ich möchte bestellen.', exampleTranslation: 'I would like to order.' },
          { word: 'die Rechnung', translation: 'the bill', pronunciation: 'dee REKH-nung', example: 'Die Rechnung, bitte.', exampleTranslation: 'The bill, please.' },
          { word: 'lecker', translation: 'delicious', pronunciation: 'LEK-ker', example: 'Das ist sehr lecker!', exampleTranslation: 'That is very delicious!' },
        ],
      },
      {
        id: 'de-u1-l4-a2',
        type: 'quiz',
        title: 'Restaurant Quiz',
        description: 'Test your German restaurant vocabulary.',
        questions: [
          {
            question: 'How do you say "the bill" in German?',
            options: [
              { text: 'das Wasser', isCorrect: false },
              { text: 'bestellen', isCorrect: false },
              { text: 'die Rechnung', isCorrect: true },
              { text: 'die Speisekarte', isCorrect: false },
            ],
            explanation: '"Die Rechnung" means the bill. "Die Rechnung, bitte" is how you ask for it.',
          },
          {
            question: 'What does "lecker" mean?',
            options: [
              { text: 'expensive', isCorrect: false },
              { text: 'delicious', isCorrect: true },
              { text: 'the menu', isCorrect: false },
              { text: 'to drink', isCorrect: false },
            ],
            explanation: '"Lecker" means delicious or tasty. It\'s one of the most useful food words in German!',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Klaus, an enthusiastic German teacher. Teach restaurant vocabulary with roleplay — simulate dining at a German Gaststätte. Include cultural notes about German food culture.',
      openingLine:
        'Hallo! Imagine we\'re sitting at a cozy German restaurant — eine Gaststätte. Let\'s learn how to order and enjoy the meal!',
      topicFocus: 'German restaurant vocabulary and food culture',
      teachingStyle: 'Roleplay-based, culturally rich, practical',
    },
  },
  {
    id: 'de-u1-l5',
    unitId: 'de-u1',
    order: 5,
    title: 'Travel & Directions',
    description: 'Navigate German cities and ask for directions.',
    duration: 7,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-travel-de/300/300',
    goals: [
      { description: 'Learn German direction vocabulary', xpReward: 10 },
      { description: 'Ask for directions in German', xpReward: 10 },
    ],
    activities: [
      {
        id: 'de-u1-l5-a1',
        type: 'vocabulary',
        title: 'Directions & Places',
        description: 'Key German words for getting around.',
        vocabulary: [
          { word: 'links', translation: 'left', pronunciation: 'links', example: 'Biegen Sie links ab.', exampleTranslation: 'Turn left.' },
          { word: 'rechts', translation: 'right', pronunciation: 'rekhts', example: 'Es ist rechts.', exampleTranslation: 'It is on the right.' },
          { word: 'geradeaus', translation: 'straight ahead', pronunciation: 'geh-rah-deh-OWS', example: 'Gehen Sie geradeaus.', exampleTranslation: 'Go straight ahead.' },
          { word: 'der Bahnhof', translation: 'the train station', pronunciation: 'dair BAHN-hohf', example: 'Wo ist der Bahnhof?', exampleTranslation: 'Where is the train station?' },
          { word: 'der Bus', translation: 'the bus', pronunciation: 'dair boos', example: 'Der Bus kommt bald.', exampleTranslation: 'The bus comes soon.' },
        ],
      },
      {
        id: 'de-u1-l5-a2',
        type: 'quiz',
        title: 'Directions Quiz',
        description: 'Test your German navigation vocabulary.',
        questions: [
          {
            question: 'How do you say "straight ahead" in German?',
            options: [
              { text: 'links', isCorrect: false },
              { text: 'rechts', isCorrect: false },
              { text: 'geradeaus', isCorrect: true },
              { text: 'der Bahnhof', isCorrect: false },
            ],
            explanation: '"Geradeaus" means straight ahead. "Gehen Sie geradeaus" = "Go straight ahead."',
          },
          {
            question: 'What does "der Bahnhof" mean?',
            options: [
              { text: 'the bus', isCorrect: false },
              { text: 'the airport', isCorrect: false },
              { text: 'the hotel', isCorrect: false },
              { text: 'the train station', isCorrect: true },
            ],
            explanation: '"Der Bahnhof" means train station. German trains are famous for their punctuality!',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Klaus, a practical German teacher. Teach directions by simulating a walk through Berlin. Use landmarks and real German city references.',
      openingLine:
        'Hallo! Today we\'re navigating Berlin! Let\'s learn how to ask for and understand directions in German — an essential travel skill.',
      topicFocus: 'German directions and transport vocabulary',
      teachingStyle: 'Landmark-based, practical, city-walk style',
    },
  },
  {
    id: 'de-u1-l6',
    unitId: 'de-u1',
    order: 6,
    title: 'Family & Friends',
    description: 'Talk about family members and relationships in German.',
    duration: 5,
    difficulty: 'beginner',
    xpReward: 20,
    image: 'https://picsum.photos/seed/lingua-family-de/300/300',
    goals: [
      { description: 'Learn German family vocabulary', xpReward: 10 },
      { description: 'Describe your family in German', xpReward: 10 },
    ],
    activities: [
      {
        id: 'de-u1-l6-a1',
        type: 'vocabulary',
        title: 'Family Members',
        description: 'Essential German family vocabulary.',
        vocabulary: [
          { word: 'die Familie', translation: 'the family', pronunciation: 'dee fah-MEE-lyeh', example: 'Meine Familie ist groß.', exampleTranslation: 'My family is big.' },
          { word: 'die Mutter', translation: 'the mother', pronunciation: 'dee MOO-ter', example: 'Meine Mutter kocht gut.', exampleTranslation: 'My mother cooks well.' },
          { word: 'der Vater', translation: 'the father', pronunciation: 'dair FAH-ter', example: 'Mein Vater arbeitet viel.', exampleTranslation: 'My father works a lot.' },
          { word: 'der Bruder', translation: 'the brother', pronunciation: 'dair BROO-der', example: 'Ich habe einen Bruder.', exampleTranslation: 'I have one brother.' },
          { word: 'die Schwester', translation: 'the sister', pronunciation: 'dee SHVES-ter', example: 'Meine Schwester ist lustig.', exampleTranslation: 'My sister is funny.' },
        ],
      },
      {
        id: 'de-u1-l6-a2',
        type: 'quiz',
        title: 'Family Quiz',
        description: 'Test your German family vocabulary.',
        questions: [
          {
            question: 'How do you say "the brother" in German?',
            options: [
              { text: 'die Schwester', isCorrect: false },
              { text: 'der Vater', isCorrect: false },
              { text: 'der Bruder', isCorrect: true },
              { text: 'die Mutter', isCorrect: false },
            ],
            explanation: '"Der Bruder" means brother. "Die Schwester" means sister.',
          },
          {
            question: 'What does "die Mutter" mean?',
            options: [
              { text: 'the sister', isCorrect: false },
              { text: 'the family', isCorrect: false },
              { text: 'the father', isCorrect: false },
              { text: 'the mother', isCorrect: true },
            ],
            explanation: '"Die Mutter" means mother. Informally, Germans say "Mama."',
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        'You are Klaus, a warm German teacher. Teach family vocabulary by having the student describe their own family in German. Keep the tone encouraging and personal.',
      openingLine:
        'Hallo! Today we\'ll talk about die Familie — the family. Let\'s learn how to describe the people closest to you in German!',
      topicFocus: 'German family vocabulary',
      teachingStyle: 'Personal, warm, conversational',
    },
  },
];
