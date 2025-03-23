const Preview = ({ 
  date = "Sep 24, 2012",
  author = "Jenny Jensen",
  tags = ["Art", "Painting"],
  title = "8 days of john bryce home improvement just for you",
  description = "Tellus integer feugiat scelerisque varius sit amet volutpat consequat mauris nunc congue nisi at ultrices mi tempus imperdiet nulla malesuada pellentesque netus et malesuada",
  imageUrl = "images/image1.png",
  titleColor = "text-black",
  textColor = "text-gray-600",
  borderColor = "border-gray-500",
  tagBorderColor = "border-current",
  backgroundColor = "bg-white"
}) => (
  <div className={`container px-4 w-[90%] sm:px-6 lg:px-8 mx-auto mb-5 ${backgroundColor}`}>
    <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-4">
      {/* Left Content Section */}
      <div className="flex-1 flex flex-col">
        {/* Meta Info */}
        <div className={`flex flex-wrap items-center gap-2 text-xs uppercase font-semibold tracking-wide ${textColor} `}>
          <span>{date}</span>
          <span>/</span>
          <span>by {author}</span>
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className={`border ${tagBorderColor} rounded-full px-2 py-1`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title Section */}
        <h1 className={`${titleColor} text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-semibold max-w-xl uppercase pb-4 border-b ${borderColor}`}>
          {title}
        </h1>

        {/* Description Section */}
<div class="hidden md:block relative mt-[10%] pb-8">
  <p class="text-lg md:text-xl lg:text-2xl max-w-sm">
  {description}
  </p>
  <span class="absolute bottom-0 left-0 w-full h-[1.25px] bg-gray-500"></span>
</div>
      </div>

      {/* Image Section */}
      <span class="">
    <img 
      src={imageUrl} 
      class="w-full h-[80%]"
      alt="image"
    />
  </span>
  
    </div>
    
  </div>
);

export default Preview;