import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container flex items-center justify-between py-4 ">
        <div className="text-2xl font-semibold">
          <span className="text-[#4086F5]">Stay</span>
          <span className="text-[#152C5B]">hub</span>
        </div>
        <ul className="flex items-center gap-4 ml-8 text-[#152C5B]">
          <Link to="/">
            <li className="hover:text-[#4086F5]">Home</li>
          </Link>
          <a href="">
            <li className="hover:text-[#4086F5]">Featured</li>
          </a>
          <a href="">
            <li className="hover:text-[#4086F5]">Services</li>
          </a>
          <Link to="">
            <li className="hover:text-[#4086F5]">My Booking</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
