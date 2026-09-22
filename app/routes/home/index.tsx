import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deadlocked In | Welcome" },
    { name: "description", content: "Learn more about the heroes of Deadlock" },
  ];
}

export default function Home() {
  return <>Homepage</>;
}
