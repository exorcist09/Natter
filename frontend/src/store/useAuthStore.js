import axios from "axios";
import { create } from "zustand";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,

  // Loading states
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers : [],

  // Check Auth State
  checkAuth: async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/check`
      );
      set({ authUser: res.data });
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  // Signup
  signup: async ({ name, email, password }) => {
    try {
      set({ isSigningUp: true });
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/signup`,
        { name, email, password }
      );
      toast.success("Account created successfully");
      set({ authUser: res.data });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
      console.error("Signup Error", error);
    } finally {
      set({ isSigningUp: false });
    }
  },

  // Login
  login: async ({ email, password }) => {
    try {
      set({ isLoggingIn: true });
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        { email, password }
      );
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
      console.error("Log-in Error", error);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  // Logout
  logout: async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/user/logout`);
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Logout failed";
      toast.error(errorMessage);
      console.error("Logout Error", error);
    }
  },
}));
