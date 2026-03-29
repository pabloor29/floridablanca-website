import type { Metadata } from "next";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Banknote, CreditCard, Coins, Ticket } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Contact & Horaires - FloridaBlanca Carcassonne",
  description: "Contactez FloridaBlanca : 22 rue Trivalle, 11000 Carcassonne. Tél : 04 30 34 58 55. Ouvert mardi–samedi 12h-14h & 18h-22h (juillet–août : lundi–samedi). Réservation et informations pratiques.",
  alternates: {
    canonical: "https://www.floridablanca.fr/contact",
  },
  openGraph: {
    title: "Contact & Horaires - FloridaBlanca Carcassonne",
    description: "22 rue Trivalle, 11000 Carcassonne. Tél : 04 30 34 58 55. Ouvert mardi–samedi midi et soir. Wifi, animaux acceptés, anglais et espagnol parlés.",
    url: "https://www.floridablanca.fr/contact",
  },
};

function ContactPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Contact" img="/IMG_0234.webp" />

      <div className="w-full flex flex-col lg:flex-row justify-between lg:space-x-8 space-y-8 lg:space-y-0">
        <div className="lg:h-[750px] h-[1100px] lg:w-1/2 lg:pl-16 space-y-8 flex flex-col items-center justify-center lg:py-12">
          <h3 className="z-10 leading-none text-[#002E6D] font-spaceTransit text-8xl tracking-wide">
            Floridablanca
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-16">
            <div className="flex flex-col justify-between items-center space-y-12">
              <div className="text-[#002E6D] flex flex-col space-y-3 items-center lg:items-start justify-center">
                <h4 className="underline">
                  22, rue Trivalle 11000 CARCASSONNE
                </h4>
                <a href="">Fixe : +33 4 30 34 58 55 </a>
                <a href="">Mobile : +33 6 34 29 48 74</a>
              </div>

              <div className="text-[#002E6D] w-full flex flex-col space-y-3 items-center lg:items-start justify-center">
                <p>Modes de paiment</p>
                <div className="flex items-center space-x-10">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="scale-125">
                          <CreditCard />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Carte de crédit</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="scale-125">
                          <Banknote />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Chèques vacances</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="scale-125">
                          <Coins />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Espèces</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="text-[#002E6D] flex w-full flex-col justify-center items-center lg:items-start space-y-3">
                <p>Animaux acceptés</p>
                <p>Accès Internet Wifi</p>
                <p>🇬🇧 Anglais</p>
                <p>🇪🇸 Espagnol</p>
              </div>
            </div>

            <div className="text-[#002E6D] border-4 w-fit mt-12 lg:mt-0 px-8 py-4 border-[#002E6D] flex flex-col items-center justify-center space-y-6 shadow-[-15px_15px_0_0_#002E6D]">
              <h3 className="w-full text-center z-10 text-[#002E6D] border-b-4 border-[#002E6D] font-spaceTransit text-7xl tracking-wide">
                horaires
              </h3>

              <div className="flex flex-col items-center justify-center">
                <p>Juillet - Aout</p>
                <p>Lundi - Samedi </p>
                <p className="font-spaceTransit text-5xl">
                  {" "}
                  12:00 - 14:00 & 18:00 - 22:00
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p>Septembre - Juin</p>
                <p>Mardi - Samedi </p>
                <p className="font-spaceTransit text-5xl">
                  {" "}
                  12:00 - 14:00 & 18:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center lg:h-[750px] overflow-hidden">
          <img src="/florida-map-3.png" alt="Carte et localisation du restaurant FloridaBlanca - 22 rue Trivalle, Carcassonne" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
