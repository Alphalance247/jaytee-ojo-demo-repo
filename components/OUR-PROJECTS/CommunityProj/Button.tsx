const Button: React.FC<{
  text: string;
  isActive: Boolean;
  onClick: () => void;
}> = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`py-6 px-6 text-[#595959]  hover:border-b-4 hover:text-[#369458] ${
        isActive ? "border-b-4 text-[#369458]" : ""
      } border-[#369458] mr-6 font-Roboto text-sm font-black uppercase max-sm:mr-1 max-sm:p-1 max-sm:text-[8px] max-md:mr-3 max-md:p-3`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
