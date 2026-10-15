import type { Metadata } from "next";
import Link from "next/link";
import { WorkerAgentIcon } from "../components/BrandAssets";
import { OpsIcon, OpsPageShell, OpsReference } from "../components/WorkerOps";

const title = "왜 WorkerOps인가 | Worker Host";
const description = "회사의 업무 기준을 역할별 Worker에 준비하고 변경·적용·이력·복구까지 관리합니다. 중앙 지침 갱신과 요청별 승인형 협업을 기존 에이전트 환경과 공정하게 비교합니다.";
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
  { kind: "guide" as const, title: "업무 기준이 바뀌어도", description: "새 지침의 발행, 갱신 허용 대상, 실제 적용 결과를 따로 확인합니다. 새 기준을 알렸다는 사실만으로 적용 완료라고 보지 않습니다.", question: "어느 버전을 누가 허용하고 적용했는가?" },
  { kind: "shield" as const, title: "문제가 생겨도", description: "기록을 지워 다시 시작하기 전에, 멈춘 원인과 복구 후 데이터·권한의 보존 여부를 확인하는 운영 절차를 둡니다.", question: "무엇이 복구됐고, 무엇이 그대로 남았는가?" },
];

export default function WhyWorkerOpsPage() {
  return (
    <OpsPageShell>
      <section className="ops-hero section-shell" id="top" aria-labelledby="why-title">
        <div className="ops-hero-copy">
          <p className="ops-kicker">WHY WORKEROPS · 이미 AI를 쓰고 있는 팀에게</p>
          <h1 id="why-title">회사가 일하는 법을 준비하면,<br />직원은 자기 일을 요청합니다.</h1>
          <p className="ops-lead">개인의 프롬프트 노하우에서, 팀이 관리하는 업무 기준으로.<br />승인된 지침과 도구를 역할별 Worker에 준비하고, 다른 Worker의 도움이 필요할 때도 요청별 승인 범위를 지킵니다.</p>
          <p>WorkerOps의 차이는 더 똑똑한 모델을 약속하는 데 있지 않습니다. AI로 결과물을 만드는 데서 나아가, <strong>회사의 업무 기준을 준비하고 변경·적용·이력·복구까지 관리하는 것</strong>입니다. 이번 요청에 무엇을 쓸지, 어디까지 협업할지도 구분합니다.</p>
          <div className="ops-actions">
            <Link className="button button-primary" href="/workerops-in-action/">운영이 달라지는 다섯 장면 보기</Link>
            <Link className="text-link" href="#comparison">이미 쓰는 에이전트와 비교하기 →</Link>
          </div>
        </div>
        <figure className="ops-hero-art">
          <div className="ops-callout"><OpsIcon kind="guide" /><div><strong>회사가 준비하는 업무 환경</strong><p>승인된 지침 목록 · 선택한 버전 · 허용된 연결<br />설치·활성화·요청별 사용을 구분해 확인</p></div></div>
          <div className="ops-flow-strip">
            <div className="ops-step"><OpsIcon kind="people" /><strong>직원</strong><span>“이번 변경을 검토해줘”</span></div>
            <div className="ops-step"><WorkerAgentIcon className="ops-worker" /><strong>역할별 Worker</strong><span>회사 지침과 허용 범위</span></div>
            <div className="ops-step"><OpsIcon kind="shield" /><strong>승인된 협업</strong><span>대상·내용을 확인한 요청</span></div>
          </div>
          <figcaption className="ops-note">가상 운영 예시 · 실제 고객 사례 아님 · 개발→QA 업무 시연 검증 아님<br />지침 설치의 제한된 기록과 Worker 간 요청·응답의 과거 검증이 있습니다. 활성화·요청별 지침 사용의 운영 기능 검증은 대기 중입니다.</figcaption>
        </figure>
      </section>

      <section className="ops-section section-shell" id="guidance" aria-labelledby="guidance-title">
        <div className="ops-section-head"><p className="ops-kicker">회사의 기준 → 역할별 실행</p><h2 id="guidance-title">지침은 중앙에서 준비하고,<br />사용 여부는 단계마다 확인합니다.</h2><p>업무 지침을 담은 Skill은 권한 그 자체가 아닙니다. 승인된 목록에 올리는 일부터 실제 요청에 쓰이는 순간까지 구분해야, 바뀐 기준이 어디까지 적용됐는지 설명할 수 있습니다.</p></div>
        <div className="ops-scene-grid">
          <article className="ops-scene-cell"><small>01 · APPROVE</small><h3>승인된 카탈로그</h3><p>회사가 검토한 지침을 목록으로 준비합니다. 목록에 있다는 사실만으로 모든 Worker에 설치되지는 않습니다.</p></article>
          <article className="ops-scene-cell"><small>02 · INSTALL</small><h3>Skill·버전을 선택해 설치</h3><p>대상 Worker에 필요한 지침과 버전을 골라 설치하고 기록을 남깁니다. 새 Skill 설치는 관리자가 결정하며, 저장소 전체 동기화를 전제하지 않습니다.</p></article>
          <article className="ops-scene-cell"><small>03 · ENABLE</small><h3>사용할 지침을 활성화</h3><p>설치된 상태와 사용할 수 있도록 켠 상태를 구분합니다. 관리자는 Worker별 활성화 상태를 따로 확인해야 합니다.</p></article>
          <article className="ops-scene-cell"><small>04 · USE IN A REQUEST</small><h3>이번 요청에 필요한 지침 사용</h3><p>요청의 목적·허용 범위와 모델에 넣을 자료의 양을 고려해 필요한 지침을 고르는 구조입니다. 설치한 지침 전체가 매번 쓰이는 것은 아닙니다.</p></article>
        </div>
        <div className="ops-callout"><OpsIcon kind="guide" /><div><strong>2026-10-15 참조 · 단계별 검증 상태가 다릅니다.</strong><p>카탈로그 36개와 worker0의 Skill 1개 설치·설치 기록 1건을 확인한 제한된 근거가 있습니다. 활성화·요청 반영·화면 상태의 운영 검증은 남아 있습니다. 요청별 지침 선택은 <strong>소스 검증 완료 · 운영 기능 검증 대기</strong>이며, 이미지가 실행된 기록만으로 기능 검증 완료를 뜻하지 않습니다.</p><Link className="text-link" href="/workerops-in-action/#evidence">단계별 검증 근거 보기 →</Link></div></div>
      </section>

      <section className="ops-section section-shell" id="guidance-updates" aria-labelledby="guidance-updates-title">
        <div className="ops-section-head"><p className="ops-kicker">바뀐 회사 기준을 전달하는 운영 경로</p><h2 id="guidance-updates-title">“새 기준이 나왔습니다.”<br />그다음 적용까지 관리합니다.</h2><p>예를 들어 할인 정책이 바뀌었다면, 직원마다 새 프롬프트를 다시 배포하는 대신 승인된 Skill의 새 버전을 발행하고 대상별 적용 결과를 확인하는 구조입니다. 이 운영 갱신은 직원의 업무 요청이나 Worker 간 대화와 별도입니다.</p></div>
        <div className="ops-flow-strip" aria-label="중앙 지침 갱신의 제한된 운영 구조">
          <div className="ops-step"><OpsIcon kind="guide" /><strong>새 버전 발행</strong><span>CI가 승인된 지침의 발행 사실을 전달</span></div>
          <div className="ops-step"><OpsIcon kind="shield" /><strong>허용된 대상만 판단</strong><span>Worker 코드가 관리자의 기존 설치별 갱신 허용을 확인</span></div>
          <div className="ops-step"><OpsIcon kind="check" /><strong>갱신·적용 결과 확인</strong><span>조건을 충족한 기존 Skill만 교체하고 결과 기록</span></div>
        </div>
        <p className="ops-note">새 Skill 설치·자동 활성화·권한 부여는 포함하지 않습니다. 수신 성공과 적용 완료도 별개입니다. 이벤트가 도착했다는 이유로 모델이 임의의 명령을 실행하는 방식이 아닙니다.</p>
        <div className="ops-callout"><OpsIcon kind="guide" /><div><strong>소스·이미지 검증 및 특정 Worker 실행 관찰 · 운영 연동 검증 대기</strong><p>System Events의 소스와 이미지 검증, worker0의 포함 이미지 실행 기록이 있습니다. 다만 확인된 설정은 수신 꺼짐·발행자 0개이며 HTTPS 전달 설정과 CI 연동 검증이 남아 있습니다. 지금 모든 Worker에 자동 갱신이 제공되고 있다는 뜻은 아닙니다.</p><Link className="text-link" href="/workerops-in-action/#guidelines">지침 변경 장면과 확인할 조건 →</Link></div></div>
      </section>

      <section className="ops-section section-shell" aria-labelledby="continuity-title">
        <div className="ops-section-head"><p className="ops-kicker">한 번의 결과 → 계속 쓰는 업무</p><h2 id="continuity-title">사람이 바뀌는 날부터,<br />운영의 차이가 보입니다.</h2><p>아래는 도입 시 만들고 확인해야 할 운영 상태입니다. 자동으로 완성되는 효과를 약속하지 않습니다.</p></div>
        <div className="ops-card-grid">
          {changes.map((item) => <article className="ops-card" key={item.title}><OpsIcon kind={item.kind} /><h3>{item.title}</h3><p>{item.description}</p><strong>{item.question}</strong></article>)}
        </div>
        <div className="ops-two-columns">
          <article className="ops-card"><OpsIcon kind="guide" /><h3>“기억한다”보다, 무엇을 참고했는지</h3><p>업무 원본, 압축한 요약, 이번 요청에 전달된 문맥을 나눠 관리합니다. 대화가 길어질 때도 어떤 정보를 바탕으로 답했는지 확인할 기준을 남기는 구조입니다.</p><p className="ops-note">소스·격리된 품질 검증과 포함 이미지 실행 관찰이 있습니다. 실제 업무의 답변 품질, 운영 정책 활성화와 시간 절감은 별도 검증합니다.</p></article>
          <article className="ops-card"><OpsIcon kind="plug" /><span className="ops-badge">2026-10-13 · 특정 Worker 복구 기록</span><h3>기록을 지우지 않고, 문제를 고치기</h3><p>worker00의 연결 기록 처리 오류를 승인된 업데이트로 보완했습니다. 전후 데이터 파일의 내용이 같았고, 13개 후속 점검과 기존 실행 기록 2,000건 읽기를 통과했습니다.</p><p className="ops-note">한 Worker의 제한된 복구 근거입니다. 모든 장애의 자동 복구나 후속 CI 작업 완료를 뜻하지 않습니다.</p><Link className="text-link" href="/workerops-in-action/#recovery">복구 장면과 검증 범위 →</Link></article>
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
              <tr><th scope="row">지침을 바꿀 때</th><td>기존 도구의 공유 지침·배포·버전 기능 또는 자체 절차로 적용 여부를 관리합니다.</td><td>설치·활성화·요청별 사용을 구분하고, 갱신을 허용한 기존 Skill만 새 버전으로 바꾸는 별도 운영 경로를 둡니다.</td><td>내용·버전·대상별 갱신 허용을 정하고 실제 적용을 확인합니다. 자동 갱신의 운영 연동 검증은 별도입니다.</td></tr>
              <tr><th scope="row">여러 역할이 협업할 때</th><td>에이전트 연결 기능이나 자체 연계로 승인·인증·결과 전달을 구성할 수 있습니다.</td><td>등록된 대상 Worker에 사용자가 정확한 요청을 승인하고, 대상의 독립 인증·요청 수용 절차를 거쳐 결과를 받는 경계를 둡니다.</td><td>대상과 허용 범위를 준비하고 요청을 승인합니다. 같은 원격 대화를 이어갈 때도 새 승인이 필요합니다.</td></tr>
              <tr><th scope="row">도구를 연결할 때</th><td>기존 권한·연결 관리 기능 또는 자체 게이트웨이를 구성합니다.</td><td>관리자 관리 Connector를 사용자가 선택하고, 요청별 도구·자원·행위 범위를 제한하는 경계를 둡니다.</td><td>외부 계정·정책·허용 자원을 설정합니다. Skill 지침이 권한을 부여하지는 않습니다.</td></tr>
              <tr><th scope="row">업무 대화가 길어질 때</th><td>기존 도구의 요약·기록·프로젝트 기능과 인수인계 규칙을 구성합니다.</td><td>보존한 원본, 요약, 요청별 전달 문맥을 구분하는 구조를 둡니다.</td><td>요약 정책과 답변 품질을 확인합니다. 모든 정보를 언제나 기억한다는 보장은 아닙니다.</td></tr>
              <tr><th scope="row">작업이 멈췄을 때</th><td>기존 기록·모니터링과 팀의 장애 대응 절차를 연결합니다.</td><td>요청 상태·실행 기록으로 멈춘 지점을 찾고, 승인된 업데이트 전후 데이터 보존을 확인하는 운영 절차를 둡니다.</td><td>원인을 판단하고 복구·재실행·결과 확인을 맡습니다. 특정 Worker 복구 기록을 전체 자동 복구로 확대하지 않습니다.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="ops-note">제품 구조, 소스 구현, 특정 환경에서의 검증은 서로 다릅니다. 중앙 갱신은 관리자가 허용한 기존 설치에 한정되며 운영 연동은 검증 대기입니다. 지침 선택·문맥 관리가 비용 절감이나 답변 품질을 보장하지 않습니다.</p>
      </section>

      <section className="ops-section section-shell" aria-labelledby="collaboration-title">
        <div className="ops-two-columns">
          <div className="ops-section-head"><p className="ops-kicker">역할은 연결하고 · 권한은 분리하고</p><h2 id="collaboration-title">다른 Worker에게 맡길 때도,<br />승인은 이번 요청까지.</h2><p>개발 Worker가 QA Worker에 검토를 요청하는 흐름을 생각해보세요. 관리자가 대상을 등록하고, 사용자가 보낼 내용과 범위를 승인합니다. 대상 Worker는 자기 인증과 요청 수용 기준으로 처리하고 결과를 돌려줍니다.</p><Link className="text-link" href="/workerops-in-action/#collaboration">승인형 협업 장면 자세히 보기 →</Link></div>
          <aside className="ops-card"><OpsIcon kind="shield" /><span className="ops-badge">업무 예시와 통신 검증을 구분</span><h3>독립 Worker 간 제한된 협업</h3><p>초기 범위는 한 번에 대상 1개, 한 단계 전달입니다. 원래 Worker의 권한이 넘어가지 않으며, 승인 없는 후속 요청·연쇄 실행·여러 대상으로의 동시 분산을 뜻하지 않습니다. 같은 대화의 후속 요청도 새로 승인합니다.</p><p className="ops-note">2026-10-03 worker0→worker1의 최초 요청 1건·동일 대화 후속 요청 1건 성공 기록이 있습니다. 첨부파일은 제외됐고, 현재 가용성이나 개발→QA 업무 성과를 검증한 기록은 아닙니다.</p></aside>
        </div>
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
        <div className="ops-actions"><Link className="button button-primary" href="/workerops-in-action/">업무를 계속 운영하는 다섯 장면</Link><Link className="button button-secondary" href="/#architecture">전체 구조 보기</Link><Link className="text-link" href="/#usecases">우리 팀과 가까운 사례 찾기 →</Link></div>
      </section>
      <OpsReference />
    </OpsPageShell>
  );
}
