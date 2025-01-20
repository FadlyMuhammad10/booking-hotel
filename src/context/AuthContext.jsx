import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/utils/axios";

export const AuthContext = createContext();

const baseURL = import.meta.env.VITE_API_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axiosInstance.get("/auth/user", {
          withCredentials: true,
        });
        if (response.data.loggedIn) {
          setLogin(true);
          setUser(response.data.user);
        }
      } catch (error) {
        // console.error("Error checking login status:", error);
        if (error.response && error.response.status === 401) {
          // Pengguna tidak terautentikasi
          setLogin(false);
          setUser(null);
        } else {
          console.error("Error checking login status:", error);
          setLogin(false);
          setUser(null);
        }
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    try {
      window.open(`${baseURL}/auth/google`, "_self");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    axiosInstance
      .get(`/auth/logout`, { withCredentials: true })
      .then((response) => {
        if (response?.data?.success) {
          setLogin(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  };

  return (
    <AuthContext.Provider value={{ login, user, handleLogout, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
