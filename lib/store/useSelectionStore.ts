import { create } from "zustand";

type SelectionState = {
  selectedIds: string[];
  toggle: (id: string) => void;
  clear: () => void;
};

const MAX = 7;

export const useSelectionStore = create<SelectionState>((set, get) => ({
  selectedIds: [],
  toggle: (id) => {
    const { selectedIds } = get();
    const exists = selectedIds.includes(id);

    if (exists) {
      set({ selectedIds: selectedIds.filter((x) => x !== id) });
      return;
    }

    set({ selectedIds: [...selectedIds, id].slice(0, MAX) });
  },
  clear: () => set({ selectedIds: [] }),
}));
