import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import DetailCard from "./pages/detail-card";

function App() {
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

  return <RouterProvider router={router} />;
}

export default App;
