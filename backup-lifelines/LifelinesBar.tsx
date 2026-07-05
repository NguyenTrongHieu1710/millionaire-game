"use client";

import { INITIAL_LIFELINES } from "@/lib/millionaire/lifelines";

interface LifelinesBarProps {
  usedLifelines: Set<string>;
  onUse: (id: string) => void;
  disabled: boolean; // true during answer reveal etc.
}

export function LifelinesBar({ usedLifelines, onUse, disabled }: LifelinesBarProps) {
  return (
    <div className="flex gap-3">
      {INITIAL_LIFELINES.map((ll) => {
        const used = usedLifelines.has(ll.id);
        return (
          <button
            key={ll.id}
            type="button"
            disabled={used || disabled}
            onClick={() => onUse(ll.id)}
            className="lifeline-btn relative flex items-center justify-center rounded-full transition-all"
            style={{
              width: "90px",
              height: "90px",
              background: used ? "#3A3A3A" : "#081D5E",
              border: `3px solid ${used ? "#666666" : "#DFE8F2"}`,
              cursor: used || disabled ? "not-allowed" : "pointer",
              opacity: used ? 0.55 : 1,
              fontFamily: "Arial, sans-serif",
            }}
            title={ll.label}
          >
            <LifelineIcon id={ll.id} used={used} />
            {used && (
              <span
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  fontSize: "60px",
                  color: "#D0021B",
                  fontWeight: "900",
                  transform: "rotate(-15deg)",
                  textShadow: "0 0 8px rgba(0,0,0,0.8)",
                }}
              >
                ×
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function LifelineIcon({ id, used }: { id: string; used: boolean }) {
  const iconMap: Record<string, string> = {
    "50:50": "/icons/Fifty_Fifty.png",
    "audience": "/icons/Ask_the_Audience.png",
    "double": "/icons/Double_Dip.png",
  };

  if (iconMap[id]) {
    return (
      <img
        src={iconMap[id]}
        alt={id}
        style={{
          width: "55px",
          height: "55px",
          objectFit: "contain",
          opacity: used ? 0.4 : 1,
        }}
      />
    );
  }

  return null;
}
