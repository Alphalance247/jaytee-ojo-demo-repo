import Button from "./Button";
import { useState } from "react";
import Palliative from "./Palliative";
import Container from "@/components/common/container";

const Initiatives = () => {
  const [isActive, setIsActive] = useState("Health");

  const handleActiveClick = (text: string) => {
    setIsActive(text);
  };

  return (
    <>
      <div className="bg-[#D9D9D9]">
        <div className="w-full m-auto text-center max-sm:w-[100%] max-sm:m-auto max-md:w-[100%] max-lg:w-[100%]">
          <button
            className={`py-6 px-6 hover:text-[#369458] ${
              isActive === "Health"
                ? "border-b-4 text-[#369458]"
                : "text-[#595959]"
            }  border-[#369458] mr-6 font-Roboto text-sm font-black uppercase hover:border-b-4 max-sm:mr-4 max-sm:p-1 max-sm:text-[7px] max-md:mr-3 max-md:p-3 max-lg:mr-2`}
            onClick={() => handleActiveClick("Health")}
          >
            Health
          </button>

          <Button
            text="infrastructure"
            onClick={() => handleActiveClick("infrastructure")}
            isActive={isActive === "infrastructure"}
          />
          <Button
            text="water"
            onClick={() => handleActiveClick("water")}
            isActive={isActive === "water"}
          />
          <Button
            text="renovation"
            onClick={() => handleActiveClick("renovation")}
            isActive={isActive === "renovation"}
          />
          <Button
            text="education"
            onClick={() => handleActiveClick("education")}
            isActive={isActive === "education"}
          />
          <Button
            text="security"
            onClick={() => handleActiveClick("security")}
            isActive={isActive === "security"}
          />
        </div>
      </div>
      <Container>
        {isActive === "Health" && (
          <>
            <Palliative
              headings="Covid-19 Food Bank"
              text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
              image1="/assets/Community/treatment.png"
              img2="/assets/Community/visitation.png"
              img3="/assets/Community/palliatives.png"
              alt1="treatment"
              alt2="visitation"
              alt3="palliatives"
            />
            <Palliative
              headings="Covid-19 Elderly Health Palliative"
              text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
              image1="/assets/Community/visitation.png"
              img2="/assets/Community/treatment.png"
              img3="/assets/Community/palliatives.png"
              alt1="visitation"
              alt2="treatment"
              alt3="palliatives"
            />

            <Palliative
              headings="Street Light Construction"
              text="Solar Street light donated to Ikoro Ekiti Community to light up the main streets."
              image1="/assets/Community/street.png"
              img2="/assets/Community/light.png"
              img3="/assets/Community/tranformer.png"
              alt1="street"
              alt2="light"
              alt3="transformer"
            />

            <Palliative
              headings="Borehole Construction"
              text="Borehole for the young people drinking from a dirty stream."
              image1="/assets/Community/pipe.png"
              img2="/assets/Community/fetcing.png"
              img3="/assets/Community/fixes.png"
              alt1="pipe"
              alt2="fetcing"
              alt3="fixes"
            />

            <Palliative
              headings="Covid-19 Elderly Health Palliative"
              text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
              image1="/assets/Community/visitation.png"
              img2="/assets/Community/visitation.png"
              img3="/assets/Community/palliatives.png"
              alt1="palliatives"
              alt2="palliatives"
              alt3="palliatives"
            />

            <Palliative
              headings="Covid-19 Elderly Health Palliative"
              text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
              image1="/assets/Community/visitation.png"
              img2="/assets/Community/visitation.png"
              img3="/assets/Community/palliatives.png"
              alt1="visitation"
              alt2="visitation"
              alt3="visitation"
            />
          </>
        )}

        {isActive === "infrastructure" && (
          <Palliative
            headings="Street Light Construction"
            text="Solar Street light donated to Ikoro Ekiti Community to light up the main streets."
            image1="/assets/Community/street.png"
            img2="/assets/Community/light.png"
            img3="/assets/Community/tranformer.png"
            alt1="street"
            alt2="light"
            alt3="transformer"
          />
        )}

        {isActive === "water" && (
          <Palliative
            headings="Borehole Construction"
            text="Borehole for the young people drinking from a dirty stream."
            image1="/assets/Community/pipe.png"
            img2="/assets/Community/fetcing.png"
            img3="/assets/Community/fixes.png"
            alt1="pipe"
            alt2="fetcing"
            alt3="fixes"
          />
        )}

        {isActive === "renovation" && (
          <Palliative
            headings="Mofere Busstop Renovation"
            text="Renovation and Modernisation of Mofere Okada Bus-stop."
            image1="/assets/Community/busstop.png"
            img2="/assets/Community/construction.png"
            img3="/assets/Community/innovate.png"
            alt1="busstop"
            alt2="constuction"
            alt3="innovate"
          />
        )}

        {isActive === "education" && (
          <Palliative
            headings="Covid-19 Elderly Health Palliative"
            text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
            image1="/assets/Community/visitation.png"
            img2="/assets/Community/visitation.png"
            img3="/assets/Community/palliatives.png"
            alt1="palliatives"
            alt2="palliatives"
            alt3="palliatives"
          />
        )}

        {isActive === "security" && (
          <Palliative
            headings="Covid-19 Elderly Health Palliative"
            text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
            image1="/assets/Community/visitation.png"
            img2="/assets/Community/visitation.png"
            img3="/assets/Community/palliatives.png"
            alt1="visitation"
            alt2="visitation"
            alt3="visitation"
          />
        )}
      </Container>
    </>
  );
};
export default Initiatives;
