import CustomHeroBanner from "@/components/CustomHeroBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function AboutPage() {
  return (
    <>
      <Navbar />
      <CustomHeroBanner title="Presentation" />
      <Footer />
    </>
  );
}

export default AboutPage;
