export const BRANCH_NAMES = [
  "Bangkok (HQ)",
  "Chiang Mai",
  "Chiang Rai",
  "Hua Hin",
  "Kanchanaburi",
  "Korat",
  "Krabi",
  "Nakhon Si Thammarat",
  "Phuket",
  "Rayong",
  "Samui",
] as const;

export type BranchName = (typeof BRANCH_NAMES)[number];
