import Image from "next/image";
import { GiveData } from "./GiveData";

const Give = () => {
  return (
    <div className="p-24 max-sm:p-5 max-md:p-8">
      <div className="mb-16 text-center  m-auto max-sm:mb-8">
        <h3 className=" font-RobotoSlab font-bold text-4xl text-[#262626] mb-4 max-sm:text-xl">
          Why You Should Volunteer with Us
        </h3>
        <p className=" font-Roboto text-base text-[#595959] w-[70%] m-auto max-sm:w-[100%] max-sm:text-sm">
          Lorem ipsum dolor sit amet consectetur. Facilisi posuere a purus
          pellentesque. Risus natoque velit nisl a elementum quam. Urna lacus
          egestas maecenas venenatis est ut in lorem feugiat. At purus netus
          nisl magna pharetra eget vitae cum. A at nec
        </p>
      </div>
      <div className=" grid grid-cols-3 items-center gap-x-16 max-sm:grid max-sm:grid-cols-1 gap-y-8">
        {GiveData.map((items) => {
          return (
            <div className="text-center flex flex-col gap-4 max-sm:gap-2">
              <Image
                width={48}
                height={48}
                src="/assets/give.svg"
                alt="Give Icon"
                className="m-auto"
              />
              <h5 className=" font-extrabold font-RobotoSlab text-xl text-[#262626]">
                <span className="h-8 text-[#BFBFBF] text-4xl mr-8">-</span> GIVE
                <span className="h-8 text-[#BFBFBF] text-4xl ml-8">-</span>
              </h5>
              <p className="font-Roboto text-base text-[#595959]">
                Our foodbanks and medical aid give dignity to the elderly of
                ages 80 and over. Our scholarship program give hope to young
                people aspiring for a degree or vocation.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Give;
