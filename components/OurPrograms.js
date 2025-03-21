import React from "react";
import ReuseAble from "./OUR-PROJECTS/ReuseAble";

const OurPrograms = () => {
  return (
    <section>
      <div className="xl:px-10">
        <ReuseAble
          word={true}
          paragraph="What We Do"
          heading="Our Programs"
          text="We are continuously seeking new ways to create a brighter, more
          inclusive world. The Present Projects section showcases our current
          efforts, offering insight into the areas where we are currently making
          a difference."
        />
      </div>
    </section>
  );
};

export default OurPrograms;
