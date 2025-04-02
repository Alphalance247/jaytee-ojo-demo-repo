import React from "react";
import Layout from "../layout";
import Image from "next/image";

const OurStory = () => {
  return (
    <Layout>
      <section className="max-w-[1240px] mx-auto my-[100px] text-lg text-[#595959]">
        <h2 className="text-[#262626] text-[46px] leading-[120%] font-bold mb-4">
          Our Story
        </h2>
        <div className="flex flex-col md:flex-row gap-14">
          {/* Left Column: Text Content */}
          <div className="md:w-2/">
            <p className="text-gray-700">
              JayTee Ojo Foundation is a non-profit organisation set up from
              Ekiti to help make the young person globally competitive and help
              our communities towards self-sustenance.
            </p>

            <p className="mt-4 text-gray-700">
              We have, among other projects, donated solar streetlights to light
              up communities at night, provided borehole water fountains, and
              sponsored medical interventions, food banks, sports interventions,
              and local farming.
            </p>

            <p className="mt-4 text-gray-700">
              For all the intervention projects and works mentioned above and
              many more besides, we are prouder of the investments we make into
              the future via educational interventions from donating books to
              students, to multiple scholarship programs that cover school fees,
              various examination registration fees, accommodation, and projects
              support.
            </p>

            <p className="mt-4 text-gray-700">
              The projects our team are most proud of however, are the work we
              do in empowering people with programming skills. Just like Steve
              Jobs, our team believe everyone should learn how to program a
              computer and we also think programming should be mainstream as
              seen a poverty eradication and levelling-up strategy.
            </p>
          </div>
          <Image
            src="/assets/our-story/BrickLayer.webp"
            width={646}
            height={569}
            alt="Foundation Work"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4 mt-4 text">
          <p>
            We sponsor and facilitate a programming club in Ekiti public
            secondary schools, in this club, we teach teenagers how to create
            solutions with HTML, CSS and JavaScript. The aim is to take
            programming to the young people at their most formative stage.
          </p>
          <p>
            We also sponsor and facilitate open trainings for everyone
            regardless of experience, education, vocation, gender, background,
            or ability. This is perhaps our most interesting endeavour as we get
            to see humanity at it’s best. In our open courses, we have had a
            Consultant Medical Doctor learning alongside a Dry Cleaner, and we
            have had people who did not finish secondary school learning with a
            someone who holds a PhD. We have delivered open training in Python,
            Digital Design, Digital Marketing, HTML, CSS and JavaScript as well
            as Excel and Database Administration.
          </p>
          <p>
            Finally, we are really excited to make available in print, some open
            source resources that has helped us in training our schools club in
            HTML. We will follow up with CSS, JavScript and Python editions.
          </p>
          <p>
            We provide this book without charge and with no copy rights, to all
            public secondary schools in Ekiti State.
          </p>
          <p>
            We are only able to do what we do because of support from
            volunteers, friends, and partners of the JayTee Ojo Foundation, to
            whom we say a BIG THANK YOU!
          </p>
        </div>
        <div className="space-y-2 mt-4">
          <h3 className="text-[#262626] text-[23px] leading-[120%] font-semibold">
            Otunba Taiwo Olayisade Ojo
          </h3>
          <p>President, Founder</p>
        </div>
      </section>
    </Layout>
  );
};

export default OurStory;
