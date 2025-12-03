import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kirubel Sentayehu | Full Stack Engineer",
    template: "%s | Kirubel Sentayehu",
  },
  description: "Portfolio of Kirubel Sentayehu - Full Stack Engineer specializing in React, Next.js, Django, and AI-powered applications. Building impactful solutions with modern web technologies.",
  keywords: ["Full Stack Engineer", "React", "Next.js", "Django", "TypeScript", "Python", "AI", "Web Development", "Software Engineer"],
  authors: [{ name: "Kirubel Sentayehu" }],
  creator: "Kirubel Sentayehu",
  metadataBase: new URL("https://kirubel.dev"), // Update with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kirubel.dev",
    siteName: "Kirubel Sentayehu Portfolio",
    title: "Kirubel Sentayehu | Full Stack Engineer",
    description: "Full Stack Engineer specializing in React, Next.js, Django, and AI-powered applications.",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "Kirubel Sentayehu - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirubel Sentayehu | Full Stack Engineer",
    description: "Full Stack Engineer specializing in React, Next.js, Django, and AI-powered applications.",
    creator: "@KiraS1011",
    images: ["/me.png"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@master/app/ci.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-8 right-8 z-50 hidden lg:block">
            <ModeToggle />
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row px-6 lg:px-0 py-12 lg:py-24 gap-8">
            <Sidebar />
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
