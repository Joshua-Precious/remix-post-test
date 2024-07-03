import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { useAppStore } from "~/stores/app.store";

export const data = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://images.unsplash.com/photo-1493135637657-c2411b3497ad?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1haWx8ZW58MHx8MHx8fDA%3D",
    subText: "This is a subtext",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
  },
  {
    id: 2,
    title: "Post 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8i0gpxGzmuAzRKxgpmNQGJdw2Yn52bKkIQ&s",
    subText: "This is a subtext",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2281592629/display_1500/stock-vector-paper-notes-stickers-sticky-sheets-and-tape-vector-set-of-to-do-list-memo-messages-notepads-2281592629.jpg",
    subText: "This is a subtext",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
  },
];

export default function Posts() {
  const { posts, setPosts } = useAppStore((state) => state);

  useEffect(() => {
    setPosts(data);
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Link key={post?.id} to={`/posts/${post.id}`} className="bg-white shadow rounded overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm opacity-65">{post.subText}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
