const PostGallery = () => (
  <div className="flex justify-center">
    <div className="flex flex-wrap gap-0.2 mt-6 justify-baseline items-center space-x-4 mx-auto">
      {[
        { img: "image13.png", text: "THE HOUSE IS OPEN TO YOU NOW" },
        { img: "image14.png", text: "OLD SHIRTS TO GET USED TO" },
        { img: "image15.png", text: "RED DRESS WILL BE HERE FOR YOU" },
        { img: "image16.png", text: "NEW BOXES TO GET BACK TO" },
        { img: "image17.png", text: "HOME OF THE BIG HOME KIT SKILL OF MIX UPS IN TIM" }
      ].map((post, index) => (
        <div key={index}>
          <img src={`images/${post.img}`} alt={`Post ${index + 1}`} className="w-full h-full object-cover" />
          <span className="border rounded-full px-1 py-0.2 mx-1 uppercase mt-3 text-[10px]">altyn</span>
          <p className="uppercase border-b text-l font-semibold mt-2">{post.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default PostGallery;