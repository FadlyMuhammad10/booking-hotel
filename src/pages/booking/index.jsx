import InputText from "@/components/inputText";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { postBooking } from "@/services/guestService";
import formatRupiah from "@/utils/formatRupiah";
import { bookingSchema } from "@/utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function BookingPage() {
  const id = useParams().id;
  const hotel = useLoaderData();
  const navigate = useNavigate();

  const location = useLocation();

  const { roomId, roomUnitId, duration, startDate, endDate, uniqueCode } =
    location.state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: (data) => postBooking(data),
  });

  const handleBooking = async (data) => {
    try {
      const payload = {
        ...data,
        hotel_id: id,
        room_id: roomId,
        roomUnit_id: roomUnitId,
        duration,
        checkInDate: startDate,
        checkOutDate: endDate,
        total_price:
          hotel?.rooms.find((room) => room._id === roomId)?.price * duration -
          uniqueCode,
      };
      const res = await mutateAsync(payload);

      window.location.replace(res.redirect_url);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="container py-16">
        <h1 className="text-3xl font-semibold text-center text-[#152C5B]">
          Booking Details
        </h1>
        <form onSubmit={handleSubmit(handleBooking)}>
          <div className=" w-[75%] mx-auto mt-14 ">
            <div className="flex flex-row items-start gap-16">
              <div className="flex flex-col w-2/4">
                <img
                  src={hotel?.images[0]?.image_url}
                  alt="thumbnail"
                  className="w-full h-[270px] object-cover object-center rounded-2xl"
                />

                <div className="mt-4 inline-flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg text-[#152C5B]">
                      {hotel?.name}
                    </span>
                    <p className="text-sm text-[#152C5B]">
                      {hotel?.rooms.find((room) => room._id === roomId)?.name}
                    </p>
                    <p className="text-sm text-[#848484]">
                      {hotel?.city}, Indonesia
                    </p>
                  </div>
                  <div className="inline-flex">
                    <span className="font-semibold text-[#152C5B]">
                      {`${formatRupiah(
                        hotel?.rooms?.find((room) => room._id === roomId)
                          .price * duration
                      )}`}
                    </span>
                    <p className="text-sm text-[#848484]">
                      {" "}
                      /{" "}
                      <span className="font-semibold text-[#152C5B]">
                        {duration} night
                      </span>
                    </p>
                  </div>
                </div>
                <div className=" border-t mt-4">
                  <p className="text-[#152C5B]">Transfer Pembayaran:</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#152C5B]">Unique Code:</p>
                    <p className="font-bold text-[#FF2D2D]">
                      -{formatRupiah(uniqueCode)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#152C5B]">Grand Total:</p>
                    <p className="font-bold text-[22px] leading-[33px] text-[#0D903A]">
                      {formatRupiah(
                        hotel?.rooms.find((room) => room._id === roomId)
                          ?.price *
                          duration -
                          uniqueCode
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex flex-col  gap-4">
                  <InputText
                    register={register}
                    label={"Full Name"}
                    name={"name"}
                    type={"text"}
                    placeholder={"John Doe"}
                    errors={errors.name?.message}
                  />
                  <InputText
                    register={register}
                    label={"Email"}
                    name={"email"}
                    type={"email"}
                    placeholder={"oBk3T@example.com"}
                    errors={errors.email?.message}
                  />
                  <InputText
                    register={register}
                    label={"Phone Number"}
                    name={"phone_number"}
                    type={"text"}
                    placeholder={"+628123456789"}
                    errors={errors.phone_number?.message}
                  />
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={"startDate"} className=" text-sm">
                      Start Date
                    </Label>
                    <div className="flex items-center rounded-full border border-[#7186A0] px-3 py-2 gap-[10px] bg-[#F7F7FD]">
                      <img
                        src="/assets/icons/calendar-black.svg"
                        className="w-6 h-6"
                        alt="icon"
                      />
                      <p className="font-semibold">
                        {new Date(startDate).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={"endDate"} className=" text-sm">
                      End Date
                    </Label>
                    <div className="flex items-center rounded-full border border-[#7186A0] px-3 py-2 gap-[10px] bg-[#F7F7FD]">
                      <img
                        src="/assets/icons/calendar-black.svg"
                        className="w-6 h-6"
                        alt="icon"
                      />
                      <p className="font-semibold">
                        {new Date(endDate).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center mt-16">
              <Button
                type="submit"
                variant="primary"
                className=" bg-[#3258E8] text-white w-[300px]"
                disabled={isLoading}
              >
                {`${isLoading ? "Loading..." : "Continue to Book"}`}
              </Button>
              <Button variant="outline" className="w-[300px]">
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
