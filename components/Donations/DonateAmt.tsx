import Label from "./LabelReuse";
import { useState } from "react";

const DonateAmt = () => {
  const [amount, setAmount] = useState<string>("");
  const [active, setActive] = useState<string>("₦5,000");

  const handleAmount = (e: React.MouseEvent<HTMLInputElement>) => {
    const currentAmount = e.currentTarget.value;
    setAmount(currentAmount);

    setActive(currentAmount);
  };
  return (
    <div className=" mt-16 max-sm:mt-4 max-md:mt-0">
      <h4 className=" mb-4 font-Roboto font-semibold text-base">
        Donation amount:
      </h4>
      <div className="mb-8 max-sm:grid max-sm:gap-y-8 max-md:mb-12">
        <input
          type="button"
          value="₦5,000"
          name="button"
          className={`text-black px-8 py-2 text-base uppercase ${
            active === "₦5,000" ? "bg-[#369458] text-white" : ""
          }  border-[#369458] border-2 rounded-[3px] cursor-pointer`}
          onClick={handleAmount}
        />
        <input
          type="button"
          value="₦10,000"
          name="button"
          className={`text-[#369458] px-8 py-2 text-base uppercase border-2 ${
            active === "₦10,000" ? "bg-[#369458] text-white" : ""
          } hover:text-white cursor-pointer border-[#595959] hover:bg-[#369458] rounded-[3px] ml-12 max-sm:ml-0 max-md:ml-4`}
          onClick={handleAmount}
        />
        <input
          type="button"
          value="₦15,000"
          name="button"
          className={`text-[#369458] ${
            active === "₦15,000" ? "bg-[#369458] text-white" : ""
          } px-8 py-2 text-base uppercase  border-2 cursor-pointer hover:text-white hover:bg-[#369458] border-[#595959] rounded-[3px] ml-12 max-sm:ml-0 max-md:ml-4`}
          onClick={handleAmount}
        />
        <input
          type="button"
          value="₦20,000"
          name="button"
          className={`text-[#369458] px-8 py-2 text-base uppercase border-2 cursor-pointer ${
            active === "₦20,000" ? "bg-[#369458] text-white" : ""
          } hover:text-white hover:bg-[#369458] border-[#595959] rounded-[3px] ml-12 max-sm:ml-0 max-md:ml-4`}
          onClick={handleAmount}
        />
        <input
          type="button"
          value="₦25,000"
          name="button"
          className={`text-[#369458] px-8 py-2 text-base uppercase border-2 ${
            active === "₦25,000" ? "bg-[#369458] text-white" : ""
          } cursor-pointer hover:text-white hover:bg-[#369458] border-[#595959] rounded-[3px] ml-12 max-sm:ml-0 max-md:ml-4`}
          onClick={handleAmount}
        />
      </div>
      <div className="flex mb-6">
        <select
          name="select"
          id=""
          className=" py-3 px-4 bg-[#369458] outline-none text-white font-Roboto font-bold text-base"
        >
          <option value="NGN">NGN</option>
          <option value="DOLLAR">DOLL</option>
          <option value="EURO">EURO</option>
        </select>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          className="w-[680px] border-[#369458] border-2 italic before:'#this' outline-none pl-4 before:contents-['#'] text-[#595959] font-normal text-base"
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="check"
          name="check"
          value="check"
          style={{
            background: "#369458",
          }}
          className="mr-4 form-checkbox bg-[#369458] max-sm:mr-2"
        />
        <Label
          html="check"
          content="I will cover the 3% processing fee so that 100% of my donation goes to
          JayTee Ojo Foundation"
          broken={false}
        />
      </div>
    </div>
  );
};

export default DonateAmt;
