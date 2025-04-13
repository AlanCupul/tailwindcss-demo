import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State to store profile data
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  // Reference for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first file if available
    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Create a URL for the image and store it in state
    }
  };

  // Trigger file input when profile image is clicked
  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        {/* Profile image input */}
        <div className="profile-card">
          <div className="mt-8 mb-8 mx-auto relative w-32 h-32">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              ref={fileInputRef}
            />
          
            <div 
              onClick={handleProfileImageClick}
              className="w-full h-full border-2 border-dashed border-gray-300 rounded-full cursor-pointer overflow-hidden"
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="flex justify-center items-center w-full h-full text-gray-400">
                  <span className="text-2xl">+</span>
                </div>
              )}
            </div>
          </div>
            {/* Name input */}
            <div className="mb-6 flex justify-center">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-1/2 md:w-3/4 lg:w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            {/* Bio textarea */}
            <div className="mb-6 flex justify-center">
              <textarea
                rows="3"
                placeholder="Write a short bio about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-1/2 md:w-3/4 lg:w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="mt-8 flex justify-center">
            <button 
              className="w-full bg-blue-600 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
