import Layout from "@/components/Layout";
import BookingPage from "@/pages/booking";
import CompletedBookingPage from "@/pages/booking/completed";
import DetailCard from "@/pages/detail-card";
import HomePage from "@/pages/home";
import { getHotels, getHotelsById } from "@/services/guestService";
import { createBrowserRouter } from "react-router-dom";

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

        element: <BookingPage />,
      },
      {
        path: "/success-booking",
        element: <CompletedBookingPage />,
      },
    ],
  },
]);

export default router;
