import type { Metadata } from "next";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description:
    "Conditions Générales d'Utilisation du site du restaurant FloridaBlanca à Carcassonne.",
  alternates: {
    canonical: "https://www.floridablanca.fr/cgu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function CGUPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="CGU" img="/IMG_0230.webp" />

      <main className="bg-white py-16 lg:py-24 flex justify-center">
        <article className="w-5/6 lg:w-3/5 text-[#274b7e] space-y-8">
          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU)
              régissent l&apos;accès et l&apos;utilisation du site{" "}
              <a className="hover:underline" href="https://www.floridablanca.fr">
                www.floridablanca.fr
              </a>{" "}
              édité par le restaurant FloridaBlanca, 22 rue Trivalle, 11000
              Carcassonne. Tout accès au site implique l&apos;acceptation pleine
              et entière des présentes CGU.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              2. Acces au site
            </h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant
              d&apos;un accès Internet. Les coûts liés à cet accès (matériel,
              logiciels, connexion) restent à la charge de l&apos;utilisateur.
              FloridaBlanca se réserve le droit de suspendre, modifier ou
              interrompre l&apos;accès au site, notamment pour maintenance, sans
              préavis ni indemnité.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              3. Reservations
            </h2>
            <p>
              Le système de réservation en ligne permet à l&apos;utilisateur
              de demander une table. La réservation est confirmée par email
              après validation par le restaurant. FloridaBlanca se réserve le
              droit de refuser ou d&apos;annuler toute réservation en cas
              d&apos;indisponibilité, d&apos;informations erronées ou de
              comportement abusif. En cas d&apos;empêchement, l&apos;utilisateur
              s&apos;engage à prévenir le restaurant dans les meilleurs délais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              4. Obligations de l&apos;utilisateur
            </h2>
            <p>L&apos;utilisateur s&apos;engage à :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>fournir des informations exactes lors des formulaires ;</li>
              <li>
                ne pas perturber le fonctionnement du site ni tenter d&apos;y
                accéder de façon non autorisée ;
              </li>
              <li>
                respecter les droits de propriété intellectuelle attachés au
                site et à son contenu ;
              </li>
              <li>
                ne pas utiliser le site à des fins illicites, frauduleuses ou
                contraires aux bonnes mœurs.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              5. Propriete intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments du site (textes, images, logos,
              graphismes, code) est protégé par le droit d&apos;auteur et reste
              la propriété de FloridaBlanca ou de ses partenaires. Toute
              reproduction, représentation ou exploitation sans autorisation
              écrite préalable est interdite.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              6. Responsabilite
            </h2>
            <p>
              FloridaBlanca s&apos;efforce d&apos;assurer la disponibilité et
              l&apos;exactitude des informations du site mais ne peut être tenu
              responsable des erreurs, indisponibilités, ou dommages directs ou
              indirects résultant de l&apos;utilisation du site ou de
              l&apos;impossibilité d&apos;y accéder.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              7. Liens externes
            </h2>
            <p>
              Le site peut contenir des liens vers des sites tiers.
              FloridaBlanca n&apos;exerce aucun contrôle sur ces sites et
              décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              8. Donnees personnelles
            </h2>
            <p>
              Le traitement des données personnelles est décrit dans notre{" "}
              <a className="hover:underline" href="/politique-confidentialite">
                politique de confidentialité
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              9. Modification des CGU
            </h2>
            <p>
              FloridaBlanca se réserve le droit de modifier les présentes CGU à
              tout moment. La version applicable est celle en vigueur lors de
              la consultation du site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              10. Droit applicable
            </h2>
            <p>
              Les présentes CGU sont régies par le droit français. Tout litige
              relatif à leur interprétation ou exécution relève de la
              compétence exclusive des tribunaux de Carcassonne, sauf
              disposition légale contraire.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default CGUPage;
