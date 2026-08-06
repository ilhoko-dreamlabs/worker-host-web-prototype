"use client";

import Link from "next/link";
import { useState } from "react";

type Role = {
  id: string;
  label: string;
  person: string;
  worker: string;
  request: string;
  result: string;
  decision: string;
  accent: string;
};

const roles: Role[] = [
  {
    id: "product",
    label: "Product",
    person: "Product Lead",
    worker: "Product Worker",
    request: "고객 요청을 기능 요구사항으로 정리해 줘",
    result: "기능 범위 · 수용 기준 · 검토 항목",
    decision: "우선순위와 개발 범위를 결정합니다.",
    accent: "blue",
  },
  {
    id: "engineering",
    label: "Engineering",
    person: "Developer",
    worker: "Engineering Worker",
    request: "승인된 요구사항의 구현 영향을 분석해 줘",
    result: "코드 분석 · 변경 제안 · 테스트 결과",
    decision: "코드를 검토하고 병합 여부를 결정합니다.",
    accent: "cyan",
  },
  {
    id: "qa",
    label: "QA",
    person: "QA Engineer",
    worker: "QA Worker",
    request: "변경 내용을 검증할 테스트를 설계해 줘",
    result: "테스트 시나리오 · 실패 패턴 · 결함 정리",
    decision: "품질 기준 충족 여부를 판단합니다.",
    accent: "coral",
  },
  {
    id: "release",
    label: "Release",
    person: "Operator",
    worker: "Release Worker",
    request: "배포 전 확인 항목과 위험을 정리해 줘",
    result: "체크리스트 · 위험 · rollback 확인 항목",
    decision: "출시 또는 보류를 결정합니다.",
    accent: "amber",
  },
];

const faqs = [
  {
    q: "일반 AI Chat과 무엇이 다른가요?",
    a: "대화만 남기는 것이 아니라 역할별 지식과 도구, 요청 상태, 결과와 작업 기록을 하나의 실행 흐름으로 연결합니다.",
  },
  {
    q: "Worker마다 다른 역할을 설정할 수 있나요?",
    a: "네. 담당 업무, 참고 지식, 사용할 도구와 접근 범위를 역할에 맞게 구분할 수 있습니다. 실제 제공 범위는 적용 환경별로 확인합니다.",
  },
  {
    q: "여러 Worker가 자동으로 협업하나요?",
    a: "아닙니다. 각 Worker는 사람의 독립 요청을 처리합니다. 역할자가 결과를 검토하고 다음 요청을 명시적으로 결정합니다.",
  },
  {
    q: "Worker가 코드를 자동으로 배포하나요?",
    a: "Worker는 분석과 작업을 지원하지만 공식 배포는 GitLab/CI와 승인된 운영 절차를 통해 별도로 진행합니다.",
  },
  {
    q: "팀의 지식이 자동으로 바뀌지는 않나요?",
    a: "검색과 미리보기는 지식을 변경하지 않습니다. Runtime Knowledge 변경에는 명시적인 요청과 검증 절차가 필요합니다.",
  },
];

const homepageCases = [
  {
    slug: "institution-documents",
    number: "01",
    label: "기관 문서업무",
    title: "정해진 서식은 기준에 맞게, 서식이 없는 문서는 구조부터",
    copy: "보고서·접수 문서·회의자료를 초안, 누락 후보와 참고 근거로 정리합니다.",
    accent: "blue",
  },
  {
    slug: "business-operations",
    number: "02",
    label: "기업 운영업무",
    title: "흩어진 운영정보를 다음 행동이 보이는 결과로",
    copy: "회의·요청·실적자료를 핵심 요약, 실행 항목과 확인 필요사항으로 구조화합니다.",
    accent: "mint",
  },
  {
    slug: "software-team",
    number: "03",
    label: "작은 개발팀",
    title: "제품·개발·QA 역할은 유지하고 AI 실행력은 확장",
    copy: "역할자가 각자의 Worker에 독립 요청하고 요구사항·영향 분석·테스트 결과를 검토합니다.",
    accent: "coral",
  },
];

function Arrow() {
  return (
    <span className="lane-arrow" aria-hidden="true">
      <span />
    </span>
  );
}

