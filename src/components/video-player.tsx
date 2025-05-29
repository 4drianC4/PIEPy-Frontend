import React from 'react';

interface VideoPlayerProps {
  videoUrl?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  if (!videoUrl) {
    return (
      <div className="bg-gray-100 rounded shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Video</h2>
        <div className="text-gray-500">No hay video disponible para este tema.</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">Video</h2>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={videoUrl}
          className="absolute top-0 left-0 w-full h-full rounded"
          title="Video del tema"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
