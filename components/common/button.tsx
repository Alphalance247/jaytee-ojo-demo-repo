const PrimaryButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      // style={{
      //   backgroundColor: "#2A7445",
      //   color: "white",
      //   boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
      // }}
      className="py-3 px-8 rounded-full inline-flex justify-center items-center font-Roboto text-base font-bold bg-[#2A7445] text-white shadow-[0px_8px_16px_rgba(0,0,0,0.08)] hover:opacity-90"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
