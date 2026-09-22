import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deadlocked In | Welcome" },
    { name: "description", content: "Learn more about the heroes of Deadlock" },
  ];
}

export default function Home() {
  return (
    <section>
      <Hero />
    </section>
  );
}
