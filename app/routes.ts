import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("about", "./routes/about/index.tsx"),
  route("contact", "./routes/contact/index.tsx"),
  route("heroes", "./routes/heroes/index.tsx"),
  route("guides", "./routes/guides/index.tsx"),
] satisfies RouteConfig;
