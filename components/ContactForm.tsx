"use client";
import { BadgeCheck } from "lucide-react";
import React, { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    numberOfGuests: "",
    eventDate: "",
    specialRequests: "",
  });

  const [succeeded, setSucceeded] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Envoyer les données du formulaire par email
    const { fullName, email, numberOfGuests, eventDate, specialRequests } =
      formData;

    const mailTo = "teulet.corentin31660@gmail.com";
    const subject = "Réservation de table pour un évènement";
    const body = `Nom complet: ${fullName}\nEmail: ${email}\nNombre de convives: ${numberOfGuests}\nDate de l'évènement: ${eventDate}\nDemandes spéciales: ${specialRequests}`;

    window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Mettre à jour l'état succeeded après la soumission réussie
    setSucceeded(true);
  };

  return (
    <>
      {succeeded ? (
        <div className="flex w-full h-96 justify-center items-center space-x-3 text-[#002E6D]">
          <BadgeCheck />
          <p className="text-xl italic">Votre message a bien été envoyé !</p>
        </div>
      ) : (
        <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-20 space-y-8 py-16">
          <form onSubmit={handleSubmit} className="space-y-8 lg:w-1/3 w-5/6 z-20">
            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
              >
                Nom Complet
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                required
              />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-10 space-y-8 lg:space-y-0">
              <div className="lg:w-1/2 w-full">
                <label
                  htmlFor="numberOfGuests"
                  className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
                >
                  Nombre de Convives
                </label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                  required
                />
              </div>

              <div className="lg:w-1/2 w-full">
                <label
                  htmlFor="eventDate"
                  className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
                >
                  Date de l'Evenement
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="specialRequests"
                className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
              >
                Demandes Speciales
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#002E6D] rounded-sm py-3 text-lg font-semibold text-white hover:bg-[#295DA6] duration-300 cursor-pointer"
            >
              RÉSERVER UNE TABLE
            </button>

          </form>

          <div className="lg:w-1/3 w-5/6 z-30">
            <img
              src="/IMG_0219.jpg"
              alt=""
              className="shadow-[25px_15px_0_0_#002E6D] z-30"
            />
          </div>

          <img
              src="/top-octopus.png"
              alt=""
              className="absolute opacity-5 z-0 scale-150 top-20 lg:top-44 left-0 overflow-x-hidden"
            />
        </div>
      )}
    </>
  );
};

export default ReservationForm;
