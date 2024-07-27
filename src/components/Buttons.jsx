import React from "react";

function Buttons() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 max-w-screen-md mx-auto text-2xl">
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-happy">
        <div className="bg-overlay" />
        <span className="text-overlay">Happy</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-sad">
        <div className="bg-overlay" />
        <span className="text-overlay">Sad</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-emotional">
        <div className="bg-overlay" />
        <span className="text-overlay">Emotional</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-tired">
        <div className="bg-overlay" />
        <span className="text-overlay">Tired</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-angry">
        <div className="bg-overlay" />
        <span className="text-overlay">Angry</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-romantic">
        <div className="bg-overlay" />
        <span className="text-overlay">Romantic</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-horny">
        <div className="bg-overlay" />
        <span className="text-overlay">Horny</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-energetic">
        <div className="bg-overlay" />
        <span className="text-overlay">Energetic</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-chill">
        <div className="bg-overlay" />
        <span className="text-overlay">Chill</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-cheerful">
        <div className="bg-overlay" />
        <span className="text-overlay">Cheerful</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-thrillfull">
        <div className="bg-overlay" />
        <span className="text-overlay">Thrillfull</span>
      </button>
      <button className="relative text-gray-100 font-bold py-4 px-8 rounded-lg overflow-hidden bg-humorous">
        <div className="bg-overlay" />
        <span className="text-overlay">Humorous</span>
      </button>
    </div>
  );
}

export default Buttons;
