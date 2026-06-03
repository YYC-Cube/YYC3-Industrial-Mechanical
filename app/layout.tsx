import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { SoundProvider } from "@/contexts/sound-context";
import { NotificationProvider } from "@/contexts/notification-context";
import { PreloadAssets } from "@/components/preload-assets";
import { HydrationDefender } from "@/components/HydrationDefender";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YYC³ Industrial Mechanical - Nexus AI 机械风智能创新UI设计",
  description:
    "YYC³ Industrial Mechanical — 智能机械风创新UI设计全案，融合工业机械的精密感与智能科技的未来感",
  applicationName: "YYC³ Industrial Mechanical",
  authors: [{ name: "YanYuCloudCube Team", url: "https://yyc3.dev" }],
  generator: "YYC³ Industrial Mechanical",
  keywords: [
    "YYC³",
    "Industrial Mechanical",
    "Nexus AI",
    "机械风",
    "UI设计",
    "智能创新",
    "React",
    "Next.js",
    "shadcn/ui",
  ],
  metadataBase: new URL("https://yyc3.dev"),
  icons: {
    icon: [
      { url: "/yyc3-dist/yanyu_cloud_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/yyc3-dist/yanyu_cloud_48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/yyc3-dist/yanyu_cloud_64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/yyc3-dist/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/yyc3-dist/yanyu_cloud_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/yyc3-dist/yanyu_cloud_256x256.png", sizes: "256x256", type: "image/png" },
    ],
  },
  manifest: "/yyc3-dist/site.webmanifest",
  openGraph: {
    title: "YYC³ Industrial Mechanical - Nexus AI",
    description:
      "YYC³ Industrial Mechanical — 智能机械风创新UI设计全案，融合工业机械的精密感与智能科技的未来感",
    url: "https://yyc3.dev",
    siteName: "YYC³ Industrial Mechanical",
    images: [
      {
        url: "/yyc3-dist/yanyu_cloud_512x512.png",
        width: 512,
        height: 512,
        alt: "YYC³ Industrial Mechanical Logo",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YYC³ Industrial Mechanical - Nexus AI",
    description:
      "YYC³ Industrial Mechanical — 智能机械风创新UI设计全案",
    images: ["/yyc3-dist/yanyu_cloud_512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <HydrationDefender />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <SoundProvider>
              <NotificationProvider>
                <PreloadAssets />
                {children}
              </NotificationProvider>
            </SoundProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
