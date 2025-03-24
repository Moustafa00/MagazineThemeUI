const PostGrid = () => (
  <div className="relative mx-auto container">
    <div className="flex flex-col gap-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6" fill="black" viewBox="1 0 20 21">
            <circle cx="8" cy="11" r="5" />
          </svg>
          <span className="uppercase text-lg font-semibold">Latest posts</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <button className="uppercase text-sm font-semibold hover:underline">
            View All
          </button>

          {/* Sorting Dropdown */}
          <div className="uppercase text-xs flex items-center gap-1">
            First Show
            <button className="underline focus:outline-none">Default ˅</button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <span className="uppercase text-xs font-semibold tracking-wide">
          filter by category:
        </span>
        <div className="flex flex-wrap gap-2">
          <button className="border rounded-full px-2 py-1 text-xs uppercase hover:bg-black hover:text-white">
            all
          </button>
          <button className="border rounded-full px-2 py-1 text-xs uppercase hover:bg-black hover:text-white">
            design
          </button>
          <button className="border rounded-full px-2 py-1 text-xs uppercase hover:bg-black hover:text-white">
            ALTYN
          </button>
        </div>
      </div>
    </div>

    {/* Posts Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-3 gap-y-10 md:gap-y-6 mt-8 pb-10 mx-auto">

      {/* Main Featured Post */}
      <div className="col-span-2 row-span-2 h-auto md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image2.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              oct 24, 2012 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                altyn
              </span>
            </p>
            <p className="uppercase border-b text-lg sm:text-xl md:text-lg lg:text-2xl font-semibold mt-2 text-white pb-4">
              Home of the Big Home Kit Skill of Mix Ups in Tim
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:col-span-2 lg:col-span-1  md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image4.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              NOV 24, 2012 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                DESIGN
              </span>
            </p>
            <p className="uppercase border-b text-md sm:text-lg md:text-sm font-semibold mt-2 text-white pb-4">
              read always falls buttered side tip
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:col-span-2 lg:col-span-1  md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image5.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              dec 24, 2012 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                altyn
              </span>
            </p>
            <p className="uppercase border-b text-md sm:text-lg md:text-sm font-semibold mt-2 text-white pb-4">
              The best blog out there today now
            </p>
          </div>
        </div>
      </div>


      <div className="col-span-2 md:col-span-2 lg:col-span-1 md:mt-6 lg:mt-0 lg:col-start-3  md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image6.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              jan 24, 2013 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                altyn
              </span>
            </p>
            <p className="uppercase border-b text-md sm:text-lg md:text-sm font-semibold mt-2 text-white pb-4">
              design that makes our product good
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:col-span-2 lg:col-span-1 row-span-2 lg:col-start-4 md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image8.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              feb 24, 2013 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                design
              </span>
            </p>
            <p className="uppercase border-b text-md sm:text-lg md:text-sm font-semibold mt-2 text-white pb-4">
              Forever is longer than today is
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 row-span-2  md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image3.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              mar 24, 2013 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                design
              </span>
            </p>
            <p className="uppercase border-b text-lg sm:text-xl md:text-lg lg:text-2xl font-semibold mt-2 text-white pb-4">
              try out our best in the spot tops and tricks in
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:col-span-2 lg:col-span-1  md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image7.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              mar 24, 2013 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                design
              </span>
            </p>
            <p className="uppercase border-b text-md sm:text-lg md:text-sm font-semibold mt-2 text-white pb-4">
              try out our best in the spot tops and tricks in
            </p>
          </div>
        </div>
      </div>


      <div className="col-span-2 md:col-span-2 lg:col-span-1 lg:col-start-3 lg:col-span-1  md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image9.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              jun 24, 2013 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                design
              </span>
            </p>
            <p className="uppercase border-b text-md sm:text-lg md:text-sm font-semibold mt-2 text-white pb-4">
              The opus of tim roth's somber life
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:col-span-2 lg:col-span-1 lg:col-start-4 md:h-[95%] lg:h-[93%] group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-full overflow-hidden">
          <img src="images/image10.png" alt="Post 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 px-4">
            <p className="uppercase text-[10px] font-semibold tracking-[.05em] text-white/80 transition-colors group-hover:text-white">
              may 24, 2013 /
              <span className="border rounded-full px-1 py-0.2 mx-1 bg-white/10 backdrop-blur-sm text-white">
                altyn
              </span>
            </p>
            <p className="uppercase border-b text-md sm:text-lg md:text-sm font-semibold mt-2 text-white pb-4">
              the pretty book of the lapua top
            </p>
          </div>
        </div>
      </div>

    </div>
    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-500"></div>


  </div>
);

export default PostGrid;