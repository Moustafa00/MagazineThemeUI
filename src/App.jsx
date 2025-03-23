import Header from './Header';
import Preview from './Preview';
import PostGrid from './PostGrid';
import PopularTrendingGrid from './PopularTrendingGrid';
import PostGallery from './PostGallery';
import FooterSection from './FooterSection';


function App() {

  return (
    <>   
    <Header />
    <Preview />
    <PostGrid />
    <PopularTrendingGrid /> 
    <Preview
  date="Sep 24, 2013"
  author="Jenny slate"
  tags={["Design", "Innovation"]}
  title="Jenny Slate Interview"
  description="Tellus integer feugiat scelerisque varius. Sit amet volutpat consequat mauris nunc congue nisi. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Netes et malesuada fames ac turpis egestas sed."
  imageUrl="images/cover1.png"  
  backgroundColor = "bg-gray-200"
/>
    <PostGallery/>
    <FooterSection/>
    </>
  );
}

export default App;
