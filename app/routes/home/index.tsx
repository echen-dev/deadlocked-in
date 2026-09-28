import type { Hero, PostMeta, StrapiHero, StrapiResponse } from "~/types";
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
    fetch(
      `${import.meta.env.VITE_API_URL}/heroes?filters[featured][$eq]=true&populate=*`,
    ),
    fetch(new URL("/posts-meta.json", url)),
  ]);
  if (!heroRes.ok || !postRes.ok) {
    throw new Error("Failed to fetch heroes or posts");
  }

  const heroJson: StrapiResponse<StrapiHero> = await heroRes.json();
  const postJson = await postRes.json();

  const heroes = heroJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    name: item.name,
    description: item.description,
    role: item.role,
    image: item.image?.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : "/images/no-image.png",
    url: item.url,
    releaseDate: item.releaseDate,
    featured: item.featured,
  }));

  return { heroes, posts: postJson };
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
