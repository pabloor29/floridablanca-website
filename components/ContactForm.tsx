"use client";
import { BadgeCheck } from "lucide-react";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { fr } from "date-fns/locale";

registerLocale("fr", fr);
setDefaultLocale("fr");

type Props = {
  closedWeekdays: number[];
  closedDates: string[];
  holidayPeriods: { debut: string; fin: string }[];
  timeSlots: string[];
  lunchSlots: string[];
  dinnerSlots: string[];
};

function toLocalDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const d = date.getDate().toString().padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const ReservationForm = ({ closedWeekdays, closedDates, holidayPeriods, timeSlots, lunchSlots, dinnerSlots }: Props) => {
  const translations = {
    fr: {
      title: "Demande de reservation",
      fullNameLabel: "Nom complet",
      emailLabel: "Email",
      phoneLabel: "Telephone",
      numberOfGuestsLabel: "Nombre de personnes",
      eventDateLabel: "Date",
      eventTimeLabel: "Heure",
      specialRequestsLabel: "Demandes speciales",
      submitButton: "ENVOYER LA DEMANDE",
      afterSentMessage: `Merci pour votre demande de réservation ! Un email de confirmation vous sera envoyé sous peu. Veuillez vérifier votre boîte mail.`,
      alertMaxNbGuests: "Pour toute réservation supérieure à 10 couverts, veuillez nous contacter à cette adresse mail : ",
      todayAfter19Message: "Il est passé 19h. Pour toute réservation le jour même, veuillez appeler le restaurant directement.",
      callButton: "Appeler le restaurant",
    },
    en: {
      title: "Reservation request",
      fullNameLabel: "Full name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      numberOfGuestsLabel: "Number of people",
      eventDateLabel: "Date",
      eventTimeLabel: "Time",
      specialRequestsLabel: "Special requests",
      submitButton: "SEND REQUEST",
      afterSentMessage: `Thank you for your booking request! A confirmation email will be sent to you shortly. Please check your mailbox.`,
      alertMaxNbGuests: "For reservations of more than 10 covers, please contact us at this email address: ",
      todayAfter19Message: "It's past 7 PM. For same-day reservations, please call the restaurant directly.",
      callButton: "Call the restaurant",
    },
    es: {
      title: "Solicitud de reserva",
      fullNameLabel: "Nombre completo",
      emailLabel: "Correo electronico",
      phoneLabel: "Telefono",
      numberOfGuestsLabel: "Numero de personas",
      eventDateLabel: "Fecha",
      eventTimeLabel: "Hora",
      specialRequestsLabel: "Solicitudes especiales",
      submitButton: "ENVIAR SOLICITUD",
      afterSentMessage: `¡Gracias por su solicitud de reserva! Un correo electrónico de confirmación le será enviado en breve. Por favor, verifique su bandeja de entrada.`,
      alertMaxNbGuests: "Para reservas de más de 10 comensales, póngase en contacto con nosotros en esta dirección de correo electrónico: ",
      todayAfter19Message: "Son más de las 19h. Para reservas en el día, llame directamente al restaurante.",
      callButton: "Llamar al restaurante",
    },
    it: {
      title: "Richiesta di prenotazione",
      fullNameLabel: "Nome completo",
      emailLabel: "Email",
      phoneLabel: "Telefono",
      numberOfGuestsLabel: "Numero di persone",
      eventDateLabel: "Data",
      eventTimeLabel: "Ora",
      specialRequestsLabel: "Richieste speciali",
      submitButton: "INVIA LA RICHIESTA",
      afterSentMessage: `Grazie per la tua richiesta di prenotazione! Una email di conferma ti sarà inviata a breve. Controlla la tua casella di posta.`,
      alertMaxNbGuests: "Per prenotazioni superiori a 10 coperti, vi preghiamo di contattarci all'indirizzo e-mail: ",
      todayAfter19Message: "Sono passate le 19h. Per prenotazioni in giornata, chiamate direttamente il ristorante.",
      callButton: "Chiama il ristorante",
    },
  };

  const [selectedLanguage, setSelectedLanguage] = useState("fr");
  const translation = translations[selectedLanguage as keyof typeof translations];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    numberOfGuests: "",
    eventDate: new Date(),
    eventTime: "",
    specialRequests: "",
  });

  const [succeeded, setSucceeded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isTodayBlocked = (): boolean => new Date().getHours() >= 19;

  const isDateClosed = (date: Date): boolean => {
    const isToday = toLocalDateStr(date) === toLocalDateStr(new Date());
    if (isToday && isTodayBlocked()) return true;

    if (closedWeekdays.includes(date.getDay())) return true;

    const dateStr = toLocalDateStr(date);
    if (closedDates.includes(dateStr)) return true;

    for (const period of holidayPeriods) {
      if (dateStr >= period.debut && dateStr <= period.fin) return true;
    }

    return false;
  };

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const eventDateFormatted = selectedDate
      ? selectedDate.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })
      : "";

    const eventDateISO = selectedDate ? toLocalDateStr(selectedDate) : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          numberOfGuests: formData.numberOfGuests,
          eventDate: eventDateFormatted,
          eventDateISO,
          eventTime: selectedValue,
          specialRequests: formData.specialRequests,
        }),
      });

      if (!res.ok) throw new Error("Erreur serveur");
      setSucceeded(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi des emails :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <style jsx global>
        {`
          .date-past {
            background-color: #f3f4f6 !important;
            color: #9ca3af !important;
            cursor: not-allowed !important;
          }

          .date-closed {
            background-color: #fee2e2 !important;
            color: #991b1b !important;
            position: relative;
          }

          .date-closed::after {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 80%;
            height: 2px;
            background-color: #991b1b;
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          .react-datepicker__day--disabled {
            cursor: not-allowed !important;
          }
        `}
      </style>
      {succeeded ? (
        <div className="flex flex-col w-full justify-center px-4 items-center py-20 gap-6 text-[#002E6D]">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <BadgeCheck />
            <p className="text-xl italic text-center">
              {translation.afterSentMessage}
            </p>
          </div>
          <p className="text-sm text-center bg-yellow-50 border border-yellow-300 rounded-md px-5 py-3 max-w-md">
            ⚠️ Pensez à vérifier vos <strong>courriers indésirables (spam)</strong> si vous ne recevez pas notre email de confirmation.
          </p>
        </div>
      ) : (
        <div className="relative flex flex-col lg:flex-row justify-center items-start lg:space-x-12 space-y-8 lg:space-y-0 py-16 px-4">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-8 lg:w-1/2 w-full max-w-2xl relative z-30"
          >
            <div className="flex items-center justify-between lg:flex-row flex-col-reverse">
              <h3 className="text-[#002E6D] text-7xl font-medium font-spaceTransit leading-none">
                {translation.title}
              </h3>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="rounded-md border border-[#597ba8] text-xl px-2 py-1 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="fr">🇫🇷</option>
                <option value="en">🇬🇧</option>
                <option value="es">🇪🇸</option>
                <option value="it">🇮🇹</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
              >
                {translation.fullNameLabel}
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

            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
              >
                {translation.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                required
              />
            </div>

            <div className="bg-[#002E6D]/80 p-2 text-white text-sm">
              {translation.alertMaxNbGuests}
              <a
                href="mailto:floridablanca22@gmail.com"
                className="text-blue-200 underline"
              >
                floridablanca22@gmail.com
              </a>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-10 space-y-8 lg:space-y-0">
              <div className="lg:w-1/2 w-full">
                <label
                  htmlFor="numberOfGuests"
                  className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
                >
                  {translation.numberOfGuestsLabel}
                </label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  min={1}
                  max={10}
                  className="mt-1 block w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                  required
                />
              </div>

              <div className="lg:w-1/2 w-full">
                <label
                  htmlFor="eventDate"
                  className="w-full block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
                >
                  {translation.eventDateLabel}
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => date && setSelectedDate(date)}
                  filterDate={(date) => !isDateClosed(date)}
                  dayClassName={(date) => {
                    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                    if (isPast) return "date-past";
                    if (isDateClosed(date)) return "date-closed";
                    return "";
                  }}
                  dateFormat="dd/MM/yyyy"
                  locale="fr"
                  minDate={isTodayBlocked() ? (() => { const d = new Date(); d.setDate(d.getDate() + 1); return d; })() : new Date()}
                  placeholderText="Sélectionner une date"
                  className="w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
                  required
                />
                {isTodayBlocked() && (
                  <div className="mt-3 bg-amber-50 border border-amber-300 rounded-md px-4 py-3 flex flex-col gap-3">
                    <p className="text-sm text-amber-800 font-medium">
                      {translation.todayAfter19Message}
                    </p>
                    <a
                      href="tel:0430345855"
                      className="inline-flex items-center justify-center gap-2 bg-[#002E6D] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#295DA6] duration-300"
                    >
                      📞 {translation.callButton}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-3">
                <label
                  htmlFor="eventTime"
                  className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
                >
                  {translation.eventTimeLabel}
                </label>
                {selectedValue && (
                  <span className="inline-flex items-center gap-2 self-start sm:self-auto bg-[#002E6D] text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Sélectionné : {selectedValue}
                  </span>
                )}
              </div>
              <input type="hidden" name="eventTime" value={selectedValue} required />

              <div className="border border-[#597ba8] rounded-md p-3 sm:p-4 bg-white">
                {lunchSlots.length === 0 && dinnerSlots.length === 0 ? (
                  <p className="text-sm italic text-[#002E6D]/70 text-center py-4">
                    Aucun créneau disponible
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {lunchSlots.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-[#002E6D]/20">
                          <span aria-hidden>🌞</span>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#002E6D]">
                            Midi
                          </p>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
                          {lunchSlots.map((option) => (
                            <button
                              type="button"
                              key={`lunch-${option}`}
                              onClick={() => handleSelect(option)}
                              className={`px-2 py-1.5 rounded-md border text-sm transition ${
                                selectedValue === option
                                  ? "bg-[#002E6D] text-white border-[#002E6D]"
                                  : "bg-white text-[#002E6D] border-[#597ba8] hover:bg-[#002E6D]/10"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {dinnerSlots.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-[#002E6D]/20">
                          <span aria-hidden>🌙</span>
                          <p className="text-xs font-bold uppercase tracking-wider text-[#002E6D]">
                            Soir
                          </p>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
                          {dinnerSlots.map((option) => (
                            <button
                              type="button"
                              key={`dinner-${option}`}
                              onClick={() => handleSelect(option)}
                              className={`px-2 py-1.5 rounded-md border text-sm transition ${
                                selectedValue === option
                                  ? "bg-[#002E6D] text-white border-[#002E6D]"
                                  : "bg-white text-[#002E6D] border-[#597ba8] hover:bg-[#002E6D]/10"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="specialRequests"
                className="block text-lg font-medium text-[#002E6D] font-spaceTransit text-4xl tracking-wide"
              >
                {translation.specialRequestsLabel}
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleChange as React.ChangeEventHandler<HTMLTextAreaElement>}
                className="mt-1 block w-full px-4 py-2 border border-[#597ba8] rounded-md focus:ring focus:ring-violet-200 focus:border-violet-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#002E6D] rounded-sm py-3 text-lg font-semibold text-white hover:bg-[#295DA6] duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting && (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {isSubmitting ? "Envoi en cours..." : translation.submitButton}
            </button>
          </form>

          <div className="lg:w-1/3 w-5/6 relative z-10 self-center lg:self-start lg:sticky lg:top-24">
            <img
              src="/IMG_0228.webp"
              alt="Salle du restaurant FloridaBlanca à Carcassonne - réservez votre table"
              className="shadow-[25px_15px_0_0_#002E6D] w-full h-auto"
            />
          </div>

          <img
            src="/top-octopus.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute opacity-5 z-0 scale-150 top-20 lg:top-44 left-0 overflow-x-hidden"
          />
        </div>
      )}
    </>
  );
};

export default ReservationForm;
