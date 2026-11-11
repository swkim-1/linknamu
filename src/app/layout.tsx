import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무 | 홍길동",
  description: "홍길동의 모든 링크를 한곳에",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 가변 폰트 (한글 동적 서브셋, CDN) */}
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
