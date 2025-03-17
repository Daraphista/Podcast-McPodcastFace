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
          className="w-fit block h-8 lg:h-12 hover:text-dark transition-colors duration-300"
        >
          <span className="sr-only">The Expert's Voice</span>
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
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-8 px-gutter sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="h-8 lg:h-12 text-dark hover:text-primary transition-colors duration-300"
            >
              <span className="sr-only">The Expert's Voice</span>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-dark hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
              <HiX aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-6 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className=" font-semibold uppercase block text-dark hover:text-primary transition-colors duration-300"
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
