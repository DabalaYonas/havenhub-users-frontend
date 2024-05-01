
import Navbar from "./components/Navbar/Navbar";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "HavenHub",
  description: "HavenHub place booking and hosting",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: { rel: "apple-touch-icon", url: "/favicon.ico" },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SearchModal />
        <RentModal />
        <div>
        {children}
      </div></body>
    </html>
  )
}
