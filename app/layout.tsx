// app/layout.tsx
"use client";

import { usePathname } from "next/navigation";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import { StarsCanvas } from "@/components/star-background";
import { BlackHoleVideo } from "@/components/black-hole-video";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* StarsCanvas will only render in dark mode and on client-side */}
          <StarsCanvas />
          <BlackHoleVideo />
          <SmoothScrollProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-16">
                {children}
              </main>
              <Footer />
            </div>
            <ScrollToTop />
            <ScrollProgress />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}