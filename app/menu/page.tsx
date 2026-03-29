import type { Metadata } from "next";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Menu & Carte - Tapas et Cuisine Méditerranéenne",
  description: "Découvrez la carte du restaurant FloridaBlanca à Carcassonne : tapas, encornets, padrons, pika-pika de bœuf, calçots, vins et boissons. Menu été 2025.",
  alternates: {
    canonical: "https://www.floridablanca.fr/menu",
  },
  openGraph: {
    title: "Menu FloridaBlanca - Tapas à Carcassonne",
    description: "La carte de FloridaBlanca : tapas espagnoles et méditerranéennes, encornets et aïoli maison, padrons, vins. Restaurant à Carcassonne.",
    url: "https://www.floridablanca.fr/menu",
  },
};

function MenuPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="menu" img="/IMG_0236.webp" />

      <div className="w-full flex justify-center items-center bg-[url('/carteETE2023-1.webp')]">
        <div className="lg:w-3/5 w-11/12 flex flex-col items-center justify-center py-20 space-y-6">
          <img
            className="w-full h-auto object-cover"
            src="/carteETE2025-1.webp"
            alt="Carte été 2025 FloridaBlanca - Tapas et entrées"
          />
          <img
            className="w-full h-auto object-cover"
            src="/carteETE2025-2.webp"
            alt="Carte été 2025 FloridaBlanca - Plats et spécialités méditerranéennes"
          />
          <img
            className="w-full h-auto object-cover"
            src="/carteETE2025-3.webp"
            alt="Carte été 2025 FloridaBlanca - Boissons et desserts"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MenuPage;
