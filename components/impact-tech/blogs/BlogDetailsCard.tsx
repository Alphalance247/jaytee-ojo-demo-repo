import React from "react";

const BlogDetailsCard = ({
  headingText,
  id,
  children,
}: {
  headingText: string;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className="text-[#1B1B1F] w-full md:w-[852px] pb-[30px] scroll-mt-28"
      id={id}
    >
      <h2 className=" font-grostek font-bold text-2xl md:text-[27px]">
        {headingText}
      </h2>
      {children}
    </section>
  );
};

export default BlogDetailsCard;
