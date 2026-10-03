import type { StrapiHero, StrapiResponse, Hero } from "~/types";
import type { Route } from "./+types";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deadlocked In | Tier List" },
    { name: "description", content: "Learn more about the heroes of Deadlock" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/heroes?populate=*&pagination[pageSize]=39&sort=name:asc`,
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  const json: StrapiResponse<StrapiHero> = await res.json();
  const heroes = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    name: item.name,
    description: item.description,
    role: item.role,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    url: item.url,
    releaseDate: item.releaseDate,
    featured: item.featured,
    rank: item.rank,
  }));
  return { heroes };
}

const TierListPage = ({ loaderData }: Route.ComponentProps) => {
  const { heroes } = loaderData;
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-2">Deadlock Tier List</h2>
      <p className="text-sm text-gray-400 mb-2">Last updated: 9/30/2026</p>
      <p className="text-sm text-gray-400 mb-2">
        38 Heroes ranked from S to D tier for ranked
      </p>
      <span className="text-sm text-gray-400">Want to build your own? </span>
      <Link
        className="inline-block text-sm text-blue-400 rounded transition mb-4 hover:underline"
        to="/tier-list/builder"
      >
        To Tier Builder →
      </Link>
      <section className="block">
        <div className="grid gap-2">
          <div className="border border-gray-700 shadow-sm rounded-lg overflow-hidden grid grid-cols-[112px_1fr]">
            <div className="bg-red-300 flex flex-col justify-center items-center py-12">
              <h3 className="text-6xl font-bold">S</h3>
            </div>
            <div className="flex flex-wrap content-start items-stretch overflow-x-hidden gap-2 p-2">
              {heroes
                .filter((hero) => hero.rank === "S")
                .map((hero) => (
                  <img
                    key={hero.name}
                    src={hero.image}
                    alt={hero.name}
                    className="h-20"
                  />
                ))}
            </div>
          </div>
          <div className="border border-gray-700 shadow-sm rounded-lg overflow-hidden grid grid-cols-[112px_1fr]">
            <div className="bg-orange-300 flex flex-col justify-center items-center py-12">
              <h3 className="text-6xl font-bold">A</h3>
            </div>
            <div className="flex flex-wrap content-start items-stretch overflow-x-hidden gap-2 p-1">
              {heroes
                .filter((hero) => hero.rank === "A")
                .map((hero) => (
                  <img
                    key={hero.name}
                    src={hero.image}
                    alt={hero.name}
                    className="h-20"
                  />
                ))}
            </div>
          </div>
          <div className="border border-gray-700 shadow-sm rounded-lg overflow-hidden grid grid-cols-[112px_1fr]">
            <div className="bg-yellow-300 flex flex-col justify-center items-center py-12">
              <h3 className="text-6xl font-bold">B</h3>
            </div>
            <div className="flex flex-wrap content-start items-stretch overflow-x-hidden gap-2 p-1">
              {heroes
                .filter((hero) => hero.rank === "B")
                .map((hero) => (
                  <img
                    key={hero.name}
                    src={hero.image}
                    alt={hero.name}
                    className="h-20"
                  />
                ))}
            </div>
          </div>
          <div className="border border-gray-700 shadow-sm rounded-lg overflow-hidden grid grid-cols-[112px_1fr]">
            <div className="bg-green-300 flex flex-col justify-center items-center py-12">
              <h3 className="text-6xl font-bold">C</h3>
            </div>
            <div className="flex flex-wrap content-start items-stretch overflow-x-hidden gap-2 p-1">
              {heroes
                .filter((hero) => hero.rank === "C")
                .map((hero) => (
                  <img
                    key={hero.name}
                    src={hero.image}
                    alt={hero.name}
                    className="h-20"
                  />
                ))}
            </div>
          </div>
          <div className="border border-gray-700 shadow-sm rounded-lg overflow-hidden grid grid-cols-[112px_1fr]">
            <div className="bg-gray-300 flex flex-col justify-center items-center py-12">
              <h3 className="text-6xl font-bold">D</h3>
            </div>
            <div className="flex flex-wrap content-start items-stretch overflow-x-hidden gap-2 p-1">
              {heroes
                .filter((hero) => hero.rank === "D")
                .map((hero) => (
                  <img
                    key={hero.name}
                    src={hero.image}
                    alt={hero.name}
                    className="h-20"
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TierListPage;
