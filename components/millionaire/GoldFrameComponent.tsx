"use client";

import { ReactNode } from "react";

interface GoldFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Gold decorative frame component based on khung.png reference
 * Ornate border with art deco style, geometric patterns, and metallic gold gradient
 */
export function GoldFrame({ children, className = "" }: GoldFrameProps) {
  return (
    <div className={`gold-frame-container ${className}`}>
      {/* Main frame with ornate border */}
      <div className="gold-frame-border">
        {/* Corner ornaments - top-left */}
        <div className="corner-ornament corner-tl" />
        
        {/* Corner ornaments - top-right */}
        <div className="corner-ornament corner-tr" />
        
        {/* Corner ornaments - bottom-left */}
        <div className="corner-ornament corner-bl" />
        
        {/* Corner ornaments - bottom-right */}
        <div className="corner-ornament corner-br" />
        
        {/* Content area */}
        <div className="gold-frame-content">
          {children}
        </div>
      </div>

      <style jsx>{`
        .gold-frame-container {
          display: inline-block;
          position: relative;
        }

        .gold-frame-border {
          position: relative;
          padding: 30px 80px;
          
          /* Multi-layer gold gradient for metallic effect */
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
          
          /* Main ornate border - gold gradient */
          border: 3px solid transparent;
          border-image: linear-gradient(
            90deg,
            #8B6914 0%,
            #D4AF37 15%,
            #FFE5A3 25%,
            #FFF4A3 50%,
            #FFE5A3 75%,
            #D4AF37 85%,
            #8B6914 100%
          ) 1;
          
          /* Outer glow for depth */
          box-shadow: 
            /* Inner glow - light gold */
            inset 0 2px 4px rgba(255, 244, 163, 0.3),
            inset 0 -2px 4px rgba(139, 105, 20, 0.5),
            /* Outer glow - medium gold */
            0 4px 20px rgba(212, 175, 55, 0.4),
            /* Far outer glow - soft gold halo */
            0 0 40px rgba(255, 215, 0, 0.2),
            /* Depth shadow */
            0 8px 32px rgba(0, 0, 0, 0.6);
        }

        .gold-frame-content {
          position: relative;
          z-index: 10;
        }

        /* Corner ornaments - geometric art deco style */
        .corner-ornament {
          position: absolute;
          width: 30px;
          height: 30px;
          z-index: 5;
          
          /* Angular L-shape for ornate corners */
          background: transparent;
          
          /* Double border for layered effect */
          border-style: solid;
          border-color: #FFF4A3;
          border-width: 0;
        }

        /* Top-left corner */
        .corner-tl {
          top: 5px;
          left: 5px;
          border-top-width: 2px;
          border-left-width: 2px;
          
          /* Inner accent line */
          box-shadow: 
            inset 2px 2px 0 rgba(255, 244, 163, 0.5),
            -2px -2px 8px rgba(212, 175, 55, 0.3);
        }

        /* Top-right corner */
        .corner-tr {
          top: 5px;
          right: 5px;
          border-top-width: 2px;
          border-right-width: 2px;
          
          box-shadow: 
            inset -2px 2px 0 rgba(255, 244, 163, 0.5),
            2px -2px 8px rgba(212, 175, 55, 0.3);
        }

        /* Bottom-left corner */
        .corner-bl {
          bottom: 5px;
          left: 5px;
          border-bottom-width: 2px;
          border-left-width: 2px;
          
          box-shadow: 
            inset 2px -2px 0 rgba(255, 244, 163, 0.5),
            -2px 2px 8px rgba(212, 175, 55, 0.3);
        }

        /* Bottom-right corner */
        .corner-br {
          bottom: 5px;
          right: 5px;
          border-bottom-width: 2px;
          border-right-width: 2px;
          
          box-shadow: 
            inset -2px -2px 0 rgba(255, 244, 163, 0.5),
            2px 2px 8px rgba(212, 175, 55, 0.3);
        }

        /* Additional decorative elements */
        .corner-ornament::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: radial-gradient(
            circle,
            #FFF4A3 0%,
            #D4AF37 50%,
            transparent 100%
          );
          border-radius: 50%;
        }

        .corner-tl::before {
          top: -4px;
          left: -4px;
        }

        .corner-tr::before {
          top: -4px;
          right: -4px;
        }

        .corner-bl::before {
          bottom: -4px;
          left: -4px;
        }

        .corner-br::before {
          bottom: -4px;
          right: -4px;
        }

        /* Animation for entrance */
        @keyframes frame-glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(255, 215, 0, 0.6));
          }
        }

        .gold-frame-border {
          animation: frame-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
