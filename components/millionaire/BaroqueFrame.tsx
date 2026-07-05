"use client";

import { ReactNode } from "react";

interface Khung1FrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Baroque-style decorative frame based on Khung1.png
 * Full rectangle frame with ornate floral corners and scrollwork borders
 */
export function Khung1Frame({ children, className = "" }: Khung1FrameProps) {
  return (
    <div className={`khung1-frame-container ${className}`}>
      <div className="khung1-frame-border">
        {/* Baroque corner ornaments */}
        <div className="baroque-corner corner-tl">
          <div className="scroll-outer" />
          <div className="scroll-inner" />
          <div className="leaf-accent" />
        </div>
        
        <div className="baroque-corner corner-tr">
          <div className="scroll-outer" />
          <div className="scroll-inner" />
          <div className="leaf-accent" />
        </div>
        
        <div className="baroque-corner corner-bl">
          <div className="scroll-outer" />
          <div className="scroll-inner" />
          <div className="leaf-accent" />
        </div>
        
        <div className="baroque-corner corner-br">
          <div className="scroll-outer" />
          <div className="scroll-inner" />
          <div className="leaf-accent" />
        </div>

        {/* Content area */}
        <div className="khung1-content">
          {children}
        </div>
      </div>

      <style jsx>{`
        .khung1-frame-container {
          display: inline-block;
          position: relative;
        }

        .khung1-frame-border {
          position: relative;
          padding: 40px 100px;
          
          /* Multi-layer background for depth */
          background: 
            linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%);
          
          /* Ornate baroque border with rich gold gradient */
          border: 18px solid transparent;
          border-image: linear-gradient(
            135deg,
            #6B5344 0%,
            #8B7355 8%,
            #9B8156 15%,
            #B8954A 22%,
            #C9A961 30%,
            #E0C878 40%,
            #F4D88A 50%,
            #FFE7A0 60%,
            #FFF5D0 70%,
            #FFFAEB 80%,
            #FFF5D0 90%,
            #FFE7A0 100%
          ) 1;
          
          /* Layered shadow for 3D embossed effect */
          box-shadow:
            /* Inner shadow - top */
            inset 0 3px 6px rgba(0, 0, 0, 0.5),
            /* Inner highlight - bottom */
            inset 0 -3px 6px rgba(255, 250, 235, 0.3),
            /* Mid shadow for depth */
            inset 0 0 15px rgba(107, 83, 68, 0.4),
            /* Outer golden glow */
            0 2px 12px rgba(201, 169, 97, 0.6),
            /* Far outer halo */
            0 0 30px rgba(244, 216, 138, 0.4),
            /* Deep shadow for elevation */
            0 8px 40px rgba(0, 0, 0, 0.7);
        }

        .khung1-content {
          position: relative;
          z-index: 10;
        }

        /* Baroque corner ornaments */
        .baroque-corner {
          position: absolute;
          width: 50px;
          height: 50px;
          z-index: 15;
        }

        /* Top-left corner */
        .corner-tl {
          top: -5px;
          left: -5px;
        }

        /* Top-right corner */
        .corner-tr {
          top: -5px;
          right: -5px;
          transform: scaleX(-1);
        }

        /* Bottom-left corner */
        .corner-bl {
          bottom: -5px;
          left: -5px;
          transform: scaleY(-1);
        }

        /* Bottom-right corner */
        .corner-br {
          bottom: -5px;
          right: -5px;
          transform: scale(-1);
        }

        /* Scroll ornament - outer curve */
        .scroll-outer {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 3px solid;
          border-color: #FFF5D0 transparent transparent #FFF5D0;
          border-radius: 50% 0 0 0;
          box-shadow: 
            -2px -2px 4px rgba(255, 250, 235, 0.5),
            inset -1px -1px 3px rgba(201, 169, 97, 0.6);
        }

        /* Scroll ornament - inner curve */
        .scroll-inner {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 24px;
          height: 24px;
          border: 2px solid;
          border-color: #C9A961 transparent transparent #C9A961;
          border-radius: 50% 0 0 0;
          box-shadow: inset -1px -1px 2px rgba(139, 115, 85, 0.7);
        }

        /* Leaf accent */
        .leaf-accent {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 12px;
          height: 12px;
          background: radial-gradient(
            ellipse at top left,
            #FFFAEB 0%,
            #FFE7A0 30%,
            #C9A961 70%,
            transparent 100%
          );
          border-radius: 50% 0 50% 0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        }

        /* Decorative dots along border */
        .baroque-corner::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          background: radial-gradient(
            circle,
            #FFFAEB 0%,
            #F4D88A 40%,
            #B8954A 100%
          );
          border-radius: 50%;
          box-shadow: 
            0 0 3px rgba(255, 250, 235, 0.8),
            0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .corner-tl::after {
          top: 18px;
          left: 18px;
        }

        .corner-tr::after {
          top: 18px;
          right: 18px;
        }

        .corner-bl::after {
          bottom: 18px;
          left: 18px;
        }

        .corner-br::after {
          bottom: 18px;
          right: 18px;
        }

        /* Pulsing glow animation */
        @keyframes baroque-glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(201, 169, 97, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(244, 216, 138, 0.7));
          }
        }

        .khung1-frame-border {
          animation: baroque-glow 4s ease-in-out infinite;
        }

        /* Additional embossed texture */
        .khung1-frame-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              rgba(255, 250, 235, 0.02) 1px,
              transparent 2px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              rgba(107, 83, 68, 0.02) 1px,
              transparent 2px
            );
          pointer-events: none;
          z-index: 5;
        }
      `}</style>
    </div>
  );
}
