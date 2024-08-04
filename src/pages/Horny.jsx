import React from 'react'
import { useNavigate } from 'react-router-dom'

function Horny() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }
  return (
    <div>
        <div className="bg-gray-900">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <h1 className="text-white font-bold font-exo2 text-lg sm:text-2xl">
                You Horny mf
                <button
                  onClick={() => handleClick('/home')}
                  className="ml-2 sm:ml-4 border border-purple-500 bg-purple-500 hover:bg-purple-700 text-white py-1 px-2 sm:py-2 sm:px-4 rounded text-xs sm:text-lg"
                >
                  Change Mood
                </button>
              </h1>
            </div>
          </div>
        </nav>
      </div>
    <div className='text-3xl flex items-center justify-center text-pink-600 p-72'>Not sure this is the website you need right now... 😉</div>
    </div>
  )
}

export default Horny