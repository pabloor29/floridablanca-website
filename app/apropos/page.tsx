import Bubble from "@/components/Bubble";
import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function AboutPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Presentation" />

      <div className="flex justify-center items-center py-32 z-30">
        <div className="w-3/5 flex justify-center items-center space-x-20">
          <div className="w-1/2 z-30">
            <img
              src="/worker.png"
              alt=""
              className="shadow-[-25px_25px_0_0_#002E6D] duration-200 z-30"
            />
          </div>
          <div className="w-1/2 flex flex-col space-y-8">
            <h3 className="text-[#002E6D] text-7xl font-medium font-spaceTransit">
              le chef JEAN-LOUP
            </h3>
            <article className="text-[#274b7e]">
              Le Floridablanca a ouvert ses portes en 2017, rue trivalle, à
              mi-chemin entre la Bastide et la Cité Médiévale. Jean-Loup,
              affable, régale sa clientèle, qui mêle tout autant de touristes
              que de "figures" carcassonnaises, de préparations culinaires
              largement inspirés de sa culture méditerranéenne. Son acolyte
              Quentin, au service, s'occupe de tou·te·s avec beaucoup
              d'attention. A la carte on trouve plats et tapas : de l'encornet
              et aïoli maison aux padrons en passant par une pika-pika de boeuf
              ou quelques calçots...
            </article>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-t from-[#000e21] to-[#295DA6] flex justify-center items-center py-20">
        <div
          className="
      absolute
      top-0
      left-0
      w-full
      overflow-hidden
      leading-none
      rotate-180
      bg-white
      "
        >
          <svg
            className="
            relative
            block
            h-14
            rotate-180
            w-full
            "
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#285AA2]"
            ></path>
          </svg>
        </div>

        <Bubble />

        <div className="w-3/5 flex flex-col justify-center items-center space-y-20">
          <h3 className="text-7xl font-medium font-spaceTransit w-full text-center">
            Trois salles, trois ambiances...
          </h3>
          <div className="flex flex-col space-y-44">
            <div className="flex justify-center items-center space-x-20">
              <div className="w-1/3 flex flex-col space-y-8 text-right">
                <h3 className="text-5xl font-medium font-spaceTransit">
                  La terrasse
                </h3>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus non quos cupiditate praesentium temporibus excepturi
                  inventore sunt, dolores consectetur quibusdam quasi natus,
                  quisquam dignissimos consequuntur aliquid doloremque minus quo
                  reprehenderit!
                </article>
              </div>
              <div className="w-2/3">
                <img
                  src="/moules.png"
                  alt=""
                  className="rotate-3 shadow-md hover:scale-105 duration-300"
                />
              </div>
            </div>

            <div className="flex justify-center items-center space-x-20">
              <div className="w-2/3">
                <img
                  src="/moules.png"
                  alt=""
                  className="-rotate-3 shadow-md hover:scale-105 duration-300"
                />
              </div>
              <div className="w-1/3 flex flex-col space-y-8">
                <h3 className="text-5xl font-medium font-spaceTransit">
                  La salle du bar-restaurant
                </h3>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus non quos cupiditate praesentium temporibus excepturi
                  inventore sunt, dolores consectetur quibusdam quasi natus,
                  quisquam dignissimos consequuntur aliquid doloremque minus quo
                  reprehenderit!
                </article>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-20">
              <div className="w-1/3 flex flex-col space-y-8 text-right">
                <h3 className="text-5xl font-medium font-spaceTransit">
                  Le patio
                </h3>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus non quos cupiditate praesentium temporibus excepturi
                  inventore sunt, dolores consectetur quibusdam quasi natus,
                  quisquam dignissimos consequuntur aliquid doloremque minus quo
                  reprehenderit!
                </article>
              </div>
              <div className="w-2/3">
                <img
                  src="/moules.png"
                  alt=""
                  className="rotate-3 shadow-md hover:scale-105 duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;
