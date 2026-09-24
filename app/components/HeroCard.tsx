import type { Hero } from "~/types";
import { Link } from "react-router";

const HeroCard = ({ hero }: { hero: Hero }) => {
  return (
    <Link
      className="block transform transition duration-300 hover:scale-105"
      to={`/heroes/${hero.id}`}
    >
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md flex">
        <img src={hero.image} alt={hero.name} className=" h-50 object-cover" />
        <div className="p-5 my-auto">
          <h3 className="text-3xl font-semibold text-blue-400 mb-1">
            {hero.name}
          </h3>
          <p className="text-sm text-gray-300 mb-2">{hero.role}</p>
          <div className="text-sm text-gray-400 mb-2">
            Release Date: {new Date(hero.releaseDate).toLocaleDateString()}
          </div>
          <div className="flex gap-2">
            {hero.description.split(" ").map((item) => (
              <div className="bg-blue-600 rounded px-2">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
