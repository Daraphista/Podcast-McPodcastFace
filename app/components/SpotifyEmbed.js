"use client";

import { useState, useEffect } from "react";

export default function SpotifyEmbed({ episodeUri }) {
  const [isLoading, setIsLoading] = useState(true);
  const spotifyUrl = episodeUri
    ? `https://open.spotify.com/embed/episode/${episodeUri
        .split(":")
        .pop()}?utm_source=generator`
    : "https://open.spotify.com/embed/episode/0kUSu8Ln3vvy4tSk84kEKe?utm_source=generator";

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Reset loading state when episode changes
  useEffect(() => {
    setIsLoading(true);
  }, [episodeUri]);

  return (
    <div className="relative w-full h-[152px]">
      {isLoading && (
        <div className="absolute inset-0 bg-primary rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="mt-2 text-sm text-white">Loading...</p>
          </div>
        </div>
      )}
      <iframe
        src={spotifyUrl}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onLoad={handleIframeLoad}
        className={`rounded ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      ></iframe>
    </div>
  );
}
