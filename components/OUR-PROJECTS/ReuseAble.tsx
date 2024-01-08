const ReuseAble: React.FC<{
  paragraph: string;
  text: string;
  heading: string;
  word: Boolean;
}> = ({ paragraph, heading, text, word }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-[5rem]">
      <div className="lg:py-0">
        {word && <p className="text-gray-600">{paragraph}</p>}

        <h2 className="text-[36px] font-bold sm:text-4xl font-RobotoSlab">
          {heading}
        </h2>
      </div>

      <div className="flex-1">
        <p
          className="text-gray-600 ml-[50px] w-[568px] font-Roboto"
          style={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ReuseAble;
