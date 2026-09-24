import { Outlet } from "react-router";
import type { Route } from "../heroes/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Deadlocked In" },
    { name: "description", content: "Learn more about the heroes of Deadlock" },
  ];
}

const MainLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
