"use client";

import React from "react";

interface LogoProps {
  size?: number;       // diameter in pixels
  className?: string;
  animateGlow?: boolean;
}

/**
 * Millionaire circular logo — SVG-based.
 * Outer ring: purple #4B2E83
 * Inner: dark #1A1A2E
 * Gold text "MILLIONAIRE" in center, gold #D4AF37
 * Curved text "WHO WANTS TO BE A" around top + bottom of ring
 */
export function MillionaireLogo({ size = 200, className = "", animateGlow = false }: LogoProps) {
  const id = React.useId();
  const r1 = 100; // outer radius
  const r2 = 88;  // inner ring edge
  const r3 = 70;  // text arc radius

  return (
    <div
      className={`relative inline-block ${animateGlow ? "logo-glow" : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          {/* Gold gradient for text */}
          <linearGradient id={`gold-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4E4C1" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          {/* Ring gradient */}
          <radialGradient id={`ring-${id}`} cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#6B3FA0" />
            <stop offset="60%" stopColor="#4B2E83" />
            <stop offset="100%" stopColor="#2D1B5E" />
          </radialGradient>
          {/* Inner background */}
          <radialGradient id={`inner-${id}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#2A1F4E" />
            <stop offset="100%" stopColor="#1A1A2E" />
          </radialGradient>
          {/* Top arc path for "WHO WANTS TO BE A" */}
          <path
            id={`top-arc-${id}`}
            d="M 30,100 A 70,70 0 0 1 170,100"
            fill="none"
          />
          {/* Bottom arc path for "WHO WANTS TO BE A" */}
          <path
            id={`bot-arc-${id}`}
            d="M 30,100 A 70,70 0 0 0 170,100"
            fill="none"
          />
        </defs>

        {/* Outer ring */}
        <circle cx="100" cy="100" r={r1} fill={`url(#ring-${id})`} stroke="#D4AF37" strokeWidth="1" />

        {/* Inner disk */}
        <circle cx="100" cy="100" r={r2} fill={`url(#inner-${id})`} stroke="#D4AF37" strokeWidth="1.5" />

        {/* Decorative gold inner ring */}
        <circle cx="100" cy="100" r={r3} fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />

        {/* Top arc text */}
        <text
          fill="#D4AF37"
          fontSize="9"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          letterSpacing="2"
        >
          <textPath href={`#top-arc-${id}`} startOffset="50%" textAnchor="middle">
            WHO WANTS TO BE A
          </textPath>
        </text>

        {/* Bottom arc text (reversed visually) */}
        <text
          fill="#D4AF37"
          fontSize="9"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          letterSpacing="2"
        >
          <textPath href={`#bot-arc-${id}`} startOffset="50%" textAnchor="middle">
            WHO WANTS TO BE A
          </textPath>
        </text>

        {/* Center "MILLIONAIRE" text — split into 2 lines for visual balance */}
        <text
          x="100"
          y="93"
          textAnchor="middle"
          fill={`url(#gold-${id})`}
          fontSize="14"
          fontFamily="Arial, sans-serif"
          fontWeight="900"
          letterSpacing="0.5"
        >
          MILLION
        </text>
        <text
          x="100"
          y="111"
          textAnchor="middle"
          fill={`url(#gold-${id})`}
          fontSize="14"
          fontFamily="Arial, sans-serif"
          fontWeight="900"
          letterSpacing="0.5"
        >
          -AIRE-
        </text>

        {/* Decorative question marks */}
        <text x="100" y="68" textAnchor="middle" fill="#D4AF37" fontSize="12" fontWeight="bold" opacity="0.6">?</text>
        <text x="100" y="138" textAnchor="middle" fill="#D4AF37" fontSize="12" fontWeight="bold" opacity="0.6">?</text>
      </svg>
    </div>
  );
}
