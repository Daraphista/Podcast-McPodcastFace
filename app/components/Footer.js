import Link from "next/link";
import { Logo } from "../constants";

// Import social media icons
import {
  SiLinkedin,
  SiFacebook,
  SiX,
  SiInstagram,
  SiThreads,
  SiTiktok,
  SiYoutube,
  SiSpotify,
  SiApplepodcasts,
  SiAmazonmusic,
  SiCastbox,
  SiIheartradio,
  SiOvercast,
  SiPocketcasts,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 px-gutter">
      <div className="max-w-container-default mx-auto grid items-center grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div className="items-start">
          <Link
            href="/"
            className="w-fit block hover:text-primary transition-colors duration-300"
          >
            <Logo />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="items-start lg:col-span-2">
          <nav className="flex justify-start flex-wrap lg:justify-center gap-8">
            <Link
              href="/episodes"
              className="uppercase font-semibold hover:text-primary transition-colors"
            >
              Episodes
            </Link>
            <Link
              href="/contact"
              className="uppercase font-semibold hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start lg:items-end">
          <div className="flex space-x-4 mb-6">
            <Link
              href="https://www.linkedin.com/company/TheExpertsVoice"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiLinkedin size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/TheExpertsVoice/"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiFacebook size={24} />
            </Link>
            <Link
              href="https://x.com/TheExpertsVoice"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiX size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/theexpertsvoice/"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiInstagram size={24} />
            </Link>
            <Link
              href="https://www.threads.net/@theexpertsvoice"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiThreads size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@theexpertsvoice"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiTiktok size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/@theexpertsvoice"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiYoutube size={24} />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://open.spotify.com/show/4E1LY2jnJqmGsN0jpvtooX"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiSpotify size={24} />
            </Link>
            <Link
              href="https://podcasts.apple.com/us/podcast/the-experts-voice/id1778965599"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiApplepodcasts size={24} />
            </Link>
            <Link
              href="https://music.amazon.com/podcasts/4E1LY2jnJqmGsN0jpvtooX"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiAmazonmusic size={24} />
            </Link>
            <Link
              href="https://castbox.fm/vh/6359788"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiCastbox size={24} />
            </Link>
            <Link
              href="https://www.iheart.com/podcast/269-the-experts-voice-241329440/"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiIheartradio size={24} />
            </Link>
            <Link
              href="https://overcast.fm/p4982508-iK8C8X"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiOvercast size={24} />
            </Link>
            <Link
              href="https://pca.st/ki2fe09f"
              target="_blank"
              className="text-white hover:text-primary"
            >
              <SiPocketcasts size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-start lg:text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} The Experts Voice Podcast. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
