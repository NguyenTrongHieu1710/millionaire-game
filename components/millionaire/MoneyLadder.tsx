"use client";

import { formatMoney, SAFE_HAVENS } from "@/lib/millionaire/questions";

interface MoneyLadderProps {
  currentLevel: number;        // 1-15, the question currently being played
  finalLevel: number;          // highest level reached (for highlight when walked away)
  height?: number;             // total height in pixels
  width?: number;
}

const LEVELS = [
  { level: 15, amount: 1000000 },
  { level: 14, amount: 500000 },
  { level: 13, amount: 250000 },
  { level: 12, amount: 125000 },
  { level: 11, amount: 64000 },
  { level: 10, amount: 32000 },
  { level: 9,  amount: 16000 },
  { level: 8,  amount: 8000 },
  { level: 7,  amount: 4000 },
  { level: 6,  amount: 2000 },
  { level: 5,  amount: 1000 },
  { level: 4,  amount: 500 },
  { level: 3,  amount: 300 },
  { level: 2,  amount: 200 },
  { level: 1,  amount: 100 },
];

export function MoneyLadder({
  currentLevel,
  finalLevel,
  height = 840,
  width = 280,
}: MoneyLadderProps) {
  const rowH = Math.floor(height / 15);

  return (
    <div
      className="money-ladder flex flex-col rounded-md overflow-hidden border border-[#D4AF37]/30"
      style={{
        width,
        height,
        background: "#001847",
        boxShadow: "0 0 20px rgba(0,0,0,0.5) inset",
      }}
    >
      {LEVELS.map(({ level, amount }) => {
        const isCurrent = level === currentLevel;
        const isReached = level < currentLevel || (level === finalLevel && level < currentLevel);
        const isSafe = SAFE_HAVENS.has(level);
        const isPast = level < currentLevel;

        let bg = "#001847";        // default unselected
        if (isCurrent) bg = "#022264";  // current highlight (blue brighter)
        else if (isSafe) bg = "#012455"; // safe haven slight tint
        else if (isPast) bg = "#00102E"; // past — darker

        return (
          <div
            key={level}
            className={`money-row flex items-center justify-between px-3 transition-all duration-500 ${
              isCurrent ? "ladder-row-current" : ""
            }`}
            style={{
              height: rowH,
              background: bg,
              borderBottom: "1px solid rgba(212,175,55,0.15)",
              borderLeft: isSafe ? "4px solid #D4AF37" : "4px solid transparent",
              opacity: isPast ? 0.55 : 1,
            }}
          >
            <span
              className="text-[14px] font-bold tracking-wider"
              style={{ color: isCurrent ? "#FFFFFF" : "#C0C0C0", fontFamily: "Arial, sans-serif" }}
            >
              {level}
            </span>
            <span
              className="text-[16px] font-bold"
              style={{
                color: isCurrent ? "#FFFFFF" : isSafe ? "#D4AF37" : "#FFFFFF",
                fontFamily: "Arial, sans-serif",
                textShadow: isCurrent ? "0 0 8px rgba(212,175,55,0.6)" : "none",
              }}
            >
              {formatMoney(amount)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
