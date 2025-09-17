// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Max Allen | Portfolio",
  description: "Full Stack and Blockchain Developer & Machine Learning Enthusiast",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon1.png", type: "image/png" },
  },
};
