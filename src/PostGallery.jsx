const PostGallery = () => (
  <div className="flex justify-center my-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 w-full max-w-screen-xl px-4">
      {[
        { img: "image13.png", text: "THE HOUSE IS OPEN TO YOU NOW" },
        { img: "image14.png", text: "OLD SHIRTS TO GET USED TO" },
        { img: "image15.png", text: "RED DRESS WILL BE HERE FOR YOU" },
        { img: "image16.png", text: "NEW BOXES TO GET BACK TO" },
        { img: "image17.png", text: "HOME OF THE BIG HOME KIT " }
      ].map((post, index) => (
        <div key={index} className="group relative h-full p-2 hover:bg-gray-50 transition-all">
          <div className="aspect-square overflow-hidden">
            <img
              src={`images/${post.img}`}
              alt={`Post ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between mt-3 space-y-2">
            <span className="border border-black rounded-full px-3 py-1 uppercase text-xs font-medium w-fit">
              altyn
            </span>
            <p className="uppercase text-sm md:text-base font-semibold leading-tight">
              {post.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PostGallery;