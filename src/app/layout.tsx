import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: {
    default: "Divyanshu Chauhan | Full Stack AI Engineer",
    template: "%s | Divyanshu Chauhan",
  },
  description:
    "Full Stack AI Engineer with 2+ years of experience in Python, Java, Node.js, RAG Systems, LLM Integrations, and MLOps. Founder of VerifyLayer AI. Available for full-time opportunities.",
  keywords: [
    "Divyanshu Chauhan",
    "Full Stack AI Engineer",
    "AI Engineer India",
    "Python Developer",
    "Java Developer",
    "Node.js Developer",
    "RAG Systems",
    "LLM Integration",
    "LangChain LangGraph",
    "Generative AI",
    "MLOps LLMOps",
    "Backend Engineer",
    "VerifyLayer AI",
  ],
  authors: [{ name: "Divyanshu Chauhan" }],
  metadataBase: new URL("https://chauhandivyanshu.github.io/Portfolio-Next"),
  openGraph: {
    title: "Divyanshu Chauhan - Full Stack AI Engineer",
    description: "Building intelligent AI solutions, RAG systems, and enterprise platforms",
    url: "https://chauhandivyanshu.github.io/Portfolio-Next",
    siteName: "Divyanshu Chauhan",
    images: [{ url: "/Portfolio-Next/divyanshu.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}