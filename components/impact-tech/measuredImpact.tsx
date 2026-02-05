const MeasuredImpact = () => {
  return (
    <div className="w-full">
      <div className=" bg-[#2A7445] rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-16 py-8 sm:py-12 md:py-16">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-10 sm:mb-12 md:mb-16">
          Measured Impact, Real Change
        </h2>

        {/* Stats Container */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-8 sm:gap-4 md:gap-12">
          {/* Stat 1 */}
          <div className="flex-1 text-center">
            <p className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-white mb-2 sm:mb-3">
              500+
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-white font-light">
              Learners Trained
            </p>
          </div>

          {/* Divider 1 */}
          <div className="hidden sm:block w-px h-16 sm:h-24 md:h-32 bg-white bg-opacity-40"></div>

          {/* Stat 2 */}
          <div className="flex-1 text-center">
            <p className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-white mb-2 sm:mb-3">
              10+
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-white font-light">
              Communities Reached
            </p>
          </div>

          {/* Divider 2 */}
          <div className="hidden sm:block w-px h-16 sm:h-24 md:h-32 bg-white bg-opacity-40"></div>

          {/* Stat 3 */}
          <div className="flex-1 text-center">
            <p className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-white mb-2 sm:mb-3">
              30+
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-white font-light">
              Teachers Trained
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasuredImpact;
