import { create } from "zustand";
import { persist } from "zustand/middleware";

interface House {
  id: number;
  floors: number;
  color: string;
}

interface HouseStore {
  houses: House[];
  addHouse: () => void;
  removeHouse: (id: number) => void;
  updateHouse: (id: number, floors: number, color: string) => void;
}

const useHouseStore = create<HouseStore>()(
  persist(
    (set) => ({
      houses: [{ id: 1, floors: 4, color: "#facc15" }],
      addHouse: () =>
        set((state) => {
          const newId =
            state.houses.length > 0
              ? Math.max(...state.houses.map((h) => h.id)) + 1
              : 1; // Keeps unique ID
          return {
            houses: [
              ...state.houses,
              { id: newId, floors: 4, color: "#facc15" },
            ],
          };
        }),
      removeHouse: (id) =>
        set((state) => ({
          houses: state.houses.filter((house) => house.id !== id),
        })),
      updateHouse: (id, floors, color) =>
        set((state) => ({
          houses: state.houses.map((house) =>
            house.id === id ? { ...house, floors, color } : house
          ),
        })),
    }),
    { name: "house-storage" }
  )
);

export default useHouseStore;
