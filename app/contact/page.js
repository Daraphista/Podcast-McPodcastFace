import { getPodcastEpisodes } from "@/app/utils/rss-parser";
import EpisodeCard from "../components/EpisodeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact | The Expert's Voice",
  description: "Get in touch with The Expert's Voice Podcast team",
};

export default function Contact() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-gutter py-section-default bg-primary text-white">
          <div className="max-w-container-default mx-auto">
            <h1 className="text-h1 font-bold mb-6">Contact Us</h1>
            <p className="text-lg max-w-2xl">
              Have a question or want to get in touch? We'd love to hear from
              you. Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-gutter py-section-default bg-gray-50">
          <div className="max-w-container-default mx-auto">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="button w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
