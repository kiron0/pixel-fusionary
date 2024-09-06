import App from "@/App";
import NotFound from "@/components/not-found";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
          {
                    path: "/",
                    element: <App />,
          },
          {
                    path: "*",
                    element: <NotFound />,
          }
]);

export default router;