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
            The JayTee Ojo Foundation is dedicated to creating positive change
            in Ekiti State through education, empowerment, and community
            development. Our mission is to empower youths and underserved
            communities by providing scholarships, ICT training, and essential
            resources. We believe that by working together with our supporters,
            volunteers, and partners, we can build a brighter future for Ekiti
            State and create lasting impact in the lives of those we serve.
          </p>
        </div>

        <Reuse
          url="/"
          url2="/donate"
          button="OUR GOALS FOR 2026"
          button2="MAKE DONATIONS"
          content1="Our work goes beyond ideas, it’s about real results. From empowering youths with digital skills to transforming communities through education, innovation, and sustainable development, the JayTee Ojo Foundation turns vision into measurable impact. Every project we undertake is driven by a commitment to build stronger, more resilient communities."
          content2="Your support can change lives. By donating to the JayTee Ojo Foundation, you help provide scholarships, ICT training, community development projects, and essential resources to youths and underserved communities in Ekiti State."
        />

        <Reuse
          url="/our-project"
          url2="/contact-us"
          button="OUR PROJECTS"
          button2="OTHER WAYS TO HELP"
          content1="Our work goes beyond ideas, it’s about real results. From empowering youths with digital skills to transforming communities through education, innovation, and sustainable development, the JayTee Ojo Foundation turns vision into measurable impact. Every project we undertake is driven by a commitment to build stronger, more resilient communities."
          content2="Join us in creating real impact. By volunteering with the JayTee Ojo Foundation, you can mentor youths, assist in ICT training, support community projects, and help empower communities across Ekiti State. Every hour you give transforms lives."
        />
      </div>
    </Container>
  );
};

export default Together;
