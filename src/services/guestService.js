import axiosInstance from "@/utils/axios";

export const getHotels = async () => {
  try {
    const res = await axiosInstance.get("/hotels");

    return res?.data?.data; // Mengembalikan data yang diinginkan
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error; // Melempar error agar bisa ditangani di loader
  }
};

export const getHotelsBySearch = async (query) => {
  try {
    const res = await axiosInstance.get(`/hotels?${query}`);

    return res?.data?.data; // Mengembalikan data yang diinginkan
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error; // Melempar error agar bisa ditangani di loader
  }
};

export const getHotelsById = async (id) => {
  try {
    const res = await axiosInstance.get(`/hotels/${id}`);

    return res?.data?.data; // Mengembalikan data yang diinginkan
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error; // Melempar error agar bisa ditangani di loader
  }
};
export const getRoomsById = async (id) => {
  try {
    const res = await axiosInstance.get(`/rooms/${id}`);

    return res.data.data; // Mengembalikan data yang diinginkan
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error; // Melempar error agar bisa ditangani di loader
  }
};
