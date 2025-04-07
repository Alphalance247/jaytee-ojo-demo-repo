const Heading: React.FC<{ content: string }> = ({ content }) => {
  return (
    <h2 className="font-Roboto text-base font-black uppercase text-[#369458] pb-4 border-b-2 border-[#D9D9D9] mb-6">
      {content}
    </h2>
  );
};

export default Heading;
