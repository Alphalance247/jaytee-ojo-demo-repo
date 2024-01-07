import Button from "../Button";

const PastProj = () => {
  return (
    <div className=" bg-white">
      <div className="w-[90%] m-auto p-12">
        <div className="w-[90%] m-auto flex justify-start items-center  gap-64">
          <div className=" w-[600px] flex flex-col gap-4">
            <h3 className="text-[#262626] font-bold text-[36px] ">
              Past Projects
            </h3>
            <p className="text-[#595959] break-words leading-6 font-normal">
              Every project leaves a lasting legacy of change, showcasing the
              tangible impact of our dedication. From educational programs to
              healthcare initiatives, each one leaves an indelible mark on the
              communities it serves.
            </p>
          </div>

          <Button text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

export default PastProj;
