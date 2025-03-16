"use client";

import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export function removeLinks(htmlString) {
  // Remove <a> tags and their attributes, keeping the text content
  return htmlString.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "$1");
}

export default function EpisodeCard({ episode }) {
  return (
    <Link
      href="/"
      className="bg-blue-100 group hover:-translate-y-2 duration-300 border-2 border-primary p-6 rounded-lg hover:shadow-lg transition-all"
    >
      <Image
        src={episode.image || "/sample-episode-art.png"}
        alt={`${episode.title} Thumbnail`}
        width={400}
        height={400}
        className="w-24 aspect-square group-hover:scale-105 transition-transform duration-300 object-cover mb-6 rounded-md border-2 -mt-12 shadow-lg border-dark"
      />

      <h3 className="font-semibold text-2xl mb-2 line-clamp-2">
        {episode.title}
      </h3>
      {episode.summary && (
        <div className="text-gray-600 mb-6 line-clamp-3">
          {parse(removeLinks(episode.summary))}
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="flex group-hover:translate-x-2 transition-transform duration-300 items-center gap-2 font-bold">
          Listen Now
          <svg
            className="h-5 text-primary"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6.125C9.92109 6.125 3.375 12.6711 3.375 20.75V28.0625C3.375 28.9977 2.62266 29.75 1.6875 29.75C0.752344 29.75 0 28.9977 0 28.0625V20.75C0 10.8078 8.05781 2.75 18 2.75C27.9422 2.75 36 10.8078 36 20.75V28.0625C36 28.9977 35.2477 29.75 34.3125 29.75C33.3773 29.75 32.625 28.9977 32.625 28.0625V20.75C32.625 12.6711 26.0789 6.125 18 6.125ZM5.625 25.25C5.625 22.768 7.64297 20.75 10.125 20.75H11.25C12.4945 20.75 13.5 21.7555 13.5 23V32C13.5 33.2445 12.4945 34.25 11.25 34.25H10.125C7.64297 34.25 5.625 32.232 5.625 29.75V25.25ZM25.875 20.75C28.357 20.75 30.375 22.768 30.375 25.25V29.75C30.375 32.232 28.357 34.25 25.875 34.25H24.75C23.5055 34.25 22.5 33.2445 22.5 32V23C22.5 21.7555 23.5055 20.75 24.75 20.75H25.875Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
