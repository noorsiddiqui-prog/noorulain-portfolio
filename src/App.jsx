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
        {/* Hero Section */}
        <div className="relative min-h-screen">
          <VantaBackground /> {/* Vanta.js Background */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="container mx-auto px-4">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
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
