import Heading from "./Heading";
import Label from "./LabelReuse";

const Billing = () => {
  return (
    <>
      <div>
        <Heading content="3. billing information" />

        <div className="grid grid-cols-2 gap-8 max-sm:grid max-sm:grid-cols-1 max-sm:gap-4">
          <div>
            <Label html="country" content="Country" broken={true} />
            <select
              name="Country"
              id="country"
              className="w-[450px] outline-none border-[#595959] border-2 rounded-[3px] p-2 max-sm:w-[330px] max-md:w-[330px]"
            >
              <option value="Nigeria">Nigeria</option>
              <option value="Nigeria">Benin</option>
              <option value="Nigeria">Uruguay</option>
              <option value="Nigeria">Germany</option>
            </select>
          </div>
          <div>
            <Label html="state" content="State" broken={true} />

            <select
              name="State"
              id="state"
              className="w-[450px] outline-none border-[#595959] border-2 rounded-[3px] p-2 max-sm:w-[330px] max-md:w-[330px]"
            >
              <option value="Nigeria">Oyo</option>
              <option value="Nigeria">Ekiti</option>
              <option value="Nigeria">ogun</option>
              <option value="Nigeria">osun</option>
            </select>
          </div>
          <div>
            <Label html="City" content="City" broken={true} />

            <select
              name="City"
              id="City"
              className="w-[450px] outline-none border-[#595959] border-2 rounded-[3px] p-2 max-sm:w-[330px] max-md:w-[330px]"
            >
              <option value="Nigeria">Ibadan</option>
              <option value="Nigeria">Abuga</option>
              <option value="Nigeria">Lagos</option>
              <option value="Nigeria">Nil</option>
            </select>
          </div>
          <div>
            <Label html="address" content="Address 1" broken={true} />

            <input
              type="text"
              id="address"
              name="text"
              className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2 max-sm:w-[330px] max-md:w-[330px]"
            />
          </div>
          <div>
            <Label
              html="address2"
              content="Address 2(Optional)"
              broken={true}
            />

            <input
              type="text"
              id="address2"
              name="text"
              className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2 max-sm:w-[330px] max-md:w-[330px]"
            />
          </div>
          <div>
            <Label html="postal" content="ZIP or Postal Code " broken={true} />

            <input
              type="text"
              id="postal"
              name="text"
              className="outline-none border-[#595959] border-2 rounded-[3px] w-[450px] p-2 max-sm:w-[330px] max-md:w-[330px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
