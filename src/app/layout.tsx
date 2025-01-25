import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "エンジニアとしてのポートフォリオサイト",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <a href="#home">トップ</a>
                </li>
                <li>
                  <a href="#about">このサイトについて</a>
                </li>
                <li>
                  <a href="#portfolio">ポートフォリオ</a>
                </li>
                <li>
                  <a href="#contact">連絡先</a>
                </li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2025 Sota</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
