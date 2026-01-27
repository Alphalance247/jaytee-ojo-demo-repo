const PrimaryButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      style={{
        backgroundColor: "#2A7445",
        color: "white",
        boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
      }}
      className="py-3 px-8 rounded-full inline-flex justify-center items-center font-Roboto text-base font-bold"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
