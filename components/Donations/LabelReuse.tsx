const Label: React.FC<{ content: string; html: string; broken: Boolean }> = ({
  html,
  content,
  broken,
}) => {
  return (
    <>
      <label
        htmlFor={html}
        className="font-Roboto text-sm font-normal mb-4 max-sm:text-xs"
      >
        {content}
        <span className="text-[#E60303] font-Roboto text-sm">*</span>
      </label>
      {broken && <br />}
      {broken && <br />}
    </>
  );
};

export default Label;
