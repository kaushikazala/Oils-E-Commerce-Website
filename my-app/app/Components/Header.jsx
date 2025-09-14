"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation"; 

import {
  PopoverGroup,
} from "@headlessui/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); 

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex container items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src="https://cinnamon-pure-oil.vercel.app/_next/image?url=%2Flogomain.png&w=256&q=75"
              width={220}
              height={80}
              alt="logo"
            />
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

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-16 items-center">
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/about-us" className="nav-link">About Us</Link>
          <Link href="/testimonials" className="nav-link">Testimonials</Link>
          <Link href="/reviews" className="nav-link">Reviews</Link>
          <Link href="/contact-us" className="nav-link">Contact Us</Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/signin">
            <button className="bg-[#F26830] hover:bg-[#d45727] transition text-white rounded-lg px-8 py-4 font-semibold shadow">
              Sign In
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
   
<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
  <div className="fixed inset-0 z-50" />
  <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          alt="logo"
          src="https://cinnamon-pure-oil.vercel.app/_next/image?url=%2Flogomain.png&w=256&q=75"
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

    {/* Links */}
    <div className="mt-6 space-y-4">
  <Link href="/" className={mobileLink}>Home</Link>
  <Link href="/products" className={mobileLink}>Products</Link>
  <Link href="/about" className={mobileLink}>About Us</Link>
  <Link href="/testimonials" className={mobileLink}>Testimonials</Link>
  <Link href="/reviews" className={mobileLink}>Reviews</Link>
  <Link href="/contact" className={mobileLink}>Contact Us</Link>

  {/* Sign In button */}
  <Link href="/signin">
    <Button className="w-full bg-[#F26830] hover:bg-[#d45727] text-white font-semibold py-3 rounded-lg">
      Sign In
    </Button>
  </Link>

  
</div>

  </DialogPanel>
</Dialog>

    </header>
  );
}

const mobileLink =
  "block w-full rounded-lg px-4 py-3 text-lg font-medium text-gray-800 text-center bg-gray-50 hover:bg-gray-100 hover:text-amber-600 transition";

