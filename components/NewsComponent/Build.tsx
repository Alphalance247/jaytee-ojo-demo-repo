import build from "next/dist/build";

const Build = () => {
  return (
    <div className="p-24 bg-[#F5F5F5]">
      <div className="px-8 grid grid-cols-2 gap-x-16">
        <h3 className=" text-4xl font-bold font-RobotoSlab text-[#262626]">
          Building the future
        </h3>
        <p className=" font-Roboto text-base text-[#595959]">
          Lorem ipsum dolor sit amet consectetur. Ridiculus tortor enim commodo
          fringilla venenatis lectus in. Lorem ipsum dolor sit amet
        </p>
      </div>

      <div className="grid grid-cols-2 mt-16 gap-x-8">
        <div className=" bg-[#205A35] p-8 rounded">
          <div className="bg-white p-4 rounded">
            <h5 className=" font-RobotoSlab text-2xl font-bold mb-4">
              Benefits
            </h5>
            <ol className="text-[#595959] font-Roboto text-base">
              <li>
                1. Our Young People learn critical and solution-based thinking
                from teen-age
              </li>
              <li>
                2. Our Young People learn skills that opens economic
                opportunities for them
              </li>
              <li>
                3. Our Young People can become experts before they leave formal
                education making them very attractive post study
              </li>
            </ol>
          </div>
        </div>
        <div className=" bg-[#205A35] p-8 rounded">
          <div className="bg-white p-4 rounded">
            <h5 className=" font-RobotoSlab text-2xl font-bold mb-4">
              Courses
            </h5>
            <ol className="text-[#595959] font-Roboto text-base">
              <li>1. HyperText Markup Language (HTML)</li>
              <li>2. Project Cascading Style Sheets (CSS)</li>
              <li>3. Java Script (JS) Project</li>
              <li>4. Python Project</li>
              <li>5. Bootstrap</li>
              <li>6. Data Management system</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Build;
