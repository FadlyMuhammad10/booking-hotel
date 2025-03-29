import BookingPage from "@/pages/booking";
import DetailCard from "@/pages/detail-card";
import HomePage from "@/pages/home";
import SearchPage from "@/pages/search";
import { getHotels, getHotelsById } from "@/services/guestService";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      const hotels = await getHotels();

      return hotels;
    },
    element: <HomePage />,
  },
  {
    path: "/hotel/:id",
    loader: async ({ params }) => {
      const hotel = await getHotelsById(params.id);

      return hotel;
    },
    element: <DetailCard />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/booking",

    // element: <BookingPage />,
    element: (
      <ProtectedRoute>
        <BookingPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
