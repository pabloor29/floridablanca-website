import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function ReservationPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Reservation" img="/IMG_0221.jpg"/>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8">

      </div>

      <Footer />
    </>
  );
}

export default ReservationPage;
