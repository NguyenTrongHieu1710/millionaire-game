"use client";

import { ReactNode } from "react";

interface Khung1FrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Harmonized Frame for Dark Blue-Purple Background
 * WITH horizontal glow lines extending to screen edges
 */
export function Khung1Frame({ children, className = "" }: Khung1FrameProps) {
  return (
    <div className={`khung1-frame-container ${className}`}>
      {/* Horizontal glow lines extending to screen edges */}
      <div className="glow-line glow-line-left" />
      <div className="glow-line glow-line-right" />
      
      <div className="khung1-frame-border">
        {/* Simplified elegant corners */}
        <div className="corner-corner corner-tl" />
        <div className="corner-corner corner-tr" />
        <div className="corner-corner corner-bl" />
        <div className="corner-corner corner-br" />

        {/* Content area */}
        <div className="khung1-content">
          {children}
        </div>
      </div>

      <style jsx>{`
        :root {
          /* Deep blue-purple background tone */
          --bg-deep-blue: #0f172a;
          --bg-mid-blue: #1e293b;
          --bg-purple-accent: #312e81;
          
          /* Harmonized frame colors */
          --frame-cool-gold: #C9A961;
          --frame-warm-gold: #D4AF37;
          --frame-dark-gold: #8B7355;
          --frame-blue-glow: rgba(99, 102, 241, 0.25);
          
          /* Spacing for balance */
          --frame-padding-y: 40px;
          --frame-padding-x: 80px;
          --corner-size: 36px;
        }

        .khung1-frame-container {
          display: inline-block;
          position: relative;
        }

        .glow-line {
          position: absolute;
          height: 2px;
          top: 50%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--frame-dark-gold) 30%,
            var(--frame-warm-gold) 50%,
            var(--frame-dark-gold) 70%,
            transparent 100%
          );
          box-shadow: 
            0 0 8px var(--frame-warm-gold),
            0 0 16px rgba(212, 175, 55, 0.4),
            0 0 24px rgba(99, 102, 241, 0.2);
        }

        .glow-line-left {
          left: 0;
          right: 50%;
          transform: translateY(-50%);
        }

        .glow-line-right {
          left: 50%;
          right: 0;
          transform: translateY(-50%);
        }

        .khung1-frame-border {
          position: relative;
          padding: var(--frame-padding-y) var(--frame-padding-x);
          
          /* Dark background that matches page bg */
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.6) 0%,
            rgba(30, 41, 59, 0.45) 50%,
            rgba(15, 23, 42, 0.6) 100%
          );
          
          backdrop-filter: blur(4px);
          
          /* Frame border with strong gold glow */
          border: 3px solid #D4AF37;
          box-shadow:
            /* Strong inner glow */
            inset 0 0 30px rgba(212, 175, 55, 0.5),
            inset 0 0 15px rgba(255, 215, 0, 0.3),
            /* Strong outer glow */
            0 0 20px rgba(212, 175, 55, 0.8),
            0 0 40px rgba(212, 175, 55, 0.6),
            0 0 60px rgba(212, 175, 55, 0.4),
            0 0 80px rgba(99, 102, 241, 0.3),
            /* Depth shadow */
            0 4px 12px rgba(0, 0, 0, 0.5),
            0 10px 30px rgba(0, 0, 0, 0.6);
          
          border-radius: 2px;
        }

        .khung1-content {
          position: relative;
          z-index: 10;
        }

        /* Elegant corner accents */
        .corner-corner {
          position: absolute;
          width: var(--corner-size);
          height: var(--corner-size);
          z-index: 5;
        }

        .corner-tl { top: -1px; left: -1px; }
        .corner-tr { top: -1px; right: -1px; }
        .corner-bl { bottom: -1px; left: -1px; }
        .corner-br { bottom: -1px; right: -1px; }

        /* Corner decorative lines */
        .corner-corner::before {
          content: '';
          position: absolute;
          background: linear-gradient(
            135deg,
            var(--frame-cool-gold) 0%,
            var(--frame-warm-gold) 50%,
            var(--frame-dark-gold) 100%
          );
        }

        .corner-tl::before,
        .corner-tr::before {
          top: 0;
          width: 24px; height: 2px;
        }

        .corner-tl::before {
          left: 0;
        }

        .corner-tr::before {
          right: 0;
        }

        .corner-bl::before,
        .corner-br::before {
          bottom: 0;
          width: 24px; height: 2px;
        }

        .corner-bl::before {
          left: 0;
        }

        .corner-br::before {
          right: 0;
        }

        /* Decorative dot at corner */
        .corner-corner::after {
          content: '';
          position: absolute;
          width: 10px; height: 10px;
          background: radial-gradient(
            circle,
            var(--frame-warm-gold) 0%,
            var(--frame-cool-gold) 40%,
            var(--frame-dark-gold) 100%
          );
          border-radius: 50%;
          box-shadow:
            0 0 8px var(--frame-blue-glow),
            0 0 16px rgba(99, 102, 241, 0.3);
        }

        .corner-tl::after { top: -5px; left: -5px; }
        .corner-tr::after { top: -5px; right: -5px; }
        .corner-bl::after { bottom: -5px; left: -5px; }
        .corner-br::after { bottom: -5px; right: -5px; }

        /* Subtle animation */
        @keyframes frame-glow {
          0%, 100% {
            box-shadow:
              inset 0 1px 3px rgba(255, 255, 255, 0.05),
              inset 0 -1px 2px rgba(0, 0, 0, 0.4),
              inset 0 0 12px rgba(139, 115, 85, 0.2),
              0 0 15px var(--frame-blue-glow),
              0 2px 8px rgba(0, 0, 0, 0.4),
              0 8px 24px rgba(0, 0, 0, 0.5);
          }
          50% {
            box-shadow:
              inset 0 1px 3px rgba(255, 255, 255, 0.08),
              inset 0 -1px 2px rgba(0, 0, 0, 0.45),
              inset 0 0 12px rgba(139, 115, 85, 0.25),
              0 0 20px rgba(99, 102, 241, 0.3),
              0 2px 8px rgba(0, 0, 0, 0.45),
              0 10px 28px rgba(0, 0, 0, 0.55);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 
              0 0 8px var(--frame-warm-gold),
              0 0 16px rgba(212, 175, 55, 0.4),
              0 0 24px rgba(99, 102, 241, 0.2);
          }
          50% {
            box-shadow: 
              0 0 12px var(--frame-warm-gold),
              0 0 24px rgba(212, 175, 55, 0.6),
              0 0 36px rgba(99, 102, 241, 0.3);
          }
        }

        .khung1-frame-border {
          animation: frame-glow 3s ease-in-out infinite;
        }

        .glow-line {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .khung1-frame-border,
          .glow-line {
            animation: none;
          }
        }

        /* Minimal texture overlay */
        .khung1-frame-border::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 4px,
            rgba(255, 255, 255, 0.01) 4px,
            rgba(255, 255, 255, 0.01) 5px
          );
          pointer-events: none;
          z-index: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .khung1-frame-border {
            --frame-padding-y: 32px;
            --frame-padding-x: 64px;
            --corner-size: 32px;
          }
        }

        @media (max-width: 480px) {
          .khung1-frame-border {
            --frame-padding-y: 24px;
            --frame-padding-x: 48px;
            --corner-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
