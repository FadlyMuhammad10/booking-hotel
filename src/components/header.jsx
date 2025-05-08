import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  // const { login, user, handleLogout, handleLogin } = useContext(AuthContext);

  const [modalState, setModalState] = useState({
    isOpen: false,
    isModalOpen: false,
  });

  // Fungsi untuk toggle modal
  const toggleModal = (modalName) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  return (
    <header className="border-b">
      <nav className="container flex items-center justify-between py-4 ">
        <div className="text-2xl font-semibold">
          <span className="text-[#4086F5]">Stay</span>
          <span className="text-[#152C5B]">hub</span>
        </div>
        <ul className="flex items-center gap-4 ml-8 text-[#152C5B]">
          <a href="/">
            <li className="hover:text-[#4086F5]">Home</li>
          </a>
          <a href="">
            <li className="hover:text-[#4086F5]">Featured</li>
          </a>
          <a href="">
            <li className="hover:text-[#4086F5]">Services</li>
          </a>
          <a href="">
            <li className="hover:text-[#4086F5]">Contact Us</li>
          </a>
        </ul>

        {/* {login ? (
          <>
            <div
              className="p-2 border border-[#4086F5] rounded-md flex items-center cursor-pointer relative "
              onClick={() => toggleModal("isModalOpen")}
            >
              <div className="bg-white rounded-full">
                <FaUserCircle size={24} className="fill-[#4086F5]  " />
              </div>
              <div className="ml-2">
                <p className="text-sm font-semibold text-[#152C5B]">
                  {user?.displayName}
                </p>
              </div>
              {modalState.isModalOpen && (
                <>
                  <div className="absolute top-12 right-0 w-[15rem] rounded-md bg-white z-50 shadow-md ">
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
                onClick={() => toggleModal("isOpen")}
                className="text-[#152C5B] py-2 px-4 border border-[#4086F5] rounded-md"
              >
                Sign In
              </button>
              <button
                onClick={() => toggleModal("isOpen")}
                className="bg-[#4086F5] text-white py-2 px-4 rounded-md"
              >
                Sign Up
              </button>
            </div>
          </>
        )} */}
      </nav>

      {/* {modalState.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => toggleModal("isOpen")} // Klik luar modal untuk close
          ></div>
          <div className="relative bg-white py-4  px-6 rounded-lg shadow-lg w-[90%] md:max-w-md">
            <div className="flex items-center justify-center relative mb-4">
              <h2 className="text-2xl font-semibold ">Sign In / Sign Up</h2>
              <button
                onClick={() => toggleModal("isOpen")}
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
      )} */}
    </header>
  );
}
