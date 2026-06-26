import type { Metadata } from "next";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { getReservationConfig } from "@/lib/reservation";
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

async function ReservationPage() {
  const config = await getReservationConfig();

  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Reservation" img="/IMG_0221.webp" />
      <ContactForm
        closedWeekdays={config.closedWeekdays}
        closedDates={config.closedDates}
        holidayPeriods={config.holidayPeriods}
        timeSlots={config.timeSlots}
        lunchSlots={config.lunchSlots}
        dinnerSlots={config.dinnerSlots}
      />
      <Footer />
    </>
  );
}

export default ReservationPage;
