import React from "react";

function Footer() {
  return (
    <footer className="w-full pt-16 bg-[#f0f5ff] flex flex-col justify-center items-center">
      <div className="flex w-5/6 h-full justify-between pb-8">
        <div className="w-1/3 text-[#0A3C74]">
          <h4 className="font-spaceTransit text-5xl mb-3">HORAIRES</h4>
          <ul>
            <li className="font-bold text-lg">Juillet - Août</li>
            <p>Lundi - Samedi</p>
            <p>12:00 - 14:00 & 18:30 - 22:00</p>
            <li className="font-bold text-lg mt-3">Septembre - Juin</li>
            <p>Mardi - Samedi</p>
            <p>12:00 - 14:00 & 18:30 - 22:00</p>
          </ul>
        </div>

        <div className="w-1/3 text-[#0A3C74]">
          <h4 className="font-spaceTransit text-5xl mb-3">ADRESSE</h4>
          <a href="https://www.google.com/maps/place/22+Rue+Trivalle,+11000+Carcassonne/@43.2092525,2.3586791,17z/data=!3m1!4b1!4m6!3m5!1s0x12ae2c3fe47df2d1:0xecd2d651ec878ced!8m2!3d43.2092525!4d2.361254!16s%2Fg%2F11bw40xyml?entry=ttu">
            22 rue Trivalle
            <br />
            11000, Carcassonne
          </a>
        </div>

        <div className="w-1/3 text-[#0A3C74]">
          <h4 className="font-spaceTransit text-5xl mb-3">CONTACT</h4>
          <ul>
            <li className="flex gap-2 mb-3">
              <img src="/mail-line.png" alt="" />
              <a href="mailto:floridablanca22@gmail.com">
                floridablanca22@gmail.com
              </a>
            </li>
            <li className="flex gap-2 mb-3">
              <img src="/phone-line.png" alt="" />
              <a href="tel:+33430345855">04 30 34 58 55</a>
            </li>
            <li className="flex gap-2 mb-3">
              <img src="/instagram-line.png" alt="" />
              @floridablanca_bar_a_poulpe
            </li>
            <li className="flex gap-2 mb-3"></li>
          </ul>
        </div>

        <div className="h-full w-40 flex items-center justify-center">
          <img src="/logo.png" alt="logo de floridablanca" />
        </div>
      </div>
      <a href="https://www.cntl.digital/" className="text-[#0A3C74] hover:underline pt-6 pb-3 text-xs w-full bg-white flex justify-center items-center">© This is a CNTL Digital creation - 2023</a>
    </footer>
  );
}

export default Footer;
