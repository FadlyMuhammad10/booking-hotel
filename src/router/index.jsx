import BookingPage from "@/pages/booking";
import DetailCard from "@/pages/detail-card";
import HomePage from "@/pages/home";
import SearchPage from "@/pages/search";
import { getHotels, getHotelsById } from "@/services/guestService";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Layout from "@/components/Layout";
import CompletedBookingPage from "@/pages/booking/completed";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    children: [
      {
        index: true,
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
        path: "/hotel/:id/booking",
        loader: async ({ params }) => {
          const hotel = await getHotelsById(params.id);

          return hotel;
        },

        // element: <BookingPage />,
        element: (
          // <ProtectedRoute>
          <BookingPage />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/success-booking",
        element: <CompletedBookingPage />,
      },
    ],
  },

  {
    path: "/search",
    element: <SearchPage />,
  },
]);

export default router;
