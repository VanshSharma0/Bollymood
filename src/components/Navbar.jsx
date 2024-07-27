import React from "react";

export default function Example() {
  return (
    <div>
      <div>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <h1 className="text-white text-2xl font-bold font-exo2 text-3xl">
                Welcome to Bollymood!
              </h1>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex items-center justify-center p-5">
        <h1 className="text-center text-4xl text-white">
          Discover top-rated Bollywood movies<br />based on your mood
        </h1>
      </div>
    </div>
  );
}
