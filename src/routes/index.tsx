import App from "@/components/App";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App title={"My react project"} />,
  },
];

export default routes;
