import Image from "next/image";
import { Data } from "./Data";
import Together from "./Together";
import Impacts from "./Impacts";
import Link from "next/link";

const Learning = () => {
  return (
    <div className="border-b-[1px] relative border-[#D9D9D9]">
      <div className=" ">
        <Image
          src="/assets/About/TrainingA.jpg"
          width={1440}
          height={744}
          className="w-full"
          alt=""
        />
      </div>

      <div className="max-w-[1280px] relative mx-auto grid grid-cols-3 gap-x-16 px-6 pt-4 pb-12 max-sm:grid max-sm:grid-cols-1 max-sm:p-4 max-md:p-8 max-md:gap-x-4">
        <div className="relative bottom-[12rem] h-fit max-md:bottom-[3rem]">
          <Image
            width={370}
            height={160}
            src="/assets/About/Pattern.svg"
            alt="Training"
          />
          <div className="bg-[#F5F5F5] px-8 pt-6 pb-10 max-sm:p-4">
            <div>
              <h3 className=" text-sm font-Roboto font-extrabold uppercase text-[#369458] mb-4">
                Impact Tech
              </h3>
              <h2 className=" font-RobotoSlab text-3xl font-bold text-[#262626] w-[80%] mb-8 max-md:text-2xl">
                Enroll in Our Transformative Online Course Today
              </h2>

              <Link href={"/impact-tech"}>
                <button
                  className="font-Roboto text-sm uppercase font-extrabold text-[#FFF] py-4 px-6 bg-[#E60303] rounded"
                  style={{ boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.08)" }}
                >
                  Visit Our Website <span> ↗</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <p className="text-[#595959] text-lg font-Roboto font-normal">
            Just like Steve Jobs, our team believe everyone should learn how to
            program a computer and we also think programming should be
            mainstream as seen a poverty eradication and levelling-up strategy.
            <br />
            <br />
            We sponsor and facilitate a programming club in Ekiti public
            secondary schools, in this club, we teach teenagers how to create
            solutions with HTML, CSS and JavaScript.
          </p>
        </div>
        <div>
          <p className="text-[#595959] text-lg font-Roboto font-normal">
            Just like Steve Jobs, our team believe everyone should learn how to
            program a computer and we also think programming should be
            mainstream as seen a poverty eradication and levelling-up strategy.
            <br />
            <br />
            We sponsor and facilitate a programming club in Ekiti public
            secondary schools, in this club, we teach teenagers how to create
            solutions with HTML, CSS and JavaScript
          </p>
        </div>
      </div>
      <Impacts
        textColor="text-[#369458]"
        fill="#369458"
        backgroundCol=""
        Padd=""
        border=""
        width="w-[100%]"
        borderColor="border-[#D9D9D9]"
      />
      <Together />
    </div>
  );
};

export default Learning;
