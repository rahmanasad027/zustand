import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const store = (set) => ({
  posts: [],
  fetch: async (url) => {
    const response = await axios.get(url);
    set({ posts: await response.data });
  },
});

const usePosts = create(devtools(store));

export default usePosts;
