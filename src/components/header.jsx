import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State untuk modal

  // Fungsi untuk toggle modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
        <nav className="container flex items-center justify-between pt-8">
          <div className=""></div>
          <ul className="flex items-center gap-4 ml-8 text-[#BBBDC3]">
            <a href="">
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
          <div className="flex items-center gap-4">
            <button onClick={toggleModal} className="text-white">
              Sign In
            </button>
            <button
              onClick={toggleModal}
              className="bg-[#4086F5] text-white py-2 px-4 rounded-md"
            >
              Sign Up
            </button>
          </div>
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
                <button className="bg-[#E8EDFF] text-[#3258E8] py-2 px-4 rounded-full flex justify-center">
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
