import type { Route } from "./+types/details";
import type { Hero } from "~/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

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
  return (
    <>
      <Link
        to="/heroes"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" /> Back to Heroes
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <img
            src={hero.image}
            alt={hero.name}
            className="w-full max-h-80 rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4">{hero.name}</h1>
          <p className="text-sm text-gray-300 mb-4">Role: {hero.role}</p>
          <p className="text-sm text-gray-300 mb-4">
            Release Date: {new Date(hero.releaseDate).toLocaleDateString()}
          </p>
          <div className="flex gap-2 mb-6">
            {hero.description.split(" ").map((descriptor) => (
              <div key={descriptor} className="bg-blue-600 rounded px-2">
                {descriptor}
              </div>
            ))}
          </div>
          <Link
            to={"/guides"}
            className="inline-block text-white bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            <span className="flex items-center gap-2">
              View {hero.name} Guides <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroDetailsPage;
