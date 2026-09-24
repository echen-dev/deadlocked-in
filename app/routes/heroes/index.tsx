import { useState } from "react";
import type { Route } from "./+types/index";
import type { Hero } from "~/types";
import HeroCard from "~/components/HeroCard";
import Pagination from "~/components/Pagination";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ heroes: Hero[] }> {
  const res = await fetch("http://localhost:8000/heroes");
  const data = await res.json();
  return { heroes: data };
}

const HeroesPage = ({ loaderData }: Route.ComponentProps) => {
  const { heroes } = loaderData as { heroes: Hero[] };
  const [currentPage, setCurrentPage] = useState(1);
  const heroesPerPage = 6;
  const totalPages = Math.ceil(heroes.length / heroesPerPage);
  const indexOfLast = currentPage * heroesPerPage;
  const indexOfFirst = indexOfLast - heroesPerPage;
  const currentHeroes = heroes.slice(indexOfFirst, indexOfLast);
  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">Heroes</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {currentHeroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default HeroesPage;
