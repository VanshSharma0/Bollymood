import React from "react";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4 max-w-screen-md mx-auto text-2xl">
      <button
        onClick={() => handleClick("/happy")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-happy emotion-happy"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Happy</span>
      </button>
      <button
        onClick={() => handleClick("/sad")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-sad emotion-sad"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Sad</span>
      </button>
      <button
        onClick={() => handleClick("/emotional")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-emotional emotion-emotional"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Emotional</span>
      </button>
      <button
        onClick={() => handleClick("/tired")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-tired emotion-tired"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Tired</span>
      </button>
      <button
        onClick={() => handleClick("/angry")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-angry emotion-angry"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Angry</span>
      </button>
      <button
        onClick={() => handleClick("/romantic")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-romantic emotion-romantic"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Romantic</span>
      </button>
      <button
        onClick={() => handleClick("/horny")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-horny emotion-horny"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Horny</span>
      </button>
      <button
        onClick={() => handleClick("/energetic")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-energetic emotion-energetic"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Energetic</span>
      </button>
      <button
        onClick={() => handleClick("/chill")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-chill emotion-chill"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Chill</span>
      </button>
      <button
        onClick={() => handleClick("/cheerful")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-cheerful emotion-cheerful"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Cheerful</span>
      </button>
      <button
        onClick={() => handleClick("/thrillfull")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-thrillfull emotion-thrillfull"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Thrillfull</span>
      </button>
      <button
        onClick={() => handleClick("/humorous")}
        className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-humorous emotion-humorous"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Humorous</span>
      </button>
    </div>
  );
}

export default Buttons;
