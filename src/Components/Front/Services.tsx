import { FaRegCircleCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <div className="px-4 mb-[16px] font-EpilogueVar font-semibold">
        <h1 className="text-3xl md:text-4xl ">Our Services</h1>
      </div>
      <div className="flex flex-col gap-4 items-center font-EpilogueVar px-4 mb-4 lg:flex-row lg:justify-center lg:gap-36">
        <div className="flex flex-col bg-[#a4a4a4]  px-2 py-4 max-w-[350px] rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl tracking-wide font-semibold">
              Verfied CinemaHalls
            </h3>
            <FaRegCircleCheck size={20} />
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga
            praesentium corporis repellat sapiente obcaecati exercitationem
            eaque nulla velit autem dignissimos modi tempora accusantium magnam
            non suscipit, quas at impedit.
          </p>
        </div>
        <div className="flex flex-col bg-[#a4a4a4]  px-2 py-4 max-w-[350px] rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl tracking-wide font-semibold">
              Instant Booking
            </h3>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga
            praesentium corporis repellat sapiente obcaecati exercitationem
            eaque nulla velit autem dignissimos modi tempora accusantium magnam
            non suscipit, quas at impedit.
          </p>
        </div>
        <div className="flex flex-col bg-[#a4a4a4]  px-2 py-4 max-w-[350px]  rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl lg:text-lg font-semibold">
              Multiple Payment Method Support
            </h3>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga
            praesentium corporis repellat sapiente obcaecati exercitationem
            eaque nulla velit autem dignissimos modi tempora accusantium magnam
            non suscipit, quas at impedit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
