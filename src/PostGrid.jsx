const PostGrid = () =>(
    <div className="mt-10 relative w-[90%] mx-auto">
    <span className="uppercase text-l font-semibold flex items-center">
      <svg className="w-6 h-6 ml-1" fill="black" viewBox="1 0 20 21">
        <circle cx="8" cy="11" r="5" />
      </svg>
      Latest posts
    </span>

    <p className="uppercase absolute right-0 text-sm font-semibold cursor-pointer">
      View All
    </p>

    {/* Filter*/}
    <p className="uppercase text-[10px] font-semibold tracking-[.05em] mt-7 flex space-x-1">
      filter by category:  
      <span className="border rounded-full px-2 py-0.5 bg-black text-white">all</span> 
      <span className="border rounded-full px-2 py-0.5">design</span> 
      <span className="border rounded-full px-2 py-0.5">ALTYN</span> 
    </p>

    {/* Sorting Dropdown */}
    <p className="uppercase absolute right-0 text-xs">
      First Show <span><u>Default</u> ˅</span>
    </p>
  


  {/* Posts Grid */}
<div className="grid md:grid-cols-4 gap-x-5 gap-y-15 mt-8 pb-20 mx-auto">

<div className="col-span-2 row-span-2 h-[93%]">  
<div className="relative h-full">
<img src="images/image2.png" alt="Post 1" className="w-full h-full object-cover" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">oct 24, 2012 / <span class="border rounded-full px-1 py-0.2 mx-1">altyn</span></p>
<p className="uppercase border-b text-4xl font-semibold mt-2">Home of the Big Home Kit Skill of Mix Ups in Tim</p>
</div>
</div>


<div className="col-span-2 md:col-span-1">  
<div className="relative">
<img src="images/image4.png" alt="Post 2" className="w-full h-auto" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">NOV 24, 2012 / <span class="border rounded-full px-1 py-0.2 mx-1">DESIGN</span></p>
<p className="uppercase border-b text-xl font-semibold mt-2">READ ALWAYS FALLS BUTTERED SIDE TIP</p>
</div>
</div>


<div className="col-span-2 md:col-span-1"> 
<div className="relative">
<img src="images/image5.png" alt="Post 3" className="w-full h-auto" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">dec 24, 2012 / <span class="border rounded-full px-1 py-0.2 mx-1">altyn</span></p>
<p className="uppercase border-b text-xl font-semibold mt-2">The best blog out there today now</p>
</div>
</div>



<div className="col-span-2 md:col-span-1 md:col-start-3 -mt-18">  
<div className="relative">
<img src="images/image6.png" alt="Post 4" className="w-82 h-auto" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">jan 24, 2013 / <span class="border rounded-full px-1 py-0.2 mx-1">altyn</span></p>
<p className="uppercase border-b text-xl font-semibold mt-2">design that makes our product good</p>
</div>
</div>
<div className="col-span-2 md:col-span-1 row-span-2 md:col-start-4  ">
<div className="relative">
<img src="images/image8.png" alt="Post 5" className="w-full h-auto" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">feb 24, 2013 / <span class="border rounded-full px-1 py-0.2 mx-1">design</span></p>
<p className="uppercase border-b text-xl font-semibold mt-2">Forever is longer than today is</p>
</div>
</div>


<div className="col-span-2 row-span-2 self-end h-[93%]">
<div className="relative">
<img src="images/image3.png" alt="Post 5" className="w-full h-auto" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">mar 24, 2013 / <span class="border rounded-full px-1 py-0.2 mx-1">design</span></p>
<p className="uppercase border-b text-4xl font-semibold mt-2">try out our best in the spot tops and tricks in</p>
</div>
</div>

<div className="col-span-2 md:col-span-1 ">
<div className="relative">
<img src="images/image7.png" alt="Post 5" className="w-full h-auto" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">mar 24, 2013 / <span class="border rounded-full px-1 py-0.2 mx-1">design</span></p>
<p className="uppercase border-b text-xl font-semibold mt-2">try out our best in the spot tops and tricks in</p>
</div>
</div>

<div className="col-span-2 md:col-span-1 md:col-start-3 ">
<div className="relative">
<img src="images/image9.png" alt="Post 3" className="w-full h-auto" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">jun 24, 2013 / <span class="border rounded-full px-1 py-0.2 mx-1">design</span></p>
<p className="uppercase border-b text-xl font-semibold mt-2">The opus of tim roth's somber life</p>
</div>
</div>

<div className="col-span-2 md:col-span-1 md:col-start-4 mb-15">  
<div className="relative">
<img src="images/image10.png" alt="Post 3" className="w-full h-auto" />
<p class="uppercase mt-3 text-[10px] font-semibold tracking-[.05em]">may 24, 2013 / <span class="border rounded-full px-1 py-0.2 mx-1">altyn</span></p>
<p className="uppercase border-b text-xl font-semibold mt-2">the pretty book of the lapua top</p>
</div>
</div>


</div>


<div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-500"></div>


</div>
);

export default PostGrid;