import type { Route } from "./+types/index";
import type { Hero } from "~/types";
import HeroCard from "~/components/HeroCard";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ heroes: Hero[] }> {
  const res = await fetch("http://localhost:8000/heroes");
  const data = await res.json();
  return { heroes: data };
}

const HeroesPage = ({ loaderData }: Route.ComponentProps) => {
  const { heroes } = loaderData as { heroes: Hero[] };
  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">Heroes</h2>
      <div className="grid gap-6 sm:grid-cols-4">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  );
};

export default HeroesPage;
