import type {
  ContentCycleDefinition,
  UseCaseDefinition,
} from "../use-cases/cases";

type CaseCycleBoardProps = {
  item: UseCaseDefinition;
  cycle: ContentCycleDefinition;
};

export default function CaseCycleBoard({ item, cycle }: CaseCycleBoardProps) {
  const titleId = `${item.slug}-cycle-title`;

  return (
    <section className="case-hero-board case-cycle-board" aria-labelledby={titleId}>
      <div className="scenario-label">
        <span>사람 중심 콘텐츠 학습 순환</span>
        <small>가상 적용 시나리오 · 실제 고객 사례 아님 · 기능 상태는 환경별 별도 검증</small>
      </div>

      <div className="case-cycle-heading">
        <small>PLAN → PREPARE → REVIEW → LEARN</small>
        <h2 id={titleId}>한 편이 다음 편의 출발점이 되는 과정</h2>
        <p>모든 연결은 콘텐츠 책임자가 승인한 범위와 인증된 독립 요청을 거칩니다.</p>
      </div>

      <div className="case-cycle-map" role="group" aria-label="콘텐츠 기획부터 피드백 반영까지의 사람 중심 순환 구조">
        <div className="case-cycle-center">
          <small>{cycle.center.label}</small>
          <strong>{cycle.center.title}</strong>
          <p>{cycle.center.copy}</p>
        </div>
        <ol className="case-cycle-list">
          {cycle.stages.map((stage) => (
            <li className="case-cycle-step" key={stage.number}>
              <div><span>{stage.number}</span><small>{stage.phase}</small></div>
              <strong>{stage.title}</strong>
              <p><b>{stage.person}</b><i aria-hidden="true">→</i>{stage.worker}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="case-cycle-return" aria-hidden="true">
        <i />
        <span>사람이 반영을 결정한 뒤 다음 기획을 새로 요청</span>
        <b>↺</b>
      </div>

      <div className="case-cycle-request">
        <small>INDEPENDENT REQUEST</small>
        <blockquote>“{item.requestExample}”</blockquote>
        <div>
          <span><small>WORKER RESULT</small><strong>{item.resultSummary}</strong></span>
          <span><small>HUMAN REVIEW · DECISION</small><strong>{item.decisionSummary}</strong></span>
        </div>
      </div>

      <div className="case-cycle-status">
        <span>{cycle.statusLabel}</span>
        <p>{cycle.statusCopy}</p>
      </div>
    </section>
  );
}
