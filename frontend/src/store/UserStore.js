import create from 'zustand';
import { persist } from 'zustand/middleware'


const useStore = create(
    
        (set) => ({
            user_id: null,
            profile_picture: "",
            token: 0,
            usertype: "",
            elders_list:"",
            setUser: (user) => set((state) => ({ user_id: user })),
            setProfile: (pic) => set((state) => ({ profile_picture: pic })),
            setToken: (tkn) => set((state) => ({ token: tkn })),
            setUsertype: (usrtype) => set((state) => ({ usertype: usrtype })),
            setEldersList: (arr) => set((state) => ({ elders_list: arr })),
            removeUserId: () => set({ user_id: null }),
            removeProfile: () => set({ profile_picture: "" }),
            removeToken: () => set({ token: 0 }),
            removeUsertype: () => set({ usertype: "" }),


        }))

export const useUserStore = useStore;