import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CompletedBookingPage() {
  return (
    <div className="container py-16 ">
      <h1 className="text-3xl font-semibold text-center text-[#152C5B]">
        Yay! Completed
      </h1>
      <div className="flex  justify-center mb-6">
        <img
          src="/assets/images/completed.png"
          alt="completed"
          className="bg-none w-[362px] h-[330px] object-cover"
        />
      </div>
      <p className="text-center text-[#B0B0B0]">
        We will inform you via email later <br /> once the transaction has been
        accepted
      </p>
      <div className="flex justify-center mt-6">
        <Link to={"/"}>
          <Button variant="primary" className="bg-[#3252DF] text-white">
            Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
