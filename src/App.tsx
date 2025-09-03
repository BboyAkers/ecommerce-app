import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function App() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

export default App;
