import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Banknote, CreditCard, Coins } from "lucide-react";
import React from "react";

function ContactPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Contact" />
      <div className="flex justify-center items-center space-x-8">
        <div className="w-1/2 py-16 pl-16 space-y-8 flex flex-col items-center justify-center">
          <h3 className="z-10 text-[#002E6D] font-spaceTransit text-8xl tracking-wide">
            Floridablanca
          </h3>

          <div className="flex items-center justify-between space-x-16">
            <div className="flex flex-col justify-between space-y-12">
              <div className="text-[#002E6D] flex flex-col space-y-3">
                <h4 className="underline">
                  22, rue Trivalle 11000 CARCASSONNE
                </h4>
                <a href="">Fixe : +33 4 30 34 58 55 </a>
                <a href="">Mobile : +33 6 34 29 48 74</a>
              </div>

              <div className="text-[#002E6D] flex flex-col space-y-3">
                <p>Modes de paiment</p>
                <div className="flex items-center space-x-10">
                  <div className="scale-125">
                    <CreditCard />
                  </div>
                  <div className="scale-125">
                    <Banknote />
                  </div>
                  <div className="scale-125">
                    <Coins />
                  </div>
                </div>
              </div>

              <div className="text-[#002E6D] flex flex-col space-y-3">
                <p>Animaux acceptés</p>
                <p>Accès Internet Wifi</p>
                <p>🇬🇧 Anglais</p>
                <p>🇪🇸 Espagnol</p>
              </div>
            </div>

            <div className="text-[#002E6D] border-4 w-fit px-8 py-4 border-[#002E6D] flex flex-col items-center justify-center space-y-6 shadow-[-15px_15px_0_0_#002E6D]">
              <h3 className="w-full text-center z-10 text-[#002E6D] border-b-4 border-[#002E6D] font-spaceTransit text-7xl tracking-wide">
                horaires
              </h3>

              <div className="flex flex-col items-center justify-center">
                <p>Juillet - Aout</p>
                <p>Lundi - Samedi </p>
                <p className="font-spaceTransit text-5xl">
                  {" "}
                  12:00 - 14:00 & 18:30 - 22:00
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p>Septembre - Juin</p>
                <p>Mardi - Samedi </p>
                <p className="font-spaceTransit text-5xl">
                  {" "}
                  12:00 - 14:00 & 18:30 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img
            src="/floridablanca-map.png"
            alt="carte google map Floridablanca à Carcassonne"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
