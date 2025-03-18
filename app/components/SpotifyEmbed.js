"use client";

import { useState, useEffect } from "react";

// In-memory cache for current session
const embedCache = new Map();

// Helper function to safely interact with localStorage
const storage = {
  get: (key, defaultValue = "{}") => {
    if (typeof window === "undefined") return defaultValue;
    try {
      return localStorage.getItem(key) || defaultValue;
    } catch (e) {
      console.error("Error reading from localStorage:", e);
      return defaultValue;
    }
  },
  set: (key, value) => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error("Error writing to localStorage:", e);
    }
  },
};

// Cache management
const cacheManager = {
  getCachedEpisodes: () => {
    try {
      return JSON.parse(storage.get("spotify-embed-cache"));
    } catch (e) {
      console.error("Error parsing cache:", e);
      return {};
    }
  },
  saveEpisodeToCache: (episodeUri) => {
    if (!episodeUri) return;

    // In-memory cache
    embedCache.set(episodeUri, true);

    // LocalStorage cache with expiration (7 days)
    try {
      const cachedEpisodes = cacheManager.getCachedEpisodes();
      cachedEpisodes[episodeUri] = {
        timestamp: Date.now(),
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
      };
      storage.set("spotify-embed-cache", JSON.stringify(cachedEpisodes));
    } catch (error) {
      console.error("Failed to save to cache:", error);
    }
  },
  isEpisodeCached: (episodeUri) => {
    // Check in-memory cache first
    if (embedCache.has(episodeUri)) return true;

    // Then check localStorage
    try {
      const cachedEpisodes = cacheManager.getCachedEpisodes();
      const cachedEpisode = cachedEpisodes[episodeUri];

      if (cachedEpisode && cachedEpisode.expires > Date.now()) {
        // Valid cache, add to in-memory for faster access next time
        embedCache.set(episodeUri, true);
        return true;
      }

      if (cachedEpisode) {
        // Expired cache, clean it up
        delete cachedEpisodes[episodeUri];
        storage.set("spotify-embed-cache", JSON.stringify(cachedEpisodes));
      }
    } catch (error) {
      console.error("Failed to check cache:", error);
    }

    return false;
  },
};

export default function SpotifyEmbed({ episodeUri }) {
  const [isLoading, setIsLoading] = useState(true);

  // Generate the Spotify URL
  const spotifyUrl = episodeUri
    ? `https://open.spotify.com/embed/episode/${episodeUri
        .split(":")
        .pop()}?utm_source=generator`
    : "https://open.spotify.com/embed/episode/0kUSu8Ln3vvy4tSk84kEKe?utm_source=generator";

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
    // Cache this episode when it loads successfully
    if (episodeUri) {
      cacheManager.saveEpisodeToCache(episodeUri);
    }
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
