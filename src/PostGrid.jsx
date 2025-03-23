const PostGrid = () =>(
    <div className="relative w-[90%] mx-auto container">
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
      <button className="border rounded-full px-2 py-1 text-xs uppercase bg-black text-white">
        all
      </button>
      <button className="border rounded-full px-2 py-1 text-xs uppercase">
        design
      </button>
      <button className="border rounded-full px-2 py-1 text-xs uppercase">
        ALTYN
      </button>
    </div>
  </div>
</div>

  {/* Posts Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-3 sm:gap-x-5 gap-y-10 sm:gap-y-15 mt-8 pb-10 sm:pb-20 mx-auto">

<div className="col-span-2 row-span-2 h-auto sm:h-[93%]">  
<div className="relative h-full">
<img src="images/image2.png" alt="Post 1" className="w-full h-full object-cover" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">oct 24, 2012 / <span className="border rounded-full px-1 py-0.2 mx-1">altyn</span></p>
<p className="uppercase border-b text-2xl sm:text-4xl font-semibold mt-2">Home of the Big Home Kit Skill of Mix Ups in Tim</p>
</div>
</div>

<div className="col-span-2 sm:col-span-1 md:col-span-1">  
<div className="relative">
<img src="images/image4.png" alt="Post 2" className="w-full h-auto" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">NOV 24, 2012 / <span className="border rounded-full px-1 py-0.2 mx-1">DESIGN</span></p>
<p className="uppercase border-b text-lg sm:text-xl font-semibold mt-2">READ ALWAYS FALLS BUTTERED SIDE TIP</p>
</div>
</div>

<div className="col-span-2 sm:col-span-1 md:col-span-1"> 
<div className="relative">
<img src="images/image5.png" alt="Post 3" className="w-full h-auto" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">dec 24, 2012 / <span className="border rounded-full px-1 py-0.2 mx-1">altyn</span></p>
<p className="uppercase border-b text-lg sm:text-xl font-semibold mt-2">The best blog out there today now</p>
</div>
</div>

<div className="col-span-2 sm:col-span-1 md:col-span-1 md:col-start-3 sm:-mt-10 md:-mt-18">  
<div className="relative">
<img src="images/image6.png" alt="Post 4" className="w-full sm:w-82 h-auto" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">jan 24, 2013 / <span className="border rounded-full px-1 py-0.2 mx-1">altyn</span></p>
<p className="uppercase border-b text-lg sm:text-xl font-semibold mt-2">design that makes our product good</p>
</div>
</div>

<div className="col-span-2 sm:col-span-1 md:col-span-1 row-span-2 md:col-start-4">
<div className="relative">
<img src="images/image8.png" alt="Post 5" className="w-full h-auto" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">feb 24, 2013 / <span className="border rounded-full px-1 py-0.2 mx-1">design</span></p>
<p className="uppercase border-b text-lg sm:text-xl font-semibold mt-2">Forever is longer than today is</p>
</div>
</div>

<div className="col-span-2 row-span-2 self-end h-auto sm:h-[85%] lg:h-[88%]">
<div className="relative">
<img src="images/image3.png" alt="Post 5" className="w-full h-auto" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">mar 24, 2013 / <span className="border rounded-full px-1 py-0.2 mx-1">design</span></p>
<p className="uppercase border-b text-2xl sm:text-4xl font-semibold mt-2">try out our best in the spot tops and tricks in</p>
</div>
</div>

<div className="col-span-2 sm:col-span-1">
<div className="relative">
<img src="images/image7.png" alt="Post 5" className="w-full h-auto" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">mar 24, 2013 / <span className="border rounded-full px-1 py-0.2 mx-1">design</span></p>
<p className="uppercase border-b text-lg sm:text-xl font-semibold mt-2">try out our best in the spot tops and tricks in</p>
</div>
</div>

<div className="col-span-2 sm:col-span-1 md:col-start-3">
<div className="relative">
<img src="images/image9.png" alt="Post 3" className="w-full h-auto" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">jun 24, 2013 / <span className="border rounded-full px-1 py-0.2 mx-1">design</span></p>
<p className="uppercase border-b text-lg sm:text-xl font-semibold mt-2">The opus of tim roth's somber life</p>
</div>
</div>

<div className="col-span-2 sm:col-span-1 md:col-span-1 md:col-start-4 sm:mb-10 md:mb-15">  
<div className="relative">
<img src="images/image10.png" alt="Post 3" className="w-full h-auto" />
<p className="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">may 24, 2013 / <span className="border rounded-full px-1 py-0.2 mx-1">altyn</span></p>
<p className="uppercase border-b text-lg sm:text-xl font-semibold mt-2">the pretty book of the lapua top</p>
</div>
</div>

</div>
<div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-500"></div>


</div>
);

export default PostGrid;