import Navbar from "./scenes/navbar";
import Hero from "./scenes/hero";
import Work from "./scenes/work";
import Contact from "./scenes/contact";
import { Routes, Route } from "react-router-dom";
import About from "./about";
function App() {
  return (
    <div className="App overflow-hidden bg-slate-50">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Work />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
