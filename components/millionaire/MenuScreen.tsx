"use client";

import { MillionaireLogo } from "./MillionaireLogo";

interface MenuScreenProps {
  onPlay: () => void;
  onSettings: () => void;
  onReset: () => void;
  onExit: () => void;
}

export function MenuScreen({ onPlay, onSettings, onReset, onExit }: MenuScreenProps) {
  return (
    <div
      className="menu-screen relative w-full h-full overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/menu-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay gradient - lighter for visibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Animated light rays */}
      <div className="menu-light-rays absolute inset-0 pointer-events-none" />

      {/* Particles */}
      <div className="menu-particles absolute inset-0 pointer-events-none" />

      {/* Logo top-right */}
      <div className="absolute top-8 right-8">
        <img
          src="/icons/Main Logo Cropped.png"
          alt="Who Wants to Be a Millionaire"
          style={{
            width: "220px",
            height: "auto",
            filter: "drop-shadow(0 0 20px rgba(212,175,55,0.5))",
          }}
        />
      </div>

      {/* MENU header */}
      <h1
        className="absolute text-white tracking-[0.3em] font-black"
        style={{
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "Arial, sans-serif",
          fontSize: "80px",
          textShadow: "0 0 24px rgba(212,175,55,0.5), 0 4px 8px rgba(0,0,0,0.8)",
        }}
      >
        MENU
      </h1>

      {/* Buttons stack — center-left */}
      <div 
        className="absolute flex flex-col gap-5 z-10"
        style={{
          left: "25%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <MenuButton label="Play" primary onClick={onPlay} />
        <MenuButton label="Settings" onClick={onSettings} />
        <MenuButton label="Reset game" onClick={onReset} />
      </div>

      {/* EXIT bottom-right */}
      <button
        type="button"
        onClick={onExit}
        className="absolute bottom-8 right-8 text-white text-[20px] tracking-[0.2em] hover:text-[#D4AF37] transition-colors"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        EXIT
      </button>

      {/* Subtle floor reflection */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(123,74,212,0.08) 50%, rgba(212,175,55,0.05) 100%)",
        }}
      />
    </div>
  );
}

function MenuButton({
  label,
  onClick,
  primary = false,
}: {
  label: string;
  onClick: () => void;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="menu-btn group relative overflow-hidden text-left transition-all duration-200 hover:scale-[1.02]"
      style={{
        width: "440px",
        height: "64px",
        background: primary ? "#0A1A3A" : "#0A1A3A",
        border: `2px solid ${primary ? "#D4AF37" : "#D4AF37"}`,
        borderRadius: "8px",
        padding: "0 28px",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px",
        fontWeight: "500",
        letterSpacing: "0.05em",
        boxShadow: primary
          ? "0 0 20px rgba(212,175,55,0.25), 0 4px 12px rgba(0,0,0,0.5)"
          : "0 4px 12px rgba(0,0,0,0.4)",
      }}
    >
      <span className="relative z-10 flex items-center gap-3">
        <span style={{ color: "#D4AF37", fontSize: "18px" }}>▸</span>
        {label}
      </span>
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.15) 50%, transparent 100%)",
        }}
      />
    </button>
  );
}
