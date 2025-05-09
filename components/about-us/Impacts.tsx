import { Data } from "./Data";
const Impacts: React.FC<{
  fill: string;
  textColor: string;
  backgroundCol: string;
  Padd: string;
  border: string;
  width: string;
  borderColor: string;
}> = ({ fill, textColor, backgroundCol, Padd, border, width, borderColor }) => {
  return (
    <div
      className={`${width} pb-24 m-auto border-b-2  border-[#D9D9D9] max-sm:p-4 max-md:p-8  ${backgroundCol} ${Padd} ${border} max-md:w-auto`}
    >
      <h1 className="text-[#262626] font-RobotoSlab text-4xl font-bold mb-20 text-center max-sm:text-2xl max-sm:mb-6 max-md:text-3xl max-md:mb-8 ">
        Our Impact Over the Years
      </h1>
      <div className="grid grid-cols-4 gap-x-16 max-sm:flex flex-col gap-y-7 items-center justify-center max-md:gap-x-8">
        {Data.map((items) => {
          return (
            <div key={items.id}>
              <h2
                className={`font-RobotoSlab text-5xl font-extrabold border-b-2 ${borderColor} pb-4 ${textColor} max-sm:text-center max-sm:text-2xl max-md:text-3xl`}
              >
                {items.number}
              </h2>
              <div className="flex gap-x-4 pt-4 items-center max-md:gap-x-2 max-md:pt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_899_1249)">
                    <path
                      d="M0 2.62501C0 2.32664 0.118526 2.04049 0.329505 1.82951C0.540483 1.61853 0.826631 1.50001 1.125 1.50001H7.5045C9.345 1.50001 10.98 2.38501 12.0045 3.75151C12.5282 3.05141 13.2081 2.48329 13.9902 2.0924C14.7722 1.70152 15.6347 1.49866 16.509 1.50001H22.8765C23.1749 1.50001 23.461 1.61853 23.672 1.82951C23.883 2.04049 24.0015 2.32664 24.0015 2.62501V18.375C24.0015 18.6734 23.883 18.9595 23.672 19.1705C23.461 19.3815 23.1749 19.5 22.8765 19.5H16.116C15.6728 19.5 15.2339 19.5873 14.8244 19.7569C14.415 19.9265 14.0429 20.1751 13.7295 20.4885L12.7965 21.42C12.5856 21.6307 12.2996 21.749 12.0015 21.749C11.7034 21.749 11.4174 21.6307 11.2065 21.42L10.2735 20.4885C9.9601 20.1751 9.58804 19.9265 9.17856 19.7569C8.76909 19.5873 8.33021 19.5 7.887 19.5H1.125C0.826631 19.5 0.540483 19.3815 0.329505 19.1705C0.118526 18.9595 0 18.6734 0 18.375L0 2.62501ZM10.8765 18.111L10.8825 10.5015L10.8795 7.12201C10.8787 6.22742 10.5228 5.36975 9.88993 4.73746C9.25708 4.10517 8.39909 3.75001 7.5045 3.75001H2.25V17.25H7.8855C8.94364 17.25 9.98033 17.5484 10.8765 18.111ZM13.1325 7.12501L13.1265 18.108C14.0222 17.5471 15.0577 17.2498 16.1145 17.25H21.75V3.75001H16.5075C15.6124 3.75001 14.754 4.10559 14.121 4.73852C13.4881 5.37146 13.1325 6.2299 13.1325 7.12501Z"
                      fill={`${fill}`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_899_1249">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className=" text-sm font-Roboto font-medium max-md:text-xs">
                  {items.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Impacts;
