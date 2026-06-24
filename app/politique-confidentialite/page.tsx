import type { Metadata } from "next";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du restaurant FloridaBlanca à Carcassonne. Traitement des données personnelles, cookies, droits RGPD.",
  alternates: {
    canonical: "https://www.floridablanca.fr/politique-confidentialite",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner
        title="Confidentialite"
        img="/IMG_0230.webp"
      />

      <main className="bg-white py-16 lg:py-24 flex justify-center">
        <article className="w-5/6 lg:w-3/5 text-[#274b7e] space-y-8">
          <p>
            La présente politique de confidentialité décrit la manière dont
            FloridaBlanca collecte, utilise et protège les données personnelles
            des utilisateurs du site{" "}
            <a className="hover:underline" href="https://www.floridablanca.fr">
              www.floridablanca.fr
            </a>
            , conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés.
          </p>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Responsable du traitement
            </h2>
            <p>
              Restaurant FloridaBlanca, 22 rue Trivalle, 11000 Carcassonne.
              Contact :{" "}
              <a
                className="hover:underline"
                href="mailto:floridablanca22@gmail.com"
              >
                floridablanca22@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Donnees collectees
            </h2>
            <p>
              Nous collectons uniquement les données nécessaires aux finalités
              suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Réservation de table</strong> : nom, prénom, email,
                téléphone, date, heure, nombre de couverts et message.
              </li>
              <li>
                <strong>Formulaire de contact</strong> : nom, email et contenu
                du message.
              </li>
              <li>
                <strong>Statistiques de visite</strong> : données techniques
                anonymisées via Vercel Analytics et Vercel Speed Insights
                (pages vues, performance, type d&apos;appareil).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Finalites et base legale
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Gestion des réservations et réponse aux demandes — exécution
                contractuelle.
              </li>
              <li>
                Amélioration du site et mesure d&apos;audience — intérêt
                légitime ou consentement.
              </li>
              <li>
                Respect des obligations légales et comptables — obligation
                légale.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Duree de conservation
            </h2>
            <p>
              Les données de réservation sont conservées 12 mois après la
              dernière interaction. Les messages reçus via le formulaire de
              contact sont conservés 24 mois. Les données de statistiques sont
              conservées 13 mois maximum.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Destinataires
            </h2>
            <p>
              Les données sont destinées exclusivement à l&apos;équipe du
              restaurant FloridaBlanca. Elles peuvent être traitées par nos
              sous-traitants techniques :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Vercel Inc.</strong> — hébergement et analytics.
              </li>
              <li>
                <strong>Resend</strong> — envoi des emails de confirmation de
                réservation.
              </li>
            </ul>
            <p>
              Aucune donnée n&apos;est revendue, louée ou cédée à des tiers à
              des fins commerciales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Cookies
            </h2>
            <p>
              Le site utilise des cookies et technologies similaires à des fins
              de mesure d&apos;audience (Vercel Analytics) et de performance
              (Vercel Speed Insights). Ces traceurs ne sont déposés
              qu&apos;après votre consentement via la bannière cookies. Vous
              pouvez modifier votre choix à tout moment en effaçant le stockage
              local du site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit
              d&apos;accès, de rectification, d&apos;effacement, de limitation,
              d&apos;opposition et de portabilité de vos données. Pour
              l&apos;exercer, contactez :{" "}
              <a
                className="hover:underline"
                href="mailto:floridablanca22@gmail.com"
              >
                floridablanca22@gmail.com
              </a>
              . Vous pouvez également introduire une réclamation auprès de la{" "}
              <a
                className="hover:underline"
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Securite
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              pour protéger vos données contre tout accès non autorisé, perte
              ou divulgation.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default PolitiqueConfidentialitePage;
