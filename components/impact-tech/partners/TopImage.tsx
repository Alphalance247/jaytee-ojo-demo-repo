import Image from "next/image";
import React from "react";
import { IoIosNotifications } from "react-icons/io";

const TopImage = () => {
  return (
    <div className=" ">
      {" "}
      <Image
        src="/assets/impact-tech/partners/BitmapBg.png"
        alt="Handshake"
        width={425}
        height={571}
        className="object-cover  w-[425px] h-[571px] relative "
      />
      {/* <div className=""> */}
      <div
        className="absolute bottom-[138px] -left-[48px] z-20 bg-[#161C2D] w-[351px] h-[111px] rounded-[10px] flex items-center gap-4 px-5"
        style={{ boxShadow: "0px 62px 64px -10px #0117301E" }}
      >
        <div className="h-[39px] w-[39px] rounded-full bg-[#68D585] flex items-center justify-center">
          <IoIosNotifications className="h-6 w-6" />
        </div>
        \{" "}
        <div>
          <p className="text-white/70 text-sm">You are shaping the future</p>
          <p className="text-white font-bold text-xl">Congratulations!!</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TopImage;
