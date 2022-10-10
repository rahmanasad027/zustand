import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  people: ["john doe", "jane doe"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});

const useStorePerson = create(devtools(store));

export default useStorePerson;
