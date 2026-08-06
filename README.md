# Worker Host 소개 웹페이지 프로토타입

역할별 AI Worker, 사람의 요청·검토 과정과 관련 운영 시스템을 소개하는 반응형 랜딩페이지 프로토타입입니다.

공개 페이지: <https://ilhoko-dreamlabs.github.io/worker-host-web-prototype/>

## 포함된 화면

- 기관 문서업무·기업 운영·작은 개발팀을 함께 보여주는 Hero 구성도
- 사례별 상세 페이지 3개
- 정형·혼합형·비정형 업무의 시작 방식 비교
- Product·Engineering·QA·Release Worker 전환
- 요청 → 확인 → 실행 → 결과 흐름
- Runtime Knowledge 소개
- Worker Registry·GitLab/CI·Portainer 역할 구분
- 활용 사례, 신뢰 설계, 도입 절차와 FAQ
- 데스크톱·태블릿·모바일 반응형 레이아웃
- Open Graph 소셜 공유 이미지

## 실행 방법

필요 환경: Node.js `22.13.0` 이상

```bash
npm install
npm run dev
```

브라우저에서 터미널에 표시되는 로컬 주소를 엽니다.

## 빌드 확인

```bash
npm run build
npm run build:pages
```

`build:pages`는 GitHub Pages용 정적 결과물을 `out/`에 생성합니다.

## 주요 파일

- `app/page.tsx`: 웹페이지 콘텐츠와 역할별 Worker 인터랙션
- `app/use-cases/[slug]/page.tsx`: 사례별 공통 페이지 템플릿
- `app/use-cases/cases.ts`: 기관·기업 운영·개발팀 사례 콘텐츠
- `app/globals.css`: 전체 디자인과 반응형 스타일
- `app/layout.tsx`: 페이지 metadata와 소셜 공유 설정
- `public/og-v2.png`: 사례 범위를 반영한 소셜 공유 이미지

## 자료 상태

- 제품 소개용 프로토타입이며 공식 배포 또는 production-ready 상태를 의미하지 않습니다.
- 실제 기능 제공 범위는 Worker별 적용 버전과 운영 상태에 따라 다를 수 있습니다.
- Source-only, 검증 환경과 특정 Worker 배포 상태를 구분해 확인해야 합니다.
- 기준 Worker Host repository commit SHA: `078680e0189d97b65519216fa609eb30646cf703`
