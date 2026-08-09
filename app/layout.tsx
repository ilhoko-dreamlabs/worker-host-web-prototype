import type { Metadata } from "next";
import "./globals.css";

const publishedUrl = "https://ilhoko-dreamlabs.github.io/worker-host-web-prototype/";

export const metadata: Metadata = {
  metadataBase: new URL(publishedUrl),
  title: "Worker Host | 역할별 AI Worker 실행 기반",
  description:
    "판매·수익성 분석, 기관 문서업무, 기업 운영, 콘텐츠와 개발팀 업무를 역할별 AI Worker로 확장하세요. 승인된 지식과 도구를 연결하고 중요한 결정은 사람에게 남깁니다.",
  icons: {
    icon: `${publishedUrl}favicon.svg`,
    shortcut: `${publishedUrl}favicon.svg`,
  },
  openGraph: {
    title: "팀의 역할은 유지하고, AI 실행력은 확장하세요.",
    description: "역할별 Worker · 검토 가능한 업무 결과 · 사람 중심의 결정",
    type: "website",
    url: publishedUrl,
    images: [{
      url: `${publishedUrl}og-v3.png`,
      width: 1729,
      height: 910,
      alt: "사람의 독립 요청을 역할별 Worker가 검토 가능한 결과로 준비하는 Worker Host 활용 구조",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "팀의 역할은 유지하고, AI 실행력은 확장하세요.",
    description: "역할별 Worker · 검토 가능한 업무 결과 · 사람 중심의 결정",
    images: [`${publishedUrl}og-v3.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
