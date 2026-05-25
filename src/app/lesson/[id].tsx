import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants/images';
import { getLanguageByCode } from '@/data/languages';
import { getLessonById, getUnitById } from '@/data/units';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [micActive, setMicActive] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);

  const lesson = id ? getLessonById(id) : undefined;
  const unit = lesson ? getUnitById(lesson.unitId) : undefined;
  const language = unit ? getLanguageByCode(unit.languageCode) : undefined;

  if (!lesson || !unit || !language) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centered}>
          <Text style={styles.notFoundText}>Lesson not found</Text>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
            <Text style={styles.goBackText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerBack} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={24} color="#001328" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineLabel}>Online</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <View style={styles.lessonBadge}>
            <Ionicons name="videocam-outline" size={15} color="#374151" />
            <Text style={styles.lessonBadgeText}>{lesson.order}</Text>
          </View>
          <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={22} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ─── Teacher Area ─────────────────────────────────────────────── */}
      <View style={styles.teacherArea}>
        {/* Background tint */}
        <View style={StyleSheet.absoluteFill} />

        {/* Mascot */}
        <Image source={images.mascotWelcome} style={styles.mascot} resizeMode="contain" />

        {/* Student preview */}
        <View style={styles.studentPreview}>
          <Ionicons name="person" size={30} color="#fff" />
        </View>

        {/* Speech bubble */}
        <View style={styles.speechBubble}>
          <Text style={styles.speechText} numberOfLines={2}>
            {lesson.aiTeacherPrompt.openingLine}
          </Text>
          <TouchableOpacity style={styles.speakerBtn} activeOpacity={0.7}>
            <Ionicons name="volume-medium" size={20} color="#F59E0B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ─── Controls ─────────────────────────────────────────────────── */}
      <View style={styles.controls}>
        {/* Buttons row */}
        <View style={styles.buttonsRow}>
          <ControlButton
            icon={cameraOn ? 'videocam' : 'videocam-off'}
            label="Camera"
            onPress={() => setCameraOn((v) => !v)}
          />
          <ControlButton
            icon={micActive ? 'mic' : 'mic-off'}
            label="Mic"
            onPress={() => setMicActive((v) => !v)}
          />
          <ControlButton
            icon="document-text-outline"
            label="Subtitles"
            onPress={() => setSubtitlesOn((v) => !v)}
          />
          <View style={styles.controlItem}>
            <TouchableOpacity
              style={[styles.controlBtn, styles.endCallBtn]}
              onPress={() => router.back()}
              activeOpacity={0.8}
            >
              <Ionicons
                name="call"
                size={22}
                color="#fff"
                style={{ transform: [{ rotate: '135deg' }] }}
              />
            </TouchableOpacity>
            <Text style={styles.controlLabel}>End Call</Text>
          </View>
        </View>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <StatItem label="Speaking" value="Excellent" color="#21C16B" />
          <View style={styles.statDivider} />
          <StatItem label="Pronunciation" value="Great" color="#21C16B" />
          <View style={styles.statDivider} />
          <StatItem label="Grammar" value="Good" color="#F59E0B" />
        </View>
      </View>
    </SafeAreaView>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function ControlButton({
  icon,
  label,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
}) {
  return (
    <View style={styles.controlItem}>
      <TouchableOpacity style={styles.controlBtn} onPress={onPress} activeOpacity={0.8}>
        <Ionicons name={icon} size={22} color="#374151" />
      </TouchableOpacity>
      <Text style={styles.controlLabel}>{label}</Text>
    </View>
  );
}

function StatItem({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
    </View>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#001328',
  },
  goBackText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#6C4EF5',
    marginTop: 12,
  },

  // ── Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerBack: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#001328',
    lineHeight: 22,
  },
  onlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#21C16B',
  },
  onlineLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#21C16B',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: 80,
    justifyContent: 'flex-end',
  },
  lessonBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  lessonBadgeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#374151',
  },
  bellBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Teacher area
  teacherArea: {
    flex: 1,
    backgroundColor: '#EEF0FF',
    position: 'relative',
    overflow: 'hidden',
  },
  mascot: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  studentPreview: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 72,
    height: 88,
    borderRadius: 14,
    backgroundColor: '#2D3142',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  speechBubble: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    right: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  speechText: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#001328',
    lineHeight: 20,
  },
  speakerBtn: {
    marginLeft: 10,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Controls
  controls: {
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 24,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  controlItem: {
    alignItems: 'center',
    gap: 6,
  },
  controlBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endCallBtn: {
    backgroundColor: '#EF4444',
  },
  controlLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B7280',
  },

  // ── Stats
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#E5E7EB',
  },
  statLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  statValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    lineHeight: 18,
  },
});
