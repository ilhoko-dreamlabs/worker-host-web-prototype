import type { Metadata } from "next";
import Link from "next/link";
import { WorkerAgentIcon } from "../components/BrandAssets";
import { OpsIcon, OpsPageShell, OpsReference } from "../components/WorkerOps";

const publishedUrl = "https://worker-host.dreamlabs.co.kr/";
const title = "업무를 계속 운영하는 장면 | Worker Host";
const description = "담당자 변경, 중앙 지침 갱신, 요청별 권한, 데이터 보존 복구, 승인형 협업의 다섯 가지 WorkerOps 운영 장면. 업무 예시와 소스·배포·제한된 검증 근거를 구분합니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${publishedUrl}workerops-in-action/` },
  openGraph: {
    title, description, type: "website", url: `${publishedUrl}workerops-in-action/`,
    images: [{ url: `${publishedUrl}og-v3.png`, width: 1729, height: 910, alt: "사람과 역할별 Worker가 연결되는 Worker Host 업무 구조" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${publishedUrl}og-v3.png`] },
};

const scenes = [
  {
    id: "handoff", number: "01", icon: "people" as const, nav: "담당자 변경",
    title: "담당자가 바뀌어도, 업무 기준은 다시 만들지 않도록.",
    request: "“이 고객의 문의에 우리 회사 기준으로 답변 초안을 준비해줘.”",
    status: "가상 시연안 · 인수인계 전체 흐름 검증 전",
    setup: "회사가 승인한 응대 지침과 인수인계 자료를 준비하고, 새 담당자의 역할·접근 권한과 사용할 연결을 관리자가 확인합니다.",
    screen: "Settings의 Skills·Connectors에서 적용된 지침과 사용 가능한 연결을 확인합니다. Chat·History와 문맥 화면에서는 보존한 원본·요약·이번 요청에 전달된 자료를 나눠 검토하는 시연을 준비합니다.",
    human: "담당자가 고객 정보와 답변을 확인하고 발송 여부를 결정합니다. 기존 직원의 개인 계정·비공개 대화·인증정보를 자동으로 넘기는 장면이 아닙니다.",
    measure: "새 담당자가 첫 검토 가능한 초안을 얻기까지 걸린 시간, 다시 설명한 항목 수, 관리자 준비 시간을 함께 측정합니다.",
    steps: ["회사 응대 기준", "새 담당자의 독립 요청", "사람이 검토한 답변"],
    caseHref: "/use-cases/business-operations/", caseLabel: "기업 운영 사례와 연결하기",
  },
  {
    id: "guidelines", number: "02", icon: "guide" as const, nav: "지침 변경",
    title: "새 기준을 만들었다면, 어느 Worker에 적용됐는지도.",
    request: "“이번에 승인된 할인 기준으로 제안 내용을 다시 확인해줘.”",
    status: "선택 설치의 제한된 기록 있음 · 중앙 갱신은 운영 연동 검증 대기",
    setup: "회사가 승인된 Skill 카탈로그와 새 버전을 준비합니다. 관리자는 Worker별 설치·활성화를 정하고, 이미 설치된 Skill 중 자동 갱신을 허용할 대상을 따로 선택하는 구조입니다.",
    screen: "Settings → Skills에서 설치 버전·갱신 허용·활성화·적용 결과를 구분하는 시연을 준비합니다. System Events의 발행 사실 수신과 실제 Skill 교체, 이번 요청에 지침이 쓰인 상태는 각각 확인해야 합니다.",
    human: "관리자가 기준과 갱신 허용 대상을 정하고 담당자는 결과를 검토합니다. 새 버전 안내가 신규 설치·자동 활성화·권한 부여를 대신하지 않습니다. 확인된 환경은 수신 꺼짐·발행자 0개로 CI 연동·운영 적용 검증이 남아 있습니다.",
    measure: "대상별 적용 확인에 든 시간, 구버전으로 응답한 건수, 수정·재확인 횟수를 기록합니다. 지침 배포와 답변 품질 보증은 구분합니다.",
    steps: ["승인된 지침의 새 버전", "허용된 기존 설치만 갱신", "적용·활성화·요청 사용 확인"],
    caseHref: "/use-cases/institution-documents/", caseLabel: "기관 문서업무 사례와 연결하기",
  },
  {
    id: "permissions", number: "03", icon: "shield" as const, nav: "요청별 권한",
    title: "‘볼 수 있다’와 ‘바꿔도 된다’를 같은 권한으로 보지 않기.",
    request: "“허용된 GitLab 프로젝트의 기본 정보를 확인해줘. 변경은 하지 마.”",
    status: "가상 시연안 · 읽기 권한 축소는 제한된 과거 검증 기록 있음",
    setup: "관리자는 허용 프로젝트와 도구 범위를 설정합니다. 저장된 연결의 권한이 넓어도 이번 요청의 의도·대상·허용 범위를 함께 제한합니다.",
    screen: "Settings → Connectors의 허용 범위와 Chat 요청을 대조합니다. 운영자가 확인할 수 있는 도구 노출·호출 기록과 외부 시스템 기록으로 실제 실행 범위를 검증합니다.",
    human: "변경 작업이 필요해지면 별도 요청과 그 작업에 필요한 권한·승인 조건을 다시 확인합니다. ‘승인’ 한 번으로 임의의 작업을 허용하는 구조가 아닙니다.",
    measure: "읽기 요청의 변경 도구 노출, 범위 밖 요청 차단과 실제 외부 변경 여부를 확인합니다. 답변만이 아니라 도구·외부 시스템 기록도 함께 봅니다.",
    steps: ["저장된 연결 권한", "이번 요청으로 범위 축소", "허용된 읽기만 실행"],
    caseHref: "/use-cases/software-team/", caseLabel: "개발팀 사례와 연결하기",
  },
  {
    id: "recovery", number: "04", icon: "plug" as const, nav: "데이터 보존 복구",
    title: "문제는 고치고, 쌓아온 업무 기록은 지키도록.",
    request: "“연결 오류를 확인하되, 기존 대화와 작업 기록은 지우지 마.”",
    status: "가상 업무 시연안 · 2026-10-13 worker00의 제한된 복구 기록 있음",
    setup: "관리자는 오류 원인과 영향 범위를 확인하고, 현재 데이터·실행 이미지·되돌릴 대상을 기록합니다. 작업 중인 요청이 없는지 확인한 뒤 승인된 범위로만 업데이트를 준비합니다.",
    screen: "오류 기록, 업데이트 전후 이미지와 데이터 보존 결과를 함께 확인합니다. worker00 기록에서는 승인된 업데이트 후 13개 점검이 통과했고, 기존 데이터 파일의 내용이 같았으며 실행 기록 2,000건을 읽었습니다.",
    human: "관리자가 업데이트와 복구 검증을 맡고, 후속 작업은 사용자가 범위를 확인해 새로 요청합니다. 이미 발생한 외부 변경 여부부터 확인하며 다른 계정으로의 자동 우회나 무조건 재실행을 가정하지 않습니다.",
    measure: "원인을 찾고 복구 확인까지 걸린 시간, 데이터 보존, 허용 범위 유지, 중복 변경 여부를 기록합니다. 한 Worker의 복구 성공이 모든 장애의 자동 복구나 후속 업무 완료를 뜻하지는 않습니다.",
    steps: ["오류 · 보존 상태 확인", "승인된 업데이트 · 복구", "데이터 · 기능 재확인"],
    caseHref: "/use-cases/sales-data-analysis/", caseLabel: "판매 데이터 분석 사례와 연결하기",
  },
  {
    id: "collaboration", number: "05", icon: "people" as const, nav: "승인형 협업",
    title: "다른 Worker의 도움이 필요하면, 보낼 요청부터 승인합니다.",
    request: "“이번 변경의 검토 요약을 등록된 QA Worker에 보내 점검을 요청해줘.”",
    status: "개발→QA 가상 시연안 · Worker 간 요청·응답의 과거 제한 검증 있음",
    setup: "관리자가 허용할 대상 Worker를 Connector로 등록합니다. 대상은 별도의 API 키 인증과 요청 수용 기준을 유지합니다. 개발·QA라는 역할 배치는 이 장면을 설명하기 위한 예시입니다.",
    screen: "사용자가 대상 Worker와 보낼 정확한 요청 내용을 확인해 이번 요청을 승인하는 흐름입니다. 대상이 자기 경계에서 처리하고 원래 Worker로 결과를 돌려주는지 확인합니다. 같은 원격 대화를 이어가는 후속 요청도 새 승인을 받아야 합니다.",
    human: "요청자는 공유해도 되는 내용과 범위를 확인하고, 결과를 받은 담당자가 검토·반영 여부를 결정합니다. 초기 범위는 대상 1개·한 단계 전달이며, 권한 상속·승인 없는 후속 실행·연쇄 전달·동시 분산은 허용된다고 보지 않습니다. 첨부파일 전달은 후속 범위입니다.",
    measure: "승인된 요청과 실제 전달 내용의 일치, 대상의 독립 권한 유지, 결과 수신, 중복 실행 0건 여부를 확인합니다. 개발→QA 업무의 품질·완료 시간은 별도 파일럿으로 측정합니다.",
    steps: ["등록된 대상 · 요청 확인", "사용자의 요청별 승인", "대상의 독립 처리 · 결과 수신"],
    caseHref: "/use-cases/software-team/", caseLabel: "개발팀 사례와 연결하기",
  },
];

export default function WorkerOpsInActionPage() {
  return (
    <OpsPageShell>
      <section className="ops-hero section-shell" id="top">
        <div className="ops-hero-copy">
          <p className="eyebrow"><span /> WORKEROPS IN ACTION</p>
          <h1>업무를 계속<br /><em>운영하는 장면.</em></h1>
          <p className="ops-lead">회사가 기준을 준비하고, 직원은 자기 일을 요청합니다.<br />담당자·지침·권한이 바뀌고 복구나 협업이 필요한 순간까지, 업무 환경을 계속 운영하는 방법을 살펴봅니다.</p>
          <div className="ops-actions">
            <a className="button button-primary" href="#handoff">다섯 가지 장면 보기 <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#evidence">실제로 검증된 범위</a>
          </div>
          <p className="ops-note">가상 시연안 · 실제 고객 사례 아님 · 기능 상태와 적용 가능 범위는 환경별 확인 필요</p>
        </div>
        <div className="ops-hero-art ops-hero-art-scenes">
          <WorkerAgentIcon className="ops-worker-icon" />
          <p className="ops-kicker">결과물 다음에 생기는 질문</p>
          <div className="ops-flow-strip">
            {scenes.map((scene) => (
              <a className="ops-step" href={`#${scene.id}`} key={scene.id}>
                <OpsIcon kind={scene.icon} /><strong>{scene.nav}</strong>
              </a>
            ))}
          </div>
          <p>“다음 사람도, 바뀐 기준으로,<br />허용된 범위 안에서 일할 수 있을까?”</p>
        </div>
      </section>

      <nav className="ops-scene-nav section-shell" aria-label="운영 장면 바로가기">
        {scenes.map((scene) => <a href={`#${scene.id}`} key={scene.id}>{scene.number} {scene.nav}</a>)}
        <a href="#evidence">검증 기록</a>
      </nav>

      <section className="ops-section section-shell" aria-label="다섯 가지 가상 운영 시연안">
        <p className="ops-note">잘 구성한 기존 에이전트 환경에서도 이 흐름을 만들 수 있습니다. 비교할 것은 생성 능력만이 아니라, 준비·변경·확인·복구에 드는 팀의 운영 부담입니다. 시연은 승인된 테스트 계정과 합성 자료로 검증하세요.</p>
        {scenes.map((scene) => (
          <article className="ops-scene" id={scene.id} key={scene.id}>
            <div className="ops-scene-head">
              <span className="ops-scene-number">{scene.number}</span>
              <div><p className="ops-kicker"><OpsIcon kind={scene.icon} /> {scene.nav}</p><h2>{scene.title}</h2></div>
            </div>
            <p className="ops-badge">{scene.status}</p>
            <blockquote className="ops-scene-request">{scene.request}</blockquote>
            <div className="ops-flow-strip" aria-label={`${scene.nav} 시연 흐름`}>
              {scene.steps.map((step, index) => (
                <div className="ops-step" key={step}><span>{index + 1}</span><strong>{step}</strong></div>
              ))}
            </div>
            <div className="ops-scene-grid">
              <div className="ops-scene-cell"><small>ADMIN PREPARES</small><h3>관리자가 먼저 준비</h3><p>{scene.setup}</p></div>
              <div className="ops-scene-cell"><small>LOOK AT THE PRODUCT</small><h3>화면에서 확인할 것</h3><p>{scene.screen}</p></div>
              <div className="ops-scene-cell"><small>HUMAN DECIDES</small><h3>사람에게 남는 책임</h3><p>{scene.human}</p></div>
              <div className="ops-scene-cell"><small>MEASURE IN A PILOT</small><h3>좋아졌는지 판단할 기준</h3><p>{scene.measure}</p></div>
            </div>
            <Link className="text-link" href={scene.caseHref}>{scene.caseLabel} <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
        <aside className="ops-callout">
          <OpsIcon kind="plug" />
          <div><h3>‘연결이 없음’과 ‘설정된 연결의 장애’는 다릅니다.</h3><p>Connector 인스턴스가 전혀 없는 일부 일반 요청의 선택적 fallback은 Source-only 범위입니다. 명시적으로 지정했거나 이미 구성된 연결이 실패한 상황에서 다른 계정으로 우회할 수 있다는 뜻이 아닙니다.</p></div>
        </aside>
      </section>

      <section className="ops-section section-shell" id="evidence">
        <div className="ops-section-head">
          <div><p className="eyebrow"><span /> EVIDENCE, NOT A PROMISE</p><h2>시연안과 검증 기록을<br />분리해서 보여드립니다.</h2></div>
          <p>2026-10-15에 읽은 제품 소스와 Wiki 작업본을 기준으로, 날짜·대상·확인한 단계가 다른 기록을 나눴습니다. 이번 웹페이지 작업에서 실제 Worker 실행 환경을 새로 점검하거나 변경한 것은 아닙니다.</p>
        </div>
        <div className="ops-proof-grid">
          <article className="ops-proof-card">
            <span className="ops-badge">Deployed · 과거 제한 검증</span>
            <h3>허용된 GitLab 프로젝트 읽기</h3>
            <p>worker0에서 허용된 단일 프로젝트의 이름·공개 범위·기본 브랜치를 읽었습니다. 저장된 연결에는 이슈 쓰기 권한이 있었지만, 읽기 요청에는 변경 도구가 0개였고 외부 변경도 0건이었습니다.</p>
            <p className="ops-note">2026-09-14 · 검증 소스 <code>fb5e05ba</code><br />프로젝트 식별 정보는 공개 페이지에서 생략했습니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">제한된 설치 기록 · 후속 운영 검증 대기</span>
            <h3>카탈로그와 선택한 Skill 설치</h3>
            <p>카탈로그 36개와 worker0의 <code>test-command-discovery 1.0.1</code> 설치·설치 기록 1건이 확인됐습니다. 설치 상태를 읽는 처리에서 문제가 발견돼 보정 소스가 준비됐지만, 활성화·요청 반영·화면 상태의 운영 검증 완료 근거는 아닙니다.</p>
            <p className="ops-note">2026-10-15 참조 · 설치 근거 소스 <code>6a3d9d6</code><br />승인 목록 → 선택 설치 → 활성화 → 요청별 사용은 별도 단계입니다. 이 과거 기록만으로 중앙 갱신 연동까지 검증된 것은 아닙니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">소스 검증 완료 · 운영 기능 검증 대기</span>
            <h3>이번 요청에 필요한 지침 선택</h3>
            <p>요청의 의도·권한·모델에 넣을 자료의 양에 맞춰 필요한 Skill을 선택하는 소스와 테스트가 준비됐습니다. 설치된 지침 전체를 매번 사용하는 것과 구분하는 구조입니다.</p>
            <p className="ops-note">2026-10-06 소스·테스트·이미지 준비 기록 · <code>4549ca6</code><br />2026-10-07 worker0에서 해당 이미지를 포함한 이후 이미지 기록이 있으나, 이미지 존재·실행은 이 기능의 운영 검증을 대신하지 않습니다. 비용·품질 개선은 별도 측정이 필요합니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">과거 제한 검증 · 후속 확인 조건부</span>
            <h3>worker0 → worker1 요청과 대화 이어가기</h3>
            <p>2026-10-03 최초 요청 1건과 새 승인 후 같은 원격 대화를 이어간 후속 요청 1건이 성공했고, 중복 실행은 0건이었습니다. 첨부파일은 포함하지 않았습니다. 개발→QA 업무 시연이나 모든 Worker 조합을 검증한 기록은 아닙니다.</p>
            <p className="ops-note">조건부 통과 기록에는 만료된 승인·재시도 화면의 후속 과제가 남았습니다. 보정 소스 이후 새 업무 검증은 확인되지 않았습니다. 당시 테스트 키는 2026-10-03 만료돼 현재 연결 가능 상태를 보장하지 않습니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">소스·이미지 검증 · 운영 연동 검증 대기</span>
            <h3>허용한 기존 Skill의 버전 갱신</h3>
            <p>CI가 발행 사실을 보내면 Worker 코드가 관리자의 기존 설치별 갱신 허용과 조건을 확인하는 별도 운영 경로입니다. 신규 설치·자동 활성화·권한 부여는 포함하지 않습니다.</p>
            <p className="ops-note">2026-10-13 · 소스·이미지 <code>6902cec9</code><br />worker0의 포함 이미지 실행을 관찰했지만 수신 꺼짐·발행자 0개였습니다. HTTPS 전달 설정과 CI 연동 검증이 남아 있어 실제 자동 갱신 제공 완료로 표현하지 않습니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">Deployed · 특정 Worker 복구 검증</span>
            <h3>worker00의 데이터 보존 복구</h3>
            <p>연결 실행 기록을 읽던 오류를 승인된 업데이트로 보완했습니다. 13개 후속 점검을 통과했고, 점검한 대화·설정·인증·실행 기록 파일의 내용은 전후 동일했습니다. 새 처리기로 기존 실행 기록 2,000건 읽기도 확인했습니다.</p>
            <p className="ops-note">2026-10-13 · 이미지 소스 <code>f577e8aa</code><br />일부 연결 오류 복구의 근거입니다. 후속 CI 구현·이벤트 전달 완료나 전체 자동 복구는 아닙니다. 별도의 프로세스 수명 관리 경고도 남아 있습니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">소스·격리 품질 검증 · 업무 품질 검증 별도</span>
            <h3>원본·요약·요청별 전달 문맥</h3>
            <p>긴 대화의 원본을 보존하고 요약과 이번 요청에 전달된 자료를 구분하는 구조입니다. Codex·Claude·Kimi의 합성 자료 시험이 명시적인 60초 설정에서 통과했습니다.</p>
            <p className="ops-note">2026-10-10~13 기록 · 검증 소스 <code>42d8764</code><br />포함 이미지의 후속 worker0 실행 관찰이 있습니다. 그러나 기본 20초 설정의 동일 품질, 요약 정책 활성화, 실제 고객 업무 품질을 입증한 것은 아닙니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">Source-only · 실제 Worker 적용 검증 전</span>
            <h3>진행 화면 복원과 편집 가능한 후속 초안</h3>
            <p>화면에 다시 들어왔을 때 공개된 진행 상태를 복원하고, 외부 요청 결과에서 일반 Chat의 편집 가능한 초안을 시작하는 개선입니다. 화면 재접속만으로 작업을 다시 실행하지 않습니다.</p>
            <p className="ops-note">2026-10-13 · 소스 <code>afb5f8d8</code>, 검증 <code>a43f0fec</code>의 454개 항목 통과<br />로컬 브라우저 검증이며 실제 Worker 적용 검증 전입니다. 원격 Worker의 같은 대화로 요청을 보내는 기능과 다르며, 해당 원격 후속 요청에는 여전히 새 승인이 필요합니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">추가 검증 필요</span>
            <h3>업무 전체의 운영 효과</h3>
            <p>제한된 연결·지침 설치·협업·복구 기록은 있습니다. 그러나 직원 교체부터 실제 메일 발송까지의 업무 전체 흐름이나 운영 시간 절감을 증명하지는 않습니다.</p>
            <p className="ops-note">2026-09-14 · 관련 소스 <code>122204ef</code><br />신규 계정 준비·비공개 인증정보 인계 정책도 별도 확인이 필요합니다.</p>
          </article>
        </div>
        <p className="ops-note">배포·소스 테스트·기능 검증·업무 성과는 서로 다른 근거입니다. 과거 성공 기록은 현재 가용성을 보장하지 않으며, 제한된 환경의 결과를 전체 Worker나 고객의 성과로 확대하지 않습니다.</p>
      </section>

      <section className="ops-section section-shell">
        <div className="ops-callout">
          <OpsIcon kind="check" />
          <div><p className="ops-kicker">NEXT: OUR TEAM, ONE WORKFLOW</p><h2>우리 팀의 한 업무로 확인해보세요.</h2><p>기존에 잘 쓰고 있는 에이전트 환경과 같은 업무·같은 변경 조건으로 비교합니다. 관리자 준비 시간까지 포함해야 도입 효과를 판단할 수 있습니다.</p><div className="ops-actions"><Link className="button button-primary" href="/why-workerops/#pilot">비교 파일럿 설계 보기 <span aria-hidden="true">↗</span></Link><Link className="button button-secondary" href="/#architecture">전체 구조 보기</Link></div></div>
        </div>
      </section>
      <OpsReference />
    </OpsPageShell>
  );
}
