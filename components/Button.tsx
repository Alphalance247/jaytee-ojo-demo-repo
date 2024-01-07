const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      style={{
        marginTop: "40px",
        backgroundColor: "#3BA361",
        color: "white",
        boxShadow: " 0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
      }}
      className="py-2 px-4 rounded justify-center items-center flex flex-col gap-2 shadow"
    >
      {text}
    </button>
  );
};

// border-radius: 3px;
// background: var(--Primary-color-primary-color-500, #3BA361);
// box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0px rgba(0, 0, 0, 0.04);

export default Button;
