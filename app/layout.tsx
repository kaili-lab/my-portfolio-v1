import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { LocaleProvider } from "@/lib/locale-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kai Li's Portfolio",
    default: "Kai Li — Backend & Full-Stack Developer",
  },
  description:
    "Personal projects and work by Kai Li. Backend development with Java, Node.js, and Python; frontend with React. Open to remote opportunities.",
  openGraph: {
    title: "Kai Li — Backend & Full-Stack Developer",
    description:
      "Personal projects, backend and full-stack development, and AI-assisted development. Open to remote opportunities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kai Li — Backend & Full-Stack Developer",
    description:
      "Personal projects, backend and full-stack development, and AI-assisted development. Open to remote opportunities.",
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
        className={`${inter.className} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <LocaleProvider>{children}</LocaleProvider>
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
