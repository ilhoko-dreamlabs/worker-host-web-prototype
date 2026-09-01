"use client";

import { useState } from "react";
import {
  WORKER_HOST_VIDEO_REFERENCE_SHA,
  type UseCaseDefinition,
} from "../use-cases/cases";
import { WORKER_HOST_BASELINE_SHA } from "../product-reference";

type CaseVideoBoardProps = {
  item: UseCaseDefinition;
};

const pinnedVideoAssetSha = "482b9941a0e266c4aa13ec769c7663fe2e923a7d";
const pinnedVideoAssetRoot =
  `https://cdn.jsdelivr.net/gh/ilhoko-dreamlabs/worker-host-web-prototype@${pinnedVideoAssetSha}/public/media/use-cases`;

export default function CaseVideoBoard({ item }: CaseVideoBoardProps) {
  const [activeCueIndex, setActiveCueIndex] = useState(-1);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const mediaRoot = `${basePath}/media/use-cases/${item.slug}`;
  const videoUrl = `${pinnedVideoAssetRoot}/${item.slug}/scenario-v6.mp4`;
  const titleId = `${item.slug}-video-title`;
  const noteId = `${item.slug}-video-note`;
  const videoCues = item.videoCues ?? [];
  const activeCue = activeCueIndex >= 0 ? videoCues[activeCueIndex] : undefined;
  const displayCue = activeCue ?? videoCues[0];

  const syncCue = (time: number) => {
    const nextIndex = videoCues.findIndex((cue) => time >= cue.start && time < cue.end);
    setActiveCueIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex);
  };

  return (
    <section className="case-hero-board case-video-board" aria-labelledby={titleId}>
      <div className="scenario-label">
        <span>15초 활용 시나리오</span>
        <small>연출된 가상 사례 · 실제 고객 사례 아님 · 기능 상태는 환경별 별도 검증</small>
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
              onTimeUpdate={(event) => syncCue(event.currentTarget.currentTime)}
              onSeeked={(event) => syncCue(event.currentTarget.currentTime)}
              onLoadedMetadata={(event) => syncCue(event.currentTarget.currentTime)}
              onEnded={() => setActiveCueIndex(-1)}
            >
              <source src={videoUrl} type="video/mp4" />
              <track
                kind="captions"
                src={`${mediaRoot}/captions-v6.ko.vtt`}
                srcLang="ko"
                label="한국어 · Higgsfield 원본 내레이션"
              />
              브라우저에서 영상을 재생할 수 없습니다.
            </video>
            {displayCue ? (
              <div
                className={`case-video-cue tone-${displayCue.tone}${activeCue ? " is-active" : ""}`}
                aria-hidden="true"
              >
                <div className="case-video-cue-head">
                  <span className="case-video-cue-stage">{displayCue.stage}</span>
                  <span className="case-video-cue-worker">WORKER HOST</span>
                </div>
                <p>{displayCue.lines[0]}<br /><em>{displayCue.lines[1]}</em></p>
              </div>
            ) : null}
          </div>
          <figcaption id={noteId}>화면 메시지와 Higgsfield 원본 내레이션으로 보는 Worker 활용 흐름</figcaption>
        </figure>

        <div className="case-video-summary">
          <div className="case-video-heading">
            <span aria-hidden="true">00:15</span>
            <div>
              <strong id={titleId}>{item.navLabel}, 영상으로 먼저 보기</strong>
              <p>재생하면 장면에 맞춘 Higgsfield 원본 설명을 들을 수 있습니다.</p>
            </div>
          </div>

          <div className="case-request-card">
            <small>AUTHENTICATED USER · INDEPENDENT REQUEST</small>
            <blockquote>“{item.requestExample}”</blockquote>
          </div>
          <div className="case-board-arrow" aria-hidden="true"><span>Worker 처리</span><i /></div>
          <div className="case-result-card">
            <div><small>REVIEWABLE RESULT</small><strong>{item.resultSummary}</strong></div>
            <div><small>HUMAN REVIEW · DECISION</small><strong>{item.decisionSummary}</strong></div>
          </div>
          <p className="case-board-note"><span aria-hidden="true">●</span> Worker 간 협업 흐름은 사용자가 승인한 외부 연계가 인증된 독립 요청을 제출할 때만 연결되며, 담당자가 다음 단계와 업무 확장 여부를 결정합니다.</p>

          <details className="case-video-transcript">
            <summary>영상 내용·내레이션 전문</summary>
            <ol>
              {item.videoNarration.map((line) => <li key={line}>{line}</li>)}
            </ol>
          </details>
        </div>
      </div>

      <p className="case-video-reference">
        Prototype · 영상 제작 기준 repository commit: <code>{WORKER_HOST_VIDEO_REFERENCE_SHA}</code><br />
        현재 제품 설명 기준 repository commit: <code>{WORKER_HOST_BASELINE_SHA}</code>
      </p>
    </section>
  );
}
