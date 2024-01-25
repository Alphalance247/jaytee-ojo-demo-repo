import Heading from "./Heading";
import Label from "./LabelReuse";

const ContactInfo = () => {
  return (
    <div>
      <Heading content="2. Contact information" />
      <div className="grid grid-cols-2 gap-8 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-4">
        <div>
          <Label html="Firstname" content="First name" broken={true} />
          <input
            type="text"
            id="Firstname"
            name="Firstname"
            className=" outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2 max-sm:w-[330px]"
          />
        </div>
        <div>
          <Label html="lastname" content="Last name" broken={true} />

          <input
            type="text"
            id="lastname"
            name="lastname"
            className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2 max-sm:w-[330px]"
          />
        </div>
        <div>
          <Label html="usermail" content="Email" broken={true} />

          <input
            type="email"
            id="usermail"
            name="usermail"
            className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2 max-sm:w-[330px]"
          />
        </div>
        <div>
          <Label
            html="number"
            content="Phone number (Optional)"
            broken={true}
          />

          <input
            type="number"
            id="number"
            name="number"
            className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2 max-sm:w-[330px]"
          />
        </div>
        <div>
          <input type="checkbox" id="check" name="check" className="mr-4" />
          <Label
            html="check"
            content=" It's okay to contact me in the future."
            broken={false}
          />
        </div>
        <div>
          <p className=" text-xs text-[#595959] font-Roboto">
            By providing your cell phone number, you agree to receive calls and
            texts to that number from JayTee Ojo Foundation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
