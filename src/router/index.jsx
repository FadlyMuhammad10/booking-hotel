import DetailCard from "@/pages/detail-card";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/hotel/:id",
    element: <DetailCard />,
  },
]);

export default router;
