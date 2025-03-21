import Button from "../CommunityProj/Button";
import { useState } from "react";
import Palliative from "../CommunityProj/Palliative";

const Techy = () => {
  const [isActive, setIsActive] = useState("school programming program");

  const handleActiveClick = (text: string) => {
    setIsActive(text);
  };

  return (
    <>
      <div className="bg-[#D9D9D9]">
        <div className=" text-center">
          <Button
            text="school programming program"
            onClick={() => handleActiveClick("school programming program")}
            isActive={isActive === "school programming program"}
          />
          <Button
            text="open programming program"
            onClick={() => handleActiveClick("open programming program")}
            isActive={isActive === "open programming program"}
          />
        </div>
      </div>
      {isActive === "school programming program" && (
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

      {isActive === "open programming program" && (
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
    </>
  );
};

export default Techy;
