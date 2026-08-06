import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Divyanshu Chauhan | Full Stack AI Engineer",
    template: "%s | Divyanshu Chauhan",
  },
  description:
    "Full Stack AI Engineer with 2+ years of experience in Python, Java, RAG Systems, LLM Integrations, and NFC/RFID solutions. Founder of VerifyLayer AI.",
  keywords: [
    "Divyanshu Chauhan",
    "Full Stack AI Engineer",
    "Python Developer",
    "RAG Systems",
    "LLM Integration",
    "NFC RFID Developer",
    "VerifyLayer AI",
  ],
  authors: [{ name: "Divyanshu Chauhan" }],
  metadataBase: new URL("https://chauhandivyanshu.github.io/Portfolio-Next"),
  openGraph: {
    title: "Divyanshu Chauhan - Full Stack AI Engineer",
    description: "Building intelligent AI solutions and defence-sector platforms",
    url: "https://chauhandivyanshu.github.io/Portfolio-Next",

    siteName: "Divyanshu Chauhan",
    images: [{ url: "/Portfolio-Next/divyanshu.jpg", width: 1200, height: 630 }],

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshu Chauhan - Full Stack AI Engineer",
    description: "Building intelligent AI solutions",
    images: ["/divyanshu.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}