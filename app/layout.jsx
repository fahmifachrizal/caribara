import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import FloatingActionButton from "@/components/floating-action-button"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Prevent FOUT
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata = {
  title: "CariBara - Premium Car Rental Service",
  description:
    "Experience the freedom of the open road with our premium fleet. Book your perfect ride in minutes.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Caribara" />
        {/* Preload critical images */}
        <link rel="preload" href="/icon/caribara-light.png" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <FloatingActionButton />
      </body>
    </html>
  )
}
