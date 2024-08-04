import React from "react";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 max-w-screen-md mx-auto text-lg sm:text-xl">
      <button
        onClick={() => handleClick("/happy")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-happy emotion-happy text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Happy</span>
      </button>
      <button
        onClick={() => handleClick("/sad")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-sad emotion-sad text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Sad</span>
      </button>
      <button
        onClick={() => handleClick("/emotional")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-emotional emotion-emotional text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Emotional</span>
      </button>
      <button
        onClick={() => handleClick("/tired")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-tired emotion-tired text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Tired</span>
      </button>
      <button
        onClick={() => handleClick("/angry")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-angry emotion-angry text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Angry</span>
      </button>
      <button
        onClick={() => handleClick("/romantic")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-romantic emotion-romantic text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Romantic</span>
      </button>
      <button
        onClick={() => handleClick("/horny")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-horny emotion-horny text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Horny</span>
      </button>
      <button
        onClick={() => handleClick("/energetic")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-energetic emotion-energetic text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Energetic</span>
      </button>
      <button
        onClick={() => handleClick("/chill")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-chill emotion-chill text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Chill</span>
      </button>
      <button
        onClick={() => handleClick("/cheerful")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-cheerful emotion-cheerful text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Cheerful</span>
      </button>
      <button
        onClick={() => handleClick("/thrillfull")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-thrillfull emotion-thrillfull text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Thrillfull</span>
      </button>
      <button
        onClick={() => handleClick("/humorous")}
        className="relative text-gray-100 font-bold py-2 px-2 sm:py-4 sm:px-4 rounded-lg overflow-hidden bg-humorous emotion-humorous text-center"
      >
        <div className="bg-overlay" />
        <span className="text-overlay">Humorous</span>
      </button>
    </div>
  );
}

export default Buttons;
