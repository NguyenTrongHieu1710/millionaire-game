// Lifeline types and helpers
export type LifelineId = "50:50" | "audience" | "double";

export interface LifelineState {
  id: LifelineId;
  label: string;
  used: boolean;
}

export const INITIAL_LIFELINES: LifelineState[] = [
  { id: "50:50", label: "50:50", used: false },
  { id: "audience", label: "Ask the Audience", used: false },
  { id: "double", label: "Double Dip", used: false },
];

// Simulate audience poll: weighted toward correct answer
export function simulateAudiencePoll(correct: number): number[] {
  // correct gets 40-70%, others share the rest
  const correctPct = 40 + Math.floor(Math.random() * 31);
  const remaining = 100 - correctPct;
  const others = [0, 1, 2, 3].filter((i) => i !== correct);
  const dist: number[] = [0, 0, 0, 0];
  dist[correct] = correctPct;
  // Distribute remaining
  let left = remaining;
  for (let i = 0; i < others.length - 1; i++) {
    const v = Math.floor(Math.random() * left);
    dist[others[i]] = v;
    left -= v;
  }
  dist[others[others.length - 1]] = left;
  return dist;
}

// Simulate phone-a-friend: 90% correct
export function simulatePhoneAFriend(correct: number): number {
  return Math.random() < 0.9 ? correct : Math.floor(Math.random() * 4);
}
