import { useUser } from '@clerk/expo';
import { Ionicons } from '@expo/vector-icons';
import {
  CallingState,
  StreamCall,
  useCallStateHooks,
} from '@stream-io/video-react-native-sdk';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants/images';
import { getLanguageByCode } from '@/data/languages';
import { getLessonById, getUnitById } from '@/data/units';
import { useLessonAudioCall, type AudioCallStatus } from '@/hooks/useLessonAudioCall';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useUser();

  const lesson = id ? getLessonById(id) : undefined;
  const unit = lesson ? getUnitById(lesson.unitId) : undefined;
  const language = unit ? getLanguageByCode(unit.languageCode) : undefined;

  const { call, status, errorMessage, start, leave, setPushToTalkActive } =
    useLessonAudioCall();

  useEffect(() => {
    if (!lesson || !unit) return;
    if (status !== 'idle') return;
    start({
      lessonId: lesson.id,
      languageCode: unit.languageCode,
      lessonTitle: lesson.title,
    });
  }, [lesson, unit, status, start]);

  const userName = useMemo(() => {
    if (!user) return 'You';
    return (
      [user.firstName, user.lastName].filter(Boolean).join(' ') ||
      user.username ||
      user.primaryEmailAddress?.emailAddress ||
      'You'
    );
  }, [user]);

  // Keep `leave` in a ref so the focus-blur cleanup always sees the latest
  // version without re-subscribing on every render.
  const leaveRef = useRef(leave);
  useEffect(() => {
    leaveRef.current = leave;
  }, [leave]);

  // Leave the call as soon as the screen loses focus (back gesture, tab switch,
  // hardware back, etc.). useFocusEffect's cleanup runs on blur, before unmount.
  useFocusEffect(
    useCallback(() => {
      return () => {
        leaveRef.current().catch((err) =>
          console.error('[lesson] failed to leave call on blur', err)
        );
      };
    }, [])
  );

  const handleEndCall = async () => {
    await leave();
    router.back();
  };

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

  const screen = (
    <LessonScreenContent
      lessonOrder={lesson.order}
      openingLine={lesson.aiTeacherPrompt.openingLine}
      languageName={language.name}
      userName={userName}
      hasCall={!!call}
      fallbackStatus={status}
      fallbackError={errorMessage}
      onEndCall={handleEndCall}
      onPushToTalk={setPushToTalkActive}
    />
  );

  if (!call) return screen;
  return <StreamCall call={call}>{screen}</StreamCall>;
}

// ─── Lesson screen content ─────────────────────────────────────────────────────

type LessonScreenContentProps = {
  lessonOrder: number;
  openingLine: string;
  languageName: string;
  userName: string;
  hasCall: boolean;
  fallbackStatus: AudioCallStatus;
  fallbackError: string | null;
  onEndCall: () => void;
  onPushToTalk: (active: boolean) => void;
};

function LessonScreenContent({
  lessonOrder,
  openingLine,
  languageName,
  userName,
  hasCall,
  fallbackStatus,
  fallbackError,
  onEndCall,
  onPushToTalk,
}: LessonScreenContentProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onEndCall} style={styles.headerBack} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={24} color="#001328" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <CallStatusBadge hasCall={hasCall} fallbackStatus={fallbackStatus} />
        </View>

        <View style={styles.headerRight}>
          <View style={styles.lessonBadge}>
            <Ionicons name="mic-outline" size={15} color="#374151" />
            <Text style={styles.lessonBadgeText}>{lessonOrder}</Text>
          </View>
          <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={22} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ─── Teacher Area ─────────────────────────────────────────────── */}
      <View style={styles.teacherArea}>
        <View style={StyleSheet.absoluteFill} />

        <Image source={images.mascotWelcome} style={styles.mascot} resizeMode="contain" />

        {/* Student preview / user info */}
        <View style={styles.studentPreview}>
          <Ionicons name="person" size={26} color="#fff" />
          <Text style={styles.studentName} numberOfLines={1}>
            {userName}
          </Text>
        </View>

        {/* Speech bubble */}
        <View style={styles.speechBubble}>
          <Text style={styles.speechText} numberOfLines={2}>
            {openingLine}
          </Text>
          <TouchableOpacity style={styles.speakerBtn} activeOpacity={0.7}>
            <Ionicons name="volume-medium" size={20} color="#F59E0B" />
          </TouchableOpacity>
        </View>

        {/* Inline status / error banner */}
        {(!hasCall || fallbackStatus === 'error') && (
          <View style={styles.statusBanner}>
            {fallbackStatus === 'error' ? (
              <Text style={styles.statusBannerError} numberOfLines={2}>
                {fallbackError ?? 'Could not connect to the AI teacher.'}
              </Text>
            ) : (
              <View style={styles.statusBannerLoading}>
                <ActivityIndicator size="small" color="#6C4EF5" />
                <Text style={styles.statusBannerText}>
                  Connecting to your {languageName} teacher…
                </Text>
              </View>
            )}
          </View>
        )}
      </View>

      {/* ─── Controls ─────────────────────────────────────────────────── */}
      <View style={styles.controls}>
        {hasCall ? (
          <CallControlsRow onEndCall={onEndCall} onPushToTalk={onPushToTalk} />
        ) : (
          <PendingControlsRow onEndCall={onEndCall} />
        )}
      </View>
    </SafeAreaView>
  );
}

// ─── Call-bound controls (inside <StreamCall>) ─────────────────────────────────

function CallStatusBadge({
  hasCall,
  fallbackStatus,
}: {
  hasCall: boolean;
  fallbackStatus: AudioCallStatus;
}) {
  if (!hasCall) {
    return <StatusPill label={labelForStatus(fallbackStatus)} tone={toneForStatus(fallbackStatus)} />;
  }
  return <LiveStatusBadge fallbackStatus={fallbackStatus} />;
}

