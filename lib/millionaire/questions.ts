// Question bank — 9 questions, Vietnam culture & history edition
// Safe havens: question 3 (800), question 6 (6,400), and question 9 (50,000)

export interface Question {
  level: number;       // 1-9
  amount: number;      // prize
  question: string;
  answers: [string, string, string, string];  // A, B, C, D
  correct: 0 | 1 | 2 | 3;  // index of correct answer
  safe?: boolean;      // safe haven marker
}

export const QUESTIONS: Question[] = [
  {
    level: 1,
    amount: 200,
    question: "In traditional Vietnamese culture, which farm animal was often treated as a water spirit?",
    answers: ["Con lừa", "Con heo", "Con gà", "Con trâu"],
    correct: 3,
  },
  {
    level: 2,
    amount: 400,
    question: "Which of the following is a traditional Vietnamese folk game?",
    answers: ["Nhảy cá", "Nhảy gà", "Nhảy ngựa", "Nhảy lợn"],
    correct: 2,
  },
  {
    level: 3,
    amount: 800,
    question: "Which fruit is used to cook sour soup (canh chua)?",
    answers: ["Quả dọc", "Quả xuôi", "Quả ngang", "Quả ngược"],
    correct: 0,
    safe: true, // First safe haven
  },
  {
    level: 4,
    amount: 1600,
    question: "In Vietnamese idioms, which animal is the grasshopper often compared to in a hopelessly uneven fight?",
    answers: ["Ngựa", "Hổ", "Gấu", "Voi"],
    correct: 3,
  },
  {
    level: 5,
    amount: 3200,
    question: "In ancient Vietnamese clan traditions, what was the name of the hereditary ancestral land that was strictly prohibited from being sold or transferred, and whose yields were reserved exclusively for ancestor worship?",
    answers: ["Hương hỏa", "Công điền", "Lộc điền", "Thổ cư"],
    correct: 0,
  },
  {
    level: 6,
    amount: 6400,
    question: "Which characteristic of the Giao Chỉ people was more prominent compared to Vietnamese today?",
    answers: ["Xương bàn tay", "Xương bàn chân", "Xương cụt", "Xương khuôn mặt"],
    correct: 1,
    safe: true, // Second safe haven
  },
  {
    level: 7,
    amount: 12800,
    question: "The cradle of the Vietnamese dialect originated from?",
    answers: ["Phu Tho", "Ha Noi", "Thanh Hoa", "Hue"],
    correct: 2,
  },
  {
    level: 8,
    amount: 25000,
    question: "In the resistance against the second Mongol invasion in 1285, what ancient biological weapon did the Vietnamese successfully use?",
    answers: ["Hỗn hợp rơm và phân bò", "Hỗn hợp nước ớt cay", "Tổ ong vò vẽ và nhện độc", "Bùi nhùi tẩm nọc độc rắn"],
    correct: 0,
  },
  {
    level: 9,
    amount: 50000,
    question: "Who is the most handsome?",
    answers: ["Mr. Tâm", "Mr. Trung", "Mr. Quyền", "Mr. Bảo"],
    correct: 3,
    safe: true, // Third safe haven - highest prize in program
  },
];

export const SAFE_HAVENS = new Set([3, 6, 9]); // question levels that are safe havens

// Money ladder (reverse order for display: top to bottom)
export const MONEY_LADDER = [
  { level: 9, amount: 50000, safe: true },
  { level: 8, amount: 25000 },
  { level: 7, amount: 12800 },
  { level: 6, amount: 6400, safe: true },
  { level: 5, amount: 3200 },
  { level: 4, amount: 1600 },
  { level: 3, amount: 800, safe: true },
  { level: 2, amount: 400 },
  { level: 1, amount: 200 },
];

export function formatMoney(amount: number): string {
  return amount.toLocaleString("vi-VN");
}
