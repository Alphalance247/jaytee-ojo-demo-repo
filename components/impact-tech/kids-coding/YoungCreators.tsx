import React, { useState } from "react";
import Button from "../Teens-coding/Button";
import { getYoutubeEmbedUrl } from "./videoHelperFunction";
import { IoPlayCircle } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
const YoungCreators = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embededUrl = getYoutubeEmbedUrl(
    "https://www.youtube.com/watch?v=kffacxfA7G4&list=RDkffacxfA7G4&start_radio=1",
  );
  const handlePlay = () => setIsPlaying(true);
  return (
    <div className="w-full">
      <div className="mx-auto w-full md:max-w-[1060px] py-10 md:pt-[91px] flex flex-col  items-center">
        <div className="text-[#1F1C14] text-center font-nunito px-6 md:px-0">
          <h4 className=" font-bold text-3xl md:text-5xl">
            Young Creators in Action
          </h4>
          <p className="font-normal text-base md:text2xl pt-4">
            See what kids learning through our program.
          </p>
          <div className="flex justify-center items-center pt-8">
            <Button
              url="#enroll-form"
              text="Enroll Now"
              className=" w-full md:w-[146px] bg-[#E60303] text-white mt-4 mb-8"
            />
          </div>
        </div>
        <div className="pb-0 md:pb-[122px]">
          <div className="drop-shadow-[0px 50px 170px 0px #0000000D] ">
            {/* <div className="relative h-full md:h-[520px]" onClick={handlePlay}>
              {isPlaying ? (
                <iframe
                  src={embededUrl}
                  className="rounded-[20px] w-full md:w-[999px] h-[520px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${embededUrl.split("/embed/")[1]}/hqdefault.jpg`}
                    alt="Video thumbnail"
                    className="rounded-[20px] w-full md:w-[999px]  object-cover h-[520px]"
                  />
                  <div className="absolute right-4 md:right-7 bottom-10 h-[60px] w-[60px] bg-[#FAB900] rounded-full flex items-center justify-center z-20">
                    <FaChevronUp className="text-white text-[24px] " />
                  </div>
                </div>
              )}

              <div
                className={
                  isPlaying
                    ? "bg-none"
                    : "absolute inset-0 h-[520px]  w-full md:w-[999px] rounded-[20px] bg-[#2A744585] z-0 pointer-events-none"
                }
              ></div>
            </div> */}
            <div className="relative w-full h-full cursor-pointer">
              <img
                src="/assets/impact-tech/kids-coding/videoImage.png"
                alt="Video thumbnail"
                className="rounded-[20px] w-full md:w-[999px]  object-cover h-[520px]"
              />
              {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <IoPlayCircle className="text-white text-6xl md:text-8xl" />
              </div> */}
              <div className="absolute  right-4 md:right-7 bottom-10 h-[60px] w-[60px] bg-[#FAB900] rounded-full flex items-center justify-center z-20">
                <FaChevronUp className="text-white text-[24px] " />
              </div>
              <div className="absolute inset-0 h-full w-[999px] rounded-[20px] bg-[#2A744585] z-0 pointer-events-none "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungCreators;
