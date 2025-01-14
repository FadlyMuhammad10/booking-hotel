import axiosInstance from "@/utils/axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const baseURL = import.meta.env.VITE_API_URL;

export default function Header() {
  // State untuk login
  const [login, setLogin] = useState(false);

  const [user, setUser] = useState({});

  // State untuk modal login
  const [isOpen, setIsOpen] = useState(false); // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk toggle modal login
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogin = () => {
    try {
      window.open(`${baseURL}/auth/google`, "_self");
    } catch (error) {
      console.log(error);
    }
  };

  // Frontend menunggu login selesai dan menangani state login
  useEffect(() => {
    // Mengecek status login saat aplikasi dimuat
    axiosInstance
      .get(`/auth/user`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        console.log(response);
        if (response?.data?.success) {
          setLogin(true);
          setUser(response?.data?.user);
        }
      })
      .catch(() => {
        setUser(null);
        setLogin(false);
      });
  }, []);

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
        console.log(error);
      });
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
        <nav className="container flex items-center justify-between pt-8 ">
          <div className=""></div>
          <ul className="flex items-center gap-4 ml-8 text-[#BBBDC3]">
            <a href="/">
              <li className="hover:text-white">Home</li>
            </a>
            <a href="">
              <li className="hover:text-white">Featured</li>
            </a>
            <a href="">
              <li className="hover:text-white">Services</li>
            </a>
            <a href="">
              <li className="hover:text-white">Contact Us</li>
            </a>
          </ul>

          {login ? (
            <>
              <div
                className="p-2 border border-white rounded-md flex items-center cursor-pointer relative"
                onClick={toggleModalOpen}
              >
                <div className="bg-white rounded-full">
                  <FaUserCircle size={24} className="fill-[#4086F5]  " />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-semibold text-white">
                    {user?.displayName}
                  </p>
                </div>
                {isModalOpen && (
                  <>
                    <div className="absolute top-12 right-0 w-[15rem] rounded-md bg-white z-50  ">
                      <div className="flex flex-col ">
                        <button className="flex items-center gap-2 px-4 hover:bg-gray-100 rounded-md py-2">
                          <CiUser size={24} />
                          <span>Profile</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 hover:bg-gray-100 rounded-md py-2">
                          <IoCartOutline size={24} />
                          <span>Order & Trip</span>
                        </button>
                        <button
                          className="flex items-center gap-2 px-4 hover:bg-gray-100 rounded-md py-2"
                          onClick={handleLogout}
                        >
                          <AiOutlineLogout size={24} />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleModal}
                  className="text-white py-2 px-4 border border-white rounded-md"
                >
                  Sign In
                </button>
                <button
                  onClick={toggleModal}
                  className="bg-[#4086F5] text-white py-2 px-4 rounded-md"
                >
                  Sign Up
                </button>
              </div>
            </>
          )}
        </nav>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={toggleModal} // Klik luar modal untuk close
            ></div>
            <div className="relative bg-white py-4  px-6 rounded-lg shadow-lg w-[90%] md:max-w-md">
              <div className="flex items-center justify-center relative mb-4">
                <h2 className="text-2xl font-semibold ">Sign In / Sign Up</h2>
                <button
                  onClick={toggleModal}
                  className=" text-gray-500 hover:text-gray-700 absolute right-0"
                >
                  <IoMdClose size={24} />
                </button>
              </div>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Input your email"
                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#4086F5] text-white py-2 px-4 rounded-full mt-2"
                >
                  Continue
                </button>
              </form>

              <div className="flex items-center justify-between my-4">
                <div className="border-t w-[30%] border-gray-300"></div>
                <p className="text-gray-600">or continue with</p>
                <div className="border-t w-[30%] border-gray-300"></div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  className="bg-[#E8EDFF] text-[#3258E8] py-2 px-4 rounded-full flex justify-center"
                  onClick={handleLogin}
                >
                  <img
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    alt=""
                    className="w-6 h-6 "
                  />
                </button>
              </div>

              <div className="mt-4 text-center">
                By continuing, you agree to our{" "}
                <span className="text-[#4086F5]">Terms of Service</span> and{" "}
                <span className="text-[#4086F5]">Privacy Policy</span>.
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
