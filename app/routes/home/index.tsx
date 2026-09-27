import type { Hero, PostMeta } from "~/types";
import type { Route } from "./+types/index";
import FeaturedHeroes from "~/components/FeaturedHeroes";
import LatestPosts from "~/components/LatestPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deadlocked In | Welcome" },
    { name: "description", content: "Learn more about the heroes of Deadlock" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ heroes: Hero[]; posts: PostMeta[] }> {
  const url = new URL(request.url);
  const [heroRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/heroes`),
    fetch(new URL("/posts-meta.json", url)),
  ]);
  if (!heroRes.ok || !postRes.ok)
    throw new Error("Failed to fetch heroes or posts");
  const [heroes, posts] = await Promise.all([heroRes.json(), postRes.json()]);
  return { heroes, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { heroes, posts } = loaderData;

  return (
    <>
      <FeaturedHeroes heroes={heroes} count={2} />
      <LatestPosts posts={posts} limit={3} />
    </>
  );
};

export default HomePage;
