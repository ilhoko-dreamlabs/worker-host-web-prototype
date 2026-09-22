import type { Metadata } from "next";
import Link from "next/link";
import { WorkerAgentIcon } from "../components/BrandAssets";
import { OpsIcon, OpsPageShell, OpsReference } from "../components/WorkerOps";

const title = "왜 WorkerOps인가 | Worker Host";
const description = "이미 AI를 잘 쓰는 팀을 위한 다음 질문. 담당자 교체, 지침 변경, 권한과 연결 장애까지 업무를 계속 운영하는 기준을 살펴봅니다.";
const canonicalUrl = "https://worker-host.dreamlabs.co.kr/why-workerops/";
const socialImage = "https://worker-host.dreamlabs.co.kr/og-v3.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: { title, description, type: "website", url: canonicalUrl, images: [{ url: socialImage, width: 1729, height: 910, alt: "사람과 역할별 Worker를 연결하는 Worker Host 업무 구조" }] },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

const changes = [
  { kind: "people" as const, title: "담당자가 바뀌어도", description: "잘 쓰던 사람의 기억에만 의존하지 않고, 다음 담당자가 확인할 지침·도구·권한의 기준을 남깁니다.", question: "다음 동료가 같은 업무를 시작하려면 무엇이 필요한가?" },
  { kind: "guide" as const, title: "업무 기준이 바뀌어도", description: "새 지침이 있다는 사실과, 각 Worker에 실제 적용됐다는 사실을 구분해서 확인합니다.", question: "어느 버전을 누가 적용하고 검증했는가?" },
  { kind: "shield" as const, title: "연결과 권한이 달라져도", description: "요청에 필요한 범위를 정하고, 막힌 작업의 원인과 복구 담당자를 확인할 수 있게 운영합니다.", question: "무엇까지 허용됐고, 어디서 멈췄는가?" },
];

