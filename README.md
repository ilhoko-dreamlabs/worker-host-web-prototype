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

## WorkerOps 운영 소개 페이지 (2026-10-15 배포 보완)

- `/why-workerops/`: 잘 구성된 기존 에이전트 환경과 비교하는 운영 책임·도입 판단 기준
- `/workerops-in-action/`: 담당자 인계, 지침 변경, 요청별 권한, 구성된 연결의 장애·복구, 승인형 Worker 협업의 다섯 시연안
- 홈페이지 진입점, FAQ 및 다섯 사례 페이지의 운영 관점과 연결
- 새로운 운영 설명·협업 경계의 제품 참조: `app/operations-reference.ts`
- 해당 범위의 repository HEAD: `5606dce58d3df76a9b316b0ecd50b98187bf90fd` · 참조일 `2026-10-15`
- **미커밋 변경이 있는 Wiki 작업본을 함께 참조했습니다.** 위 HEAD만으로 모든 설명을 재현할 수 없습니다. 기존 소개·영상의 기준 SHA는 기존 표기를 유지합니다.
- 참조: 최신 baseline, 관련 compiled 34/37/38/39/42/46/48, 상세 협업 설계 27, ADR-0023/0024/0025/0027 및 해당 topic의 evidence. 특정 환경의 과거 배포·조회 기록을 현재 전체 기능의 제공 상태로 확대하지 않습니다.
- 협업은 등록된 대상 Worker에 사용자가 정확한 요청을 승인해 보내는 제한된 요청·응답입니다. 같은 원격 대화의 후속 요청도 새 승인이 필요합니다. 대상은 독립 인증·요청 수용 경계를 유지하며, 권한 상속·무승인 연쇄·fan-out·Worker 간 첨부 전달을 제공한다고 주장하지 않습니다.
- `2026-10-03` worker0→worker1의 최초 요청 1건·후속 요청 1건, 중복 0건은 과거의 제한된 검증입니다. 당시 테스트 키는 만료됐으며, 전체 Worker 조합·개발→QA 업무 성과·현재 연결 상태를 보장하지 않습니다.
- Skill Registry의 승인 목록 → 선택한 패키지·버전 설치 → 활성화 → 요청별 사용을 구분합니다. 설치 일부 확인과 실제 활성화·실행 반영 검증은 별도이며 자동 일괄 전파를 뜻하지 않습니다. Skill은 권한이나 인증정보가 아닙니다.
- 요청별 Skill 선택은 소스 검증 완료·운영 기능 검증 대기로 설명합니다. `2026-10-07` worker0의 후속 이미지 실행 관찰이 있어 미배포로 단정하지 않으며, 이미지 관찰만으로 기능 검증을 대신하지 않습니다.
- `public/media/architecture/worker-host-system-architecture-v5.svg`는 초기 Skill 설치·System Events·승인형 협업·AgentOps·검증 상태를 분리한 벡터 참조 구성도입니다. 기존 v3·v4 및 승인된 사례 영상은 보존합니다.
- System Events는 업무 RRA·모델 실행과 별도입니다. 관리자 전역 허용과 이미 설치된 Skill별 사전 동의를 확인한 기존 패키지 갱신만 처리하며, 신규 설치·자동 활성화·권한 부여를 포함하지 않습니다. `6902cec9c0d1960e21f55cedd7854d32452eeda0` 소스·이미지 검증 및 2026-10-13 worker0 이미지 실행 관찰이 있지만 수신 off·발행자 0개로 HTTPS 전달 설정과 CI 연동 검증이 남았습니다.
- 2026-10-13 worker00 복구는 `f577e8aaff645210ef00580e4d73ef65c3cf0db9` 승인 업데이트 후 13개 점검·기존 실행 기록 2,000건 읽기의 한정 근거입니다. 데이터 보존 검증을 전체 자동 복구·CI 구현 완료로 확대하지 않습니다.
- 공통 문맥 `42d87640787320d3f9ed0c0db7fe242adc44be31`은 합성 자료·명시적 60초 조건의 격리 검증과 포함 이미지 실행 관찰을 구분합니다. 진행 복원·일반 Chat 초안은 소스 `afb5f8d81a2e7cf4380bf95a47d10d6d59ade87c`, 검증 `a43f0fecb44726557374b2f3925dcb87a9ad57d9`의 로컬 검증까지이며 실제 Worker 적용 검증은 별도입니다.
- 수정 전 `app/`, README, package.json을 별도 `../deliverables/workerops-site-review-20260922/backup/`에 복사했습니다. 원본 해시와 참조 Wiki 작업본 해시는 같은 검토 폴더의 `sources-and-backup-manifest.json`에 기록합니다.
- 2026-10-08 수정 전 전체 추적 파일은 `../deliverables/workerops-site-update-20261008/site-before-1d5d082.zip`으로, 이번 배포 전 공개 소스는 `../deliverables/workerops-site-release-20261015/public-source-before-1d5d082.zip`으로 백업했습니다. 사용자 승인 범위는 소개 사이트의 커밋·푸시·공개 배포이며 제품 repository/Wiki/runtime 및 assets 사이트는 변경하지 않습니다.
- 도입 상담 CTA는 전송 양식이 아닌 로컬 준비 메모입니다. 브라우저 안에서 작성·복사·텍스트 저장만 가능하며, 서버 업로드·메일 전송·입력 내용 영구 저장을 하지 않습니다.
- 홈페이지 canonical, 8개 페이지의 `sitemap.xml`, `robots.txt`를 정적 export에 포함합니다. 확인되지 않은 페이지별 수정 날짜는 생성하지 않습니다.
- 사례 영상 4개는 같은 사이트의 `/media/use-cases/{slug}/scenario-v6.mp4`에서 제공합니다. 실패하면 사용자가 선택해 승인 원본 commit `482b9941a0e266c4aa13ec769c7663fe2e923a7d`의 GitHub Raw 경로로 다시 불러옵니다. 자동 재생·반복 재시도를 하지 않습니다. 영상·음성·자막·포스터 내용은 변경하지 않았습니다.
- 배포 워크플로는 영상 파일을 제거하지 않습니다. 정적 export 테스트가 4개 승인 원본의 SHA-256을 확인한 뒤 기존 GitHub Pages 경로로 발행합니다. 사이트 공개 배포는 Worker 제품의 공식 릴리스나 운영 기능 검증 완료를 뜻하지 않습니다.

검증:

```bash
npm run lint
npm run build
node --test scripts/workerops-export.test.mjs
```

`npm run build`는 정적 export 후 Windows에서 잘못 중첩되는 Next segment 파일에 올바른 평면 경로의 복사본을 추가합니다. 기존 생성 파일을 삭제하거나 상충 파일을 덮어쓰지 않으며 Linux의 정상 export에서는 추가 작업이 없습니다. 관련 upstream 문제: [Next.js #92339](https://github.com/vercel/next.js/issues/92339). `next build`를 직접 실행하면 이 보정은 생략됩니다.

이전 브라우저 검증은 `../deliverables/workerops-site-review-20260922/`와 `../deliverables/workerops-site-update-20261008/`, 이번 스크립트·스크린샷·보고서는 `../deliverables/workerops-site-release-20261015/`에 보관합니다. 기존 `tests/rendered-html.test.mjs`는 현재 사이트가 아닌 미사용 starter skeleton용이므로, 이번 검증은 위 정적 export 테스트를 대상으로 합니다.
