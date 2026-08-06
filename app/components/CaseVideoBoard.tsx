import {
  WORKER_HOST_VIDEO_REFERENCE_SHA,
  type UseCaseDefinition,
} from "../use-cases/cases";

type CaseVideoBoardProps = {
  item: UseCaseDefinition;
};

const pinnedVideoAssetSha = "f52406b8278dfc21e8e6db1c9a2bb556d4dbb371";
const pinnedVideoAssetRoot =
  `https://cdn.jsdelivr.net/gh/ilhoko-dreamlabs/worker-host-web-prototype@${pinnedVideoAssetSha}/public/media/use-cases`;

export default function CaseVideoBoard({ item }: CaseVideoBoardProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const mediaRoot = `${basePath}/media/use-cases/${item.slug}`;
  const videoUrl = `${pinnedVideoAssetRoot}/${item.slug}/scenario-v5.mp4`;
  const titleId = `${item.slug}-video-title`;
  const noteId = `${item.slug}-video-note`;

  return (
    <section className="case-hero-board case-video-board" aria-labelledby={titleId}>
      <div className="scenario-label">
        <span>15초 활용 시나리오</span>
        <small>연출된 가상 사례 · 실제 고객 사례 아님</small>
      </div>

      <div className="case-video-board-layout">
        <figure className="case-video-figure">
          <div className="case-video-frame">
            <video
              controls
              playsInline
              preload="metadata"
              width={720}
              height={1280}
              poster={`${mediaRoot}/poster.jpg`}
              aria-labelledby={titleId}
              aria-describedby={noteId}
            >
              <source src={videoUrl} type="video/mp4" />
              <track
                default
                kind="captions"
                src={`${mediaRoot}/captions.ko.vtt`}
                srcLang="ko"
                label="한국어 내레이션 자막"
              />
              브라우저에서 영상을 재생할 수 없습니다.
            </video>
          </div>
          <figcaption id={noteId}>화면 메시지와 한국어 내레이션으로 보는 Worker 활용 흐름</figcaption>
        </figure>

        <div className="case-video-summary">
          <div className="case-video-heading">
            <span aria-hidden="true">00:15</span>
            <div>
              <strong id={titleId}>{item.navLabel}, 영상으로 먼저 보기</strong>
              <p>재생하면 장면에 맞춘 설명을 들을 수 있습니다.</p>
            </div>
          </div>

          <div className="case-request-card">
            <small>AUTHENTICATED USER · INDEPENDENT REQUEST</small>
            <blockquote>“{item.requestExample}”</blockquote>
          </div>
          <div className="case-board-arrow" aria-hidden="true"><span>Worker 처리</span><i /></div>
          <div className="case-result-card">
            <div><small>REVIEWABLE RESULT</small><strong>{item.resultSummary}</strong></div>
            <div><small>HUMAN DECISION</small><strong>{item.decisionSummary}</strong></div>
          </div>
          <p className="case-board-note"><span aria-hidden="true">●</span> Worker 간 자동 지휘 없이, 담당자가 다음 단계를 결정합니다.</p>

          <details className="case-video-transcript">
            <summary>영상 내용·내레이션 전문</summary>
            <ol>
              {item.videoNarration.map((line) => <li key={line}>{line}</li>)}
            </ol>
          </details>
        </div>
      </div>

      <p className="case-video-reference">
        Prototype · 영상 콘텐츠 기준 repository commit: <code>{WORKER_HOST_VIDEO_REFERENCE_SHA}</code>
      </p>
    </section>
  );
}
