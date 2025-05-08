export default function Footer() {
  return (
    <div className="border-t">
      <footer className="container py-10 flex items-start">
        <div className="w-1/3">
          <div className="text-2xl font-semibold">
            <span className="text-[#4086F5]">Stay</span>
            <span className="text-[#152C5B]">hub</span>
          </div>
          <p className="pt-3">
            We kaboom your beauty holiday <br /> instantly and memorable.
          </p>
        </div>
        <div className="w-1/2 flex items-start justify-between">
          <div className="flex flex-col items-start gap-4">
            <span className="font-semibold text-[#152C5B]">For Beginners</span>
            <ul className="flex flex-col gap-2 items-start  text-[#152C5B]">
              <a href="/">
                <li className="hover:text-[#4086F5]">New Account</li>
              </a>
              <a href="">
                <li className="hover:text-[#4086F5]">Start Booking a Room</li>
              </a>
              <a href="">
                <li className="hover:text-[#4086F5]">Use Payment</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="font-semibold text-[#152C5B]">Explore Us</span>
            <ul className="flex flex-col gap-2 items-start  text-[#152C5B]">
              <a href="/">
                <li className="hover:text-[#4086F5]">Our Careers</li>
              </a>
              <a href="">
                <li className="hover:text-[#4086F5]">Privacy</li>
              </a>
              <a href="">
                <li className="hover:text-[#4086F5]">Terms & Conditions</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="font-semibold text-[#152C5B]">Connect Us</span>
            <ul className="flex flex-col gap-2 items-start  text-[#152C5B]">
              <div>
                <li className="hover:text-[#4086F5]">cs@gmail.com</li>
              </div>
              <div>
                <li className="hover:text-[#4086F5]">123-456-789</li>
              </div>
              <div>
                <li className="hover:text-[#4086F5]">Indonesia</li>
              </div>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" py-4 text-center text-[#152C5B]">
        <span>2025 All rights reserved</span>
      </div>
    </div>
  );
}
