import React from "react";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="bg-black-600 underline text-white text-4xl">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <h1 className="text-white font-bold font-exo2 text-4xl sm:text-3xl">
                Welcome to Bollymood!
              </h1>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center p-5 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
          Discover top-rated Bollywood movies<br />based on your mood
        </h1>
        <br />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center ">How are you feeling today ..?</h3>
    </div>
  );
}
