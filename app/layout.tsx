import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "FloridaBlanca - Restaurant Tapas à Carcassonne",
    template: "%s | FloridaBlanca Carcassonne",
  },
  description: "FloridaBlanca, restaurant de tapas à Carcassonne. Situé au 22 rue Trivalle, au pied de la Cité Médiévale. Cuisine méditerranéenne, tapas fraîches, encornets, padrons, vins. Ouvert midi et soir du mardi au samedi.",
  keywords: [
    "restaurant tapas Carcassonne",
    "tapas Carcassonne",
    "bar tapas Carcassonne",
    "FloridaBlanca",
    "restaurant Carcassonne",
    "cuisine méditerranéenne Carcassonne",
    "restaurant rue Trivalle",
    "tapas cité médiévale",
    "encornet aïoli Carcassonne",
    "restaurant espagnol Carcassonne",
    "bar à poulpe Carcassonne",
    "réservation restaurant Carcassonne",
  ],
  authors: [{ name: "FloridaBlanca" }],
  creator: "FloridaBlanca",
  publisher: "FloridaBlanca",
  metadataBase: new URL("https://www.floridablanca.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.floridablanca.fr/",
    siteName: "FloridaBlanca",
    title: "FloridaBlanca - Restaurant Tapas à Carcassonne",
    description: "FloridaBlanca, restaurant de tapas à Carcassonne au pied de la Cité Médiévale. Cuisine méditerranéenne créative, produits frais et locaux. Réservation au 04 30 34 58 55.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "FloridaBlanca - Restaurant Tapas à Carcassonne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FloridaBlanca - Restaurant Tapas à Carcassonne",
    description: "Restaurant de tapas au pied de la Cité Médiévale de Carcassonne. Cuisine méditerranéenne, encornets, padrons, vins. Rue Trivalle.",
    images: ["/og-image.webp"],
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
  icons: {
    icon: "/logo-blue.webp",
    apple: "/logo-blue.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
