"use client";

import { useEffect } from "react";

interface TransitionBackgroundProps {
  contestantName: string;
  contestantLocation: string;
  onContinue: () => void;
}

export function TransitionBackground({
  contestantName,
  contestantLocation,
  onContinue,
}: TransitionBackgroundProps) {
  
  // Removed auto-continue - only click to continue

  return (
    <div
      className="transition-background relative w-full h-full overflow-hidden cursor-pointer"
      onClick={onContinue}
      style={{
        backgroundImage: "url('/background-reversemain.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "fade-in-bg 0.5s ease-out",
      }}
    >
      {/* Lower Third Banners - Contestant Info (persistent) */}
      <div className="lower-third-container">
        {/* Upper small banner */}
        <div className="upper-banner">
          <span>Contestant</span>
        </div>
        
        {/* Lower main banner */}
        <div className="lower-banner">
          <div className="contestant-name">{contestantName}</div>
          <div className="contestant-location">{contestantLocation}</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-bg {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Lower Third Container */
        .lower-third-container {
          position: fixed;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
        }

        /* Upper small banner - "Contestant" */
        .upper-banner {
          position: absolute;
          bottom: 85px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          height: 38px;
          background: linear-gradient(135deg, rgba(10, 25, 41, 0.95) 0%, rgba(15, 30, 50, 0.95) 100%);
          border: 2px solid #D4AF37;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 20px rgba(212, 175, 55, 0.6),
            0 0 40px rgba(212, 175, 55, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.6);
        }

        .upper-banner span {
          color: #FFFFFF;
          font-family: Arial, sans-serif;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }

        /* Lower main banner - Name & Location */
        .lower-banner {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 520px;
          height: 78px;
          background: linear-gradient(135deg, rgba(10, 25, 41, 0.95) 0%, rgba(15, 30, 50, 0.95) 100%);
          border: 3px solid #D4AF37;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 12px 24px;
          box-shadow: 
            0 0 25px rgba(212, 175, 55, 0.7),
            0 0 50px rgba(212, 175, 55, 0.4),
            0 0 75px rgba(99, 102, 241, 0.2),
            0 6px 16px rgba(0, 0, 0, 0.7);
        }

        .contestant-name {
          color: #D4AF37;
          font-family: Arial, sans-serif;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.9),
            0 0 20px rgba(212, 175, 55, 0.4);
        }

        .contestant-location {
          color: #FFFFFF;
          font-family: Arial, sans-serif;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
}
