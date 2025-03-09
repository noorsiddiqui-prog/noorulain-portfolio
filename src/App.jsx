import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  VantaBackground,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        {/* Hero Section with Overlay */}
        <div className="relative h-screen">
          <VantaBackground /> {/* Vanta.js Background */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="w-full h-full mx-auto px-4">
          <div>
            <About />
          </div>
          <div>
            <Experience />
          </div>
          <div>
            <Tech />
          </div>
          <div className="">
            <Works />
          </div>
          <div>
            <Feedbacks />
          </div>
        </div>

        {/* Contact and StarsCanvas */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
