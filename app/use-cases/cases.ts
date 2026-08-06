export type UseCaseAccent = "blue" | "mint" | "coral";

export type UseCaseDefinition = {
  slug: string;
  navLabel: string;
  shortDescription: string;
  accent: UseCaseAccent;
  eyebrow: string;
  title: [string, string];
  lead: string;
  audience: string;
  requestExample: string;
  resultSummary: string;
  decisionSummary: string;
  painPoints: Array<{ title: string; copy: string }>;
  flow: Array<{ label: string; title: string; copy: string }>;
  modes: Array<{ label: string; title: string; copy: string; result: string }>;
  scenarios: Array<{
    number: string;
    title: string;
    request: string;
    inputs: string;
    result: string;
    decision: string;
  }>;
  systems: Array<{ mark: string; title: string; copy: string }>;
  guardrail: string;
  checklist: string[];
  ctaTitle: string;
  ctaCopy: string;
  ctaLabel: string;
};

export const useCases: UseCaseDefinition[] = [
  {
    slug: "institution-documents",
    navLabel: "기관 문서업무",
    shortDescription: "서식·규정·업무자료를 검토 가능한 문서 초안과 확인 항목으로 정리",
    accent: "blue",
    eyebrow: "활용 시나리오 · 기관 문서업무",
    title: ["정해진 서식은 기준에 맞게,", "서식이 없는 문서는 구조부터."],
    lead: "승인된 서식과 규정, 참고자료를 바탕으로 문서 초안과 확인할 항목을 준비합니다. 담당자는 반복 작성보다 판단과 최종 승인에 집중합니다.",
    audience: "기관 담당자 · 부서 책임자 · 업무혁신 담당자",
    requestExample: "현행 규정과 검토 메모를 반영해 점검보고서 초안을 준비해 줘.",
    resultSummary: "보고서 초안 · 누락 후보 · 참고 근거",
    decisionSummary: "사실 확인 · 공식 문구 · 등록 승인",
    painPoints: [
      { title: "자료를 찾는 시간이 깁니다", copy: "서식, 규정과 이전 문서를 찾고 대조하는 데 작성보다 많은 시간이 들 수 있습니다." },
      { title: "취합 과정에서 빠집니다", copy: "여러 부서의 자료를 옮겨 적는 동안 수치와 근거의 누락·불일치가 생깁니다." },
      { title: "서식이 없으면 품질이 달라집니다", copy: "자유 형식 요청은 담당자마다 문서 구조와 검토 기준이 달라지기 쉽습니다." },
    ],
    flow: [
      { label: "01 · PERSON", title: "담당자의 독립 요청", copy: "원하는 결과, 대상 서식과 검토 범위를 지정합니다." },
      { label: "02 · CONTEXT", title: "승인된 자료 확인", copy: "서식, 규정과 참고자료 중 현재 요청에 필요한 범위를 사용합니다." },
      { label: "03 · WORKER", title: "초안과 확인 항목 준비", copy: "항목별 내용을 정리하고 누락·불확실 후보를 표시합니다." },
      { label: "04 · DECISION", title: "사람의 검토와 승인", copy: "담당자가 사실과 표현을 확정한 뒤 공식 반영을 결정합니다." },
    ],
    modes: [
      { label: "DEFINED", title: "정형 서식", copy: "항목과 승인 기준이 이미 정해진 신청서·점검표·정기 보고서", result: "항목별 초안 · 누락 후보" },
      { label: "HYBRID", title: "혼합형 서식", copy: "고정 항목과 서술형 내용을 함께 요구하는 사업·성과 보고", result: "자료 매핑 · 서술 초안 · 근거" },
      { label: "OPEN", title: "비정형 문서", copy: "회의 메모·자유 형식 요청처럼 결과 구조가 아직 정해지지 않은 업무", result: "구조 후보 · 확인 질문 · 초안" },
    ],
    scenarios: [
      { number: "01", title: "정기 사업보고", request: "이번 분기 실적자료를 지정 보고서 구조로 정리해 줘.", inputs: "보고 서식 · 부서별 실적 · 운영 기준", result: "항목별 초안 · 확인 필요 수치 · 출처 목록", decision: "책임자가 수치와 공식 표현을 승인" },
      { number: "02", title: "신청·접수 문서 확인", request: "제출 문서가 검토 기준을 충족하는지 확인 항목을 정리해 줘.", inputs: "접수 문서 · 제출 기준 · 관련 규정", result: "누락 후보 · 추가 확인사항 · 근거 위치", decision: "담당자가 적합 여부와 보완 요청을 판단" },
      { number: "03", title: "회의·점검 결과 정리", request: "메모와 첨부자료를 쟁점, 결정, 후속 조치로 구조화해 줘.", inputs: "회의 기록 · 첨부자료 · 기존 문서", result: "구조화 초안 · 미결 쟁점 · 참고 근거", decision: "담당자가 공식 기록과 후속 조치를 확정" },
    ],
    systems: [
      { mark: "F", title: "승인된 서식", copy: "현재 사용 중인 양식과 항목 정의" },
      { mark: "K", title: "규정과 참고자료", copy: "업무 기준·용어·기존 승인 문서" },
      { mark: "D", title: "문서 저장소", copy: "허용된 범위에서 찾고 참고할 자료" },
      { mark: "S", title: "업무시스템", copy: "공식 반영은 승인된 연계와 절차로 분리" },
    ],
    guardrail: "Worker가 기관의 공식 서식이나 행정적 판단을 임의로 결정하지 않습니다. 서식이 없다면 구조 후보를 제안하고, 담당자가 기준을 확정한 뒤 반복 업무로 확장합니다.",
    checklist: [
      "반복적으로 작성하거나 검토하는 문서인가?",
      "사용할 서식·규정·참고자료를 지정할 수 있는가?",
      "좋은 결과의 최소 기준을 설명할 수 있는가?",
      "결과를 검토하고 승인할 담당자가 정해져 있는가?",
    ],
    ctaTitle: "반복 작성은 Worker에게, 공식 판단은 담당자에게.",
    ctaCopy: "문서 한 종류와 담당자 한 명부터 시작해 초안 품질, 누락 항목과 검토 시간을 확인합니다.",
    ctaLabel: "문서업무 적용 가능성 검토하기",
  },
  {
    slug: "business-operations",
    navLabel: "기업 운영업무",
    shortDescription: "회의·요청·실적자료를 다음 행동이 보이는 업무 결과로 구조화",
    accent: "mint",
    eyebrow: "활용 시나리오 · 기업 운영업무",
    title: ["흩어진 운영정보를", "다음 행동이 보이는 결과로."],
    lead: "회의 메모, 업무 요청, 실적자료와 운영 기준을 목적에 맞게 정리합니다. 담당자는 자료 취합보다 우선순위와 실행 판단에 집중합니다.",
    audience: "사업운영 · 경영지원 · 팀 리더",
    requestExample: "이번 주 회의와 실적자료에서 결정할 사항과 위험을 정리해 줘.",
    resultSummary: "핵심 요약 · 실행 항목 · 확인 필요사항",
    decisionSummary: "우선순위 · 담당자 · 실행 승인",
    painPoints: [
      { title: "요청이 여러 채널에 남습니다", copy: "회의, 메일과 메신저의 요청사항이 서로 다른 곳에 흩어집니다." },
      { title: "보고 때마다 다시 모읍니다", copy: "주간·월간 보고를 위해 같은 자료를 반복해서 수집하고 정리합니다." },
      { title: "업무 맥락이 사람에게 묶입니다", copy: "운영 기준과 과거 결정이 담당자의 기억과 경험에 의존합니다." },
    ],
    flow: [
      { label: "01 · PERSON", title: "업무 책임자의 요청", copy: "이번 요청의 목적, 기간과 원하는 결과를 지정합니다." },
      { label: "02 · CONTEXT", title: "운영자료와 기준 확인", copy: "허용된 회의 기록, 실적자료와 운영 기준을 선택합니다." },
      { label: "03 · WORKER", title: "결정 준비 결과 생성", copy: "핵심 정보, 실행 후보와 추가 확인할 사항을 구조화합니다." },
      { label: "04 · DECISION", title: "책임자의 우선순위 결정", copy: "업무 지시, 담당자와 일정은 사람이 검토하고 확정합니다." },
    ],
    modes: [
      { label: "RECURRING", title: "지정 보고서", copy: "주간·월간 보고처럼 항목과 순서가 정해진 반복 업무", result: "보고 초안 · 변동사항 · 위험 후보" },
      { label: "HYBRID", title: "혼합형 운영업무", copy: "수치·목록·설명형 판단 근거가 함께 필요한 업무", result: "수치 정리 · 서술 초안 · 확인 항목" },
      { label: "AD HOC", title: "자유형 요청", copy: "회의나 긴급 이슈처럼 상황에 따라 결과 구조가 달라지는 업무", result: "요약 · 쟁점 · 다음 행동 후보" },
    ],
    scenarios: [
      { number: "01", title: "주간 운영보고", request: "이번 주 실적과 이슈를 운영보고 구조로 준비해 줘.", inputs: "실적자료 · 업무 기록 · 보고 형식", result: "주요 실적 · 변동사항 · 위험·확인 후보", decision: "리더가 우선순위와 공식 보고 내용을 확정" },
      { number: "02", title: "회의 후속 조치", request: "회의 기록에서 결정사항과 미결 쟁점을 분리해 줘.", inputs: "회의 메모 · 이전 결정 · 업무 기준", result: "결정사항 · 담당·기한 후보 · 미결 쟁점", decision: "책임자가 실제 담당자와 일정을 지정" },
      { number: "03", title: "반복 요청 검토", request: "지원 요청을 검토 기준과 비교해 확인할 내용을 정리해 줘.", inputs: "요청 내용 · 검토 기준 · 기존 사례", result: "필수정보 · 예외 후보 · 추가 질문", decision: "담당자가 승인·보완·반려 여부를 판단" },
    ],
    systems: [
      { mark: "M", title: "회의·메시지", copy: "허용된 채널의 요청과 업무 기록" },
      { mark: "R", title: "보고자료", copy: "실적 수치·정기 보고·이전 결과" },
      { mark: "K", title: "운영 기준", copy: "팀 정책·업무 용어·과거 결정" },
      { mark: "B", title: "업무시스템", copy: "연계와 변경은 적용 환경별 승인 범위로 제한" },
    ],
    guardrail: "Worker 결과는 실행을 준비하는 초안입니다. 업무 지시와 우선순위, 담당자 지정, 외부 시스템의 공식 변경은 책임자가 결정합니다.",
    checklist: [
      "매주 또는 매월 반복되는 취합 업무인가?",
      "입력자료와 운영 기준의 위치를 지정할 수 있는가?",
      "결과물의 항목 또는 좋은 예시가 존재하는가?",
      "예외와 우선순위를 판단할 책임자가 있는가?",
    ],
    ctaTitle: "운영자료를 찾는 시간에서, 실행을 결정하는 시간으로.",
    ctaCopy: "반복되는 보고나 회의 후속 업무 하나를 선택해 입력자료와 사람의 결정 지점을 먼저 정의합니다.",
    ctaLabel: "첫 운영업무 Worker 검토하기",
  },
  {
    slug: "software-team",
    navLabel: "작은 개발팀",
    shortDescription: "제품·개발·QA 역할자가 각자의 Worker에 독립 요청하고 결과를 검토",
    accent: "coral",
    eyebrow: "활용 시나리오 · 작은 소프트웨어 개발팀",
    title: ["팀의 역할은 유지하고,", "AI 실행력은 확장하세요."],
    lead: "기획자, 개발자와 QA가 자신의 역할에 맞는 Worker에 직접 요청합니다. 요구사항 정리부터 변경 영향과 테스트 준비까지 사람의 판단을 돕는 결과를 만듭니다.",
    audience: "Product Lead · Developer · QA / Operator",
    requestExample: "승인된 요구사항의 구현 영향과 테스트 범위를 정리해 줘.",
    resultSummary: "요구사항 · 영향 분석 · 테스트 초안",
    decisionSummary: "범위 · 코드 검토 · 출시 여부",
    painPoints: [
      { title: "맥락이 여러 곳에 흩어집니다", copy: "요구사항과 기술 결정이 이슈, 문서와 대화에 나뉘어 있습니다." },
      { title: "빠른 일정에 검토가 빠집니다", copy: "영향 분석과 경계 조건, 테스트 준비가 뒤로 밀리기 쉽습니다." },
      { title: "한 사람이 여러 역할을 맡습니다", copy: "소수 인력이 구현과 검토, 릴리스 준비를 동시에 담당합니다." },
    ],
    flow: [
      { label: "01 · PERSON", title: "역할자의 독립 요청", copy: "Product Lead, Developer 또는 QA가 필요한 결과를 직접 요청합니다." },
      { label: "02 · CONTEXT", title: "승인된 팀 맥락 확인", copy: "명세, 저장소 정보와 개발·검증 원칙 중 필요한 범위를 사용합니다." },
      { label: "03 · WORKER", title: "역할별 검토 결과 준비", copy: "요구사항, 변경 영향이나 테스트 초안을 검토 가능하게 정리합니다." },
      { label: "04 · DECISION", title: "요청자의 다음 결정", copy: "사람이 결과를 검토한 뒤 구현, 병합, 출시 또는 새 요청을 결정합니다." },
    ],
    modes: [
      { label: "DEFINED", title: "정형 업무", copy: "이슈 템플릿, 코드리뷰 항목과 릴리스 체크리스트", result: "항목별 초안 · 누락 후보" },
      { label: "HYBRID", title: "혼합형 업무", copy: "기술 정보와 설명형 판단 근거가 함께 필요한 분석", result: "영향 범위 · 근거 · 검토 질문" },
      { label: "EXPLORE", title: "탐색형 업무", copy: "구현 방향이나 장애 원인처럼 답이 미리 정해지지 않은 요청", result: "접근 후보 · 확인 순서 · 불확실성" },
    ],
    scenarios: [
      { number: "01", title: "Product Worker", request: "고객 요청을 기능 요구사항과 수용 기준으로 정리해 줘.", inputs: "고객 요청 · 제품 지식 · 이전 결정", result: "범위 후보 · 확인 질문 · 수용 기준", decision: "Product Lead가 우선순위와 개발 범위를 결정" },
      { number: "02", title: "Engineering Worker", request: "이 변경의 대상과 기술 위험을 분석해 줘.", inputs: "승인 요구사항 · 코드 · 개발 원칙", result: "영향 범위 · 변경 제안 · 테스트 결과", decision: "Developer가 코드를 검토하고 병합 여부를 결정" },
      { number: "03", title: "QA·Release Worker", request: "변경 내용을 검증하고 출시 전 위험을 정리해 줘.", inputs: "요구사항 · 변경 정보 · 검증 기준", result: "테스트 시나리오 · 위험 · readback 항목", decision: "QA·Operator가 출시 또는 보류를 판단" },
    ],
    systems: [
      { mark: "I", title: "이슈와 명세", copy: "승인된 요구사항과 제품 결정" },
      { mark: "C", title: "코드 저장소", copy: "허용된 작업 공간과 개발 규칙" },
      { mark: "T", title: "테스트·CI", copy: "검증 결과와 build 준비 상태" },
      { mark: "R", title: "Worker Registry", copy: "inventory·desired state 정보, 자동 지휘 아님" },
    ],
    guardrail: "역할별 Worker는 서로 업무를 지시하지 않습니다. 각 역할자가 결과를 검토하고 다음 Worker 요청을 새롭게 생성하며, 배포는 승인된 운영 절차로 분리합니다.",
    checklist: [
      "역할별로 반복되는 준비·검토 업무가 있는가?",
      "Worker가 참고할 저장소·문서·규칙을 지정할 수 있는가?",
      "결과를 검증할 역할자가 팀 안에 있는가?",
      "Worker 실행 범위와 사람이 결정할 범위를 구분할 수 있는가?",
    ],
    ctaTitle: "팀원을 대체하지 않고, 각 역할의 준비와 검토 역량을 넓힙니다.",
    ctaCopy: "요구사항 정리, 코드 영향 분석 또는 테스트 준비 중 하나를 첫 역할별 Worker 후보로 선택합니다.",
    ctaLabel: "우리 팀의 첫 역할별 Worker 설계하기",
  },
];

export function getUseCase(slug: string) {
  return useCases.find((item) => item.slug === slug);
}
