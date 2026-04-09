import React from "react";
const trainingData = [
  {
    value: "1",
    text: "Trainer",
  },
  {
    value: "50+",
    text: "Students per year",
  },
  {
    value: "300+",
    text: "Students over 5 years",
  },
];
const TheRippleEffect = () => {
  return (
    <div className="w-full mx-auto max-w-[1440px] py-10 md:py-[91px] ">
      <div className="relative shadow-[0px_25px_50px_-12px_#00000040] rounded-none md:rounded-[24px] ">
        <img
          src="/assets/impact-tech/train-the-trainer/bg2.jpg"
          alt="bg"
          className="w-full md:w-[1444px] object-cover rounded-none md:rounded-[24px] h-[400px] md:h-[600px]"
        />

        <div
          className="absolute inset-0 w-full md:w-[1444px] rounded-none md:rounded-[24px] h-[400px] md:h-[600px] z-0 shadow-[0px_25px_50px_-12px_#00000040]
"
          style={{
            background: `linear-gradient(90deg, rgba(0, 79, 59, 0.95) 0%, rgba(0, 79, 59, 0.7) 100%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
`,
          }}
        ></div>
        <div className="absolute hidden md:block left-0 -bottom-24 md:-bottom-[11.64px] md:-left-[79px] z-10 ">
          <img
            src="/assets/impact-tech/train-the-trainer/Dots.png"
            alt="dots"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 md:px-0">
          <div className="max-w-[768px] text-center">
            <h3 className="text-white font-bold font-grostek leading-8 md:leading-10 text-3xl md:text-5xl">
              The Ripple Effect of Training
            </h3>

            <p className="py-6 text-base md:text-xl font-inter font-normal text-white w-full md:w-[648px] px-2 md:px-7">
              One trained educator can impact{" "}
              <span className="text-[#5EE9B5]">hundreds of students</span>{" "}
              throughout their teaching career. By training trainers, we create
              a sustainable ecosystem of digital literacy that grows
              exponentially.
            </p>
            <div className="flex justify-between gap-8 px-0 md:px-12">
              {trainingData.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 ">
                  <div
                    key={index}
                    className={
                      index === 0
                        ? "text-white text-center font-grostek font-bold text-3xl md:text-5xl"
                        : "text-[#5EE9B5] text-center font-grostek font-bold text-3xl md:text-5xl"
                    }
                  >
                    {item.value}
                  </div>
                  <div className="text-white text-sm font-normal font-inter text-center">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheRippleEffect;
