import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F9F9F6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://darshangaikwad.online"),
  title: {
    default: "Darshan Gaikwad · AI-Native Systems Thinker & Builder",
    template: "%s · Darshan Gaikwad",
  },
  description:
    "AI-native systems thinker and builder. Working across cryptography, Solana primitives, and autonomous agents.",
  keywords: [
    "Darshan Gaikwad",
    "Systems Thinker",
    "AI-Native Builder",
    "Technical Orchestrator",
    "Solana",
    "Autonomous Agents",
    "Cryptographic Infrastructure",
    "Ed25519",
    "Anchor Framework",
    "Rust",
    "TypeScript",
    "PROVN Protocol",
  ],
  authors: [{ name: "Darshan Gaikwad", url: "https://github.com/dren712" }],
  creator: "Darshan Gaikwad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darshangaikwad.online",
    title: "Darshan Gaikwad · AI-Native Systems Thinker & Builder",
    description:
      "Architecture > Systems > Optimization >> Code. AI-native systems thinker building infrastructure for the AI-native internet.",
    siteName: "Darshan Gaikwad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshan Gaikwad · Systems Thinker & Infrastructure Builder",
    description:
      "Architecture > Systems > Optimization >> Code. Systems thinker building infrastructure for the AI-native internet.",
    creator: "@DarshanVG712",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-paper text-ink selection:bg-nordic-red/10 selection:text-nordic-red">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600&family=Noto+Sans+Telugu:wght@400;600&family=Noto+Sans+Bengali:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink antialiased min-h-[100dvh] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