export default function WhyWorkerOpsPage() {
  return (
    <OpsPageShell>
      <section className="ops-hero section-shell" id="top" aria-labelledby="why-title">
        <div className="ops-hero-copy">
          <p className="ops-kicker">WHY WORKEROPS · 이미 AI를 쓰고 있는 팀에게</p>
          <h1 id="why-title">AI가 일을 해낸 다음,<br />팀은 어떻게 계속 쓸까요?</h1>
          <p className="ops-lead">직원마다 AI를 연결하는 법까지 배울 필요는 없도록.<br />회사가 업무 환경을 준비하고, 직원은 자기 역할의 일을 요청하는 구조를 생각합니다.</p>
          <p>WorkerOps의 질문은 “AI가 이 일을 할 수 있나요?”에서 끝나지 않습니다. “동료에게 넘겨도, 기준이 바뀌어도, 연결이 끊겨도 누가 어떻게 운영할까요?”까지 이어집니다.</p>
          <div className="ops-actions">
            <Link className="button button-primary" href="/workerops-in-action/">운영이 달라지는 네 장면 보기</Link>
            <Link className="text-link" href="#comparison">이미 쓰는 에이전트와 비교하기 →</Link>
          </div>
        </div>
        <figure className="ops-hero-art">
          <div className="ops-callout"><OpsIcon kind="guide" /><div><strong>회사가 준비하는 업무 환경</strong><p>업무 지침 · 연결할 도구 · 허용 범위<br />각 Worker에 적용하고 확인</p></div></div>
          <div className="ops-flow-strip">
            <div className="ops-step"><OpsIcon kind="people" /><strong>직원</strong><span>“검토한 메일 보내줘”</span></div>
            <div className="ops-step"><WorkerAgentIcon className="ops-worker" /><strong>역할별 Worker</strong><span>지침과 허용 범위 확인</span></div>
            <div className="ops-step"><OpsIcon kind="mail" /><strong>업무 도구</strong><span>필요한 승인 후 실행</span></div>
          </div>
          <figcaption className="ops-note">가상 운영 예시 · 메일 발송 검증 아님<br />메일 연결·인증·승인 정책을 별도로 구성해야 합니다. 모든 직원의 결과 품질을 동일하게 보장한다는 의미는 아닙니다.</figcaption>
        </figure>
      </section>

      <section className="ops-section section-shell" aria-labelledby="continuity-title">
        <div className="ops-section-head"><p className="ops-kicker">한 번의 결과 → 계속 쓰는 업무</p><h2 id="continuity-title">사람이 바뀌는 날부터,<br />운영의 차이가 보입니다.</h2><p>아래는 도입 시 만들고 확인해야 할 운영 상태입니다. 자동으로 완성되는 효과를 약속하지 않습니다.</p></div>
        <div className="ops-card-grid">
          {changes.map((item) => <article className="ops-card" key={item.title}><OpsIcon kind={item.kind} /><h3>{item.title}</h3><p>{item.description}</p><strong>{item.question}</strong></article>)}
        </div>
      </section>

      <section className="ops-section section-shell" id="comparison" aria-labelledby="comparison-title">
        <div className="ops-section-head"><p className="ops-kicker">공정한 비교</p><h2 id="comparison-title">기존 에이전트도 잘할 수 있습니다.<br />비교할 것은 운영을 묶는 방식입니다.</h2><p>챗봇과 코딩 에이전트도 지침, 도구 연결, 공유 설정을 갖출 수 있습니다. 여기서는 <strong>이미 잘 구성된 팀 환경</strong>과 비교합니다. Worker Host만 가능한 기능이라는 표가 아닙니다.</p></div>
        <div className="ops-table-wrap" role="region" aria-label="운영 구성 방식 비교표" tabIndex={0}>
          <table className="ops-table">
            <caption>같은 업무를 운영할 때, 무엇을 직접 유지하고 무엇을 제품 구조에 맞춰 관리하는가</caption>
            <thead><tr><th scope="col">운영 질문</th><th scope="col">기존 에이전트를 잘 구성한 팀</th><th scope="col">Worker Host에서 다루는 구조</th><th scope="col">여전히 관리자가 할 일</th></tr></thead>
            <tbody>
              <tr><th scope="row">동료에게 업무를 넘길 때</th><td>공유 지침·프로젝트·도구 설정과 인수인계 절차를 팀이 구성합니다.</td><td>역할별 Worker의 지침·지식·작업 공간을 관리 단위로 삼습니다.</td><td>지침을 작성하고 담당자를 정하며, 새 사용자의 권한과 수행 결과를 확인합니다.</td></tr>
              <tr><th scope="row">지침을 바꿀 때</th><td>기존 도구의 배포·버전 기능 또는 자체 절차로 적용 여부를 관리합니다.</td><td>Worker 소유 Skill과 적용 경계를 구분합니다. Git 기반 승인·동기화 일부는 Source-only입니다.</td><td>대상과 버전을 선택하고 Worker별 적용·검증·되돌리기를 확인합니다. 중앙 자동 전파를 가정하지 않습니다.</td></tr>
              <tr><th scope="row">도구를 연결할 때</th><td>기존 권한·연결 관리 기능 또는 자체 게이트웨이를 구성합니다.</td><td>관리자 관리 Connector를 사용자가 선택하고, 요청별 도구·자원·행위 범위를 제한하는 경계를 둡니다.</td><td>외부 계정·정책·허용 자원을 설정합니다. Skill 지침이 권한을 부여하지는 않습니다.</td></tr>
              <tr><th scope="row">작업이 멈췄을 때</th><td>기존 기록·모니터링과 팀의 장애 대응 절차를 연결합니다.</td><td>요청 상태·실행 기록·연결 가능 여부를 통해 멈춘 지점을 확인하는 기반을 둡니다.</td><td>원인을 판단하고 연결을 복구한 뒤 재실행·결과 확인을 맡습니다. 자동 복구를 보장하지 않습니다.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="ops-note">제품 구조, 소스 구현, 특정 환경에서의 검증은 서로 다릅니다. Git Skill의 실제 비공개 저장소 동기화는 추가 검증이 필요하며 자동 pull은 꺼져 있습니다.</p>
      </section>

      <section className="ops-section section-shell" aria-labelledby="proof-title">
        <div className="ops-two-columns">
          <div className="ops-section-head"><p className="ops-kicker">가능성과 확인된 사실을 분리</p><h2 id="proof-title">“연결된다”보다 중요한 것.<br />“이 요청에는 어디까지 열렸나.”</h2><p>관리자가 연결해 둔 도구라고 해서 모든 요청에 모든 권한이 필요한 것은 아닙니다. 설정된 연결, 이번 요청의 목적, 허용된 자원의 범위를 함께 봐야 합니다.</p><Link className="text-link" href="/workerops-in-action/#permissions">요청별 권한 장면 자세히 보기 →</Link></div>
          <aside className="ops-card"><OpsIcon kind="shield" /><span className="ops-badge">날짜가 있는 제한적 검증</span><h3>worker0 · GitLab 조회</h3><p>2026-09-14 기록에서는 허용된 비공개 프로젝트 정보 조회를 확인했습니다. 저장된 연결에 쓰기 기능이 있어도, 해당 조회 요청에는 변경 도구가 노출되지 않았고 외부 변경은 0건이었습니다.</p><p className="ops-note">이 사례는 해당 환경·요청의 조회 경계에 대한 근거입니다. 메일 발송, 모든 Connector, 업무 전체의 운영 성과를 검증한 기록은 아닙니다.</p></aside>
        </div>
      </section>

      <section className="ops-section section-shell" aria-labelledby="build-title">
        <div className="ops-callout"><OpsIcon kind="check" /><div><p className="ops-kicker">“직접 만들면 되는 것 아닌가요?”</p><h2 id="build-title">맞습니다. 직접 만들 수 있습니다.<br />그다음 유지할 범위까지 비교하세요.</h2><p>바이브 코딩으로 연결 화면이나 자동화 흐름을 만들 수도 있습니다. 비교 대상은 첫 구현만이 아니라 권한 회수, 지침 버전, 담당자 변경, 연결 장애, 호스트 유지보수까지 포함한 운영입니다.</p><p><strong>기존 환경이 이 요구를 충분히 충족한다면 그대로 쓰는 것이 합리적입니다.</strong> Worker Host는 이를 역할별 Worker와 공통 운영 경계로 관리하려는 팀이 검토할 선택지입니다. 추가 호스팅·설정·관리 비용도 함께 따져야 합니다.</p></div></div>
      </section>

      <section className="ops-section section-shell" id="pilot" aria-labelledby="pilot-title">
        <div className="ops-section-head"><p className="ops-kicker">작게 비교하고 결정</p><h2 id="pilot-title">더 좋아졌는지는,<br />우리 팀의 업무 하나로 확인합니다.</h2><p>같은 모델·입력 자료·허용 권한·결과 품질 기준으로 비교하세요. 이미 구성된 기존 환경을 출발점으로 삼고, Worker Host만 사전 준비를 끝낸 상태로 비교하지 않습니다.</p></div>
        <div className="ops-card-grid">
          <article className="ops-card"><OpsIcon kind="people" /><h3>인수인계</h3><p>다음 동료가 필요한 설정을 찾고 첫 유효 결과를 얻기까지 걸린 시간, 도움을 요청한 횟수를 기록합니다.</p></article>
          <article className="ops-card"><OpsIcon kind="guide" /><h3>기준 변경</h3><p>새 지침을 정한 뒤 대상 Worker의 적용을 확인하기까지의 시간과, 이전 기준이 남은 건수를 기록합니다.</p></article>
          <article className="ops-card"><OpsIcon kind="plug" /><h3>차단과 복구</h3><p>허용 밖 요청이 멈추는지, 구성된 연결의 장애 원인을 찾고 복구한 뒤 확인하는 데 얼마나 걸리는지 봅니다.</p></article>
        </div>
        <p className="ops-note">초기 구성·교육·호스트 유지보수 시간도 비용에 포함합니다. 절감률이나 생산성 향상 수치는 사전 가정하지 않고 실제 측정값으로 판단합니다.</p>
        <div className="ops-actions"><Link className="button button-primary" href="/workerops-in-action/">업무를 계속 운영하는 네 장면</Link><Link className="button button-secondary" href="/#architecture">전체 구조 보기</Link><Link className="text-link" href="/#usecases">우리 팀과 가까운 사례 찾기 →</Link></div>
      </section>
      <OpsReference />
    </OpsPageShell>
  );
}