function LiveStatusBadge({ fallbackStatus }: { fallbackStatus: AudioCallStatus }) {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const status = mapCallingState(callingState, fallbackStatus);
  return <StatusPill label={labelForStatus(status)} tone={toneForStatus(status)} />;
}

function StatusPill({ label, tone }: { label: string; tone: 'success' | 'warn' | 'error' | 'muted' }) {
  const color =
    tone === 'success'
      ? '#21C16B'
      : tone === 'warn'
        ? '#F59E0B'
        : tone === 'error'
          ? '#EF4444'
          : '#9CA3AF';

  return (
    <View style={styles.onlineRow}>
      <View style={[styles.onlineDot, { backgroundColor: color }]} />
      <Text style={[styles.onlineLabel, { color }]}>{label}</Text>
    </View>
  );
}

function CallControlsRow({
  onEndCall,
  onPushToTalk,
}: {
  onEndCall: () => void;
  onPushToTalk: (active: boolean) => void;
}) {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const isJoined = callingState === CallingState.JOINED;
  const [isTalking, setIsTalking] = useState(false);

  const handlePressIn = () => {
    if (!isJoined) return;
    onPushToTalk(true);
    setIsTalking(true);
  };

  const handlePressOut = () => {
    onPushToTalk(false);
    setIsTalking(false);
  };

  return (
    <>
      <View style={styles.buttonsRow}>
        <View style={styles.controlSideSpacer} />

        <PushToTalkButton
          active={isTalking}
          disabled={!isJoined}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        />

        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, styles.endCallBtn]}
            onPress={onEndCall}
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

      <View style={styles.statsRow}>
        <StatItem label="Speaking" value="Excellent" color="#21C16B" />
        <View style={styles.statDivider} />
        <StatItem label="Pronunciation" value="Great" color="#21C16B" />
        <View style={styles.statDivider} />
        <StatItem label="Grammar" value="Good" color="#F59E0B" />
      </View>
    </>
  );
}

function PendingControlsRow({ onEndCall }: { onEndCall: () => void }) {
  return (
    <View style={styles.buttonsRow}>
      <View style={styles.controlSideSpacer} />

      <PushToTalkButton active={false} disabled onPressIn={() => {}} onPressOut={() => {}} />

      <View style={styles.controlItem}>
        <TouchableOpacity
          style={[styles.controlBtn, styles.endCallBtn]}
          onPress={onEndCall}
          activeOpacity={0.8}
        >
          <Ionicons
            name="call"
            size={22}
            color="#fff"
            style={{ transform: [{ rotate: '135deg' }] }}
          />
        </TouchableOpacity>
        <Text style={styles.controlLabel}>Cancel</Text>
      </View>
    </View>
  );
}

function PushToTalkButton({
  active,
  disabled,
  onPressIn,
  onPressOut,
}: {
  active: boolean;
  disabled: boolean;
  onPressIn: () => void;
  onPressOut: () => void;
}) {
  return (
    <View style={styles.controlItem}>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        style={({ pressed }) => [
          styles.pttBtn,
          active && styles.pttBtnActive,
          pressed && !disabled && styles.pttBtnPressed,
          disabled && styles.pttBtnDisabled,
        ]}
      >
        <Ionicons name="mic" size={32} color="#fff" />
      </Pressable>
      <Text style={styles.controlLabel}>
        {disabled ? 'Hold to talk' : active ? 'Listening…' : 'Hold to talk'}
      </Text>
    </View>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function StatItem({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
    </View>
  );
}

// ─── Status helpers ────────────────────────────────────────────────────────────

function mapCallingState(
  state: CallingState,
  fallback: AudioCallStatus
): AudioCallStatus {
  switch (state) {
    case CallingState.JOINED:
      return 'joined';
    case CallingState.JOINING:
    case CallingState.RECONNECTING:
    case CallingState.MIGRATING:
      return 'connecting';
    case CallingState.LEFT:
      return 'ended';
    case CallingState.OFFLINE:
    case CallingState.RECONNECTING_FAILED:
      return 'error';
    default:
      return fallback;
  }
}

function labelForStatus(status: AudioCallStatus): string {
  switch (status) {
    case 'idle':
    case 'starting':
      return 'Preparing…';
    case 'connecting':
      return 'Connecting…';
    case 'joined':
      return 'Live';
    case 'ended':
      return 'Ended';
    case 'error':
      return 'Connection issue';
  }
}

function toneForStatus(status: AudioCallStatus): 'success' | 'warn' | 'error' | 'muted' {
  switch (status) {
    case 'joined':
      return 'success';
    case 'connecting':
    case 'starting':
    case 'idle':
      return 'warn';
    case 'error':
      return 'error';
    case 'ended':
      return 'muted';
  }
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
    width: 88,
    height: 96,
    borderRadius: 14,
    backgroundColor: '#2D3142',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  studentName: {
    marginTop: 4,
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    color: '#fff',
    textAlign: 'center',
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
  statusBanner: {
    position: 'absolute',
    top: 14,
    left: 14,
    right: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  statusBannerLoading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusBannerText: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#374151',
  },
  statusBannerError: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#EF4444',
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
    alignItems: 'center',
    marginBottom: 18,
  },
  controlItem: {
    alignItems: 'center',
    gap: 6,
  },
  controlSideSpacer: {
    width: 56,
  },
  pttBtn: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#6C4EF5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6C4EF5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  pttBtnPressed: {
    transform: [{ scale: 0.96 }],
  },
  pttBtnActive: {
    backgroundColor: '#21C16B',
    shadowColor: '#21C16B',
  },
  pttBtnDisabled: {
    backgroundColor: '#C7C9D9',
    shadowOpacity: 0,
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