export default function Home() {
  const [activeRole, setActiveRole] = useState(roles[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Worker Host 홈" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>
            <strong>WORKER HOST</strong>
            <small>DREAMLABS</small>
          </span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="주요 메뉴">
          <a href="#value" onClick={closeMenu}>제품 가치</a>
          <a href="#usecases" onClick={closeMenu}>활용 사례</a>
          <a href="#roles" onClick={closeMenu}>역할별 Worker</a>
          <a href="#architecture" onClick={closeMenu}>전체 구성</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>도입 상담</a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> DREAMLABS · WORKER HOST</p>
          <h1>팀의 역할은 유지하고,<br /><em>AI 실행력은 확장하세요.</em></h1>
          <p className="hero-lead">
            기관 문서업무부터 기업 운영과 개발팀까지. 역할별 Worker가 승인된 지식과 도구로 사람의 독립 요청을 처리하고, 담당자는 검토와 결정에 집중합니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#usecases">적용 사례 보기 <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#how">작동 방식 보기 <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-note"><span aria-hidden="true">●</span> 요청은 독립적으로 · 결과는 투명하게 · 결정은 사람에게</p>
        </div>

        <div className="hero-visual" aria-label="사람의 독립 요청이 역할별 Worker와 결과로 연결되는 구조">
          <div className="visual-head">
            <span>사람의 요청</span>
            <span>역할별 Worker</span>
            <span>검토할 결과</span>
          </div>
          <div className="work-lane lane-product">
            <div className="person-node">
              <span className="avatar">DO</span>
              <div><small>Document Owner</small><strong>보고서 초안 요청</strong></div>
            </div>
            <Arrow />
            <div className="worker-node"><span className="status-dot" /><small>DOCUMENT WORKER</small><strong>서식과 근거 정리</strong></div>
            <Arrow />
            <div className="result-node"><small>RESULT</small><strong>초안 · 누락 · 참고 근거</strong></div>
          </div>
          <div className="work-lane lane-engineering">
            <div className="person-node">
              <span className="avatar">OP</span>
              <div><small>Operations Lead</small><strong>운영보고 정리</strong></div>
            </div>
            <Arrow />
            <div className="worker-node"><span className="status-dot" /><small>OPERATIONS WORKER</small><strong>실적과 이슈 구조화</strong></div>
            <Arrow />
            <div className="result-node"><small>RESULT</small><strong>요약 · 실행 항목 · 위험</strong></div>
          </div>
          <div className="work-lane lane-qa">
            <div className="person-node">
              <span className="avatar">DV</span>
              <div><small>Developer / QA</small><strong>변경과 테스트 검토</strong></div>
            </div>
            <Arrow />
            <div className="worker-node"><span className="status-dot" /><small>ENGINEERING WORKER</small><strong>영향과 검증 준비</strong></div>
            <Arrow />
            <div className="result-node"><small>RESULT</small><strong>변경 제안 · 테스트 결과</strong></div>
          </div>
          <div className="system-rail">
            <span><i className="system-icon">K</i> Runtime Knowledge</span>
            <span><i className="system-icon">T</i> Approved Tools</span>
            <span><i className="system-icon">R</i> Status &amp; Readback</span>
          </div>
          <p className="visual-caption"><span /> 가상 역할 구성 예시 · Worker 간 자동 연결 없이 역할자가 다음 단계를 결정합니다.</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Worker Host 핵심 특성">
        <div><span>01</span><strong>역할별 Worker</strong></div>
        <div><span>02</span><strong>독립 요청 실행</strong></div>
        <div><span>03</span><strong>사람의 승인</strong></div>
        <div><span>04</span><strong>상태와 결과 추적</strong></div>
      </section>

      <section className="usecases-section" id="usecases">
        <div className="section-shell">
          <div className="section-heading split-heading light-heading">
            <div>
              <p className="eyebrow"><span /> WORK SCENARIOS</p>
              <h2>내 업무와 닮은 장면부터<br />확인하세요.</h2>
            </div>
            <p>기술 구조보다 먼저 누가 무엇을 요청하고, 어떤 결과를 검토하며, 사람이 어디에서 결정하는지 사례별로 보여드립니다.</p>
          </div>
          <div className="usecase-grid scenario-entry-grid">
            {homepageCases.map((item) => (
              <Link className={`usecase-entry accent-${item.accent}`} href={`/use-cases/${item.slug}`} key={item.slug}>
                <div><span>{item.number}</span><small>활용 시나리오 · 실제 고객 사례 아님</small></div>
                <strong>{item.label}</strong>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <b>사례 페이지 보기 <span aria-hidden="true">↗</span></b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="problem-section section-shell" id="value">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span /> WHY WORKER HOST</p>
            <h2>AI를 연결하는 것만으로는<br />충분하지 않습니다.</h2>
          </div>
          <p>업무에 AI를 적용하려면 모델 연결을 넘어 요청, 역할, 지식, 권한과 결과를 확인할 수 있는 실행 기반이 필요합니다.</p>
        </div>
        <div className="problem-grid">
          <article className="problem-card card-dark">
            <span className="card-index">01</span>
            <div className="abstract-lines" aria-hidden="true"><i /><i /><i /></div>
            <h3>맥락이 매번<br />처음부터 시작됩니다</h3>
            <p>팀의 용어와 기준이 대화마다 반복되고 결과의 일관성을 유지하기 어렵습니다.</p>
          </article>
          <article className="problem-card card-blue">
            <span className="card-index">02</span>
            <div className="abstract-rings" aria-hidden="true"><i /><i /></div>
            <h3>중요한 변경의<br />경계가 흐려집니다</h3>
            <p>단순 분석과 실제 변경, 사용자 확인이 필요한 지점을 구분하기 어렵습니다.</p>
          </article>
          <article className="problem-card card-light">
            <span className="card-index">03</span>
            <div className="abstract-status" aria-hidden="true"><i /><i /><i /><i /></div>
            <h3>작업의 상태와<br />결과가 흩어집니다</h3>
            <p>무엇을 요청했고 어디까지 진행됐는지 팀이 함께 확인하기 어렵습니다.</p>
          </article>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-shell">
          <div className="section-heading center-heading">
            <p className="eyebrow"><span /> HOW IT WORKS</p>
            <h2>요청부터 결과까지,<br />네 단계로 명확하게</h2>
          </div>
          <div className="steps-grid">
            {[
              ["01", "요청", "사용자가 원하는 결과와 작업 범위를 자연어로 전달합니다."],
              ["02", "확인", "Worker가 역할, 지식, 도구와 허용 범위를 확인합니다."],
              ["03", "실행", "정해진 범위에서 작업하고 필요하면 사용자 확인을 요청합니다."],
              ["04", "결과", "상태, 결과와 사람이 검토할 다음 항목을 제공합니다."],
            ].map(([number, title, copy], index) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <div className="step-symbol" aria-hidden="true"><span>{index === 0 ? "+" : index === 1 ? "◎" : index === 2 ? "→" : "✓"}</span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                {index < 3 && <i className="step-connector" aria-hidden="true" />}
              </article>
            ))}
          </div>
          <p className="flow-rule"><span aria-hidden="true">↳</span> 결과에서 새로운 업무가 자동으로 시작되지는 않습니다. 사람의 검토가 다음 요청을 만듭니다.</p>
        </div>
      </section>

      <section className="roles-section section-shell" id="roles">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span /> ROLE-BASED WORKERS</p>
            <h2>한 명의 만능 AI보다,<br />팀을 이해하는 역할별 Worker</h2>
          </div>
          <p>각 역할에 필요한 업무 지식, 도구와 접근 범위를 구분하고 사람의 책임 구조에 맞춰 구성합니다.</p>
        </div>
        <div className="role-tabs" role="tablist" aria-label="역할별 Worker 선택">
          {roles.map((role) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeRole.id === role.id}
              className={activeRole.id === role.id ? "is-active" : ""}
              key={role.id}
              onClick={() => setActiveRole(role)}
            >
              <span>{role.label.slice(0, 2).toUpperCase()}</span>{role.label}
            </button>
          ))}
        </div>
        <div className={`role-detail accent-${activeRole.accent}`} role="tabpanel" aria-live="polite">
          <div className="role-person">
            <p>ROLE OWNER</p>
            <span className="role-avatar">{activeRole.person.split(" ").map((word) => word[0]).join("").slice(0, 2)}</span>
            <h3>{activeRole.person}</h3>
            <blockquote>“{activeRole.request}”</blockquote>
          </div>
          <div className="role-arrow" aria-hidden="true"><span>REQUEST</span><i /></div>
          <div className="role-worker">
            <p>ROLE-BASED AI</p>
            <span className="role-orbit" aria-hidden="true"><i /><b>W</b></span>
            <h3>{activeRole.worker}</h3>
            <div className="role-resources"><span>Knowledge</span><span>Tools</span><span>Adapter</span></div>
          </div>
          <div className="role-arrow" aria-hidden="true"><span>RESULT</span><i /></div>
          <div className="role-result">
            <p>REVIEWABLE OUTPUT</p>
            <h3>{activeRole.result}</h3>
            <div className="decision-box"><small>사람의 결정</small><strong>{activeRole.decision}</strong></div>
          </div>
        </div>
      </section>

      <section className="architecture-section" id="architecture">
        <div className="section-shell">
          <div className="section-heading center-heading light-heading">
            <p className="eyebrow"><span /> CONNECTED, NOT ORCHESTRATED</p>
            <h2>사람, Worker와 운영 시스템을<br />하나의 흐름으로</h2>
            <p>역할과 실행, 운영 변경의 책임을 분리해 AI 업무의 경계를 분명하게 만듭니다.</p>
          </div>
          <div className="architecture-map">
            <div className="arch-column people-column">
              <p className="arch-label">PEOPLE &amp; DECISIONS</p>
              <div className="arch-card"><span className="mini-avatar">PL</span><div><small>Product Lead</small><strong>범위와 우선순위</strong></div></div>
              <div className="arch-card"><span className="mini-avatar">DV</span><div><small>Developer</small><strong>구현과 코드 검토</strong></div></div>
              <div className="arch-card"><span className="mini-avatar">QA</span><div><small>QA / Operator</small><strong>검증과 출시 결정</strong></div></div>
            </div>
            <div className="arch-bridge"><span>명시적인 요청</span><i /><span>사람의 승인</span></div>
            <div className="arch-column worker-column">
              <p className="arch-label">ROLE-BASED WORKERS</p>
              <div className="worker-stack">
                <div className="stack-card product"><span>P</span><div><small>PRODUCT</small><strong>Product Worker</strong></div></div>
                <div className="stack-card engineering"><span>E</span><div><small>ENGINEERING</small><strong>Engineering Worker</strong></div></div>
                <div className="stack-card qa"><span>Q</span><div><small>QA · RELEASE</small><strong>QA·Release Worker</strong></div></div>
              </div>
            </div>
            <div className="arch-bridge"><span>허용된 접근</span><i /><span>상태와 결과</span></div>
            <div className="arch-column systems-column">
              <p className="arch-label">KNOWLEDGE &amp; SYSTEMS</p>
              <div className="system-card"><span>K</span><div><small>CONTEXT</small><strong>Runtime Knowledge</strong></div></div>
              <div className="system-card"><span>T</span><div><small>CAPABILITY</small><strong>Approved Tools</strong></div></div>
              <div className="system-card"><span>R</span><div><small>READBACK</small><strong>Status &amp; Evidence</strong></div></div>
            </div>
          </div>
          <div className="operations-rail">
            <div><small>INVENTORY · DESIRED STATE</small><strong>Worker Registry</strong></div>
            <span aria-hidden="true">↔</span>
            <div><small>SOURCE · REVIEW · BUILD</small><strong>GitLab / CI</strong></div>
            <span aria-hidden="true">↔</span>
            <div><small>APPROVED APPLY</small><strong>Portainer 실행 경계</strong></div>
          </div>
          <p className="operations-note">운영 시스템은 Worker 실행과 분리됩니다. Registry 정보만으로 실제 배포를 의미하지 않으며, Source·검증 환경·특정 Worker의 배포 상태를 구분합니다.</p>
        </div>
      </section>

      <section className="knowledge-section section-shell" id="knowledge">
        <div className="knowledge-copy">
          <p className="eyebrow"><span /> RUNTIME KNOWLEDGE</p>
          <h2>팀의 지식을<br />매 요청의 맥락으로</h2>
          <p>제품 정보, 팀의 용어, 개발 원칙과 운영 절차를 승인된 지식으로 구성할 수 있습니다. 적용된 Worker는 현재 요청에 필요한 범위를 선택해 활용합니다.</p>
          <div className="knowledge-modes">
            <span><b>Core</b> 공통 필수 지식</span>
            <span><b>Auto</b> 관련 지식 선택</span>
            <span><b>Pinned</b> 지정 범위 고정</span>
            <span><b>Off</b> 지식 미사용</span>
          </div>
          <p className="knowledge-note"><span aria-hidden="true">✓</span> 검색과 미리보기만으로 지식이 변경되지는 않습니다.</p>
        </div>
        <div className="knowledge-visual" aria-label="승인된 지식이 Worker의 현재 요청에 연결되는 구조">
          <div className="knowledge-top"><span>CURRENT APPROVED KNOWLEDGE</span><small>revision-bound</small></div>
          <div className="knowledge-pages">
            <div><span>01</span><strong>제품과 서비스</strong><small>제품 설명 · 용어 · 정책</small></div>
            <div><span>02</span><strong>개발과 검증</strong><small>개발 원칙 · 테스트 기준</small></div>
            <div><span>03</span><strong>운영과 결정</strong><small>운영 절차 · 주요 결정</small></div>
          </div>
          <div className="knowledge-flow"><span>요청에 필요한 범위만 선택</span><i /></div>
          <div className="knowledge-output"><span className="knowledge-core">K</span><div><small>TURN CONTEXT</small><strong>Worker 실행 전 맥락</strong><p>사용한 지식의 provenance를 결과와 연결합니다.</p></div></div>
        </div>
      </section>

      <section className="trust-section section-shell" id="trust">
        <div className="section-heading center-heading">
          <p className="eyebrow"><span /> HUMAN-LED BY DESIGN</p>
          <h2>빠른 실행과 사람의 통제를<br />함께 설계했습니다</h2>
        </div>
        <div className="trust-grid">
          <article><span className="trust-icon"><i /><i /></span><small>01</small><h3>독립 요청</h3><p>Worker는 사람이 보낸 요청 하나를 정해진 범위에서 처리합니다.</p></article>
          <article><span className="trust-icon approval-icon"><i /><i /></span><small>02</small><h3>명시적인 승인</h3><p>중요한 변경과 추가 권한이 필요한 순간에는 사람의 확인을 요청합니다.</p></article>
          <article><span className="trust-icon boundary-icon"><i /><i /></span><small>03</small><h3>역할별 접근 범위</h3><p>지식, 도구와 작업 공간을 Worker의 역할과 책임에 맞게 구성합니다.</p></article>
          <article><span className="trust-icon result-icon"><i /><i /></span><small>04</small><h3>확인 가능한 결과</h3><p>적용된 기록 정책에 따라 작업 상태와 결과를 검토할 수 있도록 구성합니다.</p></article>
        </div>
        <div className="trust-statement">
          <span className="statement-mark">“</span>
          <p>Worker는 다른 Worker를 자동으로 지휘하거나<br />결과를 보고 다음 업무를 임의로 생성하지 않습니다.</p>
          <span>요청은 독립적으로 · 결정은 사람에게</span>
        </div>
      </section>

      <section className="adoption-section">
        <div className="section-shell adoption-layout">
          <div>
            <p className="eyebrow"><span /> ADOPTION PATH</p>
            <h2>작은 업무 하나에서 시작해<br />검증된 범위만 확장하세요</h2>
            <a className="text-link" href="#contact">우리 팀의 첫 Worker 설계하기 <span aria-hidden="true">↗</span></a>
          </div>
          <ol className="adoption-steps">
            <li><span>01</span><div><strong>업무 선택</strong><p>반복되는 업무 하나를 고릅니다.</p></div></li>
            <li><span>02</span><div><strong>역할 구성</strong><p>담당자와 역할별 Worker를 정합니다.</p></div></li>
            <li><span>03</span><div><strong>범위 설정</strong><p>참고 지식, 도구와 승인 지점을 정의합니다.</p></div></li>
            <li><span>04</span><div><strong>작게 검증</strong><p>분석·문서화 요청부터 품질을 확인합니다.</p></div></li>
            <li><span>05</span><div><strong>단계적 확대</strong><p>검증된 업무와 역할만 확장합니다.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> FAQ</p><h2>자주 묻는 질문</h2></div>
          <p>Worker Host의 역할과 사람의 책임, 실제 적용 범위를 명확하게 확인하세요.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.q}</strong><i aria-hidden="true" /></summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit orbit-one" aria-hidden="true" />
        <div className="contact-orbit orbit-two" aria-hidden="true" />
        <div className="section-shell contact-inner">
          <p className="eyebrow"><span /> START WITH ONE WORKER</p>
          <h2>팀의 첫 번째 역할별 Worker를<br />설계해 보세요.</h2>
          <p>반복되는 업무, 필요한 지식과 사람의 승인 지점을 함께 정리하면 작은 범위에서 Worker Host 적용을 시작할 수 있습니다.</p>
          <div className="contact-actions">
            <a className="button button-light" href="#top">도입 상담 준비하기 <span aria-hidden="true">↗</span></a>
            <span>상담 연결 채널은 정식 공개 시 제공됩니다.</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top" aria-label="Worker Host 홈">
            <span className="brand-mark" aria-hidden="true">W</span>
            <span><strong>WORKER HOST</strong><small>DREAMLABS</small></span>
          </a>
          <p>역할별 AI Worker로 팀의 실행력을 확장하는 로컬 AI 실행 기반.</p>
          <nav aria-label="푸터 메뉴"><a href="#value">제품 가치</a><a href="#roles">역할별 Worker</a><a href="#trust">신뢰 설계</a><a href="#contact">도입 문의</a></nav>
        </div>
        <div className="footer-legal">
          <p>소개된 기능의 실제 제공 범위는 Worker별 적용 버전과 운영 상태에 따라 다를 수 있습니다. Source-only, 검증 환경과 특정 Worker 배포 상태는 구분해 확인합니다.</p>
          <span>Prototype · Baseline 078680e</span>
        </div>
      </footer>
    </main>
  );
}
