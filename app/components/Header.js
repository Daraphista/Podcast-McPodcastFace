"use client";

import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { Logo } from "../constants";

const navigation = [
  { name: "Episodes", href: "/episodes" },
  { name: "Contact", href: "/contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white px-gutter py-8">
      <nav
        aria-label="Global"
        className="flex mx-auto max-w-container-default items-center justify-between"
      >
        <Link
          href="/"
          className="w-36 lg:w-54 block h-8 lg:h-12 hover:text-dark transition-colors duration-300"
        >
          <span className="sr-only">The Expert&apos;s Voice</span>
          <Logo />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-dark transition-colors duration-300 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <HiMenu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg uppercase font-semibold hover:text-dark transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        transition
        className="lg:hidden transition duration-300 data-[closed]:opacity-0 data-[closed]:pointer-events-none"
      >
        <div
          className="fixed inset-0 z-10"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
        <DialogPanel className="fixed rounded-lg top-4 right-2 left-2 px-4 py-4 sm:left-auto sm:right-2 z-10 bg-white shadow-lg outline outline-primary sm:min-w-sm sm:ring-1 sm:ring-white/10 md:right-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="w-36 lg:w-54 h-8 lg:h-12 text-dark hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">The Expert&apos;s Voice</span>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-primary hover:text-dark transition-colors duration-300 cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
              <HiX aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-6 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className=" font-semibold uppercase block text-dark hover:text-primary transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
