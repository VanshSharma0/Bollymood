import React from "react";

function Buttons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-screen-md mx-auto text-lg sm:text-xl md:text-2xl">
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-happy emotion-happy">
        <div className="bg-overlay" />
        <span className="text-overlay">Happy</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-sad emotion-sad">
        <div className="bg-overlay" />
        <span className="text-overlay">Sad</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-emotional emotion-emotional">
        <div className="bg-overlay" />
        <span className="text-overlay">Emotional</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-tired emotion-tired">
        <div className="bg-overlay" />
        <span className="text-overlay">Tired</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-angry emotion-angry">
        <div className="bg-overlay" />
        <span className="text-overlay">Angry</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-romantic emotion-romantic">
        <div className="bg-overlay" />
        <span className="text-overlay">Romantic</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-horny emotion-horny">
        <div className="bg-overlay" />
        <span className="text-overlay">Horny</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-energetic emotion-energetic">
        <div className="bg-overlay" />
        <span className="text-overlay">Energetic</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-chill emotion-chill">
        <div className="bg-overlay" />
        <span className="text-overlay">Chill</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-cheerful emotion-cheerful">
        <div className="bg-overlay" />
        <span className="text-overlay">Cheerful</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-thrillfull emotion-thrillfull">
        <div className="bg-overlay" />
        <span className="text-overlay">Thrillfull</span>
      </button>
      <button className="relative text-gray-100 font-bold py-2 sm:py-4 px-4 sm:px-8 rounded-lg overflow-hidden bg-humorous emotion-humorous">
        <div className="bg-overlay" />
        <span className="text-overlay">Humorous</span>
      </button>
    </div>
  );
}

export default Buttons;
