import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface LayoutStore {
    loginDrawerOpen: boolean;
    setLoginDrawerOpen: (open: boolean) => void;
}


export const useLayoutStore = create<LayoutStore>()(
    persist(
        (set) => ({
            loginDrawerOpen: false,
            setLoginDrawerOpen: (open) => set({ loginDrawerOpen: open }),
        }),
        {
            name: 'layout-store',
            version: parseInt(process.env.NEXT_APP_VERSION || '1')
        }
    )
);
