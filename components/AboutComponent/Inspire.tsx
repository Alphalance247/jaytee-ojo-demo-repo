import Button from "../Button";
import Image from "next/image";

const Inspire = () => {
  return (
    <div
      className="p-24 grid gap-20"
      style={{ gridTemplateColumns: "450px 1fr" }}
    >
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-[#262626] font-RobotoSlab text-4xl font-bold">
          To the Young Person
        </h2>
        <p className="text-[#595959] text-lg font-Roboto font-normal">
          What do you want to be in future? What do you want to be when you grow
          up? I remember being asked this question as a little boy and you may
          have been asked the same question in a variety of ways. When I was a
          boy, I wanted to be a doctor however at the age of 13, I started my
          first business and my first money.
          <br />
          <br />I had wanted to call my uncle in New York, so, I went to the
          post office in Ado Ekiti and bought 100 units NITEL Phone Card. For
          young people wondering what that is (see picture attached), it is like
          a debit or credit card, it had a chip which stored phone calling units
          which ran down as you called in the public phone booths.
        </p>
        <Button text="LEARN MORE" />
      </div>

      <Image
        width={665}
        height={536}
        src="/assets/About/Achievement.jpg"
        alt="Achievement"
      />
    </div>
  );
};

export default Inspire;
