import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dilip Kumawat | Software Developer Portfolio",
  description: "Portfolio of Dilip Kumawat — Software Developer, Tech Enthusiast, and Problem Solver. Explore my projects, skills, and journey in software development.",
  keywords: ["Dilip Kumawat", "Software Developer", "Portfolio", "React", "Next.js", "Web Developer"],
  authors: [{ name: "Dilip Kumawat" }],
  openGraph: {
    title: "Dilip Kumawat | Software Developer Portfolio",
    description: "Explore projects, skills, and journey of Dilip Kumawat in software development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
