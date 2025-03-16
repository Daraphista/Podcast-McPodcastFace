import Image from "next/image";
import Link from "next/link";

// Import social media icons
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

// Import additional podcast icons
import {
  SiSpotify,
  SiApplepodcasts,
  SiAmazonmusic,
  SiCastbox,
  SiIheartradio,
  SiOvercast,
  SiPocketcasts,
} from "react-icons/si";

export default function Home() {
  return (
    <div>
      <header></header>

      <main>
        <section className="px-gutter py-section-default lg:py-28 bg-primary text-white">
          <div className="max-w-container-default mx-auto grid grid-cols-1 md:grid-cols-6 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 col-span-4">
              <h1 className="text-h1 font-bold">Real Experts. Real Answers.</h1>
              <p className="text-lg">
                Navigating the legal world can be overwhelming. The Expert's
                Voice Podcast brings you in-depth conversations with top legal
                professionals, answering the questions that matter most. Whether
                you're preparing for a legal case, looking for expert insights,
                or just want to stay informed, we've got you covered.
              </p>
              <div className="flex items-center gap-4 mt-12">
                <button className="button is-dark mr-4">
                  See all episodes
                </button>

                <div className="flex items-center gap-6">
                  <Link href="#" className="hover:text-dark">
                    <SiSpotify size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiApplepodcasts size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiAmazonmusic size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiCastbox size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiIheartradio size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiOvercast size={32} />
                  </Link>
                  <Link href="#" className="hover:text-dark">
                    <SiPocketcasts size={32} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - New Episode */}
            <Link
              href="/"
              className="relative col-span-2 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-lg border-4 border-dark aspect-square">
                <Image
                  src="/sample-episode-art.png"
                  alt="Episode 1 Thumbnail"
                  width={400}
                  height={400}
                  className=""
                />
                <div className="absolute flex items-center justify-center inset-0 bg-light capitalize opacity-0 group-hover:opacity-95 transition-opacity duration-300 font-bold text-xl text-dark">
                  <div className="flex items-center gap-2 -translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                    Listen Now
                    <svg
                      className="h-6 text-dark"
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
              </div>
              <div className="flex items-center group-hover:-translate-y-10 transition-transform duration-300 gap-4 absolute uppercase -top-5 right-1/2 translate-x-1/2 p-2 bg-dark rounded-full font-bold text-lg text-nowrap pr-7">
                <div className="rounded-full bg-light aspect-square w-8 p-1.5">
                  <svg
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7188 8.0625V21.5C13.7188 25.9512 17.3301 29.5625 21.7812 29.5625C26.2324 29.5625 29.8438 25.9512 29.8438 21.5H23.125C22.3859 21.5 21.7812 20.8953 21.7812 20.1562C21.7812 19.4172 22.3859 18.8125 23.125 18.8125H29.8438V16.125H23.125C22.3859 16.125 21.7812 15.5203 21.7812 14.7812C21.7812 14.0422 22.3859 13.4375 23.125 13.4375H29.8438V10.75H23.125C22.3859 10.75 21.7812 10.1453 21.7812 9.40625C21.7812 8.66719 22.3859 8.0625 23.125 8.0625H29.8438C29.8438 3.61133 26.2324 0 21.7812 0C17.3301 0 13.7188 3.61133 13.7188 8.0625ZM32.5312 20.1562V21.5C32.5312 27.4377 27.7189 32.25 21.7812 32.25C15.8436 32.25 11.0312 27.4377 11.0312 21.5V18.1406C11.0312 17.0236 10.1326 16.125 9.01562 16.125C7.89863 16.125 7 17.0236 7 18.1406V21.5C7 28.983 12.5598 35.1643 19.7656 36.1469V38.9688H15.7344C14.6174 38.9688 13.7188 39.8674 13.7188 40.9844C13.7188 42.1014 14.6174 43 15.7344 43H21.7812H27.8281C28.9451 43 29.8438 42.1014 29.8438 40.9844C29.8438 39.8674 28.9451 38.9688 27.8281 38.9688H23.7969V36.1469C31.0027 35.1643 36.5625 28.983 36.5625 21.5V18.1406C36.5625 17.0236 35.6639 16.125 34.5469 16.125C33.4299 16.125 32.5312 17.0236 32.5312 18.1406V20.1562Z"
                      fill="#001845"
                    />
                  </svg>
                </div>
                <span>New Episode</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Episodes Section */}
        <section className="px-gutter py-section-default bg-gray-50">
          <div className="max-w-container-default mx-auto">
            <h2 className="text-h2 font-bold text-center mb-12">
              Recent Episodes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[1, 2, 3, 4, 5, 6].map((episode) => (
                <Link
                  href="/"
                  key={episode}
                  className="bg-blue-100 group hover:-translate-y-2 duration-300 border-2 border-primary p-6 rounded-lg hover:shadow-lg transition-all"
                >
                  <Image
                    src={`/sample-episode-art.png`}
                    alt={`Episode ${episode} Thumbnail`}
                    width={400}
                    height={400}
                    className="w-24 aspect-square group-hover:scale-105 transition-transform duration-300 object-cover mb-6 rounded-md border-2 -mt-12 shadow-lg border-dark"
                  />

                  <h3 className="font-semibold text-2xl mb-2">
                    Donovan Francis Breaks Down Business Immigration for
                    Employers
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Guest Name | Season X, Episode {episode}
                  </p>
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
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="button mx-auto">View All Episodes</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-container-default mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <Image
              src="/logo-white.png"
              alt="The Experts Voice Podcast Logo"
              width={200}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 mb-6">
              Bringing expert insights and transformative conversations to your
              ears.
            </p>

            {/* Podcast Platforms */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaSpotify size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaApple size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-4">
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/episodes"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Episodes
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} The Experts Voice Podcast. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
