import type { Hero } from "~/types";
import type { Route } from "./+types/index";
import FeaturedHeroes from "~/components/FeaturedHeroes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deadlocked In | Welcome" },
    { name: "description", content: "Learn more about the heroes of Deadlock" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ heroes: Hero[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/heroes`);
  const data = await res.json();
  return { heroes: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { heroes } = loaderData;

  return (
    <>
      <FeaturedHeroes heroes={heroes} count={2} />
    </>
  );
};

export default HomePage;
