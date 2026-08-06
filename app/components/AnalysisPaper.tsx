import type { AnalysisPreviewDefinition } from "../use-cases/cases";

type AnalysisPaperProps = {
  preview: AnalysisPreviewDefinition;
};

export default function AnalysisPaper({ preview }: AnalysisPaperProps) {
  return (
    <section className="analysis-preview-section section-shell" id="sample-analysis" aria-labelledby="analysis-preview-title">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow"><span /> REVIEWABLE OUTPUT</p>
          <h2 id="analysis-preview-title">결과보다 먼저,<br />근거와 기준이 보이게</h2>
        </div>
        <p>대표가 숫자를 빠르게 읽고 담당자가 다시 검증할 수 있도록 기간, 산식, 누락과 확인사항을 한 화면에 함께 표시합니다.</p>
      </div>

      <article className="analysis-paper">
        <header className="analysis-paper-header">
          <div>
            <span>{preview.label}</span>
            <h3>{preview.title}</h3>
          </div>
          <p>{preview.period}</p>
        </header>

        <dl className="analysis-kpis">
          {preview.kpis.map((kpi) => (
            <div className={`analysis-kpi tone-${kpi.tone}`} key={kpi.label}>
              <dt>{kpi.label}</dt>
              <dd className="analysis-kpi-value">{kpi.value}</dd>
              <dd className="analysis-kpi-note">{kpi.note}</dd>
            </div>
          ))}
        </dl>

        <div className="analysis-paper-grid">
          <section className="analysis-panel analysis-account-panel" aria-labelledby="analysis-account-title">
            <div className="analysis-panel-heading">
              <div><small>SALES MIX</small><h4 id="analysis-account-title">거래처별 판매량 비교</h4></div>
              <span>수량 기준</span>
            </div>
            <ul className="analysis-account-list">
              {preview.accounts.map((account) => (
                <li key={account.name}>
                  <div><strong>{account.name}</strong><span>{account.change}</span></div>
                  <i aria-hidden="true"><b style={{ width: `${account.share}%` }} /></i>
                </li>
              ))}
            </ul>
          </section>

          <section className="analysis-panel analysis-formula-panel" aria-labelledby="analysis-formula-title">
            <div className="analysis-panel-heading">
              <div><small>FORMULA</small><h4 id="analysis-formula-title">{preview.formula.label}</h4></div>
              <span>사전 합의</span>
            </div>
            <strong>{preview.formula.value}</strong>
            <p>{preview.formula.note}</p>
          </section>

          <figure className="analysis-panel analysis-promotion-panel" aria-labelledby="analysis-promotion-title">
            <div className="analysis-panel-heading">
              <div><small>OBSERVED CHANGE</small><h4 id="analysis-promotion-title">프로모션 전후 판매량</h4></div>
              <span>{preview.promotion.change}</span>
            </div>
            <div className="promotion-bars" aria-hidden="true">
              <div><span>전</span><i><b style={{ width: `${preview.promotion.before}%` }} /></i></div>
              <div><span>후</span><i><b style={{ width: `${preview.promotion.after}%` }} /></i></div>
            </div>
            <figcaption>{preview.promotion.note}</figcaption>
          </figure>

          <aside className="analysis-panel analysis-check-panel" aria-labelledby="analysis-check-title">
            <div className="analysis-panel-heading">
              <div><small>HUMAN REVIEW</small><h4 id="analysis-check-title">확인 필요사항</h4></div>
              <span>{preview.checks.length}건</span>
            </div>
            <ul>
              {preview.checks.map((check) => <li key={check}>{check}</li>)}
            </ul>
          </aside>
        </div>

        <footer className="analysis-paper-footer">
          <span>가상 데이터</span>
          <p>{preview.disclaimer}</p>
        </footer>
      </article>
    </section>
  );
}
