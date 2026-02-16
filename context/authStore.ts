// store.ts
import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { User } from "../types/user";

// Define types for state & actions
interface AuthState {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  token: null,
  user: null,
  login: () => () => set(() => ({ token: "" })),
  logout: () => set(() => ({ token: null })),
}));

const login = async (email: string, password: string) => {
  useAuthStore.setState({ token: "" });
};
