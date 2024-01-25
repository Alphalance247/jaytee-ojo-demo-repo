import Heading from "./Heading";
import Image from "next/image";
import Label from "./LabelReuse";

const Payment = () => {
  return (
    <div className="">
      <Heading content="4. payment method" />
      <div className="flex items-start gap-x-8">
        <div className=" p-6 border-2 border-[#369458] rounded-[3px]">
          <input
            type="radio"
            id="credit"
            name="creditCard"
            className="bg-[#369458]"
          />
          <label htmlFor="credit" className=" text-[#369458] pl-2">
            CREDIT CARD
          </label>
          <div className="flex items-start mt-6">
            <Image
              src="/assets/donate/visa.svg"
              alt="visacard"
              width={33}
              height={22}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="23"
              viewBox="0 0 35 23"
              fill="none"
            >
              <path
                d="M31.7917 0H3.45833C1.89353 0 0.625 1.28718 0.625 2.875V20.125C0.625 21.7128 1.89353 23 3.45833 23H31.7917C33.3565 23 34.625 21.7128 34.625 20.125V2.875C34.625 1.28718 33.3565 0 31.7917 0Z"
                fill="#252525"
              />
              <path
                d="M13.3743 18.6875C17.2864 18.6875 20.4577 15.4695 20.4577 11.5C20.4577 7.53045 17.2864 4.3125 13.3743 4.3125C9.46233 4.3125 6.29102 7.53045 6.29102 11.5C6.29102 15.4695 9.46233 18.6875 13.3743 18.6875Z"
                fill="#EB001B"
              />
              <path
                d="M21.8753 18.6875C25.7873 18.6875 28.9587 15.4695 28.9587 11.5C28.9587 7.53045 25.7873 4.3125 21.8753 4.3125C17.9633 4.3125 14.792 7.53045 14.792 11.5C14.792 15.4695 17.9633 18.6875 21.8753 18.6875Z"
                fill="#F79E1B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.6253 5.74945C19.3458 7.06075 20.4587 9.14849 20.4587 11.5C20.4587 13.8515 19.3458 15.9392 17.6253 17.2505C15.9049 15.9392 14.792 13.8515 14.792 11.5C14.792 9.14849 15.9049 7.06075 17.6253 5.74945Z"
                fill="#FF5F00"
              />
            </svg>
            <Image
              src="/assets/donate/Group.svg"
              alt="visacard"
              width={33}
              height={22}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="23"
              viewBox="0 0 35 23"
              fill="none"
            >
              <path
                d="M32.0381 22.6405L32.0411 22.6405C33.3942 22.6523 34.5043 21.5298 34.5212 20.131L34.5212 2.88406C34.5157 2.20755 34.2504 1.56137 33.7841 1.0879C33.319 0.615637 32.6921 0.353839 32.0381 0.359477L3.70956 0.359464C3.05854 0.353839 2.43164 0.615637 1.96655 1.0879C1.50028 1.56137 1.23493 2.20755 1.2295 2.88113L1.22949 20.1159C1.23493 20.7924 1.50028 21.4386 1.96655 21.9121C2.43164 22.3844 3.05854 22.6462 3.71258 22.6405H32.0381ZM32.0366 23.3593C32.0361 23.3593 32.0356 23.3593 32.0351 23.3593L32.0381 23.3593H32.0366Z"
                fill="white"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="0.703125"
              />
              <path
                d="M18.7432 22.9999H32.0383C32.7846 23.0062 33.5028 22.7115 34.0349 22.1805C34.567 21.6495 34.8694 20.9258 34.8756 20.1685V16.778C29.8551 19.7023 24.4104 21.8023 18.7432 22.9999Z"
                fill="#F27712"
              />
              <path
                d="M33.703 13.3637H32.4954L31.1354 11.5435H31.0065V13.3637H30.0216V8.84296H31.4754C32.6127 8.84296 33.2692 9.31883 33.2692 10.1754C33.2692 10.8773 32.8589 11.3293 32.1203 11.4721L33.703 13.3637ZM32.2492 10.2111C32.2492 9.7709 31.921 9.54486 31.3113 9.54486H31.0065V10.913H31.2879C31.921 10.913 32.2492 10.675 32.2492 10.2111ZM26.5747 8.84296H29.3651V9.60434H27.5596V10.6156H29.2947V11.3888H27.5596V12.6142H29.3651V13.3756H26.5747V8.84296ZM23.4092 13.4826L21.2754 8.83107H22.3541L23.7023 11.8766L25.0623 8.83107H26.1175L23.9603 13.4826H23.4327H23.4092ZM14.4872 13.4707C12.9865 13.4707 11.8141 12.4357 11.8141 11.0914C11.8141 9.78279 13.0099 8.724 14.5106 8.724C14.9327 8.724 15.2844 8.80727 15.7182 8.99762V10.0445C15.3897 9.71702 14.9477 9.53335 14.4872 9.53296C13.5492 9.53296 12.8341 10.223 12.8341 11.0914C12.8341 12.0074 13.5375 12.6618 14.5341 12.6618C14.9796 12.6618 15.3196 12.519 15.7182 12.1621V13.209C15.2727 13.3993 14.8975 13.4707 14.4872 13.4707ZM11.5092 11.9837C11.5092 12.864 10.7941 13.4707 9.76233 13.4707C9.01199 13.4707 8.47268 13.209 8.01544 12.6142L8.66027 12.055C8.88302 12.4595 9.2582 12.6618 9.72716 12.6618C10.1727 12.6618 10.4892 12.3881 10.4892 12.0312C10.4892 11.829 10.3954 11.6743 10.1961 11.5554C9.97759 11.4478 9.75002 11.3602 9.51613 11.2937C8.58992 10.9962 8.27337 10.675 8.27337 10.0445C8.27337 9.30693 8.95337 8.74779 9.8444 8.74779C10.4072 8.74779 10.9113 8.92624 11.3334 9.25934L10.8175 9.85417C10.6131 9.62673 10.3237 9.49718 10.0203 9.49727C9.5982 9.49727 9.29337 9.71141 9.29337 9.99693C9.29337 10.2349 9.46923 10.3657 10.0554 10.568C11.181 10.9249 11.5092 11.258 11.5092 11.9956V11.9837ZM6.66716 8.84296H7.65199V13.3756H6.66716V8.84296ZM3.50164 13.3756H2.04785V8.84296H3.50164C5.09613 8.84296 6.1982 9.7709 6.1982 11.1033C6.1982 11.7814 5.86992 12.4238 5.29544 12.8521C4.80302 13.209 4.25199 13.3756 3.48992 13.3756H3.50164ZM4.65061 9.97314C4.32233 9.71141 3.94716 9.61624 3.30233 9.61624H3.03268V12.6142H3.30233C3.93544 12.6142 4.33406 12.4952 4.65061 12.2573C4.99061 11.9718 5.18992 11.5435 5.18992 11.1033C5.18992 10.6631 4.99061 10.2468 4.65061 9.97314Z"
                fill="black"
              />
              <path
                d="M18.462 8.724C17.1724 8.724 16.1172 9.7709 16.1172 11.0676C16.1172 12.4476 17.1255 13.4826 18.462 13.4826C19.7751 13.4826 20.8068 12.4357 20.8068 11.1033C20.8068 9.7709 19.7868 8.724 18.462 8.724Z"
                fill="#F27712"
              />
            </svg>
          </div>
        </div>

        <div className="p-6 border-2 border-[#8C8C8C] rounded-[3px]">
          <input
            type="radio"
            id="credit"
            name="creditCard"
            className="bg-[#369458]"
          />
          <label htmlFor="credit" className=" text-[#369458] pl-2">
            CREDIT CARD
          </label>
          <div className="flex mt-6 gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.24074 21.9874L5.61799 19.5106L4.77761 19.4904H0.764648L3.55352 1.21342C3.56221 1.15807 3.59029 1.1067 3.63131 1.07015C3.67253 1.0336 3.72507 1.01355 3.78003 1.01355H10.5465C12.793 1.01355 14.3433 1.49662 15.1525 2.45022C15.532 2.89757 15.7737 3.36518 15.8907 3.87958C16.0133 4.41945 16.0153 5.06437 15.8957 5.85111L15.887 5.90833V6.41249L16.2665 6.63471C16.5859 6.80993 16.8399 7.01042 17.0347 7.23995C17.3592 7.62256 17.5692 8.10876 17.6579 8.68497C17.7496 9.27768 17.7193 9.98317 17.5692 10.7818C17.396 11.7003 17.1162 12.5004 16.7381 13.155C16.3906 13.7581 15.9476 14.2585 15.4217 14.6461C14.9195 15.0145 14.3231 15.2942 13.6486 15.4732C12.9949 15.649 12.2497 15.7378 11.4323 15.7378H10.9058C10.5293 15.7378 10.1636 15.8779 9.87646 16.1292C9.58852 16.3856 9.39818 16.7361 9.33978 17.1193L9.29997 17.3424L8.63337 21.7079L8.60326 21.8681C8.59518 21.9189 8.58144 21.9441 8.56123 21.9613C8.54325 21.9769 8.51739 21.9874 8.49213 21.9874H5.24074Z"
                fill="#28356A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.626 5.96655C16.606 6.10001 16.5828 6.23638 16.5569 6.37652C15.6646 11.112 12.6116 12.7479 8.71262 12.7479H6.72735C6.25048 12.7479 5.84858 13.1056 5.77443 13.5918L4.47011 22.1431C4.42182 22.4624 4.65985 22.75 4.97143 22.75H8.49257C8.90943 22.75 9.26364 22.437 9.32931 22.012L9.36387 21.8271L10.0268 17.4787L10.0695 17.2402C10.1343 16.8137 10.4894 16.5004 10.9062 16.5004H11.4328C14.8442 16.5004 17.5149 15.069 18.2954 10.9263C18.6214 9.19577 18.4526 7.75074 17.5898 6.73449C17.3288 6.42811 17.0049 6.17373 16.626 5.96655Z"
                fill="#298FC2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.6927 5.58188C15.5563 5.54074 15.4156 5.50356 15.2714 5.46994C15.1263 5.43715 14.9778 5.40812 14.8248 5.38264C14.2895 5.29325 13.7029 5.25085 13.0747 5.25085H7.7712C7.64046 5.25085 7.5164 5.28135 7.40546 5.33648C7.16077 5.45803 6.97911 5.69737 6.93506 5.99039L5.80674 13.3765L5.77441 13.5918C5.84857 13.1056 6.25047 12.7479 6.72734 12.7479H8.71261C12.6116 12.7479 15.6646 11.1111 16.5569 6.37655C16.5836 6.23641 16.606 6.10003 16.626 5.96658C16.4003 5.84273 16.1558 5.73684 15.8925 5.64662C15.8274 5.62428 15.7603 5.60276 15.6927 5.58188Z"
                fill="#22284F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.93533 5.99041C6.97938 5.69739 7.16104 5.45805 7.40574 5.33734C7.51748 5.28199 7.64073 5.2515 7.77147 5.2515H13.075C13.7032 5.2515 14.2898 5.29411 14.8251 5.38349C14.978 5.40876 15.1265 5.438 15.2716 5.47079C15.4159 5.50421 15.5565 5.54159 15.6929 5.58253C15.7606 5.60341 15.8277 5.62513 15.8934 5.64664C16.1567 5.73686 16.4014 5.84359 16.6271 5.9666C16.8926 4.21666 16.6248 3.02518 15.7095 1.94627C14.7002 0.758337 12.8788 0.25 10.548 0.25H3.78134C3.30528 0.25 2.89913 0.607757 2.82558 1.09479L0.00721286 19.5597C-0.0483544 19.925 0.224228 20.2545 0.580667 20.2545H4.75811L6.93533 5.99041Z"
                fill="#28356A"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="23"
              viewBox="0 0 86 23"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6624 0H4.04324C3.59023 0 3.20499 0.331726 3.13424 0.782588L0.45712 17.8902C0.403984 18.228 0.663427 18.5321 1.00312 18.5321H4.16306C4.61607 18.5321 5.00131 18.2006 5.07206 17.749L5.794 13.1346C5.86368 12.6829 6.24972 12.3512 6.70192 12.3512H8.79725C13.1574 12.3512 15.6737 10.2245 16.3311 6.01041C16.6272 4.16652 16.3436 2.71802 15.4869 1.70344C14.5462 0.5894 12.8776 0 10.6624 0ZM11.4258 6.2484C11.0639 8.64235 9.24917 8.64235 7.49461 8.64235H6.49561L7.1964 4.17143C7.23815 3.90119 7.47021 3.70226 7.74131 3.70226H8.1992C9.39448 3.70226 10.522 3.70226 11.1046 4.38894C11.4521 4.79854 11.5584 5.40734 11.4258 6.2484Z"
                fill="#28356A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.618 6.04197H27.4483C27.1783 6.04197 26.9449 6.2409 26.9034 6.51114L26.7629 7.40467L26.5415 7.08087C25.8553 6.07695 24.3249 5.74139 22.7978 5.74139C19.2949 5.74139 16.3034 8.41542 15.7208 12.1663C15.4179 14.0373 15.8484 15.8265 16.9017 17.0742C17.8676 18.2213 19.2497 18.6995 20.8939 18.6995C23.7163 18.6995 25.2811 16.8703 25.2811 16.8703L25.1399 17.7581C25.0867 18.0975 25.3462 18.4019 25.684 18.4019H28.5389C28.993 18.4019 29.3764 18.0702 29.4479 17.6185L31.161 6.68383C31.2152 6.34719 30.9566 6.04197 30.618 6.04197ZM26.1998 12.2601C25.894 14.0851 24.4569 15.3104 22.6237 15.3104C21.7033 15.3104 20.9678 15.0128 20.4953 14.4491C20.0268 13.8892 19.849 13.0921 19.9978 12.2043C20.2836 10.3949 21.7448 9.12944 23.5501 9.12944C24.4501 9.12944 25.1818 9.43111 25.6638 9.99947C26.1467 10.5741 26.3383 11.3761 26.1998 12.2601Z"
                fill="#28356A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47.2546 6.31561H44.0692C43.7653 6.31561 43.4798 6.46781 43.3076 6.72248L38.9145 13.2447L37.0523 6.97688C36.9352 6.58476 36.5762 6.31561 36.1696 6.31561H33.0397C32.6591 6.31561 32.395 6.69024 32.5159 7.0512L36.0245 17.4287L32.726 22.122C32.4666 22.4917 32.7279 23 33.1761 23H36.3574C36.6594 23 36.9419 22.8516 37.1133 22.6021L47.7073 7.18865C47.9611 6.82003 47.7006 6.31561 47.2546 6.31561Z"
                fill="#28356A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57.8741 0H51.2541C50.8021 0 50.4169 0.331726 50.3462 0.782588L47.669 17.8902C47.6159 18.228 47.8753 18.5321 48.2131 18.5321H51.6103C51.9256 18.5321 52.1956 18.3001 52.2449 17.984L53.0048 13.1346C53.0745 12.6829 53.4608 12.3512 53.9128 12.3512H56.0073C60.3682 12.3512 62.8837 10.2245 63.542 6.01041C63.8391 4.16652 63.5536 2.71802 62.6969 1.70344C61.757 0.5894 60.0895 0 57.8741 0ZM58.638 6.2484C58.2769 8.64235 56.4621 8.64235 54.7065 8.64235H53.7088L54.4104 4.17143C54.4519 3.90119 54.6823 3.70226 54.9543 3.70226H55.4121C56.6063 3.70226 57.7349 3.70226 58.3175 4.38894C58.6651 4.79854 58.7705 5.40734 58.638 6.2484Z"
                fill="#298FC2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.8247 6.04197H74.6569C74.3849 6.04197 74.1537 6.2409 74.113 6.51114L73.9726 7.40467L73.75 7.08087C73.0639 6.07695 71.5346 5.74139 70.0072 5.74139C66.5046 5.74139 63.5141 8.41542 62.9315 12.1663C62.6295 14.0373 63.0581 15.8265 64.1111 17.0742C65.0792 18.2213 66.4591 18.6995 68.1036 18.6995C70.9257 18.6995 72.4908 16.8703 72.4908 16.8703L72.3495 17.7581C72.2964 18.0975 72.5556 18.4019 72.8955 18.4019H75.7497C76.2016 18.4019 76.5868 18.0702 76.6576 17.6185L78.3715 6.68383C78.4238 6.34719 78.1644 6.04197 77.8247 6.04197ZM73.4063 12.2601C73.1024 14.0851 71.6631 15.3104 69.8299 15.3104C68.9115 15.3104 68.1741 15.0128 67.7015 14.4491C67.2333 13.8892 67.0571 13.0921 67.2041 12.2043C67.4917 10.3949 68.951 9.12944 70.7563 9.12944C71.6563 9.12944 72.388 9.43111 72.8701 9.99947C73.3548 10.5741 73.5465 11.3761 73.4063 12.2601Z"
                fill="#298FC2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M81.2969 0.470263L78.5802 17.8911C78.527 18.2288 78.7862 18.5329 79.124 18.5329H81.8553C82.3094 18.5329 82.6944 18.2015 82.7641 17.7498L85.4431 0.642958C85.4965 0.30522 85.2371 0 84.8993 0H81.841C81.571 0.00081975 81.3386 0.200019 81.2969 0.470263Z"
                fill="#298FC2"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-10">
        <div>
          <Label html="card" content="Credit Card Holder Name " broken={true} />
          <input
            type="text"
            id="card"
            name="text"
            className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2"
          />
        </div>
        <div>
          <Label html="cardnumber" content="Card Number" broken={true} />

          <input
            type="number"
            id="cardnumber"
            className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2"
          />
        </div>
        <div>
          <div>
            <Label
              html="cardverification"
              content="Credit Card Verification Value"
              broken={false}
            />
            <a
              href="http://"
              className=" pl-28 font-Roboto text-sm font-bold text-[#369458] underline"
            >
              What is a CVV number?
            </a>
          </div>
          <br />

          <input
            type="text"
            id="cardverification"
            name="text"
            className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2"
          />
        </div>
        <div>
          <Label html="carddate" content="Card Number" broken={true} />

          <input
            type="text"
            id="carddate"
            className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2"
            placeholder="MM/YY"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-12 p-4 border-2 border-[#D3D3D3] rounded-[3px] bg-[#F9F9F9] w-[302px] mt-20">
        <div className="">
          <input
            type="checkbox"
            id="robot"
            name="creditCard"
            className="bg-[#369458] "
          />
          <label htmlFor="robot" className=" text-[#369458] pl-4">
            I'm not a robot
          </label>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <g filter="url(#filter0_d_1785_1990)">
              <path
                d="M26.401 6.33783C26.2655 6.16908 26.126 6.0031 25.9824 5.84004C23.6876 3.234 20.5214 1.55399 17.0769 1.1147C13.6324 0.675412 10.1459 1.50698 7.27051 3.45365L11.387 9.53409C12.783 8.58899 14.4757 8.18526 16.148 8.39854C17.8203 8.61181 19.3574 9.42745 20.4716 10.6927C20.7213 10.9763 20.9459 11.2781 21.1441 11.5947L17.5003 15.2385H29.6097V3.12915L26.401 6.33783Z"
                fill="#1C3AA9"
              />
            </g>
            <g filter="url(#filter1_d_1785_1990)">
              <path
                d="M15.2385 1.00061H3.12913L6.30096 4.17243C3.93077 6.08788 2.227 8.72002 1.45684 11.6903C0.585324 15.0516 0.969142 18.6152 2.5364 21.7138L9.08876 18.3996C8.32786 16.8953 8.14151 15.1651 8.56464 13.5333C8.98776 11.9014 9.99131 10.4797 11.3873 9.53464C11.4424 9.49736 11.4979 9.46093 11.5539 9.42534L15.2385 13.1099V1.00061Z"
                fill="#4285F4"
              />
            </g>
            <g filter="url(#filter2_d_1785_1990)">
              <path
                d="M1 15.3716H13.1093L9.45072 19.0302C10.2265 20.2318 11.3592 21.1693 12.6981 21.705C14.2634 22.3312 16.0032 22.3652 17.5917 21.8007C19.1803 21.2363 20.5085 20.112 21.3277 18.6385L26.6238 23.9213C24.9537 26.1132 22.6744 27.7873 20.0504 28.7197C16.7784 29.8824 13.1948 29.8123 9.97081 28.5225C7.70288 27.6153 5.72237 26.1482 4.20162 24.2793L1 27.4809V15.3716Z"
                fill="#ABABAB"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1785_1990"
                x="6.27051"
                y="0"
                width="24.3389"
                height="16.2385"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1785_1990"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1785_1990"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_1785_1990"
                x="0"
                y="0.000610352"
                width="16.2383"
                height="22.7131"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1785_1990"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1785_1990"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d_1785_1990"
                x="0"
                y="14.3716"
                width="27.624"
                height="16.1719"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.38 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1785_1990"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1785_1990"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="21"
            viewBox="0 0 56 21"
            fill="none"
          >
            <path
              d="M4.2373 3.52734C4.10059 3.50456 3.95247 3.49316 3.79297 3.49316C3.20052 3.49316 2.7985 3.74544 2.58691 4.25V8H1.68359V2.7168H2.5625L2.57715 3.32715C2.87337 2.85514 3.29329 2.61914 3.83691 2.61914C4.0127 2.61914 4.14616 2.64193 4.2373 2.6875V3.52734Z"
              fill="#555555"
            />
            <path
              d="M7.16699 8.09766C6.45085 8.09766 5.86816 7.86328 5.41895 7.39453C4.96973 6.92253 4.74512 6.29264 4.74512 5.50488V5.33887C4.74512 4.81478 4.8444 4.34766 5.04297 3.9375C5.24479 3.52409 5.52474 3.20182 5.88281 2.9707C6.24414 2.73633 6.63477 2.61914 7.05469 2.61914C7.74154 2.61914 8.27539 2.84538 8.65625 3.29785C9.03711 3.75033 9.22754 4.39811 9.22754 5.24121V5.61719H5.64844C5.66146 6.13802 5.81283 6.55957 6.10254 6.88184C6.39551 7.20085 6.7666 7.36035 7.21582 7.36035C7.53483 7.36035 7.80501 7.29525 8.02637 7.16504C8.24772 7.03483 8.44141 6.8623 8.60742 6.64746L9.15918 7.07715C8.71647 7.75749 8.05241 8.09766 7.16699 8.09766ZM7.05469 3.36133C6.6901 3.36133 6.38411 3.49479 6.13672 3.76172C5.88932 4.02539 5.73633 4.39648 5.67773 4.875H8.32422V4.80664C8.29818 4.34766 8.17448 3.99284 7.95312 3.74219C7.73177 3.48828 7.43229 3.36133 7.05469 3.36133Z"
              fill="#555555"
            />
            <path
              d="M15.6484 5.74414C15.5605 6.49609 15.2822 7.07715 14.8135 7.4873C14.348 7.89421 13.7279 8.09766 12.9531 8.09766C12.1133 8.09766 11.4395 7.79655 10.9316 7.19434C10.4271 6.59212 10.1748 5.78646 10.1748 4.77734V4.09375C10.1748 3.43294 10.292 2.85189 10.5264 2.35059C10.764 1.84928 11.0993 1.46517 11.5322 1.19824C11.9652 0.92806 12.4665 0.792969 13.0361 0.792969C13.7913 0.792969 14.3968 1.00456 14.8525 1.42773C15.3083 1.84766 15.5736 2.43034 15.6484 3.17578H14.7061C14.6247 2.60938 14.4473 2.19922 14.1738 1.94531C13.9036 1.69141 13.5244 1.56445 13.0361 1.56445C12.4372 1.56445 11.9668 1.78581 11.625 2.22852C11.2865 2.67122 11.1172 3.30111 11.1172 4.11816V4.80664C11.1172 5.57812 11.2783 6.19173 11.6006 6.64746C11.9229 7.10319 12.3737 7.33105 12.9531 7.33105C13.474 7.33105 13.8727 7.21387 14.1494 6.97949C14.4294 6.74186 14.6149 6.33008 14.7061 5.74414H15.6484Z"
              fill="#555555"
            />
            <path
              d="M20.8584 6.14453H17.8799L17.2109 8H16.2441L18.959 0.890625H19.7793L22.499 8H21.5371L20.8584 6.14453ZM18.1631 5.37305H20.5801L19.3691 2.04785L18.1631 5.37305Z"
              fill="#555555"
            />
            <path
              d="M24.3936 5.2168V8H23.4561V0.890625H26.0781C26.8561 0.890625 27.4648 1.08919 27.9043 1.48633C28.347 1.88346 28.5684 2.40918 28.5684 3.06348C28.5684 3.75358 28.3519 4.28581 27.9189 4.66016C27.4893 5.03125 26.8724 5.2168 26.0684 5.2168H24.3936ZM24.3936 4.4502H26.0781C26.5794 4.4502 26.9635 4.33301 27.2305 4.09863C27.4974 3.861 27.6309 3.51921 27.6309 3.07324C27.6309 2.65007 27.4974 2.31152 27.2305 2.05762C26.9635 1.80371 26.5973 1.67188 26.1318 1.66211H24.3936V4.4502Z"
              fill="#555555"
            />
            <path
              d="M34.6768 1.66211H32.3916V8H31.459V1.66211H29.1787V0.890625H34.6768V1.66211Z"
              fill="#555555"
            />
            <path
              d="M40.8242 5.74414C40.7363 6.49609 40.458 7.07715 39.9893 7.4873C39.5238 7.89421 38.9036 8.09766 38.1289 8.09766C37.2891 8.09766 36.6152 7.79655 36.1074 7.19434C35.6029 6.59212 35.3506 5.78646 35.3506 4.77734V4.09375C35.3506 3.43294 35.4678 2.85189 35.7021 2.35059C35.9398 1.84928 36.2751 1.46517 36.708 1.19824C37.1409 0.92806 37.6423 0.792969 38.2119 0.792969C38.9671 0.792969 39.5726 1.00456 40.0283 1.42773C40.4841 1.84766 40.7493 2.43034 40.8242 3.17578H39.8818C39.8005 2.60938 39.623 2.19922 39.3496 1.94531C39.0794 1.69141 38.7002 1.56445 38.2119 1.56445C37.613 1.56445 37.1426 1.78581 36.8008 2.22852C36.4622 2.67122 36.293 3.30111 36.293 4.11816V4.80664C36.293 5.57812 36.4541 6.19173 36.7764 6.64746C37.0986 7.10319 37.5495 7.33105 38.1289 7.33105C38.6497 7.33105 39.0485 7.21387 39.3252 6.97949C39.6051 6.74186 39.7907 6.33008 39.8818 5.74414H40.8242Z"
              fill="#555555"
            />
            <path
              d="M47.5723 8H46.6299V4.71387H43.0459V8H42.1084V0.890625H43.0459V3.94727H46.6299V0.890625H47.5723V8Z"
              fill="#555555"
            />
            <path
              d="M53.251 6.14453H50.2725L49.6035 8H48.6367L51.3516 0.890625H52.1719L54.8916 8H53.9297L53.251 6.14453ZM50.5557 5.37305H52.9727L51.7617 2.04785L50.5557 5.37305Z"
              fill="#555555"
            />
            <path
              d="M0.75 16.5391V18.7656H0V13.0781H2.09766C2.72005 13.0781 3.20703 13.237 3.55859 13.5547C3.91276 13.8724 4.08984 14.293 4.08984 14.8164C4.08984 15.3685 3.91667 15.7943 3.57031 16.0938C3.22656 16.3906 2.73307 16.5391 2.08984 16.5391H0.75ZM0.75 15.9258H2.09766C2.4987 15.9258 2.80599 15.832 3.01953 15.6445C3.23307 15.4544 3.33984 15.181 3.33984 14.8242C3.33984 14.4857 3.23307 14.2148 3.01953 14.0117C2.80599 13.8086 2.51302 13.7031 2.14062 13.6953H0.75V15.9258Z"
              fill="#555555"
            />
            <path
              d="M6.97656 15.1875C6.86719 15.1693 6.7487 15.1602 6.62109 15.1602C6.14714 15.1602 5.82552 15.362 5.65625 15.7656V18.7656H4.93359V14.5391H5.63672L5.64844 15.0273C5.88542 14.6497 6.22135 14.4609 6.65625 14.4609C6.79688 14.4609 6.90365 14.4792 6.97656 14.5156V15.1875Z"
              fill="#555555"
            />
            <path
              d="M8.42969 18.7656H7.70703V14.5391H8.42969V18.7656ZM7.64844 13.418C7.64844 13.3008 7.68359 13.2018 7.75391 13.1211C7.82682 13.0404 7.93359 13 8.07422 13C8.21484 13 8.32161 13.0404 8.39453 13.1211C8.46745 13.2018 8.50391 13.3008 8.50391 13.418C8.50391 13.5352 8.46745 13.6328 8.39453 13.7109C8.32161 13.7891 8.21484 13.8281 8.07422 13.8281C7.93359 13.8281 7.82682 13.7891 7.75391 13.7109C7.68359 13.6328 7.64844 13.5352 7.64844 13.418Z"
              fill="#555555"
            />
            <path
              d="M10.9844 17.7852L12.0312 14.5391H12.7695L11.2539 18.7656H10.7031L9.17188 14.5391H9.91016L10.9844 17.7852Z"
              fill="#555555"
            />
            <path
              d="M16.0117 18.7656C15.9701 18.6823 15.9362 18.5339 15.9102 18.3203C15.5742 18.6693 15.1732 18.8438 14.707 18.8438C14.2904 18.8438 13.9479 18.7266 13.6797 18.4922C13.4141 18.2552 13.2812 17.9557 13.2812 17.5938C13.2812 17.1536 13.4479 16.8125 13.7812 16.5703C14.1172 16.3255 14.5885 16.2031 15.1953 16.2031H15.8984V15.8711C15.8984 15.6185 15.8229 15.418 15.6719 15.2695C15.5208 15.1185 15.2982 15.043 15.0039 15.043C14.7461 15.043 14.5299 15.1081 14.3555 15.2383C14.181 15.3685 14.0938 15.526 14.0938 15.7109H13.3672C13.3672 15.5 13.4414 15.2969 13.5898 15.1016C13.7409 14.9036 13.944 14.7474 14.1992 14.6328C14.457 14.5182 14.7396 14.4609 15.0469 14.4609C15.5339 14.4609 15.9154 14.5833 16.1914 14.8281C16.4674 15.0703 16.6107 15.4049 16.6211 15.832V17.7773C16.6211 18.1654 16.6706 18.474 16.7695 18.7031V18.7656H16.0117ZM14.8125 18.2148C15.0391 18.2148 15.2539 18.1562 15.457 18.0391C15.6602 17.9219 15.8073 17.7695 15.8984 17.582V16.7148H15.332C14.4466 16.7148 14.0039 16.974 14.0039 17.4922C14.0039 17.7188 14.0794 17.8958 14.2305 18.0234C14.3815 18.151 14.5755 18.2148 14.8125 18.2148Z"
              fill="#555555"
            />
            <path
              d="M19.4492 18.2539C19.707 18.2539 19.9323 18.1758 20.125 18.0195C20.3177 17.8633 20.4245 17.668 20.4453 17.4336H21.1289C21.1159 17.6758 21.0326 17.9062 20.8789 18.125C20.7253 18.3438 20.5195 18.5182 20.2617 18.6484C20.0065 18.7786 19.7357 18.8438 19.4492 18.8438C18.8737 18.8438 18.4154 18.6523 18.0742 18.2695C17.7357 17.8841 17.5664 17.3581 17.5664 16.6914V16.5703C17.5664 16.1589 17.6419 15.793 17.793 15.4727C17.944 15.1523 18.1602 14.9036 18.4414 14.7266C18.7253 14.5495 19.0599 14.4609 19.4453 14.4609C19.9193 14.4609 20.3125 14.6029 20.625 14.8867C20.9401 15.1706 21.1081 15.5391 21.1289 15.9922H20.4453C20.4245 15.7188 20.3203 15.4948 20.1328 15.3203C19.9479 15.1432 19.7188 15.0547 19.4453 15.0547C19.0781 15.0547 18.793 15.1875 18.5898 15.4531C18.3893 15.7161 18.2891 16.0977 18.2891 16.5977V16.7344C18.2891 17.2214 18.3893 17.5964 18.5898 17.8594C18.7904 18.1224 19.0768 18.2539 19.4492 18.2539Z"
              fill="#555555"
            />
            <path
              d="M23.3242 17.707L24.3086 14.5391H25.082L23.3828 19.418C23.1198 20.1211 22.7018 20.4727 22.1289 20.4727L21.9922 20.4609L21.7227 20.4102V19.8242L21.918 19.8398C22.1628 19.8398 22.3529 19.7904 22.4883 19.6914C22.6263 19.5924 22.7396 19.4115 22.8281 19.1484L22.9883 18.7188L21.4805 14.5391H22.2695L23.3242 17.707Z"
              fill="#555555"
            />
            <path
              d="M37.9297 13.6953H36.1016V18.7656H35.3555V13.6953H33.5312V13.0781H37.9297V13.6953Z"
              fill="#555555"
            />
            <path
              d="M40.0234 18.8438C39.4505 18.8438 38.9844 18.6562 38.625 18.2812C38.2656 17.9036 38.0859 17.3997 38.0859 16.7695V16.6367C38.0859 16.2174 38.1654 15.8438 38.3242 15.5156C38.4857 15.1849 38.7096 14.9271 38.9961 14.7422C39.2852 14.5547 39.5977 14.4609 39.9336 14.4609C40.4831 14.4609 40.9102 14.6419 41.2148 15.0039C41.5195 15.3659 41.6719 15.8841 41.6719 16.5586V16.8594H38.8086C38.819 17.276 38.9401 17.6133 39.1719 17.8711C39.4062 18.1263 39.7031 18.2539 40.0625 18.2539C40.3177 18.2539 40.5339 18.2018 40.7109 18.0977C40.888 17.9935 41.043 17.8555 41.1758 17.6836L41.6172 18.0273C41.263 18.5716 40.7318 18.8438 40.0234 18.8438ZM39.9336 15.0547C39.6419 15.0547 39.3971 15.1615 39.1992 15.375C39.0013 15.5859 38.8789 15.8828 38.832 16.2656H40.9492V16.2109C40.9284 15.8438 40.8294 15.5599 40.6523 15.3594C40.4753 15.1562 40.2357 15.0547 39.9336 15.0547Z"
              fill="#555555"
            />
            <path
              d="M44.5547 15.1875C44.4453 15.1693 44.3268 15.1602 44.1992 15.1602C43.7253 15.1602 43.4036 15.362 43.2344 15.7656V18.7656H42.5117V14.5391H43.2148L43.2266 15.0273C43.4635 14.6497 43.7995 14.4609 44.2344 14.4609C44.375 14.4609 44.4818 14.4792 44.5547 14.5156V15.1875Z"
              fill="#555555"
            />
            <path
              d="M45.9023 14.5391L45.9219 15.0078C46.2318 14.6432 46.6497 14.4609 47.1758 14.4609C47.7669 14.4609 48.1693 14.6875 48.3828 15.1406C48.5234 14.9375 48.7057 14.7734 48.9297 14.6484C49.1562 14.5234 49.4232 14.4609 49.7305 14.4609C50.6576 14.4609 51.1289 14.9518 51.1445 15.9336V18.7656H50.4219V15.9766C50.4219 15.6745 50.3529 15.4492 50.2148 15.3008C50.0768 15.1497 49.8451 15.0742 49.5195 15.0742C49.2513 15.0742 49.0286 15.1549 48.8516 15.3164C48.6745 15.4753 48.5716 15.6901 48.543 15.9609V18.7656H47.8164V15.9961C47.8164 15.3815 47.5156 15.0742 46.9141 15.0742C46.4401 15.0742 46.1159 15.276 45.9414 15.6797V18.7656H45.2188V14.5391H45.9023Z"
              fill="#555555"
            />
            <path
              d="M54.6992 17.6445C54.6992 17.4492 54.625 17.2982 54.4766 17.1914C54.3307 17.082 54.0742 16.9883 53.707 16.9102C53.3424 16.832 53.0521 16.7383 52.8359 16.6289C52.6224 16.5195 52.4635 16.3893 52.3594 16.2383C52.2578 16.0872 52.207 15.9076 52.207 15.6992C52.207 15.3529 52.3529 15.0599 52.6445 14.8203C52.9388 14.5807 53.3138 14.4609 53.7695 14.4609C54.2487 14.4609 54.6367 14.5846 54.9336 14.832C55.2331 15.0794 55.3828 15.3958 55.3828 15.7812H54.6562C54.6562 15.5833 54.5716 15.4128 54.4023 15.2695C54.2357 15.1263 54.0247 15.0547 53.7695 15.0547C53.5065 15.0547 53.3008 15.112 53.1523 15.2266C53.0039 15.3411 52.9297 15.4909 52.9297 15.6758C52.9297 15.8503 52.9987 15.9818 53.1367 16.0703C53.2747 16.1589 53.5234 16.2435 53.8828 16.3242C54.2448 16.4049 54.5378 16.5013 54.7617 16.6133C54.9857 16.7253 55.151 16.8607 55.2578 17.0195C55.3672 17.1758 55.4219 17.3672 55.4219 17.5938C55.4219 17.9714 55.2708 18.2747 54.9688 18.5039C54.6667 18.7305 54.2747 18.8438 53.793 18.8438C53.4544 18.8438 53.1549 18.7839 52.8945 18.6641C52.6341 18.5443 52.4297 18.3776 52.2812 18.1641C52.1354 17.9479 52.0625 17.7148 52.0625 17.4648H52.7852C52.7982 17.707 52.8945 17.8997 53.0742 18.043C53.2565 18.1836 53.4961 18.2539 53.793 18.2539C54.0664 18.2539 54.2852 18.1992 54.4492 18.0898C54.6159 17.9779 54.6992 17.8294 54.6992 17.6445Z"
              fill="#555555"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Payment;
