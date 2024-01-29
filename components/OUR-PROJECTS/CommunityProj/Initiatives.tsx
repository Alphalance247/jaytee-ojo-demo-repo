import Button from "./Button";
import { useState } from "react";
import Palliative from "./Palliative";

const initiatives = () => {
  const [isActive, setIsActive] = useState("Health");
  const [showText, setShowText] = useState(false);

  const handleActiveClick = (text: string) => {
    setIsActive(text);
  };

  return (
    <>
      <div className="bg-[#D9D9D9]">
        <div className=" w-[70%] m-auto text-center">
          <button
            className={`py-6 px-6 text-[#369458] ${
              isActive === "Health" ? "border-b-4" : ""
            }  border-[#369458] mr-6 font-Roboto text-sm font-black uppercase hover:border-b-4`}
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
      {isActive === "Health" && (
        <>
          <Palliative
            headings="Covid-19 Elderly Health Palliative"
            text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
          />
          <Palliative
            headings="Covid-19 Food Bank"
            text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
          />
        </>
      )}

      {isActive === "infrastructure" && (
        <Palliative
          headings="Street Light Construction"
          text="Solar Street light donated to Ikoro Ekiti Community to light up the main streets."
        />
      )}
      {isActive === "water" && (
        <Palliative
          headings="Borehole Construction"
          text="Borehole for the young people drinking from a dirty stream."
        />
      )}
      {isActive === "renovation" && (
        <Palliative
          headings="Mofere Busstop Renovation"
          text="Renovation and Modernisation of Mofere Okada Bus-stop."
        />
      )}
      {isActive === "education" && (
        <Palliative
          headings="Covid-19 Elderly Health Palliative"
          text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
        />
      )}
      {isActive === "security" && (
        <Palliative
          headings="Covid-19 Elderly Health Palliative"
          text="During the COVID-19 pandemic, we launched an essential initiative
          focused on providing specialized palliative care and support for
          vulnerable elderly individuals."
        />
      )}
    </>
  );
};
export default initiatives;
