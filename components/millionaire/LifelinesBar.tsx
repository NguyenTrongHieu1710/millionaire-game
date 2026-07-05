"use client";

import { LIFELINES, LifelineId } from "@/lib/millionaire/lifelines";

interface LifelinesBarProps {
  usedLifelines: Set<LifelineId>;
  onUse: (id: LifelineId) => void;
  disabled?: boolean;
}

export function LifelinesBar({ usedLifelines, onUse, disabled = false }: LifelinesBarProps) {
  return (
    <div className="lifelines-container flex gap-4">
      {LIFELINES.map((lifeline) => {
        const isUsed = usedLifelines.has(lifeline.id);
        const isDisabled = disabled || isUsed;
        
        return (
          <button
            key={lifeline.id}
            type="button"
            onClick={() => !isDisabled && onUse(lifeline.id)}
            disabled={isDisabled}
            className="lifeline-button relative"
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              background: isUsed ? "#3A3A3A" : "transparent",
              border: "none",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isUsed ? 0.5 : 1,
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title={lifeline.description}
          >
            {/* Icon */}
            <img
              src={lifeline.icon}
              alt={lifeline.name}
              style={{
                width: "110px",
                height: "110px",
                objectFit: "contain",
                filter: isUsed ? "grayscale(100%)" : "none",
              }}
            />
            
            {/* X mark when used */}
            {isUsed && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  fontSize: "72px",
                  color: "#D0021B",
                  fontWeight: "900",
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  pointerEvents: "none",
                }}
              >
                ×
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
