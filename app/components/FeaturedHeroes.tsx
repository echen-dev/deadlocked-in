import type { Hero } from "~/types";
import HeroCard from "./HeroCard";

type FeaturedHeroesProps = {
  heroes: Hero[];
  count?: number;
};

const FeaturedHeroes = ({ heroes, count = 2 }: FeaturedHeroesProps) => {
  const featuredHeroes = heroes.filter((hero) => hero.featured).slice(0, count);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Featured Heroes</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {featuredHeroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedHeroes;
