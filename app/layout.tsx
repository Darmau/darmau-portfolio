"use client";
import { Noto_Serif_SC, Quattrocento } from "next/font/google";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";
import Header from "./components/Header";
import "./globals.css";
import ScrollToTop from "./lib/ScrollToTop";

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
      <head>
        <script
          async
          src="https://analytics.darmau.design/script.js"
          data-website-id="503f127c-3403-46f5-b7c3-64e848dc1fb7"
          data-do-not-track="true"
          data-cache="true"
        ></script>
      </head>
      <body>
        <Header id="header" />
        <div style={{ minHeight: minHeight }} className="mt-24">
          <ScrollToTop />
          {children}
        </div>
        <Footer id="footer" />
        <Gradient />
      </body>
    </html>
  );
}
