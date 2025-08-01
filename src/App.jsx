// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Menu from "./pages/Menu";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <BrowserRouter> {/* ✅ Correct component */}
//       <Navbar />
//       <div className="p-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//       <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;







// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./pages/About";
// import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import CategoryMenu from "./Pages/CategoryMenu";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category-menu" element={<CategoryMenu />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
