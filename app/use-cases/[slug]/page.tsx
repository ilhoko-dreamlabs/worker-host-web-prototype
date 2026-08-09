import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnalysisPaper from "../../components/AnalysisPaper";
import CaseCycleBoard from "../../components/CaseCycleBoard";
import CaseFooter from "../../components/CaseFooter";
import CaseHeader from "../../components/CaseHeader";
import CaseVideoBoard from "../../components/CaseVideoBoard";
import ContentCycleSection from "../../components/ContentCycleSection";
import { getUseCase, useCases } from "../cases";

const publishedUrl = "https://ilhoko-dreamlabs.github.io/worker-host-web-prototype/";

type UseCasePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getUseCase(slug);

  if (!item) return {};

  const canonicalUrl = `${publishedUrl}use-cases/${item.slug}/`;
  const title = `${item.navLabel} 활용 시나리오 | Worker Host`;
  const socialImage = item.contentCycle
    ? { file: "og.png", width: 1731, height: 909, alt: "사람과 역할별 Worker가 연결되는 Worker Host 업무 구조" }
    : { file: "og-v3.png", width: 1729, height: 910, alt: "역할별 Worker와 사람 중심 업무 흐름을 보여주는 Worker Host 활용 시나리오" };

  return {
    title,
    description: item.shortDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description: item.shortDescription,
      type: "website",
      url: canonicalUrl,
      images: [{ url: `${publishedUrl}${socialImage.file}`, width: socialImage.width, height: socialImage.height, alt: socialImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.shortDescription,
      images: [`${publishedUrl}${socialImage.file}`],
    },
  };
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;
  const item = getUseCase(slug);

  if (!item) notFound();

  const relatedCases = useCases.filter((candidate) => candidate.slug !== item.slug).slice(0, 3);

  return (
    <main className={`case-page case-accent-${item.accent}`}>
      <CaseHeader />

      <section className="case-hero section-shell" id="top">
        <div className="case-hero-copy">
          <p className="eyebrow"><span /> {item.eyebrow}</p>
          <h1>{item.title[0]}<br /><em>{item.title[1]}</em></h1>
          <p className="case-lead">{item.lead}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#fit">{item.ctaLabel} <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="#scenarios">구체 사례 보기 <span aria-hidden="true">↗</span></a>
          </div>
          <p className="case-audience"><strong>이런 역할을 위해</strong><span>{item.audience}</span></p>
        </div>

        {item.contentCycle
          ? <CaseCycleBoard item={item} cycle={item.contentCycle} />
          : <CaseVideoBoard item={item} />}
      </section>

      <section className="case-principles" aria-label="시나리오 적용 원칙">
        <span>독립 요청</span><span>승인된 지식과 도구</span><span>검토 가능한 결과</span><span>사람의 최종 결정</span>
      </section>

      {item.analysisPreview ? <AnalysisPaper preview={item.analysisPreview} /> : null}

      <section className="case-problems section-shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> THE WORK TODAY</p><h2>이런 반복과 누락에서<br />시작합니다.</h2></div>
          <p>기술보다 먼저, 지금 업무에서 반복되는 입력과 검토 지점을 확인합니다.</p>
        </div>
        <div className="case-problem-grid">
          {item.painPoints.map((point, index) => (
            <article key={point.title}><span>0{index + 1}</span><h3>{point.title}</h3><p>{point.copy}</p></article>
          ))}
        </div>
      </section>

      {item.contentCycle ? (
        <ContentCycleSection cycle={item.contentCycle} guardrail={item.guardrail} />
      ) : (
        <section className="case-flow-section">
          <div className="section-shell">
            <div className="section-heading center-heading light-heading">
              <p className="eyebrow"><span /> HUMAN-LED FLOW</p>
              <h2>요청은 한 번에 하나씩,<br />결정은 사람에게.</h2>
            </div>
            <div className="case-flow-grid">
              {item.flow.map((step, index) => (
                <article key={step.label}>
                  <small>{step.label}</small><span className="case-flow-mark" aria-hidden="true">{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p>
                  {index < item.flow.length - 1 ? <i aria-hidden="true" /> : null}
                </article>
              ))}
            </div>
            <p className="case-guardrail"><span aria-hidden="true">↳</span>{item.guardrail}</p>
          </div>
        </section>
      )}

      <section className="case-modes section-shell">
        <div className="section-heading split-heading">
          {item.contentCycle ? (
            <>
              <div><p className="eyebrow"><span /> ROLE-BASED WORKERS</p><h2>단계에 따라<br />준비하는 결과가 다릅니다.</h2></div>
              <p>한 명의 만능 AI가 아니라, 기획·제작 준비·피드백 정리에 필요한 맥락과 결과를 역할별로 구분합니다.</p>
            </>
          ) : (
            <>
              <div><p className="eyebrow"><span /> STARTING POINTS</p><h2>업무 형식에 따라<br />시작점이 달라집니다.</h2></div>
              <p>정의된 기준이 많을수록 첫 파일럿의 결과를 측정하기 쉽습니다. 기준이 없다면 구조 후보부터 사람이 함께 확정합니다.</p>
            </>
          )}
        </div>
        <div className="case-mode-grid">
          {item.modes.map((mode, index) => (
            <article key={mode.label}><div><small>{mode.label}</small><span>0{index + 1}</span></div><h3>{mode.title}</h3><p>{mode.copy}</p><strong>{mode.result}</strong></article>
          ))}
        </div>
      </section>

      <section className="case-scenarios" id="scenarios">
        <div className="section-shell">
          <div className="section-heading split-heading light-heading">
            <div><p className="eyebrow"><span /> EXAMPLE REQUESTS</p><h2>업무 장면으로 보는<br />{item.scenarios.length}가지 적용 예시</h2></div>
            <p>각 예시는 적용 가능성을 설명하기 위한 시나리오이며 실제 제공 범위는 환경별 검증이 필요합니다.</p>
          </div>
          <div className={`scenario-detail-grid ${item.scenarios.length === 4 ? "is-four" : ""}`}>
            {item.scenarios.map((scenario) => (
              <article key={scenario.number}>
                <div className="scenario-card-head"><span>{scenario.number}</span><h3>{scenario.title}</h3></div>
                <blockquote>“{scenario.request}”</blockquote>
                <dl>
                  <div><dt>승인된 입력</dt><dd>{scenario.inputs}</dd></div>
                  <div><dt>Worker 결과</dt><dd>{scenario.result}</dd></div>
                  <div><dt>사람의 결정</dt><dd>{scenario.decision}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-systems section-shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> CONNECTED CONTEXT</p><h2>업무에 필요한 자료와<br />시스템만 연결합니다.</h2></div>
          <p>접근 범위와 공식 변경 권한은 역할과 적용 환경에 맞춰 별도로 설계·검증합니다.</p>
        </div>
        <div className="case-system-grid">
          {item.systems.map((system) => (
            <article key={system.title}><span aria-hidden="true">{system.mark}</span><div><h3>{system.title}</h3><p>{system.copy}</p></div></article>
          ))}
        </div>
        <div className="case-status-note"><strong>상태 구분</strong><p>화면의 연결은 목표 시나리오입니다. Source-only / Deployed / Blocked 상태와 외부 시스템 연계 여부를 구분해 확인합니다.</p></div>
      </section>

      <section className="case-fit" id="fit">
        <div className="section-shell case-fit-layout">
          <div>
            <p className="eyebrow"><span /> PILOT CHECK</p>
            <h2>첫 Worker 후보인지<br />{item.checklist.length}가지로 확인하세요.</h2>
            <p>모든 업무를 한 번에 바꾸지 않고, 입력과 검토 기준이 보이는 작은 업무부터 시작합니다.</p>
          </div>
          <ul>
            {item.checklist.map((question, index) => <li key={question}><span>{index + 1}</span><strong>{question}</strong></li>)}
          </ul>
        </div>
      </section>

      <section className="related-cases section-shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span /> MORE SCENARIOS</p><h2>다른 역할의 적용 방식도<br />확인해 보세요.</h2></div>
          <p>같은 Worker Host 기반을 업무별 입력, 지식, 도구와 사람의 책임 구조에 맞춰 구성합니다.</p>
        </div>
        <div className="related-case-grid">
          {relatedCases.map((related) => (
            <Link className={`related-case-card accent-${related.accent}`} href={`/use-cases/${related.slug}`} key={related.slug}>
              <small>활용 시나리오</small><h3>{related.navLabel}</h3><p>{related.shortDescription}</p><span>페이지 보기 ↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="case-cta" id="contact">
        <div className="section-shell">
          <p className="eyebrow"><span /> START WITH ONE WORKER</p>
          <h2>{item.ctaTitle}</h2>
          <p>{item.ctaCopy}</p>
          <div className="contact-actions"><a className="button button-light" href="#fit">{item.ctaLabel} <span aria-hidden="true">↑</span></a><span>상담 연결 채널은 정식 공개 시 제공됩니다.</span></div>
        </div>
      </section>

      <CaseFooter />
    </main>
  );
}
