import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

import LanguageProvider, {
  type Language,
} from "@/components/providers/LanguageProvider";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://brayan-portfolio-pnl.vercel.app"
  ),

  title: {
    default: "Brayan Suarez | Backend Developer",
    template: "%s | Brayan Suarez",
  },

  description:
    "Portafolio profesional de Brayan Suarez, desarrollador backend enfocado en Python, Django, FastAPI, APIs, datos y soluciones de software.",

  keywords: [
    "Brayan Suarez",
    "Backend Developer",
    "Desarrollador Backend",
    "Python",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "Software Developer",
    "Portafolio desarrollador",
    "Bogotá",
    "Colombia",
  ],

  authors: [
    {
      name: "Brayan Suarez",
    },
  ],

  creator: "Brayan Suarez",
  publisher: "Brayan Suarez",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "/",
    locale: "es_CO",
    siteName: "Brayan Suarez Portfolio",
    title: "Brayan Suarez | Backend Developer",
    description:
      "Portafolio profesional de Brayan Suarez, desarrollador backend enfocado en Python, Django, FastAPI, APIs, datos y soluciones de software.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Brayan Suarez | Backend Developer",
    description:
      "Portafolio profesional de Brayan Suarez, desarrollador backend enfocado en Python, Django, FastAPI, APIs, datos y soluciones de software.",
  },

  category: "technology",
};

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = savedTheme || (prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch {}
  })();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedLanguage = cookieStore.get("language")?.value;

  const initialLanguage: Language =
    savedLanguage === "en" ? "en" : "es";

  return (
    <html
      lang={initialLanguage}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body className="flex min-h-full flex-col">
        <LanguageProvider initialLanguage={initialLanguage}>
          <Navbar />

          <div className="flex-1">
            {children}
          </div>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}