# Worker Host 소개 웹페이지 프로토타입

역할별 AI Worker, 사람의 요청·검토 과정과 관련 운영 시스템을 소개하는 반응형 랜딩페이지 프로토타입입니다.

공개 페이지: <https://worker-host.dreamlabs.co.kr/>

## 포함된 화면

- 판매·수익성 분석·기관 문서업무·기업 운영·콘텐츠 운영·작은 개발팀을 함께 보여주는 Hero 구성도
- 15초 활용 영상·포스터·한국어 내레이션 자막을 포함한 사례 4개와 영상 제작 전 콘텐츠 운영 순환 사례 1개
- 기획 → 제작 준비 → 공개 검토 → 피드백 → 다음 독립 요청으로 이어지는 사람 중심 콘텐츠 순환 구조
- 거래처별 판매량·수익성 산식·프로모션 변화와 확인사항을 보여주는 가상 분석 페이퍼
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
- `app/use-cases/cases.ts`: 판매·수익성 분석·기관·기업 운영·콘텐츠 운영·개발팀 사례 콘텐츠
- `app/globals.css`: 전체 디자인과 반응형 스타일
- `app/layout.tsx`: 페이지 metadata와 소셜 공유 설정
- `public/og-v3.png`: 판매·수익성 분석 사례 범위를 반영한 소셜 공유 이미지

## 자료 상태

- 제품 소개용 프로토타입이며 공식 배포 또는 production-ready 상태를 의미하지 않습니다.
- 실제 기능 제공 범위는 Worker별 적용 버전과 운영 상태에 따라 다를 수 있습니다.
- Source-only / Deployed / Blocked 상태를 구분해 확인해야 합니다.
- 기준 Worker Host repository commit SHA: `6b9c349147b08b6ebb3afb29e69551358df3654e`
- 사례 영상 콘텐츠 기준 Worker Host repository commit SHA: `5f93da1f50fdaa9bc831629d010fdda2fd181a72`

## WorkerOps 운영 소개 페이지 (2026-09-22)

- `/why-workerops/`: 잘 구성된 기존 에이전트 환경과 비교하는 운영 책임·도입 판단 기준
- `/workerops-in-action/`: 담당자 인계, 지침 변경, 요청별 권한, 구성된 연결의 장애·복구 시연안
- 홈페이지 진입점, FAQ 및 다섯 사례 페이지의 운영 관점과 연결
- 새로운 운영 설명·협업 경계의 제품 참조: `app/operations-reference.ts`
- 해당 범위의 repository HEAD: `d50ba89596ff37cd6d4f99731baa670b710e797b`
- **미커밋 변경이 있는 Wiki 작업본을 함께 참조했습니다.** 위 HEAD만으로 모든 설명을 재현할 수 없습니다. 기존 소개·영상의 기준 SHA는 기존 표기를 유지합니다.
- 참조: compiled 34/38/42, ADR-0008/0019 및 2026-09-14 Connector evidence. 특정 환경의 과거 배포·조회 기록을 현재 전체 기능의 제공 상태로 확대하지 않습니다.
- 협업은 독립 Worker 간 인증·권한·승인 경계를 유지하는 요청·응답·인계입니다. 한 Worker 내부의 자율 오케스트레이션과 구분합니다.
- 수정 전 `app/`, README, package.json을 별도 `../deliverables/workerops-site-review-20260922/backup/`에 복사했습니다. 원본 해시와 참조 Wiki 작업본 해시는 같은 검토 폴더의 `sources-and-backup-manifest.json`에 기록합니다.
- 로컬 검토 후 사용자 승인에 따라 공개 배포 대상으로 확정했습니다. 실제 배포 결과는 GitHub Actions 실행 기록과 공개 URL로 확인합니다. 제품 repository/Wiki/runtime 및 assets 사이트는 변경하지 않습니다.

검증:

```bash
npm run lint
npm run build
node --test scripts/workerops-export.test.mjs
```

`npm run build`는 정적 export 후 Windows에서 잘못 중첩되는 Next segment 파일에 올바른 평면 경로의 복사본을 추가합니다. 기존 생성 파일을 삭제하거나 상충 파일을 덮어쓰지 않으며 Linux의 정상 export에서는 추가 작업이 없습니다. 관련 upstream 문제: [Next.js #92339](https://github.com/vercel/next.js/issues/92339). `next build`를 직접 실행하면 이 보정은 생략됩니다.

브라우저 검증 스크립트·스크린샷·로컬 보고서는 `../deliverables/workerops-site-review-20260922/`에 보관합니다. 기존 `tests/rendered-html.test.mjs`는 현재 사이트가 아닌 미사용 starter skeleton용이므로, 이번 검증은 위 새 정적 export 테스트를 대상으로 합니다.
