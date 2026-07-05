"use client";

interface ReturnButtonProps {
  onReturn: () => void;
}

export function ReturnButton({ onReturn }: ReturnButtonProps) {
  return (
    <button
      type="button"
      onClick={onReturn}
      className="absolute bottom-8 left-8 z-50 transition-all hover:scale-110"
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "rgba(10, 25, 41, 0.8)",
        border: "2px solid #D4AF37",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6), 0 0 20px rgba(212, 175, 55, 0.3)",
        backdropFilter: "blur(8px)",
      }}
      title="Return to previous screen"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
