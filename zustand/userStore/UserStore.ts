import { VerifyOTPUser } from '@/api/Auth';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  user: VerifyOTPUser | null;
  setUserData: (user: VerifyOTPUser) => void;
  clearUserData: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUserData: (user: VerifyOTPUser) => set({ user }),
      clearUserData: () => set({ user: null })
    }),
    {
      name: 'user-store',
      version: parseInt(process.env.NEXT_APP_VERSION || '1')
    }
  )
);
