import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Pages from './Pages';
import Shop from './Shop';
import Blog from './Blog';
import Video from './Video';
import New from './New';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex flex-col">
            <main className="container mx-auto px-4 sm:px-6 lg:px-20 flex-grow">
              <Header />
              <Home />
            </main>
          </div>
        } />

        <Route path="/pages" element={
          <div className="min-h-screen flex flex-col">
            <main className="container mx-auto px-4 sm:px-6 lg:px-20 flex-grow">
              <Header />
              <Home />
            </main>
          </div>
        } />

        <Route path="/shop" element={
          <div className="min-h-screen flex flex-col">
            <main className="container mx-auto px-4 sm:px-6 lg:px-20 flex-grow">
              <Header />
              <Home />
            </main>
          </div>
        } />

        <Route path="/blog" element={
          <div className="min-h-screen flex flex-col">
            <main className="container mx-auto px-4 sm:px-6 lg:px-20 flex-grow">
              <Header />
              <Home />
            </main>
          </div>
        } />

        <Route path="/video" element={
          <div className="min-h-screen flex flex-col">
            <main className="container mx-auto px-4 sm:px-6 lg:px-20 flex-grow">
              <Header />
              <Home />
            </main>
          </div>
        } />

        <Route path="/new" element={
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-20 flex-grow">
              <New />
            </main>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;