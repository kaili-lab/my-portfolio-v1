import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kai Li's Portfolio",
    default: "Kai Li — AI Agent Builder & Full-Stack Developer",
  },
  description:
    "AI Agent Builder & Full-Stack Developer. Building multi-agent systems with LangChain/LangGraph. 6+ years Java backend, React/Next.js frontend. Available for remote work.",
  openGraph: {
    title: "Kai Li — AI Agent Builder & Full-Stack Developer",
    description:
      "AI Agent Builder & Full-Stack Developer. Building multi-agent systems with LangChain/LangGraph. Available for remote work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kai Li — AI Agent Builder & Full-Stack Developer",
    description:
      "AI Agent Builder & Full-Stack Developer. Building multi-agent systems with LangChain/LangGraph. Available for remote work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased max-w-6xl mx-auto px-4 `}
      >
        <ThemeProvider
          attribute="class" // 使用 class 切换主题
          defaultTheme="dark" // 默认主题
          enableSystem={true} // 跟随系统主题
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--background)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
