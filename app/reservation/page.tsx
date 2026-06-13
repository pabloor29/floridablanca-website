import type { Metadata } from "next";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Phone, Wrench } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Réservation - FloridaBlanca Restaurant Tapas Carcassonne",
  description: "Réservez votre table au restaurant FloridaBlanca à Carcassonne. 22 rue Trivalle, au pied de la Cité Médiévale. Tél : 04 30 34 58 55.",
  alternates: {
    canonical: "https://www.floridablanca.fr/reservation",
  },
  openGraph: {
    title: "Réservation - FloridaBlanca Carcassonne",
    description: "Réservez votre table par téléphone au 04 30 34 58 55. FloridaBlanca, restaurant tapas au pied de la Cité Médiévale de Carcassonne.",
    url: "https://www.floridablanca.fr/reservation",
  },
};

function ReservationPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Reservation" img="/IMG_0221.webp" />

      <div className="flex flex-col items-center justify-center py-24 px-6 min-h-64 text-[#002E6D]">
        <div className="flex flex-col items-center gap-6 max-w-xl text-center">
          <Wrench size={48} className="text-[#002E6D] opacity-60" />
          <h2 className="font-spaceTransit text-4xl lg:text-5xl leading-tight">
            Reservations en ligne
            <br />
            temporairement indisponibles
          </h2>
          <p className="text-lg text-[#002E6D]/80">
            Notre système de réservation par e-mail est actuellement en maintenance. Nous nous excusons pour la gêne occasionnée.
          </p>
          <div className="mt-4 flex flex-col items-center gap-3">
            <p className="text-base font-medium uppercase tracking-widest text-[#002E6D]/60">
              Réservez par téléphone
            </p>
            <a
              href="tel:+33430345855"
              className="flex items-center gap-3 bg-[#002E6D] text-white text-2xl font-semibold px-8 py-4 rounded-sm hover:bg-[#295DA6] transition-colors duration-300"
            >
              <Phone size={24} />
              04 30 34 58 55
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ReservationPage;
