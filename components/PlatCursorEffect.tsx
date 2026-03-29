import React from "react";

function PlatCursorEffect() {
  return (
    <div className="relative w-full bg-[#002E6D] flex flex-col justify-center items-center py-20">
      <h2 className="w-11/12 text-center leading-none text-7xl text-white font-spaceTransit tracking-wide">
        reservation pour des evenements par Groupes
      </h2>

      <p className="text-lg text-center lg:text-left mt-8 w-3/5 text-[#F0F5FF]">
        Pour des groupes entre 15 et 25 personnes, nous vous proposons une
        formule à 30€ par personne qui comprend :
      </p>

      <div className="lg:w-3/5 w-full flex flex-col lg:flex-row justify-between items-center lg:space-x-12 py-12">
        <div className="lg:w-1/2 w-11/12 py-12 text-[#F0F5FF]">
          <ul className="text-center lg:text-left mb-28 lg:mb-20 lg:space-y-2 space-y-4 text-lg">
            <li>🐙 Jambon Serrano</li>
            <li>🐙 Fuet catalan</li>
            <li>🐙 Paté Cabanes</li>
            <li>🐙 Padron</li>
            <li>🐙 Chipirones</li>
            <li>🐙 Moules à la plancha</li>
            <li>🐙 Émincé de bœuf à la plancha</li>
            <li>🐙 Frites</li>
            <li>🐙 Fromage espagnol</li>
            <li>🐙 Pavlova fruit rouge</li>
            <li>🐙 Une demie bouteille de vin par personne</li>
          </ul>

          <p className="text-lg text-justify lg:text-center mb-8">
            Contactez-nous pour réserver votre événement ou pour toute demande
            spéciale. Nous serons ravis de vous accueillir et de vous offrir une
            expérience inoubliable.
          </p>

          <div className="w-full grid place-items-center">
            <a
              href="/reservation"
              className="bg-white z-30 hover:bg-[#002E6D] border hover:border-white text-[#002E6D] hover:text-white lg:w-fit w-full text-center text-xl lg:text-base duration-200 font-medium px-5 lg:py-3 py-4"
            >
              Contactez-nous
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 w-5/6">
          <img src="/IMG_0222.webp" alt="Ambiance du restaurant FloridaBlanca à Carcassonne, tapas et spécialités méditerranéennes" />
        </div>

        <img
          src="/top-octopus.webp"
          alt=""
          aria-hidden="true"
          className="absolute opacity-5 z-0 scale-150 overflow-x-hidden invert"
        />
      </div>
    </div>
  );
}

export default PlatCursorEffect;
