import Image from "next/image";
import { getPodcastEpisodes } from "@/app/utils/rss-parser";
import { convertLinksToNextLinks } from "@/app/utils/link-converter";
import SpotifyEmbed from "@/app/components/SpotifyEmbed";
import { findSpotifyEpisodeUri } from "@/app/utils/spotify";

// Generate static params for all episodes
export async function generateStaticParams() {
  const podcastData = await getPodcastEpisodes(process.env.PODCAST_RSS_URL);

  return (
    podcastData?.episodes?.map((episode) => ({
      slug: episode.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    })) || []
  );
}

// Generate metadata for each episode
export async function generateMetadata({ params }) {
  const podcastData = await getPodcastEpisodes(process.env.PODCAST_RSS_URL);
  const episode = podcastData?.episodes?.find(
    (ep) =>
      ep.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") === params.slug
  );

  return {
    title: episode
      ? `${episode.title} | The Expert's Voice`
      : "Episode Not Found",
    description: episode?.contentSnippet || "Podcast episode details",
  };
}

export default async function EpisodePage({ params }) {
  const podcastData = await getPodcastEpisodes(process.env.PODCAST_RSS_URL);

  const episode = podcastData?.episodes?.find(
    (ep) =>
      ep.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") === params.slug
  );

  // Find Spotify episode URI
  const spotifyEpisodeUri = await findSpotifyEpisodeUri(episode.title);

  if (!episode) {
    return (
      <section className="px-gutter py-32">
        <div className="max-w-container-default mx-auto">
          <div className="container mx-auto space-y-8 px-4 py-8">
            <h1 className="text-h1 font-bold">Episode Not Found</h1>
            <p className="text-lg">The requested episode could not be found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section className="px-gutter py-section-default lg:py-28 lg:pt-12 bg-primary text-white">
        <div className="max-w-container-default mx-auto grid grid-cols-1 gap-16 items-center">
          <div className="flex">
            <h1 className="text-h1 font-bold">{episode.title}</h1>
          </div>
        </div>
      </section>

      <section className="px-gutter py-section-default">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            <SpotifyEmbed episodeUri={spotifyEpisodeUri} />

            <div className="flex flex-col gap-8 text-lg prose max-w-none">
              {convertLinksToNextLinks(episode.summary || "")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
