import type { Metadata } from "next";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";
import MainPage from "../../components/MainPage";
import Navbar from "../../components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "FloridaBlanca - Restaurant Tapas à Carcassonne",
  description: "FloridaBlanca, restaurant de tapas à Carcassonne au pied de la Cité Médiévale. Cuisine méditerranéenne créative, tapas fraîches, encornets, padrons, vins. 22 rue Trivalle — Ouvert du mardi au samedi.",
  alternates: {
    canonical: "https://www.floridablanca.fr/",
  },
  openGraph: {
    title: "FloridaBlanca - Restaurant Tapas à Carcassonne",
    description: "Restaurant de tapas au cœur de Carcassonne. Cuisine méditerranéenne créative, produits frais. 22 rue Trivalle, au pied de la Cité Médiévale.",
    url: "https://www.floridablanca.fr/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "FloridaBlanca",
  alternateName: "Floridablanca Bar à Poulpe",
  description: "Restaurant de tapas et cuisine méditerranéenne à Carcassonne, au pied de la Cité Médiévale. Spécialités : encornet et aïoli maison, padrons, tapas espagnoles, vins.",
  url: "https://www.floridablanca.fr",
  telephone: "+33430345855",
  email: "floridablanca22@gmail.com",
  image: "https://www.floridablanca.fr/og-image.webp",
  logo: "https://www.floridablanca.fr/logo-blue.webp",
  priceRange: "€€",
  servesCuisine: ["Tapas", "Cuisine méditerranéenne", "Cuisine espagnole"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "22 rue Trivalle",
    addressLocality: "Carcassonne",
    postalCode: "11000",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.2027,
    longitude: 2.3553,
  },
  hasMap: "https://maps.google.com/?q=FloridaBlanca+22+rue+Trivalle+Carcassonne",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "12:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:00",
      closes: "22:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/floridablanca_bar_a_poulpe/",
  ],
  acceptsReservations: "True",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Terrasse", value: true },
    { "@type": "LocationFeatureSpecification", name: "Animaux acceptés", value: true },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroBanner />
      <MainPage />
      <Footer />
      <Analytics />
    </main>
  );
}
