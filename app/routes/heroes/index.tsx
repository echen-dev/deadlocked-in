import { useState } from "react";
import type { Route } from "./+types/index";
import type { Hero } from "~/types";
import HeroCard from "~/components/HeroCard";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "motion/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deadlocked In | Heroes" },
    { name: "description", content: "Learn more about the heroes of Deadlock" },
  ];
}

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
  const [selectedRole, setSelectedRole] = useState("All");
  const heroesPerPage = 6;

  const roles = ["All", ...new Set(heroes.map((hero) => hero.role))];

  const filteredHeroes =
    selectedRole === "All"
      ? heroes
      : heroes.filter((hero) => hero.role === selectedRole);

  const totalPages = Math.ceil(filteredHeroes.length / heroesPerPage);
  const indexOfLast = currentPage * heroesPerPage;
  const indexOfFirst = indexOfLast - heroesPerPage;
  const currentHeroes = filteredHeroes.slice(indexOfFirst, indexOfLast);
  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8">Heroes</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => {
              setSelectedRole(role);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${role === selectedRole ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}
          >
            {role}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          layout="preserve-aspect"
          className="grid gap-6 sm:grid-cols-2"
        >
          {currentHeroes.map((hero) => (
            <motion.div key={hero.id} layout="preserve-aspect">
              <HeroCard hero={hero} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default HeroesPage;
