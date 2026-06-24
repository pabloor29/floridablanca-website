"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const STORAGE_KEY = "fb-cookie-consent";
type Consent = "accepted" | "declined";

function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
      if (stored === "accepted" || stored === "declined") {
        setConsent(stored);
      }
    } catch {}
  }, []);

  const save = (value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setConsent(value);
  };

  if (!mounted) return null;

  return (
    <>
      {consent === "accepted" && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Bannière de consentement aux cookies"
          className="fixed bottom-4 left-4 right-4 lg:left-auto lg:right-6 lg:bottom-6 lg:max-w-md z-[60] bg-white border border-[#0A3C74]/20 shadow-xl rounded-lg p-5 text-[#0A3C74]"
        >
          <h2 className="font-spaceTransit text-2xl mb-2">Cookies</h2>
          <p className="text-sm leading-relaxed mb-4">
            Nous utilisons des cookies de mesure d&apos;audience (Vercel
            Analytics, Speed Insights) pour améliorer le site. Aucun cookie
            publicitaire. Voir notre{" "}
            <Link
              href="/politique-confidentialite"
              className="underline font-semibold"
            >
              politique de confidentialité
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={() => save("accepted")}
              className="flex-1 bg-[#0A3C74] text-white px-4 py-2 rounded hover:bg-[#002E6D] transition"
            >
              Accepter
            </button>
            <button
              type="button"
              onClick={() => save("declined")}
              className="flex-1 border border-[#0A3C74] px-4 py-2 rounded hover:bg-[#f0f5ff] transition"
            >
              Refuser
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieBanner;
