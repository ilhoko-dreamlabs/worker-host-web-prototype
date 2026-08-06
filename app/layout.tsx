import type { Metadata } from "next";
import "./globals.css";

const publishedUrl = "https://ilhoko-dreamlabs.github.io/worker-host-web-prototype/";

export const metadata: Metadata = {
  metadataBase: new URL(publishedUrl),
  title: "Worker Host | 역할별 AI Worker 실행 기반",
  description:
    "기관 문서업무, 기업 운영과 개발팀 업무를 역할별 AI Worker로 확장하세요. 승인된 지식과 도구를 연결하고 중요한 결정은 사람에게 남깁니다.",
  icons: {
    icon: `${publishedUrl}favicon.svg`,
    shortcut: `${publishedUrl}favicon.svg`,
  },
  openGraph: {
    title: "팀의 역할은 유지하고, AI 실행력은 확장하세요.",
    description: "역할별 Worker · 팀의 지식과 도구 · 사람 중심의 통제",
    type: "website",
    url: publishedUrl,
    images: [{
      url: `${publishedUrl}og-v2.png`,
      width: 1744,
      height: 909,
      alt: "기관·기업 운영·개발팀이 역할별 Worker에 독립 요청을 보내는 Worker Host 활용 구조",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "팀의 역할은 유지하고, AI 실행력은 확장하세요.",
    description: "역할별 Worker · 팀의 지식과 도구 · 사람 중심의 통제",
    images: [`${publishedUrl}og-v2.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
