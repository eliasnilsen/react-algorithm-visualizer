export type SpeedType = 6 | 4 | 3;

export type SpeedSelectType = {
  label: string;
  value: SpeedType;
};

export const SPEEDS: SpeedSelectType[] = [
  { label: "SLOW", value: 6 },
  { label: "MEDIUM", value: 4 },
  { label: "FAST", value: 3 },
];
