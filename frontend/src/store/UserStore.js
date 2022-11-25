import create from 'zustand';
import { persist } from 'zustand/middleware'


const useStore = create(
   
        (set) => ({
            user_id: null,
            profile_picture: "",
            token: 0,
            usertype: 0,
            elders_list:"",
            login_state:"",
            elder_schedule_list:"",
            CaretakerSchedule:"",
            notificationslist:"",
            scheduled_date:"",
            droplist:[],


            setDroplist: (droplisting) => set((state) => ({ setDroplist: droplisting })),
            setLoginStatus: (login_status) => set((state) => ({ login_state: login_status })),
            setUser: (user) => set((state) => ({ user_id: user })),
            setProfile: (pic) => set((state) => ({ profile_picture: pic })),
            setToken: (tkn) => set((state) => ({ token: tkn })),
            setUsertype: (usrtype) => set((state) => ({ usertype: usrtype })),
            setEldernotifications: (notification) => set((state) => ({ notificationslist: notification })),
            setCaretakerSchedule: (caretaker_schedule) => set((state) => ({ CaretakerSchedule: caretaker_schedule })),

            setEldersList: (arr) => set((state) => ({ elders_list: arr })),
            setElderSchedule: (elder_schdeule) => set((state) => ({ elder_schedule_list: elder_schdeule })),
            removeUserId: () => set({ user_id: null }),
            removeProfile: () => set({ profile_picture: "" }),
            removeToken: () => set({ token: 0 }),
            removeUsertype: () => set({ usertype: "" }),


        }))

export const useUserStore = useStore;