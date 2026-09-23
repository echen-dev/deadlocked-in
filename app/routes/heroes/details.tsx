import type { Route } from "./+types/details";
import type { Hero } from "~/types";

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Hero> {
  const res = await fetch(`http://localhost:8000/heroes/${params.id}`);
  if (!res.ok) throw new Response("Hero not found", { status: 404 });
  const hero: Hero = await res.json();
  return hero;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const HeroDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const hero = loaderData;
  console.log(hero);
  return <>Hero Details Page</>;
};

export default HeroDetailsPage;
