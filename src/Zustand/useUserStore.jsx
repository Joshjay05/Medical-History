import create from "zustand";

// Zustand store for user data
const useUserStore = create((set) => ({
  users: [],
  isLoading: false,
  isError: false,
  error: null,
  setUsers: (data) => set({ users: data }),
  setLoading: () => set({ isLoading: true }),
  setFinishedLoading: () => set({ isLoading: false }),
  setError: (error) => set({ isError: true, error }),
}));

export default useUserStore;
