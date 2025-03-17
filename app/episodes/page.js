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
      <section className="px-gutter py-section-default lg:py-28 lg:pt-12 bg-primary text-white">
        <div className="max-w-container-default mx-auto grid grid-cols-1 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex items-center justify-center">
            <h1 className="text-h1 font-bold">Episodes</h1>
          </div>
        </div>
      </section>

      {/* Recent Episodes Section */}
      <section className="px-gutter py-section-default bg-gray-50">
        <div className="max-w-container-default mx-auto">
          <div className="flex flex-col gap-4 mb-12 max-w-5xl">
            <h2 className="text-h2 font-bold">
              Engaging dialogues with seasoned legal professionals
            </h2>
            <p className="text-lg mb-12">
              Each episode of The Expert&apos;s Voice Podcast provides in-depth
              analyses and practical advice on various legal matters. Whether
              you&apos;re facing a legal challenge or simply wish to broaden
              your understanding, our episodes offer valuable insights to guide
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 gap-x-10">
            {podcastData?.episodes?.map((episode, index) => (
              <EpisodeCard key={index} episode={episode} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
