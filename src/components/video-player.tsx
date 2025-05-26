// src/components/VideoPlayer.tsx
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="bg-gray-100 rounded shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">Video</h2>
      <div className="bg-black w-full h-48 flex items-center justify-center rounded">
        <div className="w-10 h-10 border-l-8 border-t-4 border-b-4 border-white transform rotate-45 ml-2"></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
