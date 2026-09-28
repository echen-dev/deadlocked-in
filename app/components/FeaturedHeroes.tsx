import type { Hero } from "~/types";
import HeroCard from "./HeroCard";

type FeaturedHeroesProps = {
  heroes: Hero[];
  count?: number;
};

const FeaturedHeroes = ({ heroes, count = 2 }: FeaturedHeroesProps) => {
  if (heroes.length === 0) return null;
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Featured Heroes</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedHeroes;
