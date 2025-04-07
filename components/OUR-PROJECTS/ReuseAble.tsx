const ReuseAble: React.FC<{
  paragraph: string;
  text: string;
  heading: string;
  word: Boolean;
}> = ({ paragraph, heading, text, word }) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-[2rem] max-sm:block max-sm:w-fit lg:gap-[5rem]">
      <div className="lg:py-0">
        {word && <p className="text-gray-600">{paragraph}</p>}

        <h2 className="text-[36px] font-bold sm:text-4xl font-RobotoSlab max-sm:text-[1.5rem]">
          {heading}
        </h2>
      </div>

      <div className="">
        <p className="text-gray-600 text-base font-normal w-[568px] font-Roboto max-sm:w-fit max-sm:text-xs max-sm:mt-2 max-md:ml-0">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ReuseAble;
