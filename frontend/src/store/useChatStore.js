import { create } from "zustand";
import toast from "react-hot-toast";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],

  selectedUser: null,
  isUserLoading: false,
  isMessagesLoading: false,

  getUser: async () => {
    set({ isUserLoading: true });
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/message/users`
      );
      set({ users: res.data });
    } catch (error) {
      toast.error("Failed to load users");
      console.error("Error in getting users", error);
    } finally {
      set({ isUserLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/message/${userId}`
      );
      set({ messages: res.messages });
    } catch (error) {
      toast.error("Failed to load messages");
      console.error("Error in getting messages zustand", error);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  setSelectedUser: (selectedUser) => {
    set({ selectedUser });
  },


  
}));
