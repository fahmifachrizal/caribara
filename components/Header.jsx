"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg h-[72px]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center relative">
              <Image
                src="/icon/caribara-light.png"
                alt="CariBara Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold">CariBara</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link
              href="/find-car"
              className="hover:text-primary transition-colors font-medium">
              Find a Car
            </Link>
            <Link
              href="/#about"
              className="hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link
              href="/#contact"
              className="hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button asChild>
              <Link href="/find-car">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-in slide-in-from-top">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/find-car"
                className="py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                Find a Car
              </Link>
              <Link
                href="/#about"
                className="py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link
                href="/#contact"
                className="py-2 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
                <Button asChild className="w-full">
                  <Link href="/find-car">Book Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
