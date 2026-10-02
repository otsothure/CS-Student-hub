import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
    persist(
        (set) => ({
            notes: '',
            setNotes: (notes) => set({ notes }),
        }),
        { name: 'hubi', version: 1 }
    )
)