import { getPodcastEpisodes } from "@/app/utils/rss-parser";
import EpisodeCard from "../components/EpisodeCard";

export const metadata = {
  title: "Episodes | The Expert's Voice",
  description: "Browse all episodes of The Expert's Voice Podcast",
};

export default async function Episodes() {
  // Fetch podcast episodes
  const podcastData = await getPodcastEpisodes(process.env.PODCAST_RSS_URL);

  return (
    <main>
      {/* Hero Section */}
      <section className="px-gutter py-section-default bg-primary text-white">
        <div className="max-w-container-default mx-auto">
          <h1 className="text-h1 font-bold mb-6">Episodes</h1>
          <p className="text-lg max-w-2xl">
            Explore our collection of in-depth conversations with top legal
            professionals. Each episode brings you expert insights and practical
            answers to your most pressing legal questions.
          </p>
        </div>
      </section>

      {/* Episodes Grid Section */}
      <section className="px-gutter py-section-default bg-gray-50">
        <div className="max-w-container-default mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 gap-x-10">
            {podcastData?.episodes?.map((episode, index) => (
              <EpisodeCard key={index} episode={episode} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
