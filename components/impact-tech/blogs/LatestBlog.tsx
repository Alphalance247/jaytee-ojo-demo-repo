import React from "react";

const LatestBlog = () => {
  return (
    <div className="bg-[#F5F5F5] w-full ">
      <div className="mx-auto w-full md:max-w-[1230px] py-10 md:pt-[98px] md:pb-[95px]">
        <div className="flex gap-[5px] items-center pb-10 md:pb-[51px] pl-6 md:pl-0">
          <div className="border-r-4 border-[#F81539] rounded-[12px] h-[38px] "></div>
          <div>
            <h2 className="text-[32px] md:text-[48px] font-semibold font-grostek text-[#3E3232]">
              latest Blog
            </h2>
          </div>
        </div>
        <div className=" relative h-[662px] bg-[url(/assets/impact-tech/blogs/unsplash_XyZxxJI8g30.png)] bg-cover bg-no-repeat flex  items-center rounded-[12px]">
          <div className="absolute bottom-16 md:bottom-[31px] h-fit md:h-[324px] bg-[#FFFFFF1A] w-full md:w-[1152px] backdrop-blur-[35px] rounded-[20px] left-0 md:left-[31.7px]">
            <div className="px-6 md:pl-[65px] py-10 md:py-[39px]">
              <div className="text-white w-full md:max-w-[860px] flex flex-col gap-4 ">
                <div className="flex gap-6 font-inter items-center">
                  <div className="flex gap-1 items-center ">
                    <div>
                      <img
                        src="/assets/impact-tech/blogs/calendar.png"
                        alt="calendr icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="text-sm font-normal">Feb 16</div>
                  </div>
                  <div className="">
                    <ul className="flex  items-center gap-5 list-disc">
                      <li className="text-sm font-normal">5 min read</li>
                      <li className="text-[13px]  italic font-light">
                        Impact Tech team
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="font-grostek text-[24px] md:text-[40px] font-semibold leading-[100%]">
                  How Coding is Transforming the Future of Secondary School
                  Students in Ekiti State
                </h3>
                <p className="text-base md:text-lg font-inter font-normal font-inter ">
                  Technology is shaping every part of our world, from how we
                  communicate to how we work and solve problems. Yet, many young
                  students in underserved communities lack access to the skills
                  and resources needed to participate in this digital future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
