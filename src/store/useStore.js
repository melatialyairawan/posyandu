import { create } from 'zustand';

const useStore = create((set) => ({
    isFilled: false,
    setIsFilled: (value) => set({ isFilled: value }),
}));

export default useStore;
