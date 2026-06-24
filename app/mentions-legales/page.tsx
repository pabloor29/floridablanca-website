import type { Metadata } from "next";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du restaurant FloridaBlanca à Carcassonne. Informations sur l'éditeur du site, l'hébergeur et les conditions d'utilisation.",
  alternates: {
    canonical: "https://www.floridablanca.fr/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Mentions legales" img="/IMG_0230.webp" />

      <main className="bg-white py-16 lg:py-24 flex justify-center">
        <article className="w-5/6 lg:w-3/5 text-[#274b7e] space-y-8">
          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Editeur du site
            </h2>
            <p>
              <strong>Restaurant FloridaBlanca</strong>
              <br />
              22 rue Trivalle
              <br />
              11000 Carcassonne, France
              <br />
              Téléphone :{" "}
              <a className="hover:underline" href="tel:+33430345855">
                04 30 34 58 55
              </a>
              <br />
              Email :{" "}
              <a
                className="hover:underline"
                href="mailto:floridablanca22@gmail.com"
              >
                floridablanca22@gmail.com
              </a>
            </p>
            <p>
              Directeur de la publication : Jean-Loup, gérant du restaurant
              FloridaBlanca.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Hebergeur
            </h2>
            <p>
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789, États-Unis
              <br />
              Site :{" "}
              <a
                className="hover:underline"
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Propriete intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu présent sur ce site (textes, images,
              photographies, logos, vidéos, éléments graphiques) est protégé par
              le droit d&apos;auteur et reste la propriété exclusive de
              FloridaBlanca ou de ses partenaires. Toute reproduction,
              représentation, modification ou exploitation, totale ou partielle,
              sans autorisation écrite préalable est strictement interdite.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Creation du site
            </h2>
            <p>
              Site conçu et développé par{" "}
              <a
                className="hover:underline"
                href="https://resa-service.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                resa-service.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Responsabilite
            </h2>
            <p>
              FloridaBlanca s&apos;efforce d&apos;assurer l&apos;exactitude et la
              mise à jour des informations diffusées sur le site, mais ne peut
              garantir l&apos;absence d&apos;erreurs ou d&apos;omissions. La
              consultation du site se fait sous la responsabilité de
              l&apos;utilisateur.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-spaceTransit text-4xl text-[#002E6D]">
              Contact
            </h2>
            <p>
              Pour toute question relative aux présentes mentions légales,
              contactez-nous à l&apos;adresse :{" "}
              <a
                className="hover:underline"
                href="mailto:floridablanca22@gmail.com"
              >
                floridablanca22@gmail.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default MentionsLegalesPage;
