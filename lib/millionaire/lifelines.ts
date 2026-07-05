// New lifelines data structure
export type LifelineId = "fifty" | "audience" | "double";

export interface Lifeline {
  id: LifelineId;
  name: string;
  icon: string;
  description: string;
}

export const LIFELINES: Lifeline[] = [
  {
    id: "fifty",
    name: "50:50",
    icon: "/icons/Fifty_Fifty.png",
    description: "Remove 2 wrong answers"
  },
  {
    id: "audience",
    name: "Ask the Audience",
    icon: "/icons/Ask_the_Audience.png",
    description: "Poll the audience"
  },
  {
    id: "double",
    name: "Double Dip",
    icon: "/icons/Double_Dip.png",
    description: "Two guesses allowed"
  }
];

// Audience poll simulator
export function simulateAudiencePoll(correctIndex: number): number[] {
  const correctPercent = 60 + Math.floor(Math.random() * 20); // 60-80%
  const remaining = 100 - correctPercent;
  
  const results = [0, 0, 0, 0];
  results[correctIndex] = correctPercent;
  
  // Distribute remaining randomly to other 3 answers
  const others = [0, 1, 2, 3].filter(i => i !== correctIndex);
  let leftover = remaining;
  
  for (let i = 0; i < others.length - 1; i++) {
    const random = Math.floor(Math.random() * leftover);
    results[others[i]] = random;
    leftover -= random;
  }
  results[others[others.length - 1]] = leftover;
  
  return results;
}
