"use client";

import { useId, useRef, useState } from "react";

const memoFields = [
  {
    key: "task",
    label: "먼저 확인할 업무",
    placeholder: "예: 매주 판매·매입 자료를 모아 수익성 비교표 만들기",
  },
  {
    key: "tools",
    label: "현재 쓰는 AI와 도구",
    placeholder: "예: 챗봇, 스프레드시트, 사내 문서함 / 없다면 ‘없음’",
  },
  {
    key: "roles",
    label: "참여 역할",
    placeholder: "예: 자료를 준비하는 운영 담당, 결과를 검토하는 팀장",
  },
  {
    key: "actions",
    label: "허용할 작업과 멈출 지점",
    placeholder: "예: 자료 읽기·초안 작성까지 / 외부 발송과 원본 변경은 제외",
  },
  {
    key: "approval",
    label: "최종 승인 역할",
    placeholder: "예: 운영 책임자가 검토 후 승인 (이름 대신 역할만)",
  },
  {
    key: "improvement",
    label: "측정하고 싶은 개선",
    placeholder: "예: 준비 시간 주 3시간 → 1시간 / 누락 항목 수 비교",
  },
] as const;

type MemoField = (typeof memoFields)[number]["key"];
type MemoValues = Record<MemoField, string>;

export default function ConsultationPrep() {
  const id = useId();
  const previewRef = useRef<HTMLTextAreaElement>(null);
  const [values, setValues] = useState<MemoValues>({
    task: "", tools: "", roles: "", actions: "", approval: "", improvement: "",
  });
  const [status, setStatus] = useState("");
  const [copying, setCopying] = useState(false);

  const memo = [
    "Worker Host · 도입 상담 준비 메모",
    "상담 접수가 아닌, 팀 내부 검토용 메모입니다.",
    "",
    ...memoFields.flatMap(({ key, label }) => [
      `${label}:`,
      values[key].trim() || "(아직 정하지 않음)",
      "",
    ]),
    "다음 확인: 같은 업무·같은 조건으로 현재 도구와 비교하고, 관리자 준비 시간도 함께 측정합니다.",
    "이 메모 작성은 작업 실행이나 권한 부여를 의미하지 않습니다.",
  ].join("\n");

  async function copyMemo() {
    setStatus("");
    setCopying(true);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(memo);
      setStatus("메모를 클립보드에 복사했습니다. 공유 전 내용을 다시 확인하세요.");
    } catch {
      previewRef.current?.focus();
      previewRef.current?.select();
      setStatus("자동 복사를 사용할 수 없습니다. 선택된 메모를 직접 복사하거나 .txt로 내려받으세요.");
    } finally {
      setCopying(false);
    }
  }

  function downloadMemo() {
    setStatus("");
    try {
      const blob = new Blob(["\uFEFF", memo.replace(/\n/g, "\r\n")], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "worker-host-consultation-memo.txt";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStatus(".txt 다운로드를 요청했습니다. 브라우저의 다운로드 목록을 확인하세요.");
    } catch {
      setStatus("파일을 내려받지 못했습니다. 메모 복사 또는 미리보기의 직접 복사를 이용하세요.");
    }
  }

  return (
    <details className="consultation-prep">
      <summary className="consultation-summary">
        <span>
          <strong>도입 상담 준비 메모 만들기</strong>
          <small>우리 팀의 한 업무부터 · 선택 입력 6가지</small>
        </span>
        <span className="consultation-toggle" aria-hidden="true">+</span>
      </summary>
      <div className="consultation-body">
        <p className="consultation-notice" id={`${id}-notice`}>
          <strong>접수·전송하지 않는 준비 도구입니다.</strong> 입력은 이 화면에서만 사용하며 서버 전송·업로드·자동 저장을 하지 않습니다. 새로고침하면 초기화됩니다. 이름·연락처는 필요하지 않으며, 개인정보·고객 원문·비밀번호는 적지 마세요.
        </p>
        <fieldset className="consultation-fields" aria-describedby={`${id}-notice`}>
          <legend>정해진 내용만 적어도 괜찮습니다. 모든 항목은 선택입니다.</legend>
          <div className="consultation-grid">
            {memoFields.map(({ key, label, placeholder }, index) => (
              <div className="consultation-field" key={key}>
                <label htmlFor={`${id}-${key}`}><span aria-hidden="true">0{index + 1}</span>{label}</label>
                <textarea
                  id={`${id}-${key}`}
                  value={values[key]}
                  onChange={(event) => {
                    const value = event.target.value;
                    setValues((previous) => ({ ...previous, [key]: value }));
                    setStatus("");
                  }}
                  placeholder={placeholder}
                  rows={3}
                  maxLength={1500}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            ))}
          </div>
        </fieldset>
        <div className="consultation-preview">
          <label htmlFor={`${id}-preview`}>준비 메모 미리보기</label>
          <textarea id={`${id}-preview`} ref={previewRef} value={memo} readOnly rows={5} spellCheck={false} />
        </div>
        <div className="consultation-actions">
          <button type="button" className="consultation-copy" onClick={copyMemo} disabled={copying}>
            {copying ? "복사 중…" : "메모 복사"}
          </button>
          <button type="button" className="consultation-download" onClick={downloadMemo}>.txt 내려받기</button>
        </div>
        <p className="consultation-status" role="status" aria-atomic="true">{status}</p>
        <p className="consultation-footnote">복사·다운로드한 파일은 직접 관리해 주세요. 상담 채널은 정식 공개 시 안내하며, 여기서 상담이 신청되거나 권한이 부여되지는 않습니다.</p>
      </div>
    </details>
  );
}
