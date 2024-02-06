const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      style={{
        marginTop: "40px",
        backgroundColor: "#3BA361",
        color: "white",
        boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
      }}
      className="py-2 px-4 rounded flex uppercase justify-center items-center font-Roboto text-base font-black"
    >
      {text}
    </button>
  );
};

export default Button;
