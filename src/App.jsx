import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Happy from './pages/Happy';
import Sad from './pages/Sad';
import Emotional from './pages/Emotional';
import Tired from './pages/Tired';
import Angry from './pages/Angry';
import Romantic from './pages/Romantic';
import Horny from './pages/Horny';
import Energetic from './pages/Energetic';
import Chill from './pages/Chill';
import Cheerful from './pages/Cheerful';
import Thrillfull from './pages/Thrillfull';
import Humorous from './pages/Humorous';
import './App.css';
import Navbar from './components/Navbar';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Nopage from './pages/Nopage';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#6s1067",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 1.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route index element={<div><Navbar /><Buttons /><Footer /></div>} />
            <Route path="/home" element={<div><Navbar /><Buttons /><Footer /></div>} />
            <Route path="/happy" element={<Happy />} />
            <Route path="/sad" element={<Sad />} />
            <Route path="/emotional" element={<Emotional />} />
            <Route path="/tired" element={<Tired />} />
            <Route path="/angry" element={<Angry />} />
            <Route path="/romantic" element={<Romantic />} />
            <Route path="/horny" element={<Horny />} />
            <Route path="/energetic" element={<Energetic />} />
            <Route path="/chill" element={<Chill />} />
            <Route path="/cheerful" element={<Cheerful />} />
            <Route path="/thrillfull" element={<Thrillfull />} />
            <Route path="/humorous" element={<Humorous />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
