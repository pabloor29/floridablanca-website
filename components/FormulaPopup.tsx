"use client";

import { useEffect, useState } from "react";
import { X, UtensilsCrossed } from "lucide-react";

type Props = {
  images: string[];
  autoOpen?: boolean;
  showFloatingButton?: boolean;
};

export default function FormulaPopup({ images, autoOpen = false, showFloatingButton = false }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (autoOpen && images.length > 0) {
      setOpen(true);
    }
  }, [autoOpen, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      {showFloatingButton && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-2 bg-[#002E6D] text-white px-5 py-3 shadow-lg font-spaceTransit text-lg hover:bg-[#295DA6] transition-all"
          aria-label="Voir la formule du midi"
        >
          <UtensilsCrossed size={20} />
          Formule du midi
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto p-4 flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between border-b-2 border-[#002E6D] pb-3 mb-2">
              <h2 className="font-spaceTransit text-[#002E6D] text-4xl tracking-wide">
                Formule du midi
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-[#002E6D] hover:opacity-70 transition-opacity"
                aria-label="Fermer"
              >
                <X size={28} />
              </button>
            </div>

            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Formule du midi ${i + 1}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
