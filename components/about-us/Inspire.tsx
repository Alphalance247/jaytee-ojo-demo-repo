import Link from "next/link";
import Button from "../Button";
import Image from "next/image";

const Inspire = () => {
  return (
    <div
      className="p-24 grid gap-x-20 max-sm:p-6 max-sm:flex max-sm:items-center max-sm:flex-col max-sm:gap-y-10 max-md:p-8 max-md:flex max-md:gap-x-8"
      style={{ gridTemplateColumns: "450px auto" }}
    >
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-[#262626] font-RobotoSlab text-4xl font-bold max-sm:text-[2rem] max-md:text-3xl">
          To the Young Person
        </h2>
        <p className="text-[#595959] text-lg font-Roboto font-normal max-sm:text-base max-md:text-base">
          What do you want to be in future? What do you want to be when you grow
          up? I remember being asked this question as a little boy and you may
          have been asked the same question in a variety of ways. When I was a
          boy, I wanted to be a doctor however at the age of 13, I started my
          first business and my first money.
        </p>
        <p className="text-[#595959] text-lg font-Roboto font-normal mb-12 max-sm:mb-4 max-sm:text-base max-md:text-base max-md:mb-4">
          I had wanted to call my uncle in New York, so, I went to the post
          office in Ado Ekiti and bought 100 units NITEL Phone Card. For young
          people wondering what that is (see picture attached), it is like a
          debit or credit card, it had a chip which stored phone calling units
          which ran down as you called in the public phone booths.
        </p>
        <Link href={"/our-project/trainer"}>
          <Button text="LEARN MORE" />
        </Link>
      </div>

      <Image
        width={665}
        height={536}
        src="/assets/About/Achievement.jpg"
        alt="Achievement"
        className=" max-md:h-[300px]"
      />
    </div>
  );
};

export default Inspire;
