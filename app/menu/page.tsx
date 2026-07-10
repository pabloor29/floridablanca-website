export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormulaPopup from "@/components/FormulaPopup";
import { getMenuData, getMenuFileUrl } from "@/lib/menu";
import React from "react";

export const metadata: Metadata = {
  title: "Menu & Carte - Tapas et Cuisine Méditerranéenne",
  description: "Découvrez la carte du restaurant FloridaBlanca à Carcassonne : tapas, poulpe, encornets, moules frites, padrons, pika-pika de bœuf, calçots, vins régionaux et boissons. Menu été 2026.",
  alternates: {
    canonical: "https://www.floridablanca.fr/menu",
  },
  openGraph: {
    title: "Menu FloridaBlanca - Tapas à Carcassonne",
    description: "La carte de FloridaBlanca : tapas espagnoles et méditerranéennes, encornets et aïoli maison, padrons, vins. Restaurant à Carcassonne.",
    url: "https://www.floridablanca.fr/menu",
  },
};

async function MenuPage() {
  const categories = await getMenuData();

  const menusCategory = categories.find((c) => c.name === "Menus");
  const formuleCategory = categories.find((c) => c.name === "Formule du midi");

  const menuImages = menusCategory?.files.map((f) => getMenuFileUrl(f.file_path)) ?? [];
  const formuleImages = formuleCategory?.files.map((f) => getMenuFileUrl(f.file_path)) ?? [];

  return (
    <>
      <Navbar />
      <CustomHeroBanner title="menu" img="/IMG_0236.webp" />

      <div className="w-full flex justify-center items-center bg-[url('/carteETE2023-1.webp')]">
        <div className="lg:w-3/5 w-11/12 flex flex-col items-center justify-center py-20 space-y-6">
          {menuImages.map((src, i) => (
            <img
              key={i}
              className="w-full h-auto object-cover"
              src={src}
              alt={`Carte FloridaBlanca ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <FormulaPopup
        images={formuleImages}
        showFloatingButton={true}
      />

      <Footer />
    </>
  );
}

export default MenuPage;
