import type { Metadata } from 'next'
import CustomHeroBanner from '@/components/CustomHeroBanner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata: Metadata = {
  title: "Événements - Soirées & Privatisation FloridaBlanca",
  description: "Privatisez le patio ou la salle du FloridaBlanca pour vos événements à Carcassonne : anniversaires, repas d'équipe, soirées privées. Cuisine méditerranéenne et tapas pour vos occasions spéciales.",
  alternates: {
    canonical: "https://www.floridablanca.fr/evenements",
  },
  openGraph: {
    title: "Événements - FloridaBlanca Carcassonne",
    description: "Organisez vos événements au FloridaBlanca à Carcassonne. Privatisation du patio ou de la salle pour anniversaires, soirées, repas d'entreprise.",
    url: "https://www.floridablanca.fr/evenements",
  },
};

function EvenementsPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="evenements" img="/IMG_0227.webp"/>
      <Footer />
    </>  )
}

export default EvenementsPage
