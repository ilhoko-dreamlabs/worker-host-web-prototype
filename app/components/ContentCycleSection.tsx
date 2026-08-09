import type { ContentCycleDefinition } from "../use-cases/cases";

type ContentCycleSectionProps = {
  cycle: ContentCycleDefinition;
  guardrail: string;
};

export default function ContentCycleSection({ cycle, guardrail }: ContentCycleSectionProps) {
  return (
    <>
      <section className="content-cycle-section">
        <div className="section-shell">
          <div className="section-heading center-heading light-heading">
            <p className="eyebrow"><span /> HUMAN-LED CONTENT LOOP</p>
            <h2>역할은 나누고,<br />결과는 사람이 이어갑니다.</h2>
            <p>각 Worker는 자신에게 전달된 요청 하나를 처리합니다. 다음 단계는 앞선 결과를 검토한 사람이 별도로 요청합니다.</p>
          </div>

          <div className="content-cycle-role-grid">
            {cycle.stages.map((stage) => (
              <article className="content-cycle-role" key={stage.number}>
                <header>
                  <span>{stage.number}</span>
                  <div><small>{stage.phase}</small><h3>{stage.title}</h3></div>
                </header>
                <div className="content-cycle-route" aria-label={`${stage.person}이 ${stage.worker}에 요청`}>
                  <span><small>ROLE OWNER</small><strong>{stage.person}</strong></span>
                  <i aria-hidden="true">→</i>
                  <span><small>ROLE-BASED WORKER</small><strong>{stage.worker}</strong></span>
                </div>
                <blockquote>“{stage.request}”</blockquote>
                <dl>
                  <div><dt>검토 가능한 결과</dt><dd>{stage.result}</dd></div>
                  <div><dt>사람의 결정</dt><dd>{stage.decision}</dd></div>
                </dl>
              </article>
            ))}
          </div>

          <div className="content-registry-rail">
            <div className="content-registry-heading">
              <small>WORKER REGISTRY · 구성 예시</small>
              <strong>업무 단계에 맞는 역할별 Worker 선택</strong>
              <p>Registry는 역할 후보와 상태를 구분하는 참조 지점이며 Worker 간 자동 지휘를 의미하지 않습니다.</p>
            </div>
            <ul>
              {cycle.registry.map((worker) => (
                <li key={worker.title}><span>{worker.mark}</span><div><strong>{worker.title}</strong><small>{worker.copy}</small></div></li>
              ))}
            </ul>
          </div>

          <p className="case-guardrail"><span aria-hidden="true">↳</span>{guardrail}</p>
        </div>
      </section>

      <section className="content-feedback-section">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> FEEDBACK → NEXT BRIEF</p><h2>{cycle.feedback.title}</h2></div>
            <p>{cycle.feedback.label}</p>
          </div>

          <div className="content-feedback-grid">
            <article className="feedback-source-card">
              <small>01 · 공개된 첫 콘텐츠</small>
              <h3>{cycle.feedback.firstContentTitle}</h3>
              <p>{cycle.feedback.firstContentMessage}</p>
              <div className="feedback-signal-list">
                <small>사람이 선택해 제공한 피드백</small>
                {cycle.feedback.signals.map((signal) => <blockquote key={signal}>“{signal}”</blockquote>)}
              </div>
            </article>

            <article className="feedback-decision-card">
              <small>02 · HUMAN DECISION</small>
              <h3>무엇을 반영할지<br />사람이 선택합니다.</h3>
              <ul>
                {cycle.feedback.decisions.map((decision) => (
                  <li className={`tone-${decision.tone}`} key={decision.status}>
                    <span>{decision.status}</span><p>{decision.copy}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="feedback-next-card">
              <small>03 · 사람이 만든 다음 독립 요청</small>
              <blockquote>“{cycle.feedback.nextRequest}”</blockquote>
              <ul>
                {cycle.feedback.nextChanges.map((change) => <li key={change}><span aria-hidden="true">✓</span>{change}</li>)}
              </ul>
            </article>
          </div>

          <p className="feedback-disclaimer"><span aria-hidden="true">●</span>{cycle.feedback.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
