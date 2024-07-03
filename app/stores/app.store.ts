import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { data } from "~/routes/posts._index";

type Post = typeof data;

interface AppProps {
  posts: Post;
  setPosts: (posts: Post) => void;
}

export const useAppStore = create<AppProps>()(
  persist(
    (set) => ({
      posts: [],
      setPosts: (posts) => set({ posts }),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
