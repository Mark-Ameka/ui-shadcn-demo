"use client";
import { ModeToggle } from "@/components/ui/dark-mode";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-accent z-50">
      <nav className="md:flex hidden justify-between items-center py-2 px-7">
        <ul className="flex items-center gap-10">
          <li>
            <Image
              className="object-cover mr-6"
              src="/event.png"
              alt="Event Logo"
              height={35}
              width={35}
            />
          </li>
          <li>
            <Link href="/">Canvas</Link>
          </li>
          <li>
            <Link href="#">Events</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            {/* <Link href="/login">Login</Link> */}
            <Link href="#">Login</Link>
          </li>
          <li>
            <Button>Sign Up</Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
      {MobileNav()}
    </header>
  );
}

export function MobileNav() {
  return (
    <header>
      <nav className="md:hidden flex justify-between items-center py-2 px-7">
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon width={20} height={20} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <ul className="flex items-center gap-10">
                <Image
                  className="object-cover mr-6"
                  src="/event.png"
                  alt="Event Logo"
                  height={35}
                  width={35}
                />
                <li>
                  <Link href="/">Canvas</Link>
                </li>
                <li>
                  <Link href="#">Events</Link>
                </li>
                <li>
                  <Link href="#">Services</Link>
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <ul className="flex items-center gap-4">
          <li>
            {/* <Link href="/login">Login</Link> */}
            <Link href="#">Login</Link>
          </li>
          <li>
            <Button>Sign Up</Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
