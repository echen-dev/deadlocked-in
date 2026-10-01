import type { Hero, StrapiHero, StrapiResponse } from "~/types";
import type { Route } from "./+types";
import { useState } from "react";
import DropZone from "~/components/DropZone";
import TierItem from "~/components/TierItem";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";

export async function loader({ request }: Route.LoaderArgs) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/heroes?populate=*&pagination[pageSize]=38`,
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

const TierBuilderPage = ({ loaderData }: Route.ComponentProps) => {
  const { heroes } = loaderData;
  const [tiers, setTiers] = useState({
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
    X: [...heroes.map((hero) => hero.image)],
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-2">
        Deadlock Tier List Maker
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Drag all 38 heroes from S rank to D rank
      </p>
      <section className="block">
        <DragDropProvider
          onDragOver={(event) => {
            setTiers((items) => move(items, event));
          }}
        >
          <div className="grid gap-2">
            {Object.entries(tiers).map(([tier, items]) => (
              <div
                key={tier}
                className={`border border-gray-700 shadow-sm rounded-lg overflow-hidden ${tier !== "X" ? "grid grid-cols-[112px_1fr]" : null}`}
              >
                {tier !== "X" ? (
                  <div
                    className={`flex flex-col justify-center items-center py-4`}
                  >
                    <h3 className="text-3xl font-bold">{tier}</h3>
                  </div>
                ) : (
                  <h4 className="text-lg font-semibold my-4 mx-2">
                    Unranked Heroes{" "}
                    <span className="text-sm text-gray-400">
                      {tiers[tier].length} remaining...
                    </span>
                  </h4>
                )}
                <DropZone key={tier} id={tier}>
                  {items.map((item, index) => (
                    <TierItem
                      key={item}
                      id={item}
                      index={index}
                      column={tier}
                    />
                  ))}
                </DropZone>
              </div>
            ))}
          </div>
        </DragDropProvider>
      </section>
    </div>
  );
};

export default TierBuilderPage;
