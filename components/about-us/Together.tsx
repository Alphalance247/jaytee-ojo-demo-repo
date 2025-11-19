import Container from "../common/container";
import Reuse from "./Reuse";

const Together = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-x-16 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-8 max-md:gap-x-8">
        <div>
          <h1 className="text-[#262626] font-RobotoSlab font-bold text-[41px] leading-10 mb-4 max-sm:text-2xl max-md:text-2xl">
            Together, we can achieve this
          </h1>
          <p className=" text-base font-Roboto text-[#595959] font-normal leading-6">
            Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar
            viverra bibendum magna fusce risus ac. Quis condimentum blandit lob.
          </p>
        </div>

        <Reuse
          url="/"
          url2="/donate"
          button="OUR GOALS FOR 2023"
          button2="MAKE DONATIONS"
          content1="Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum magna fusce risus ac. Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar."
          content2="Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum magna fusce risus ac. Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar."
        />

        <Reuse
          url="/our-project"
          url2="/donate"
          button="OUR PROJECTS"
          button2="OTHER WAYS TO HELP"
          content1="Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum magna fusce risus ac. Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar."
          content2="Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar viverra bibendum magna fusce risus ac. Lorem ipsum dolor sit amet consectetur. Phasellus nibh pulvinar."
        />
      </div>
    </Container>
  );
};

export default Together;
