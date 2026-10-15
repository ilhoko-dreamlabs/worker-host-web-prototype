import type { ReactNode } from "react";
import Link from "next/link";
import CaseHeader from "./CaseHeader";
import { WorkerHostLogo } from "./BrandAssets";
import { OPERATIONS_REFERENCE } from "../operations-reference";

export type OpsIconKind = "mail" | "people" | "guide" | "shield" | "plug" | "check" | "arrow";

export function OpsIcon({ kind, className = "" }: { kind: OpsIconKind; className?: string }) {
  const paths: Record<OpsIconKind, ReactNode> = {
    mail: <><rect x="3" y="5" width="26" height="22" rx="4" /><path d="m4 7 12 10L28 7M4 25l8-8m16 8-8-8" /></>,
    people: <><circle cx="11" cy="10" r="4" /><path d="M3 27v-4a8 8 0 0 1 16 0v4M22 6a4 4 0 0 1 0 8m1 5a7 7 0 0 1 6 7" /></>,
    guide: <><path d="M7 3h13l6 6v20H7zM20 3v7h6M12 15h9M12 20h9M12 25h5" /></>,
    shield: <><path d="m16 3 11 4v9c0 6-7 11-11 13C12 27 5 22 5 16V7zM10 16l4 4 8-9" /></>,
    plug: <><path d="M10 3v7m12-7v7M7 10h18v5a9 9 0 0 1-18 0zM16 24v5M3 4l3 3m23-3-3 3" /></>,
    check: <><circle cx="16" cy="16" r="12" /><path d="m9 16 5 5 10-11" /></>,
    arrow: <path d="M4 16h24m-9-9 9 9-9 9" />,
  };
  return <svg className={`ops-icon ${className}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[kind]}</svg>;
}

export function OpsPageShell({ children }: { children: ReactNode }) {
  return <>
    <a className="ops-skip" href="#ops-content">본문으로 건너뛰기</a>
    <CaseHeader />
    <main className="ops-page" id="ops-content" tabIndex={-1}>{children}</main>
    <footer>
      <div className="footer-main">
        <Link className="brand footer-brand" href="/" aria-label="Worker Host 홈"><WorkerHostLogo variant="white" className="footer-brand-logo" /></Link>
        <p>직원이 요청하는 일과 회사가 준비하는 운영 환경을 연결합니다.</p>
        <nav aria-label="WorkerOps 더 알아보기"><Link href="/why-workerops/">왜 WorkerOps인가</Link><Link href="/workerops-in-action/">운영 장면</Link><Link href="/#usecases">직무별 사례</Link><Link href="/#architecture">전체 구조</Link></nav>
      </div>
      <div className="footer-legal"><p>가상 운영 예시와 특정 환경의 과거 검증 기록을 구분합니다. 모든 환경의 사용 가능 상태나 효과를 보장하지 않습니다.</p><span>WorkerOps reference · {OPERATIONS_REFERENCE.sha} · {OPERATIONS_REFERENCE.readDate}</span></div>
    </footer>
  </>;
}

export function OpsReference() {
  return <section className="ops-reference section-shell" aria-labelledby="ops-reference-title">
    <details>
      <summary id="ops-reference-title">제품 근거와 읽는 방법 <span>참조일 {OPERATIONS_REFERENCE.readDate}</span></summary>
      <p><strong>이 페이지의 제품 기준 SHA</strong> <code>{OPERATIONS_REFERENCE.sha}</code><br />{OPERATIONS_REFERENCE.wikiState}입니다. 이 SHA만으로 작업본의 모든 내용이 재현되지는 않습니다. 최신 운영 상태를 실시간 조회한 페이지가 아닙니다.</p>
      <ul>
        <li><strong>Source-only:</strong> 소스 구현·검증 단계. 실제 배포 및 사용자 기능 검증과 구분하며, 설계만 있는 상태를 구현 완료로 보지 않습니다.</li>
        <li><strong>Deployed:</strong> 날짜·대상 Worker가 명시된 배포 근거. 다른 환경이나 전체 업무의 완료를 의미하지 않습니다.</li>
        <li><strong>Blocked:</strong> 확인된 제약으로 실행 또는 검증을 진행할 수 없는 상태입니다.</li>
        <li><strong>미검증:</strong> 해당 기능·환경에서 아직 확인하지 않은 상태입니다. 준비 완료로 표시하지 않습니다.</li>
      </ul>
      <p>Wiki compiled topics 34(독립 실행 경계), 37(RRA), 38(Skill Registry), 39(공통 문맥), 42(Connectors), 46(요청별 Skill 선택), 48(System Events), ADR-0023·0024·0025·0027과 관련 검증 기록을 참조했습니다. 협업은 최신 기준선·상세 설계 27·날짜가 있는 실행 증거로 대조했습니다. 기존 직무별 사례·영상의 제작 기준은 변경하지 않았습니다.</p>
      <p>과거 검증: {OPERATIONS_REFERENCE.evidenceDate} · GitLab 제한 읽기 <code>{OPERATIONS_REFERENCE.liveRead}</code> · Connector 배포·인증 기록 <code>{OPERATIONS_REFERENCE.connectorDeployment}</code></p>
      <p>승인형 협업: {OPERATIONS_REFERENCE.collaborationDate} · worker0 <code>{OPERATIONS_REFERENCE.collaborationSource}</code> → worker1 <code>{OPERATIONS_REFERENCE.collaborationTarget}</code>. 최초 요청과 동일 대화 후속 요청을 각각 새로 승인해 총 2건 완료, 중복 실행 0건, 첨부 0건을 확인한 한정 기록입니다. 시험용 Key는 당시 만료 기한이 있는 Key였으며 현재 연결 가능 상태나 전체 Worker 적용을 보장하지 않습니다.</p>
      <p>요청별 Skill 선택: 소스 검증 및 이미지 <code>{OPERATIONS_REFERENCE.skillLoadingImage}</code> 준비 기록이 있습니다. {OPERATIONS_REFERENCE.runtimeObservationDate} 기준선에는 해당 이미지와 후속 이미지의 worker0 실행 관찰이 추가됐지만, 이 관찰을 Skill 정책 전환·실제 선택·모델 적용의 기능 검증 완료로 확대하지 않습니다. 운영 기능 검증은 별도입니다.</p>
      <p>운영 이벤트 기반 기존 Skill 갱신: <code>{OPERATIONS_REFERENCE.systemEventsImage}</code> · {OPERATIONS_REFERENCE.systemEventsObservationDate} worker0 이미지 실행 관찰. 수신 꺼짐·발행자 0개이며 HTTPS 전달 설정과 CI 연동 검증이 남았습니다. 관리자 전역 허용과 설치된 Skill별 사전 동의가 필요하며, 신규 설치·활성화·권한 부여·업무 실행이 아닙니다.</p>
      <p>데이터 보존 복구: worker00 · 2026-10-13 · <code>{OPERATIONS_REFERENCE.connectorRecovery}</code>. 승인된 업데이트 뒤 13개 점검과 기존 실행 기록 2,000건 읽기를 확인했습니다. 전체 자동 복구나 후속 CI 구현 완료의 근거가 아닙니다.</p>
      <p>공통 문맥: <code>{OPERATIONS_REFERENCE.contextQualitySource}</code> · 합성 자료·명시적 60초 설정의 격리 품질 검증과 후속 이미지 관찰을 구분합니다. 진행 화면 복원·일반 Chat 후속 초안: 소스 <code>{OPERATIONS_REFERENCE.progressAndDraftSource}</code> · 검증 <code>{OPERATIONS_REFERENCE.progressAndDraftValidation}</code>. 로컬 브라우저 검증까지이며 실제 Worker 적용 검증은 별도입니다.</p>
    </details>
  </section>;
}

export function OpsEntryLinks() {
  return <div className="ops-entry-links">
    <Link href="/why-workerops/" className="ops-entry-card"><OpsIcon kind="people" /><div><small>이미 AI를 쓰고 있다면</small><strong>왜 WorkerOps인가</strong><p>직접 구성·운영하는 방법과 무엇을 비교해야 할까요?</p></div><span aria-hidden="true">↗</span></Link>
    <Link href="/workerops-in-action/" className="ops-entry-card"><OpsIcon kind="guide" /><div><small>결과를 만든 다음의 이야기</small><strong>업무를 계속 운영하는 장면</strong><p>인계·지침·권한·복구·승인형 협업을 다섯 장면으로 확인하세요.</p></div><span aria-hidden="true">↗</span></Link>
  </div>;
}

const caseOperations: Record<string, { title: string; copy: string; measure: string; anchor: string; icon: OpsIconKind }> = {
  "sales-data-analysis": { title: "다음 담당자도 같은 수익성 기준으로 분석할 수 있을까요?", copy: "업무 책임자가 매출·매입의 포함 범위와 산식을 승인하고, 관리자가 각 Worker에 적용된 자료와 지침을 확인하는 장면을 제안합니다. 보고서가 나왔다는 사실과 기준이 일치한다는 확인은 별개입니다.", measure: "인계 시 재설정 수 · 산식 버전 불일치 · 검토 시간", anchor: "handoff", icon: "people" },
  "institution-documents": { title: "서식이나 규정이 바뀌면, 적용 여부까지 확인합니다.", copy: "기존 문서 초안과 새 지침의 적용 결과를 같은 입력으로 비교합니다. 변경 승인과 Worker별 적용 확인을 분리하며, 모든 Worker의 자동 동기화를 전제하지 않습니다.", measure: "기준 변경 단계 · 적용 확인 시간 · 누락 항목", anchor: "guidelines", icon: "guide" },
  "business-operations": { title: "담당자가 바뀌거나 연결이 끊겨도, 조치할 사람은 명확하게.", copy: "인계할 업무 자료와 이용 가능한 연결을 먼저 정합니다. 구성된 연결이 사용할 수 없는 상태라면 관리자가 원인·권한·복구를 확인하고, 직원은 확인 후 다시 요청하는 운영 장면입니다.", measure: "인계 확인 질문 · 원인 파악 시간 · 관리자 조치 수", anchor: "recovery", icon: "plug" },
  "software-team": { title: "개발 결과를 QA로 넘길 때, 권한까지 넘기지는 않습니다.", copy: "관리자가 등록한 대상 Worker에 보낼 요청을 사용자가 확인·승인하고, 대상은 자신의 인증·권한으로 독립 실행합니다. 같은 대화의 후속 요청도 새 승인이 필요합니다. 개발→QA는 가상 업무 예시이며, 실제 검증된 worker0→worker1 요청·응답과 구분합니다.", measure: "승인된 요청 범위 · 대상의 독립 권한 · 요청·결과 이력", anchor: "collaboration", icon: "shield" },
  "youtube-content-operations": { title: "피드백이 다음 기획으로 갈 때, 브랜드 기준도 함께 확인합니다.", copy: "담당자가 반영할 의견과 새 브랜드 지침을 승인하고, 다음 요청에서 적용 여부를 비교합니다. 다른 역할과의 인계는 승인된 범위로 제한하며 자동 게시나 무제한 연쇄 실행을 뜻하지 않습니다.", measure: "지침 적용 누락 · 인계 질문 · 다음 기획 검토 시간", anchor: "guidelines", icon: "guide" },
};

export function CaseOpsPerspective({ slug }: { slug: string }) {
  const item = caseOperations[slug];
  if (!item) return null;
  return <section className="case-ops-perspective section-shell" aria-labelledby="case-ops-title">
    <div className="ops-callout"><OpsIcon kind={item.icon} /><div><p className="ops-kicker">AFTER THE FIRST RESULT · 가상 운영 예시</p><h2 id="case-ops-title">{item.title}</h2><p>{item.copy}</p><p className="ops-note"><strong>파일럿에서 비교할 것</strong> {item.measure}</p><div className="ops-actions"><Link className="text-link" href={`/workerops-in-action/#${item.anchor}`}>운영 장면 자세히 보기 ↗</Link><Link className="text-link" href="/why-workerops/">기존 AI 활용과 무엇이 다른가요? ↗</Link></div><p className="ops-note">운영 관점 참조: {OPERATIONS_REFERENCE.readDate} · SHA <code>{OPERATIONS_REFERENCE.sha}</code> · Wiki 작업본 포함</p></div></div>
  </section>;
}
