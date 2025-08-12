import { create } from "zustand";

const usePhoneBooksStore = create((set) => ({
  phoneBooks: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBooks: [...state.phoneBooks, { id: Date.now(), name, phoneNumber }],
    })),
}));

export default usePhoneBooksStore;
