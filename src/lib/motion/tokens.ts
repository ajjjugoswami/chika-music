export const CUBIC = {
  outExpo: [0.22, 1, 0.36, 1],
  inOutQuart: [0.65, 0, 0.35, 1],
} as const;

export const REVEAL = {
  distance: 32,
  duration: 0.9,
  stagger: 0.09,
  blur: "blur(8px)",
} as const;

export const IMAGE_REVEAL = {
  duration: 1.2,
  radius: "1.375rem",
  insetPercent: 8,
  scale: 1.15,
} as const;

export const PARALLAX = {
  range: 8,
  scale: 1.16,
} as const;

export const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;
