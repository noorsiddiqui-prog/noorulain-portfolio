import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for better performance

const VantaBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Black background
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ["#A020F0", "#FF0000"] }, // Purple and Red particles
        links: {
          color: "#007BFF", // Blue threads
          distance: 120, // Controls the thread length
          enable: true,
          opacity: 0.7, // Makes the threads slightly transparent
          width: 1.5, // Increases thickness for a more visible effect
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: { default: "out" },
          straight: false,
        },
        number: {
          value: 80,
          density: { enable: true, area: 800 },
        },
        opacity: { value: 0.8 },
        shape: {
          type: "polygon",
          options: {
            sides: 6, // Hexagon Shape
          },
        },
        size: { value: { min: 3, max: 6 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default VantaBackground;
