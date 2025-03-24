const PopularTrendingGrid = () => (

  <div className="mx-auto">
    {/* Header Section */}
    <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-start">
      {/* Popular Header */}
      <div className="md:flex-1 md:pr-4 animate-fadeInUp">
        <span className="uppercase text-lg font-semibold flex items-center">
          <svg className="w-5 h-5 ml-1" fill="black" viewBox="2 0 22 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 2L2 7V17L11 22L20 17V7L11 2Z" />
          </svg>
          Popular
        </span>

        {/* Popular Content */}
        <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-6">
          {["images/image11.png", "images/image12.png"].map((src, index) => (
            <div
              key={index}
              className="flex-1 transform transition duration-300 hover:scale-105"
            >
              <img src={src} alt={`Post ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
              <p className="text-xs text-gray-500 mt-2">
                {index === 0 ? "JUL 24, 2013" : "AUG 24, 2013"} / <span className="border px-2 py-1 text-xs">VISION</span>
              </p>
              <h2 className="text-lg font-bold mt-2">
                {index === 0 ? "A BOX WITH A NEW SHEEN OF COOL TOP" : "THE GREATEST BOOK READ BY OUR DADS"}
              </h2>
              <div className="h-[2px] w-full bg-black mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="md:w-[30%] mt-10 md:mt-0 animate-fade-in-right">
        <span className="uppercase text-base md:text-lg font-semibold flex items-center w-full group hover:text-gray-600 transition-colors duration-300">
          <svg
            className="w-5 h-5 mr-1 transition-transform duration-500 hover:rotate-[30deg] hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
          <span className="animate-pulse-slow">Trending</span>
        </span>

        {/* Trending Content */}
        <div className="space-y-6 mt-6">
          {["OLD SHIRTS TO GET USED TO", "THE HOUSE IS OPEN TO YOU NOW", "RED DRESS WILL BE HERE FOR YOU", "FOR TIME IS HERE MOVE IT NOW"].map(
            (title, index) => (
              <div
                key={index}
                className="border-b pt-2 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500 group-hover:w-full"></div>

                <span className="text-xs uppercase border px-2 py-1 rounded-full inline-block 
            transition-all duration-300 hover:bg-black hover:text-white hover:border-transparent
            animate-rubber-band delay-100">
                  Source
                </span>

                <p className="text-lg md:text-xl mt-2 transition-colors duration-300 group-hover:text-gray-800 
            transform origin-left group-hover:scale-[1.02]">
                  {title}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>



);


export default PopularTrendingGrid;