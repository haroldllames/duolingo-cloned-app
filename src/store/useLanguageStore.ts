import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { LanguageCode } from "@/types/learning";

interface LanguageState {
  selectedLanguage: LanguageCode | null;
  isHydrated: boolean;
  setSelectedLanguage: (code: LanguageCode) => void;
  clearSelectedLanguage: () => void;
  setHydrated: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      isHydrated: false,
      setSelectedLanguage: (code) => set({ selectedLanguage: code }),
      clearSelectedLanguage: () => set({ selectedLanguage: null }),
      setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);
