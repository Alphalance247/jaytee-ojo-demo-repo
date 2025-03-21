import Button from "./Button";
import { useState } from "react";
import OverView from "./OverviewContent";

const Toggle = () => {
  const [isActive, setIsActive] = useState("Health");

  const handleActiveClick = (text: string) => {
    setIsActive(text);
  };

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <div className="w-[90%] m-auto text-center  max-sm:m-auto max-md:w-[100%] max-lg:w-[100%] uppercase">
          <button
            className={`py-6 px-6 hover:text-[#369458] ${
              isActive === "Health"
                ? "border-b-4 text-[#369458]"
                : "text-[#595959]"
            }  border-[#369458] mr-6 font-Roboto text-sm font-black uppercase hover:border-b-4 max-sm:mr-1 max-sm:p-1 max-sm:text-[7px] max-md:mr-3 max-md:p-3 max-lg:mr-2`}
            onClick={() => handleActiveClick("Health")}
          >
            overview
          </button>

          <Button
            text="structure"
            onClick={() => handleActiveClick("infrastructure")}
            isActive={isActive === "infrastructure"}
          />
          <Button
            text="facilitators"
            onClick={() => handleActiveClick("water")}
            isActive={isActive === "water"}
          />
          <Button
            text="resources"
            onClick={() => handleActiveClick("renovation")}
            isActive={isActive === "renovation"}
          />
          <Button
            text="testimonials"
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
          <OverView />
        </>
      )}
    </>
  );
};

export default Toggle;
