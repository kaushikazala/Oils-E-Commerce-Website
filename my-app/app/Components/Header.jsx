"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Button ,ShoppingBagIcon } from "@/components/ui/button"

// import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex container items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src="https://cinnamon-pure-oil.vercel.app/_next/image?url=%2Flogomain.png&w=256&q=75" width={220} height={80} alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-16 items-center">
          <Link
            href="#"
            className="text-lg font-medium text-gray-900  hover:text-amber-600 hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-gray-900 hover:text-amber-600 hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-gray-900 hover:text-amber-600 hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black"
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-gray-900 hover:text-amber-600 hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black"
          >
            Reviews
          </Link>
          <Link
            href="#"
            className="text-lg font-medium text-gray-900 hover:text-amber-600 hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black"
          >
            Contact Us
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            <button className="bg-[#F26830] hover:bg-[#d45727] transition text-white rounded-lg px-8 py-4 font-semibold shadow">
              Sign In
            </button>
          </Link>
          <Link href="#">{/* <ShoppingBagIcon size={24} /> */}</Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-amber-600 hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-amber-600 hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:text-amber-600 hover:scale-105 hover:transition-all hover:border-b-2 hover:border-black"
                >
                  Testimonials
                </Link>

                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
                <div>
                  <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            <Button>
              Sign In
            </Button>
          </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
