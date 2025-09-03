import { createRoute, createRootRoute } from "@tanstack/react-router";
import App from "@/App.tsx";
import Home from "@/features/home";

const rootRoute = createRootRoute({
  component: () => <App />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export { routeTree };
