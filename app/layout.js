import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingActionButton from "@/components/FloatingActionButton"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CariBara - Premium Car Rental Service",
  description: "Experience the freedom of the open road with our premium fleet. Book your perfect ride in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Caribara" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <FloatingActionButton />
      </body>
    </html>
  );
}