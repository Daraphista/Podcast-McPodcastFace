import Link from "next/link";
import { Logo } from "../constants";

export default function Header() {
  return (
    <header className="px-gutter py-8 bg-primary text-white">
      <div className="max-w-container-default mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="w-fit block h-12 hover:text-dark transition-colors duration-300"
          >
            <Logo />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className="uppercase font-semibold hover:text-dark transition-colors"
            >
              Episodes
            </Link>
            <Link
              href="/contact"
              className="uppercase font-semibold hover:text-dark transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
