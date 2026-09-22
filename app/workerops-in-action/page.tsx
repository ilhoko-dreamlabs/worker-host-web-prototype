import type { Metadata } from "next";
import Link from "next/link";
import { WorkerAgentIcon } from "../components/BrandAssets";
import { OpsIcon, OpsPageShell, OpsReference } from "../components/WorkerOps";

const publishedUrl = "https://worker-host.dreamlabs.co.kr/";
const title = "업무를 계속 운영하는 장면 | Worker Host";
const description = "담당자가 바뀌고, 지침이 바뀌고, 연결이 끊겼을 때. WorkerOps의 운영 가치를 확인할 네 가지 가상 시연안과 제한된 실제 검증 기록을 구분해 살펴보세요.";

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
    screen: "Settings의 Skills·Connectors에서 적용된 지침과 사용 가능한 연결을 확인합니다. 새 담당자는 자신의 요청으로 초안을 만들고 Chat·History에서 결과를 검토합니다.",
    human: "담당자가 고객 정보와 답변을 확인하고 발송 여부를 결정합니다. 기존 직원의 개인 계정·비공개 대화·인증정보를 자동으로 넘기는 장면이 아닙니다.",
    measure: "새 담당자가 첫 검토 가능한 초안을 얻기까지 걸린 시간, 다시 설명한 항목 수, 관리자 준비 시간을 함께 측정합니다.",
    steps: ["회사 응대 기준", "새 담당자의 독립 요청", "사람이 검토한 답변"],
    caseHref: "/use-cases/business-operations/", caseLabel: "기업 운영 사례와 연결하기",
  },
  {
    id: "guidelines", number: "02", icon: "guide" as const, nav: "지침 변경",
    title: "새 기준을 만들었다면, 어느 Worker에 적용됐는지도.",
    request: "“이번에 승인된 할인 기준으로 제안 내용을 다시 확인해줘.”",
    status: "Source-only · 실제 Git 지침 동기화 검증 전",
    setup: "관리자가 변경 지침의 Git 후보와 정확한 커밋을 검토·승인합니다. 적용할 Worker와 검증 요청을 미리 정합니다.",
    screen: "Settings → Skills에서 승인한 후보의 적용 상태와 버전을 확인하고, 대상 Worker마다 같은 확인 요청을 실행하는 시연안입니다.",
    human: "관리자가 실제 적용 여부를 확인하고 담당자가 결과를 검토합니다. 중앙에서 모든 Worker에 자동으로 내려받거나 즉시 일괄 적용된다고 가정하지 않습니다.",
    measure: "대상별 적용 확인에 든 시간, 구버전으로 응답한 건수, 수정·재확인 횟수를 기록합니다. 지침 배포와 답변 품질 보증은 구분합니다.",
    steps: ["변경 후보 · 정확한 버전", "관리자의 명시적 승인", "Worker별 적용 확인"],
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
    id: "recovery", number: "04", icon: "plug" as const, nav: "연결 장애",
    title: "연결이 끊겼을 때, 다른 계정으로 몰래 계속하지 않도록.",
    request: "“지정한 연결로 프로젝트 정보를 확인해줘.” → 연결 불가",
    status: "가상 시연안 · 장애 발견부터 복구까지 전 과정 검증 전",
    setup: "관리자는 사용할 연결과 대상 범위를 지정하고, 장애 시 확인할 담당자와 재요청 절차를 정합니다.",
    screen: "구성된 Connector를 사용할 수 없으면 차단 상태를 확인합니다. Settings → Connectors에서 연결 상태를 점검하고 Chat·History에서 실패 요청을 대조합니다.",
    human: "관리자가 인증·연결과 허용 범위를 확인한 뒤 사용자가 명시적으로 재요청합니다. 외부 변경 가능 작업은 이미 반영됐는지 먼저 확인합니다. 다른 계정으로의 자동 우회나 자동 재실행을 가정하지 않습니다.",
    measure: "원인·담당자를 찾는 시간, 복구 후 재확인 시간, 권한 범위 유지와 중복 실행·중복 변경 여부를 기록합니다.",
    steps: ["지정 연결 사용 불가", "관리자가 확인 · 복구", "범위 재확인 후 재요청"],
    caseHref: "/use-cases/sales-data-analysis/", caseLabel: "판매 데이터 분석 사례와 연결하기",
  },
];

export default function WorkerOpsInActionPage() {
  return (
    <OpsPageShell>
      <section className="ops-hero section-shell" id="top">
        <div className="ops-hero-copy">
          <p className="eyebrow"><span /> WORKEROPS IN ACTION</p>
          <h1>업무를 계속<br /><em>운영하는 장면.</em></h1>
          <p className="ops-lead">첫 결과를 잘 만드는 것에서 한 걸음 더.<br />사람·기준·권한·연결이 달라졌을 때도, 누가 무엇을 준비하고 확인하는지 살펴봅니다.</p>
          <div className="ops-actions">
            <a className="button button-primary" href="#handoff">네 가지 장면 보기 <span aria-hidden="true">↓</span></a>
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

      <section className="ops-section section-shell" aria-label="네 가지 가상 운영 시연안">
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
          <p>아래는 2026년 9월 14일의 제한된 환경 기록입니다. 이번 웹페이지 작업에서 실제 Worker 실행 환경을 새로 점검한 것은 아닙니다.</p>
        </div>
        <div className="ops-proof-grid">
          <article className="ops-proof-card">
            <span className="ops-badge">Deployed · 과거 제한 검증</span>
            <h3>허용된 GitLab 프로젝트 읽기</h3>
            <p>worker0에서 허용된 단일 프로젝트의 이름·공개 범위·기본 브랜치를 읽었습니다. 저장된 연결에는 이슈 쓰기 권한이 있었지만, 읽기 요청에는 변경 도구가 0개였고 외부 변경도 0건이었습니다.</p>
            <p className="ops-note">2026-09-14 · 검증 소스 <code>fb5e05ba</code><br />프로젝트 식별 정보는 공개 페이지에서 생략했습니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">Source-only · 실제 적용 검증 전</span>
            <h3>승인된 지침 버전의 적용</h3>
            <p>Git의 정확한 후보 커밋을 명시적으로 승인하는 경계와 자동 pull 비활성화 원칙을 참조합니다. 실제 Git 인증·동기화와 Worker별 적용 확인까지 완료했다는 증거로 제시하지 않습니다.</p>
            <p className="ops-note">여러 Worker에 대한 중앙 자동 배포나 동일한 답변 품질을 보장하지 않습니다.</p>
          </article>
          <article className="ops-proof-card">
            <span className="ops-badge">추가 검증 필요</span>
            <h3>업무 전체의 운영 효과</h3>
            <p>Connector 가용성 화면·배포 및 worker0의 제한된 계정 인증 기록은 있습니다. 그러나 직원 교체, 실제 메일 발송, 장애 복구 전체 흐름이나 운영 시간 절감을 증명하지는 않습니다.</p>
            <p className="ops-note">2026-09-14 · 관련 소스 <code>122204ef</code><br />신규 계정 준비·비공개 인증정보 인계 정책도 별도 확인이 필요합니다.</p>
          </article>
        </div>
        <p className="ops-note">Deployed는 해당 시점·환경에 배포된 기록, Source-only는 소스 단계, Blocked는 실행 또는 검증이 막힌 상태를 뜻합니다. 서로를 대체하는 표현으로 사용하지 않습니다.</p>
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
