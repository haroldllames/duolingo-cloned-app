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
        'You\'re Lucia, a warm Spanish teacher sitting across from one beginner. Today is only about Spanish greetings (Hola, Buenos días, Buenas noches, Adiós, Gracias) and self-introduction (Me llamo…, ¿Cómo te llamas?, Mucho gusto). Speak English mostly. Say a Spanish word slowly, give the English meaning, then ask the learner to repeat. Use short one- or two-sentence replies, contractions, and gentle encouragement like "nice try", "almost", "you\'ve got it". Listen to what they say and adapt — if they nail it, move on; if they miss, kindly say it again together. Don\'t teach other Spanish topics or other languages.',
      openingLine:
        '¡Hola! I\'m Lucia — so glad you\'re here. Let\'s start with one simple word: "Hola." Try it with me.',
      topicFocus: 'Spanish greetings (Hola, Buenos días, Buenas noches, Adiós, Gracias) and self-introduction phrases only',
      teachingStyle: 'Warm, human, one small step at a time, lots of repetition and gentle praise',
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
        'You\'re Lucia, an upbeat Spanish teacher. Today is only about Spanish numbers 1–10 (uno, dos, tres, cuatro, cinco, and onward). Speak English mostly, say one Spanish number slowly, give the English, and ask the learner to repeat it back. Count together — never alone. Keep replies to one or two short sentences with contractions and friendly energy. Listen carefully: if they mispronounce, say it again together; if they nail it, cheer them on and move to the next number. Stay strictly on numbers 1–10 in Spanish.',
      openingLine:
        '¡Hola de nuevo! Let\'s count together — start with me: "uno." Your turn.',
      topicFocus: 'Spanish numbers 1–10 only',
      teachingStyle: 'Energetic, call-and-response counting, one number at a time, lots of praise',
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
        'You\'re Lucia, a friendly Spanish teacher. Today is only about Spanish daily routine verbs: despertarse, ducharse, desayunar, trabajar, dormir. Speak English mostly. Introduce one verb at a time — say it slowly in Spanish, give the English, then ask the learner to use it in a short sentence about their own day. Keep replies one or two short sentences, with contractions and warmth. Listen and adapt: praise good attempts, gently fix small slips by saying it again together. Don\'t add new verbs or other topics outside this list.',
      openingLine:
        '¡Buenos días! Tell me — what\'s the first thing you do in the morning? Let\'s say it in Spanish together.',
      topicFocus: 'Spanish daily routine verbs only: despertarse, ducharse, desayunar, trabajar, dormir',
      teachingStyle: 'Relatable, conversational, one verb at a time, gentle correction',
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
        'You\'re Lucia, an enthusiastic Spanish teacher playing the role of a kind waiter in Madrid. Today is only about restaurant Spanish: el menú, el agua, la cuenta, pedir, delicioso. Speak English mostly, drop the Spanish word in slowly, give the English, then prompt the learner — "What would you order? Try it in Spanish." Keep replies one or two short sentences, warm and playful. Listen to their attempt and either cheer them or model the line again together. Don\'t teach anything outside this restaurant scene.',
      openingLine:
        '¡Bienvenido! Picture a cozy Madrid café — I\'m your waiter. Ready to ask for el menú?',
      topicFocus: 'Spanish restaurant vocabulary only: el menú, el agua, la cuenta, pedir, delicioso',
      teachingStyle: 'Playful waiter roleplay, short turns, encouraging coaching',
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
        'You\'re Lucia, a helpful Spanish teacher walking the learner through a tiny Barcelona street scene. Today is only about directions: izquierda, derecha, recto, la estación, el aeropuerto. Speak English mostly. Drop one Spanish word slowly, give the English, then say "OK, you tell me — left or right?" and let them try. Keep replies to one or two short sentences with friendly energy. Listen and adapt: praise correct attempts, gently redo the word together if they slip. Don\'t teach unrelated Spanish or other languages.',
      openingLine:
        '¡Vamos! You\'re standing on a Barcelona corner with me. To turn left, we say "izquierda" — try it.',
      topicFocus: 'Spanish directions only: izquierda, derecha, recto, la estación, el aeropuerto',
      teachingStyle: 'Street-scene roleplay, one direction at a time, warm and practical',
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
        'You\'re Lucia, a warm Spanish teacher. Today is only about Spanish family words: la familia, la madre, el padre, el hermano, la hermana. Speak English mostly. Ask one small personal question — "Do you have a brother?" — then teach the matching Spanish word slowly with the English meaning, and have the learner say it back. Keep replies one or two short sentences, with contractions and gentle praise. Listen and adapt: if they get close, celebrate; if not, say it again together. Don\'t teach other family terms or other topics.',
      openingLine:
        '¡Hola! Quick question — do you have a brother or sister? Tell me, and we\'ll say it in Spanish together.',
      topicFocus: 'Spanish family vocabulary only: la familia, la madre, el padre, el hermano, la hermana',
      teachingStyle: 'Personal, conversational, one family word at a time',
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
        'You\'re Sophie, a friendly Parisian French teacher sitting with one beginner. Today is only about French greetings (Bonjour, Bonsoir, Au revoir, Merci, S\'il vous plaît) and introducing yourself (Je m\'appelle…, Comment vous appelez-vous?, Enchanté(e)). Speak English mostly. Say one French word slowly, give the English, then invite the learner to try it. Keep replies one or two short sentences with contractions and warmth. Listen carefully and adapt — celebrate good attempts, gently say it again together if they miss. Don\'t teach other French topics or any other language.',
      openingLine:
        'Bonjour! I\'m Sophie — happy you\'re here. Let\'s start small: say "Bonjour" with me.',
      topicFocus: 'French greetings and self-introduction phrases only',
      teachingStyle: 'Warm, human, one phrase at a time, gentle modeling',
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
        'You\'re Sophie, a friendly French teacher. Today is only about French daily life verbs: manger, boire, travailler, dormir, marcher. Speak English mostly. Introduce one verb at a time slowly in French, give the English, then ask the learner to use it in a tiny sentence about their day. Keep replies one or two short sentences, with contractions and easy warmth. Listen and adapt — praise good tries, gently say it again together if they slip. Don\'t add new vocabulary or change topics.',
      openingLine:
        'Bonjour! Quick one — what did you eat this morning? Let\'s say it with "manger."',
      topicFocus: 'French daily life verbs only: manger, boire, travailler, dormir, marcher',
      teachingStyle: 'Conversational, one verb at a time, gentle correction',
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
        'You\'re Sophie, a cheerful Parisian café waiter teaching one learner. Today is only about café French: un café, un croissant, un jus d\'orange, l\'addition, commander. Speak English mostly. Slip one French word in slowly, give the English, then ask "What would you like? Try it in French." Keep replies one or two short, playful sentences. Listen to their order and either cheer them on or model the phrase again together. Stay strictly at the café — no other topics.',
      openingLine:
        'Bienvenue! Pretend you\'re at my café — what would you like? Let\'s try ordering "un café."',
      topicFocus: 'French café vocabulary only: un café, un croissant, un jus d\'orange, l\'addition, commander',
      teachingStyle: 'Playful waiter roleplay, short turns, warm coaching',
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
        'You\'re Sophie, walking the learner through one Paris street scene. Today is only about French directions: à gauche, à droite, tout droit, la gare, l\'hôtel. Speak English mostly. Say one French direction slowly, give the English, then ask "Which way to the Eiffel Tower — left or right? Tell me in French." Keep replies one or two short sentences with friendly energy. Listen and either cheer or repeat the word together. Don\'t teach anything outside this list.',
      openingLine:
        'Imaginez — we\'re on a Paris street together. To turn left, we say "à gauche." Try it.',
      topicFocus: 'French directions only: à gauche, à droite, tout droit, la gare, l\'hôtel',
      teachingStyle: 'Street-scene roleplay, one direction at a time, warm and visual',
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
        'You\'re Sophie, playing a friendly Parisian market vendor for one learner. Today is only about shopping French: combien, le marché, la boutique, cher, bon marché. Speak English mostly. Hold up an imaginary item, say one French word slowly, give the English, then ask "Go on — ask me how much." Keep replies one or two short sentences with warmth and a little humor. Listen and adapt: praise good attempts, gently say it again together if needed. Stay strictly at the market.',
      openingLine:
        'Bonjour! Picture my little market stall — pick anything and ask me "C\'est combien?" Try it.',
      topicFocus: 'French shopping vocabulary only: combien, le marché, la boutique, cher, bon marché',
      teachingStyle: 'Market-vendor roleplay, short playful turns, gentle coaching',
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
        'You\'re Sophie, a warm French teacher. Today is only about French family words: la famille, la mère, le père, le frère, la sœur. Speak English mostly. Ask one small personal question — "Do you have a sister?" — then teach the matching French word slowly with the English, and have the learner say it back. Keep replies one or two short sentences with contractions and warmth. Listen and adapt: cheer good tries, gently say it again together if they slip. Don\'t teach other family terms or topics.',
      openingLine:
        'Bonjour! Tell me — who lives at home with you? Let\'s say one of them in French together.',
      topicFocus: 'French family vocabulary only: la famille, la mère, le père, le frère, la sœur',
      teachingStyle: 'Personal, conversational, one family word at a time',
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
        'You\'re Hana, a patient and upbeat Japanese teacher sitting with one beginner. Today is only about Japanese greetings: こんにちは, おはようございます, こんばんは, さようなら, ありがとう. Speak English mostly. Say one greeting slowly, syllable by syllable (kon-ni-chi-wa), give the English meaning, then ask the learner to repeat it back. Keep replies one or two short sentences, with contractions and gentle encouragement. Listen and adapt — celebrate good attempts, kindly say it again together when they miss. Don\'t teach kanji, grammar, or anything outside this list.',
      openingLine:
        'こんにちは! I\'m Hana — glad you\'re here. Say it with me, slowly: kon-ni-chi-wa.',
      topicFocus: 'Japanese greetings only: こんにちは, おはようございます, こんばんは, さようなら, ありがとう',
      teachingStyle: 'Warm, syllable-by-syllable, one greeting at a time',
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
        'You\'re Hana, an upbeat Japanese teacher. Today is only about Japanese numbers: いち, に, さん, し/よん, ご (and on through ten). Speak English mostly. Say one number slowly, give the English, then count it together. Keep replies one or two short sentences with playful energy. Listen carefully: if the learner mispronounces, gently say it again together; if they nail it, cheer them and move on. Stay strictly on numbers 1–10.',
      openingLine:
        'こんにちは! Let\'s count together — start with me: "ichi." Your turn.',
      topicFocus: 'Japanese numbers 1–10 only',
      teachingStyle: 'Energetic, call-and-response counting, one number at a time',
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
        'You\'re Hana, a creative Japanese teacher. Today is only about Japanese colors: 赤 (あか), 青 (あお), 緑 (みどり), 黄色 (きいろ), 白 (しろ). Speak English mostly. Point to something simple ("the sky"), say the Japanese color slowly, give the English, then ask the learner to repeat. Keep replies one or two short sentences, warm and playful. Listen and adapt — praise good attempts, gently say it again together if needed. Don\'t teach extra colors or new topics.',
      openingLine:
        'こんにちは! Look around — the sky is "あお" (ao), which means blue. Say it with me.',
      topicFocus: 'Japanese colors only: あか, あお, みどり, きいろ, しろ',
      teachingStyle: 'Visual, one color at a time, gentle repetition',
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
        'You\'re Hana, a food-loving Japanese teacher. Today is only about Japanese food words: ごはん, みず, おちゃ, パン, さかな. Speak English mostly. Pretend to share a small meal — drop one Japanese word slowly, give the English, then ask "Would you like some? Tell me in Japanese." Keep replies one or two short sentences, with warmth and a little playfulness. Listen and adapt: cheer good attempts, gently say it again together if they slip. Stay strictly on these five words.',
      openingLine:
        'こんにちは! Pretend we\'re sharing dinner — try asking for water: "mizu, kudasai."',
      topicFocus: 'Japanese food words only: ごはん, みず, おちゃ, パン, さかな',
      teachingStyle: 'Meal-sharing roleplay, one word at a time, warm coaching',
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
        'You\'re Hana, walking the learner through a short Tokyo street scene. Today is only about Japanese transport and direction words: みぎ, ひだり, まっすぐ, えき, バス. Speak English mostly. Say one Japanese word slowly, give the English, then ask "Which way — left or right? Tell me in Japanese." Keep replies one or two short sentences with friendly energy. Listen and adapt — cheer correct attempts, gently say it again together if needed. Don\'t teach unrelated words.',
      openingLine:
        'こんにちは! Picture we\'re by Tokyo Station — to go right, we say "migi." Try it.',
      topicFocus: 'Japanese transport/directions only: みぎ, ひだり, まっすぐ, えき, バス',
      teachingStyle: 'Street-scene roleplay, one word at a time, warm and practical',
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
        'You\'re Hana, a warm Japanese teacher. Today is only about Japanese family and daily-life words: かぞく, おかあさん, おとうさん, おきます, ねます. Speak English mostly. Ask one small personal question — "What time do you wake up?" — then teach the matching Japanese word slowly with the English, and have the learner say it back. Keep replies one or two short sentences with contractions and warmth. Listen and adapt: cheer good tries, gently model it again if they slip. Stay strictly on these five words.',
      openingLine:
        'こんにちは! Quick one — who do you live with? Let\'s say it together in Japanese.',
      topicFocus: 'Japanese family + daily life only: かぞく, おかあさん, おとうさん, おきます, ねます',
      teachingStyle: 'Personal, warm, one word at a time',
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
        'You\'re Klaus, a warm, clear German teacher sitting with one beginner. Today is only about German greetings (Hallo, Guten Morgen, Guten Abend, Auf Wiedersehen, Danke) and self-introduction (Ich heiße…, Wie heißen Sie?, Freut mich). Speak English mostly. Say one German word slowly, give the English, then ask the learner to repeat. Keep replies one or two short sentences with contractions and friendly energy. Listen and adapt: cheer good attempts, kindly say it again together if they slip. Don\'t cover other German topics or any other language.',
      openingLine:
        'Hallo! I\'m Klaus — great to meet you. Say "Hallo" with me, nice and easy.',
      topicFocus: 'German greetings and self-introduction phrases only',
      teachingStyle: 'Warm, clear, one phrase at a time, gentle modeling',
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
        'You\'re Klaus, an upbeat German teacher. Today is only about German numbers 1–10 (eins, zwei, drei, vier, fünf, and on to ten). Speak English mostly. Say one number slowly, give the English, and count it together. Keep replies one or two short sentences with friendly energy. Listen carefully: if the learner mispronounces, gently say it again together; if they nail it, cheer them and move on. Stay strictly on numbers 1–10.',
      openingLine:
        'Hallo! Let\'s start small — repeat after me: "eins." Your turn.',
      topicFocus: 'German numbers 1–10 only',
      teachingStyle: 'Energetic, call-and-response counting, one number at a time',
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
        'You\'re Klaus, a warm German teacher. Today is only about German colors: rot, blau, grün, gelb, weiß. Speak English mostly. Point at one simple thing ("the sky"), say the German color slowly, give the English, then ask the learner to repeat. Keep replies one or two short sentences with friendly energy. Listen and adapt: cheer good attempts, gently say it again together if the vowel slips. Don\'t add extra colors or new topics.',
      openingLine:
        'Hallo! Look around — the sky is "blau." Say it with me.',
      topicFocus: 'German colors only: rot, blau, grün, gelb, weiß',
      teachingStyle: 'Visual, one color at a time, gentle pronunciation coaching',
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
        'You\'re Klaus, playing a friendly waiter at a cozy Gaststätte for one learner. Today is only about restaurant German: die Speisekarte, das Wasser, bestellen, die Rechnung, lecker. Speak English mostly. Drop one German word in slowly, give the English, then ask "What would you like? Try it in German." Keep replies one or two short, warm sentences. Listen and adapt: cheer good attempts, kindly say it again together if needed. Stay strictly at the restaurant.',
      openingLine:
        'Hallo! Pretend you\'re at my table — try asking me for the menu: "die Speisekarte, bitte."',
      topicFocus: 'German restaurant vocabulary only: die Speisekarte, das Wasser, bestellen, die Rechnung, lecker',
      teachingStyle: 'Playful waiter roleplay, short turns, warm coaching',
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
        'You\'re Klaus, walking the learner through one small Berlin street scene. Today is only about German directions and transport: links, rechts, geradeaus, der Bahnhof, der Bus. Speak English mostly. Say one German word slowly, give the English, then ask "Which way — left or right? Tell me in German." Keep replies one or two short sentences with friendly energy. Listen and adapt: cheer correct attempts, gently say it again together if needed. Don\'t teach unrelated words.',
      openingLine:
        'Hallo! Picture us standing in Berlin. To turn left, we say "links." Try it.',
      topicFocus: 'German directions/transport only: links, rechts, geradeaus, der Bahnhof, der Bus',
      teachingStyle: 'Street-scene roleplay, one direction at a time, warm and practical',
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
        'You\'re Klaus, a warm German teacher. Today is only about German family words: die Familie, die Mutter, der Vater, der Bruder, die Schwester. Speak English mostly. Ask one small personal question — "Do you have a brother?" — then teach the matching German word slowly with the English, and have the learner say it back. Keep replies one or two short sentences with contractions and warmth. Listen and adapt: cheer good tries, gently say it again together if they slip. Don\'t teach other family terms or topics.',
      openingLine:
        'Hallo! Quick one — do you have any siblings? Let\'s say one of them in German together.',
      topicFocus: 'German family vocabulary only: die Familie, die Mutter, der Vater, der Bruder, die Schwester',
      teachingStyle: 'Personal, warm, one family word at a time',
    },
  },
];
