const Button: React.FC<{
  text: string;
  isActive: Boolean;
  onClick: () => void;
}> = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`py-6 px-6 text-[#595959]  hover:border-b-4 hover:text-[#369458] ${
        isActive ? "border-b-4 text-[#369458]" : ""
      } border-[#369458] mr-6 font-Roboto text-sm font-black uppercase`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
