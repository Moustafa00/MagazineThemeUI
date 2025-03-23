const PopularTrendingGrid= () => ( 

  <div className="w-[90%] mx-auto">
    {/* Header Section */}
    <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-start">
      {/* Popular Header */}
      <div className="md:flex-1 md:pr-4">
        <span className="uppercase text-lg font-semibold flex items-center">
          <svg className="w-5 h-5 ml-1" fill="black" viewBox="2 0 22 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 2L2 7V17L11 22L20 17V7L11 2Z"/>
          </svg>  
          Popular
        </span>
        
        {/* Popular Content */}
        <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img src="images/image11.png" alt="Post 1" className="w-full h-auto"/>
            <p className="text-xs text-gray-500 mt-2">JUL 24, 2013 / <span className="border px-2 py-1 text-xs">VISION</span></p>
            <h2 className="text-lg font-bold mt-2">A BOX WITH A NEW SHEEN OF COOL TOP</h2>
            <div className="h-[2px] w-full bg-black mt-2"/>
          </div>
          <div className="flex-1">
            <img src="images/image12.png" alt="Post 2" className="w-full h-auto"/>
            <p className="text-xs text-gray-500 mt-2">AUG 24, 2013 / <span className="border px-2 py-1 text-xs">VISION</span></p>
            <h2 className="text-lg font-bold mt-2">THE GREATEST BOOK READ BY OUR DADS</h2>
            <div className="h-[2px] w-full bg-black mt-2"/>
          </div>
        </div>
      </div>
  
      {/* Trending Section */}
      <div className="md:w-[30%] mt-10 md:mt-0">
        <span className="uppercase text-lg font-semibold flex items-center w-full">
          <svg className="w-5 h-5 mr-1" fill="black" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
          Trending
        </span>
        
        {/* Trending Content */}
        <div className="space-y-6 mt-6">
          {["OLD SHIRTS TO GET USED TO", "THE HOUSE IS OPEN TO YOU NOW", "RED DRESS WILL BE HERE FOR YOU", "FOR TIME IS HERE MOVE IT NOW"].map(
            (title, index) => (
              <div key={index} className="border-b pt-2">
                <span className="text-xs uppercase border px-2 py-1 rounded-full">Source</span>
                <p className="text-xl md:text-2xl mt-2">{title}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
  
  
  
  );
  
  
  export default PopularTrendingGrid;