import { create } from "zustand";

const useAppStore = create((set, get) => ({
    currentClicks: 0,
    setCurrentClicks: (amount) => set((state) =>
        ({ ...state, currentClicks: amount })),
    leaderboard: [
        { userId: 1, email: "ktoto@gdeto.ru", clicks: 666 },
        { userId: 2, email: "nikto@gdeto.ru", clicks: 1337 },
        { userId: 3, email: "nikak@gdeto.ru", clicks: 50 },
    ]
}))

export default useAppStore