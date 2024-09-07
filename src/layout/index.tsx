import App from "@/App";
import NotFound from "@/components/not-found";
import PrivacyPolicy from "@/pages/privacy-policy/privacy-policy";
import TermsAndConditions from "@/pages/terms-and-conditions/terms-and-conditions";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
          {
                    path: "/",
                    element: <App />,
          },
          {
                    path: "/terms-and-conditions",
                    element: <TermsAndConditions />,
          },
          {
                    path: "/privacy-policy",
                    element: <PrivacyPolicy />,
          },
          {
                    path: "*",
                    element: <NotFound />,
          }
]);

export default router;