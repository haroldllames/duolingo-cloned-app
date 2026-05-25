import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants/images';
import { getLanguageByCode } from '@/data/languages';
import { getUnitsByLanguage } from '@/data/units';
import { useLessonStore } from '@/store/useLessonStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import type { Lesson } from '@/types/learning';

type LessonStatus = 'completed' | 'in_progress' | 'locked';
type ActiveTab = 'lessons' | 'practice';

export default function LearnScreen() {
  const { selectedLanguage } = useLanguageStore();
  const { completedLessons, currentLessonIds } = useLessonStore();
  const [activeTab, setActiveTab] = useState<ActiveTab>('lessons');

  const languageCode = selectedLanguage ?? 'es';
  const unitList = getUnitsByLanguage(languageCode);
  const unit = unitList[0];
  const language = getLanguageByCode(languageCode);
  const currentLessonId = currentLessonIds[languageCode] ?? null;

  if (!unit) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View className="flex-1 items-center justify-center px-6">
          <Text className="heading-3 text-text-primary text-center mb-2">No lessons yet</Text>
          <Text className="body-md text-text-secondary text-center">
            Select a language to start learning.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const completedCount = unit.lessons.filter((l) => completedLessons.includes(l.id)).length;
  const totalCount = unit.lessons.length;

  function getLessonStatus(lessonId: string): LessonStatus {
    if (completedLessons.includes(lessonId)) return 'completed';
    if (currentLessonId === lessonId) return 'in_progress';
    return 'locked';
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ─── Unit Banner ─────────────────────────────────── */}
        <View style={styles.bannerCard}>
          {/* Illustration scene */}
          <View style={styles.illustrationArea}>
            <Image source={images.palace} style={styles.sceneBg} resizeMode="cover" />
            {/* Soft color overlay */}
            <View style={styles.sceneOverlay} />
            {/* Mascot */}
            <Image
              source={images.mascotWelcome}
              style={styles.mascot}
              resizeMode="contain"
            />
            {/* Bookmark button */}
            <TouchableOpacity style={styles.bookmarkBtn} activeOpacity={0.7}>
              <Ionicons name="bookmark-outline" size={18} color="#6C4EF5" />
            </TouchableOpacity>
          </View>

          {/* Unit info */}
          <View style={styles.unitInfo}>
            <Text style={styles.unitTitle}>{unit.title}</Text>
            <Text style={styles.unitSubtitle}>
              Unit {unit.order} · {completedCount} / {totalCount} lessons
            </Text>
          </View>
        </View>

        {/* ─── Tab Bar ─────────────────────────────────────── */}
        <View style={styles.tabBar}>
          {(['lessons', 'practice'] as ActiveTab[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.tabLabel,
                  activeTab === tab ? styles.tabLabelActive : styles.tabLabelInactive,
                ]}
              >
                {tab === 'lessons' ? 'Lessons' : 'Practice'}
              </Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* ─── Tab Content ─────────────────────────────────── */}
        {activeTab === 'lessons' ? (
          <View style={styles.lessonList}>
            {unit.lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                status={getLessonStatus(lesson.id)}
              />
            ))}
          </View>
        ) : (
          <View style={styles.practiceEmpty}>
            <Ionicons name="barbell-outline" size={48} color="#E5E7EB" />
            <Text style={styles.practiceEmptyText}>Practice coming soon</Text>
            <Text style={styles.practiceEmptySubtext}>
              Complete lessons first to unlock practice mode.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Lesson Item ─────────────────────────────────────────────────────────────

function LessonItem({
  lesson,
  status,
}: {
  lesson: Lesson;
  status: LessonStatus;
}) {
  const isCompleted = status === 'completed';
  const isInProgress = status === 'in_progress';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={isInProgress ? styles.lessonCardActive : styles.lessonRow}
      onPress={() => router.push(`/lesson/${lesson.id}`)}
    >
      {/* Left: text content */}
      <View style={styles.lessonLeft}>
        <Text style={styles.lessonOrderLabel}>Lesson {lesson.order}</Text>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        {isInProgress && <Text style={styles.inProgressBadge}>In progress</Text>}
        <Text style={styles.lessonMeta}>
          {lesson.activities.length} activities · {lesson.duration} min
        </Text>
      </View>

      {/* Right: status indicator */}
      <View style={styles.lessonRight}>
        {isCompleted && (
          <View style={styles.checkCircle}>
            <Ionicons name="checkmark" size={18} color="#fff" />
          </View>
        )}

        {isInProgress && (
          lesson.image ? (
            <Image
              source={{ uri: lesson.image }}
              style={styles.lessonThumbnail}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.lessonThumbnailPlaceholder}>
              <Ionicons name="book-outline" size={22} color="#fff" />
            </View>
          )
        )}

        {status === 'locked' && (
          <View style={styles.lockCircle}>
            <Ionicons name="lock-closed" size={15} color="#9CA3AF" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 32,
  },

  // Banner card
  bannerCard: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  illustrationArea: {
    height: 160,
    backgroundColor: '#EEF0FF',
    position: 'relative',
    overflow: 'hidden',
  },
  sceneBg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  sceneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(238, 240, 255, 0.45)',
  },
  mascot: {
    position: 'absolute',
    bottom: -8,
    alignSelf: 'center',
    width: 120,
    height: 120,
    left: '50%',
    marginLeft: -60,
  },
  bookmarkBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitInfo: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  unitTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#001328',
    lineHeight: 24,
  },
  unitSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },

  // Tab bar
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
    position: 'relative',
  },
  tabLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  tabLabelActive: {
    color: '#6C4EF5',
  },
  tabLabelInactive: {
    color: '#9CA3AF',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#6C4EF5',
    borderRadius: 1,
  },

  // Lesson list
  lessonList: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  // Plain lesson row (completed / locked)
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },

  // Highlighted in-progress card
  lessonCardActive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginVertical: 6,
    backgroundColor: '#EEF0FF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C5BBFA',
  },

  lessonLeft: {
    flex: 1,
    marginRight: 12,
  },
  lessonOrderLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  lessonTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#001328',
    lineHeight: 22,
  },
  inProgressBadge: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#6C4EF5',
    marginTop: 2,
  },
  lessonMeta: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 4,
  },

  lessonRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#21C16B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lockCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lessonThumbnail: {
    width: 58,
    height: 58,
    borderRadius: 12,
  },

  lessonThumbnailPlaceholder: {
    width: 58,
    height: 58,
    borderRadius: 12,
    backgroundColor: '#6C4EF5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Practice empty state
  practiceEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  practiceEmptyText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#6B7280',
    marginTop: 16,
  },
  practiceEmptySubtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 20,
  },
});
