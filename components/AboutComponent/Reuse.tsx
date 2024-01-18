const Reuse: React.FC<{
  button: string;
  content1: string;
  content2: string;
  button2: string;
}> = ({ button, content1, content2, button2 }) => {
  return (
    <div className="flex flex-col gap-y-8 max-sm:gap-y-4 max-md:gap-y-4">
      <div className=" flex items-center">
        <button className="text-[#369458] font-RobotoSlab text-xl font-extrabold max-sm:text-base max-md:text-base">
          {button}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.58 16.59L13.17 12L8.58 7.41L10 6L16 12L10 18L8.58 16.59Z"
            fill="#369458"
          />
        </svg>
      </div>
      <p className=" border-b-[1px] border-[#D9D9D9] pb-4 text-base font-Roboto text-[#595959] font-normal leading-7 max-sm:text-[14px]">
        {content1}
      </p>
      <div className="flex items-center">
        <button className="text-[#369458] font-RobotoSlab text-xl font-extrabold max-sm:text-base max-md:text-base">
          {button2}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.58 16.59L13.17 12L8.58 7.41L10 6L16 12L10 18L8.58 16.59Z"
            fill="#369458"
          />
        </svg>
      </div>

      <p className="text-base font-Roboto text-[#595959] font-normal leading-7 max-sm:text-[14px] ">
        {content2}
      </p>
    </div>
  );
};

export default Reuse;
