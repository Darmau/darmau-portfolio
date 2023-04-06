"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";
import Header from "./components/Header";
import "./globals.css";
import { Noto_Serif_SC, Quattrocento } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";

const noto_serif = Noto_Serif_SC({
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const quattrocento = Quattrocento({
  variable: "--font-title",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [minHeight, setMinHeight] = useState(0);

  // 获取窗口高度
  useEffect(() => {
    const updateMinHeight = () => {
      const windowHeight = window.innerHeight;
      const headerHeight = document.querySelector("header")?.clientHeight || 0;
      const footerHeight = document.querySelector("footer")?.clientHeight || 0;
      const mainHeight = windowHeight - headerHeight - footerHeight;
      setMinHeight(mainHeight);
    };

    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);

    return () => {
      window.removeEventListener("resize", updateMinHeight);
    };
  }, []);

  return (
    <html
      lang="zh-CN"
      className={`${noto_serif.variable} ${quattrocento.variable}`}
    >
      <body className="font-noto">
        <Header id="header" />
        <div style={{ minHeight: minHeight }} className="mt-20 sm:mt-16">
          <ScrollToTop />
          {children}
        </div>
        <Footer id="footer" />
        <Gradient />
      </body>
    </html>
  );
}
