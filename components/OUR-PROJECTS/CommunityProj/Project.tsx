import Container from "@/components/common/container";

const Projects = () => {
  return (
    <Container>
      <div className="text-center flex flex-col gap-y-4">
        <h4 className=" font-Roboto text-base font-black text-[#3BA361]">
          OUR PAST PROJECTS
        </h4>
        <h1 className=" font-RobotoSlab text-4xl font-bold text-[#262626] max-sm:text-2xl max-md:text-3xl">
          Community Projects
        </h1>
        <p className="text-[#595959] text-base font-Roboto w-[80%] m-auto max-sm:text-sm max-sm:w-[100%] max-md:w-[100%]">
          Every project leaves a lasting legacy of change, showcasing the
          tangible impact of our dedication. From educational programs to
          healthcare initiatives, each one leaves an indelible mark on the
          communities it serves.
        </p>
      </div>
    </Container>
  );
};

export default Projects;
