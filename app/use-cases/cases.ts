export type UseCaseAccent = "blue" | "mint" | "coral" | "violet";

export type VideoCueTone = "problem" | "organize" | "check" | "decision";

export type VideoCueDefinition = {
  start: number;
  end: number;
  stage: string;
  tone: VideoCueTone;
  lines: [string, string];
};

export const WORKER_HOST_VIDEO_REFERENCE_SHA = "5f93da1f50fdaa9bc831629d010fdda2fd181a72";

export type AnalysisPreviewDefinition = {
  label: string;
  title: string;
  period: string;
  kpis: Array<{ label: string; value: string; note: string; tone: "up" | "check" | "neutral" }>;
  accounts: Array<{ name: string; share: number; change: string }>;
  formula: { label: string; value: string; note: string };
  promotion: { before: number; after: number; change: string; note: string };
  checks: string[];
  disclaimer: string;
};

export type ContentCycleDefinition = {
  statusLabel: string;
  statusCopy: string;
  center: { label: string; title: string; copy: string };
  stages: Array<{
    number: string;
    phase: string;
    title: string;
    person: string;
    worker: string;
    request: string;
    result: string;
    decision: string;
  }>;
  registry: Array<{ mark: string; title: string; copy: string }>;
  feedback: {
    label: string;
    title: string;
    firstContentTitle: string;
    firstContentMessage: string;
    signals: string[];
    decisions: Array<{ status: string; tone: "accept" | "keep" | "hold"; copy: string }>;
    nextRequest: string;
    nextChanges: string[];
    disclaimer: string;
  };
};

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
  videoNarration: string[];
  videoCues?: VideoCueDefinition[];
  analysisPreview?: AnalysisPreviewDefinition;
  contentCycle?: ContentCycleDefinition;
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
    videoNarration: [
      "정해진 서식, 제각각인 자료.",
      "승인 기준으로 Worker에게 요청.",
      "초안과 누락, 근거까지 정리.",
      "검토와 결정은 사람이 합니다.",
    ],
    videoCues: [
      { start: 1.44, end: 4.02, stage: "문제", tone: "problem", lines: ["정해진 서식,", "자료는 제각각"] },
      { start: 4.46, end: 6.60, stage: "정리", tone: "organize", lines: ["승인 기준으로", "Worker에게 요청"] },
      { start: 7.08, end: 9.24, stage: "확인", tone: "check", lines: ["초안·누락 후보", "근거까지 정리"] },
      { start: 9.40, end: 11.09, stage: "결정", tone: "decision", lines: ["검토와 결정은", "사람이"] },
    ],
  },
  {
    slug: "sales-data-analysis",
    navLabel: "판매·수익성 분석",
    shortDescription: "판매·매입·프로모션 자료를 산식과 근거가 보이는 분석 결과로 정리",
    accent: "violet",
    eyebrow: "활용 시나리오 · 판매·수익성 데이터 분석",
    title: ["판매·매입 자료를", "결정할 숫자로."],
    lead: "무엇을 확인할지는 사람이 정합니다. Worker는 승인된 자료를 합의된 기준으로 정리하고 비교표, 증감과 확인할 항목을 준비합니다. 가격·발주·프로모션 결정은 책임자가 검토하고 확정합니다.",
    audience: "대표 · 사업책임자 · 영업·구매 담당자",
    requestExample: "올해 AI 제품의 거래처별 판매량과 매입 대비 매출비율, 프로모션 전후 변화를 분석해 줘.",
    resultSummary: "거래처 순위 · 비율·증감 · 이상·누락 후보",
    decisionSummary: "영업 집중 · 가격·프로모션 · 발주 방향",
    painPoints: [
      { title: "자료가 여러 파일에 흩어집니다", copy: "판매, 매입과 프로모션 자료가 업무시스템, 엑셀과 담당자별 파일에 나뉘어 있습니다." },
      { title: "산식과 기간이 매번 달라집니다", copy: "같은 이름의 지표도 포함 범위와 계산 기준이 달라 비교 결과를 다시 확인하게 됩니다." },
      { title: "숫자 뒤의 확인사항이 남습니다", copy: "수치가 나와도 반품, 누락, 계절성과 행사 조건을 따로 대조하느라 판단이 늦어집니다." },
    ],
    flow: [
      { label: "01 · PERSON", title: "업무 질문과 기준 지정", copy: "분석 대상, 기간, 비교 기준과 필요한 결과를 사람이 명시합니다." },
      { label: "02 · DATA", title: "승인된 데이터 확인", copy: "허용된 판매·매입 자료의 필드, 누락과 기준정보를 먼저 확인합니다." },
      { label: "03 · WORKER", title: "계산·비교 결과 준비", copy: "합의된 산식으로 집계하고 변화, 이상 후보와 근거를 함께 정리합니다." },
      { label: "04 · DECISION", title: "책임자의 검토와 결정", copy: "담당자가 산식과 업무 맥락을 확인한 뒤 공식 결정을 내립니다." },
    ],
    modes: [
      { label: "SALES", title: "판매 흐름", copy: "거래처·제품·기간별 판매량과 매출 흐름을 같은 기준으로 비교", result: "순위 · 비중 · 추이 · 이상 변화" },
      { label: "PROFIT", title: "수익성 기준", copy: "매입·매출·할인·반품 범위를 합의한 뒤 비율과 기준 이탈을 확인", result: "산식 · 비율 · 이탈 항목 · 근거" },
      { label: "CAMPAIGN", title: "프로모션 변화", copy: "행사 전후 또는 참여·비참여 집단의 관찰된 판매량 변화를 비교", result: "절대 증감 · 증감률 · 확인 변수" },
    ],
    scenarios: [
      { number: "01", title: "거래처별 판매량", request: "올해 AI 제품 판매량을 거래처별·월별로 비교해 줘.", inputs: "판매전표 · 제품·거래처 기준 · 취소·반품 자료", result: "거래처 순위 · 판매 비중 · 월별 추이 · 누락 후보", decision: "책임자가 집중 영업 거래처와 추가 확인 대상을 결정" },
      { number: "02", title: "매입 대비 매출비율", request: "합의한 산식으로 제품별 매입 대비 매출비율을 계산해 줘.", inputs: "매입·매출 자료 · 할인·반품·세금 기준 · 제품정보", result: "적용 산식 · 제품·기간별 비율 · 기준 이탈과 근거", decision: "담당자가 회계 범위를 확인하고 가격·구매조건 검토 여부를 결정" },
      { number: "03", title: "프로모션 전후 비교", request: "참여업체의 프로모션 전후 판매량 변화를 비교해 줘.", inputs: "참여업체 · 행사·비교 기간 · 판매량 · 취소·반품 자료", result: "전후·참여군 비교 · 증감 · 계절성 등 확인 필요사항", decision: "책임자가 프로모션 유지·수정·종료 여부를 판단" },
      { number: "04", title: "원가·견적 준비", request: "재료비와 수량, 목표 마진과 로스비용 3%를 반영해 견적 초안을 준비해 줘.", inputs: "재료 단가·수량 · 매입가 · 목표 마진 · 승인된 견적 형식", result: "산식·가정이 표시된 원가표 · 견적 초안 · 확인 항목", decision: "책임자가 가격을 승인하고 공식 견적 발행 여부를 결정" },
    ],
    systems: [
      { mark: "S", title: "판매·주문자료", copy: "거래일, 거래처, 제품, 수량과 매출액" },
      { mark: "P", title: "매입·원가자료", copy: "매입액, 재료비, 할인·반품과 적용 기준" },
      { mark: "M", title: "기준정보", copy: "제품·거래처 매핑, 행사 기간과 참여업체" },
      { mark: "A", title: "승인된 연결", copy: "엑셀·CSV 또는 검증된 업무시스템 읽기 범위" },
    ],
    guardrail: "Worker는 분석 근거와 확인 항목을 준비합니다. 판매 증가의 원인을 단정하거나 가격·발주·프로모션을 자동 결정하지 않으며, 공식 시스템 반영과 견적 발행은 책임자의 별도 승인으로 분리합니다.",
    checklist: [
      "분석할 질문을 한 문장으로 정의할 수 있는가?",
      "기간·대상·산식과 제외 조건이 합의됐는가?",
      "필요한 데이터의 읽기 권한과 기준정보가 준비됐는가?",
      "누락·이상값과 업무 맥락을 검토할 담당자가 있는가?",
      "다음 분석을 시작할 사람 또는 승인된 일정이 정해져 있는가?",
    ],
    ctaTitle: "데이터를 모으는 시간에서, 숫자를 결정하는 시간으로.",
    ctaCopy: "거래처별 판매량처럼 질문과 산식이 분명한 분석 하나를 선택해 자료 취합 시간, 누락과 사람의 검토 항목을 파일럿에서 측정합니다.",
    ctaLabel: "우리 데이터의 적용 조건 확인하기",
    videoNarration: [
      "흩어진 판매와 매입 데이터.",
      "Worker가 승인 자료를 정리합니다.",
      "수익성과 변화를 한눈에.",
      "근거를 보고, 사람이 결정합니다.",
    ],
    videoCues: [
      { start: 1.60, end: 3.95, stage: "문제", tone: "problem", lines: ["매출·매입 데이터가", "흩어져 있습니다"] },
      { start: 4.00, end: 6.28, stage: "정리", tone: "organize", lines: ["승인된 자료만", "Worker가 정리"] },
      { start: 6.76, end: 8.44, stage: "확인", tone: "check", lines: ["수익성과 변화", "한눈에"] },
      { start: 8.44, end: 10.93, stage: "결정", tone: "decision", lines: ["근거를 보고,", "사람이 결정"] },
    ],
    analysisPreview: {
      label: "가상 분석 페이퍼 · 실제 고객 데이터 아님",
      title: "거래처별 판매량과 수익성 한눈에",
      period: "예시 기간 2026.01–06 · 기준일 2026.06.30",
      kpis: [
        { label: "총 판매수량", value: "12,480개", note: "비교기간 대비 +8.4%", tone: "up" },
        { label: "상위 거래처 비중", value: "31.2%", note: "집중도 확인 필요", tone: "check" },
        { label: "순매출÷매입액", value: "1.62×", note: "예시 산식", tone: "neutral" },
        { label: "참여업체 판매량", value: "+14.8%", note: "전후 변화 · 인과 아님", tone: "up" },
      ],
      accounts: [
        { name: "가상 거래처 A", share: 78, change: "+12.1%" },
        { name: "가상 거래처 B", share: 61, change: "+4.6%" },
        { name: "가상 거래처 C", share: 44, change: "−3.2%" },
      ],
      formula: {
        label: "적용 산식",
        value: "순매출 ÷ 매입액 = 1.62×",
        note: "할인·반품·세금 포함 범위는 사용 전에 책임자가 확정",
      },
      promotion: {
        before: 68,
        after: 78.1,
        change: "+14.8%",
        note: "참여업체의 관찰된 변화 · 계절성·품절 영향 별도 확인",
      },
      checks: [
        "거래처 코드가 연결되지 않은 판매전표 2건",
        "반품 처리일과 판매 기준일이 다른 항목 3건",
        "프로모션 기간 중 품절 영향 확인 필요",
      ],
      disclaimer: "표시된 숫자와 거래처는 화면 설명을 위한 가상 예시입니다. 실제 산식, 데이터 접근과 분석 가능 범위는 적용 환경에서 별도로 검증합니다.",
    },
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
    videoNarration: [
      "흩어진 요청과 지표.",
      "승인 자료만 Worker가 처리합니다.",
      "담당자와 기한, 위험을 한눈에.",
      "결정은 사람이 합니다.",
    ],
    videoCues: [
      { start: 4.10, end: 6.22, stage: "문제", tone: "problem", lines: ["요청과 지표가", "흩어져 있습니다"] },
      { start: 6.90, end: 8.80, stage: "정리", tone: "organize", lines: ["승인된 범위의 자료", "Worker가 정리"] },
      { start: 9.32, end: 11.58, stage: "확인", tone: "check", lines: ["담당자·기한·위험 후보", "한눈에"] },
      { start: 11.58, end: 13.22, stage: "결정", tone: "decision", lines: ["결정은", "사람이"] },
    ],
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
    guardrail: "역할별 Worker의 결과와 요청은 사용자가 승인한 외부 WorkerOps·연계 시스템을 통해 연결할 수 있습니다. 각 연결은 대상·권한·도구를 제한한 새로운 인증된 독립 요청으로 처리하며, Standalone Worker가 다음 Worker를 직접 호출하거나 업무를 자동 확장하지 않습니다. 배포는 승인된 운영 절차로 분리합니다.",
    checklist: [
      "역할별로 반복되는 준비·검토 업무가 있는가?",
      "Worker가 참고할 저장소·문서·규칙을 지정할 수 있는가?",
      "결과를 검증할 역할자가 팀 안에 있는가?",
      "Worker 실행 범위와 사람이 결정할 범위를 구분할 수 있는가?",
    ],
    ctaTitle: "팀원을 대체하지 않고, 각 역할의 준비와 검토 역량을 넓힙니다.",
    ctaCopy: "요구사항 정리, 코드 영향 분석 또는 테스트 준비 중 하나를 첫 역할별 Worker 후보로 선택합니다.",
    ctaLabel: "우리 팀의 첫 역할별 Worker 설계하기",
    videoNarration: [
      "작은 팀, 역할은 그대로.",
      "각자 Worker에게 직접 요청.",
      "요구와 변경, 테스트 근거까지.",
      "검토하고, 사람이 결정합니다.",
    ],
    videoCues: [
      { start: 1.63, end: 3.42, stage: "문제", tone: "problem", lines: ["작은 팀, 역할은", "그대로"] },
      { start: 3.42, end: 5.80, stage: "정리", tone: "organize", lines: ["각자 Worker에게", "직접 요청"] },
      { start: 6.21, end: 8.39, stage: "확인", tone: "check", lines: ["요구·변경 영향", "테스트 근거까지"] },
      { start: 8.39, end: 10.92, stage: "결정", tone: "decision", lines: ["검토하고,", "사람이 결정"] },
    ],
  },
  {
    slug: "youtube-content-operations",
    navLabel: "유튜브 콘텐츠 운영",
    shortDescription: "기획부터 공개 후 피드백 반영까지, 사람의 승인과 독립 요청으로 이어지는 콘텐츠 운영 시나리오",
    accent: "coral",
    eyebrow: "활용 시나리오 · 유튜브 콘텐츠 운영",
    title: ["한 편의 반응을,", "다음 기획의 근거로."],
    lead: "콘텐츠 리드는 목표와 공개 기준을 정하고, 역할별 Worker는 승인된 자료로 기획·제작 준비·피드백 정리를 돕습니다. 각 결과는 사람이 검토하며 다음 단계는 사람의 승인 후 별도의 새 요청으로 시작합니다.",
    audience: "콘텐츠 리드 · 마케터 · 제작 담당자 · 브랜드 책임자",
    requestExample: "승인된 제품 자료와 지난 콘텐츠 검토 메모를 바탕으로 이번 영상의 주제와 첫 3초 메시지 후보를 준비해 줘.",
    resultSummary: "주제 후보 · 후킹 문구 · 구성안 · 확인 근거",
    decisionSummary: "주제 선택 · 표현 승인 · 다음 요청 여부",
    painPoints: [
      { title: "매번 처음부터 기획합니다", copy: "이전 콘텐츠에서 얻은 판단과 피드백이 담당자의 기억이나 대화에만 남기 쉽습니다." },
      { title: "숫자와 댓글이 따로 남습니다", copy: "조회 지표와 댓글을 확인해도 다음 기획에서 무엇을 바꿀지 연결하기 어렵습니다." },
      { title: "반영 이유가 기록되지 않습니다", copy: "제목과 구성이 바뀌어도 어떤 피드백을 누가 선택해 반영했는지 남기 어렵습니다." },
    ],
    flow: [
      { label: "01 · PERSON", title: "목표와 기준 설정", copy: "콘텐츠 책임자가 대상 시청자, 전달 메시지와 공개 기준을 정합니다." },
      { label: "02 · REQUEST", title: "역할별 Worker에 독립 요청", copy: "기획, 제작 준비 또는 피드백 정리에 필요한 결과를 각각 요청합니다." },
      { label: "03 · REVIEW", title: "사람의 검토와 공개 결정", copy: "표현, 근거와 권리를 확인하고 제작·게시 여부를 담당자가 결정합니다." },
      { label: "04 · NEW REQUEST", title: "반영 결정 후 새 기획", copy: "승인된 피드백만 선택해 다음 콘텐츠 기획을 별도의 요청으로 시작합니다." },
    ],
    modes: [
      { label: "PLAN", title: "콘텐츠 기획 Worker", copy: "목표, 대상 시청자와 승인 자료를 바탕으로 주제·후킹·구성 후보를 준비", result: "주제 후보 · 핵심 근거 · 확인 질문" },
      { label: "PRODUCE", title: "제작 준비 Worker", copy: "승인된 기획을 대본, 장면, 자막과 에셋 확인 항목으로 구체화", result: "대본 초안 · 장면표 · 자막·에셋 목록" },
      { label: "LEARN", title: "피드백 분석 Worker", copy: "사람이 범위를 정해 제공한 반응 자료에서 반복 주제와 개선 가설을 정리", result: "반응 주제 · 해석 한계 · 개선 후보" },
    ],
    scenarios: [
      { number: "01", title: "콘텐츠 기획 Worker", request: "이번 영상의 주제와 첫 3초 메시지 후보를 준비해 줘.", inputs: "콘텐츠 목표 · 대상 시청자 · 제품 자료 · 브랜드 가이드", result: "주제 후보 · 후킹 문구 · 핵심 근거 · 확인 질문", decision: "콘텐츠 리드가 주제와 표현을 승인하고 제작 준비를 새로 요청" },
      { number: "02", title: "제작 준비 Worker", request: "승인된 기획안을 9:16 영상의 대본, 장면과 자막 구성으로 구체화해 줘.", inputs: "승인 기획안 · 사용 가능한 에셋 · 화면·표현 기준", result: "대본 초안 · 장면표 · 자막·에셋 목록 · 확인 항목", decision: "제작 담당자가 촬영·편집하고 권리와 표현을 확인한 뒤 공개 여부 결정" },
      { number: "03", title: "피드백 분석 Worker", request: "선택해 제공한 시청 데이터와 댓글에서 반복 반응과 확인할 가설을 정리해 줘.", inputs: "범위를 정한 지표 · 댓글 발췌 · 내부 검토 의견 · KPI 정의", result: "반응 주제 · 이탈 구간 후보 · 해석의 한계 · 개선 후보", decision: "담당자가 각 후보를 채택·유지·보류하고 원인을 단정하지 않음" },
      { number: "04", title: "다음 콘텐츠 기획 Worker", request: "승인된 피드백만 반영해 다음 영상 기획서의 변경안을 준비해 줘.", inputs: "채택된 피드백 · 유지할 메시지 · 다음 콘텐츠 목표", result: "변경 전후 · 변경 이유 · 새 후킹 문구 · 측정 가설", decision: "콘텐츠 리드가 변경안을 승인하고 다음 콘텐츠를 새 독립 요청으로 시작" },
    ],
    systems: [
      { mark: "B", title: "제품·브랜드 자료", copy: "승인된 제품 설명, 표현 기준과 사용 가능한 에셋" },
      { mark: "W", title: "기획·제작 작업공간", copy: "콘텐츠 브리프, 대본, 장면표와 검토 기록" },
      { mark: "Y", title: "게시 채널", copy: "제작·게시 결과가 놓이는 외부 채널, 직접 연계와 변경 권한은 별도 검증" },
      { mark: "F", title: "피드백 자료", copy: "사람이 범위를 선택해 제공한 지표, 댓글 발췌와 내부 의견" },
    ],
    guardrail: "콘텐츠 운영 범위는 사용자가 승인하고, 별도의 외부 WorkerOps·연계 시스템이 한 Worker의 결과를 다음 역할 Worker의 새로운 인증 요청으로 제출해 협업 흐름을 구성할 수 있습니다. Standalone Worker의 직접 호출이나 결과 기반 연쇄 실행, YouTube 자동 게시·댓글 수집·실시간 분석을 현재 기능으로 주장하지 않습니다.",
    checklist: [
      "대상 시청자와 콘텐츠 목표를 승인할 사람이 있는가?",
      "Worker가 참고할 제품 자료와 브랜드 기준을 지정할 수 있는가?",
      "공개 전 표현·에셋·권리를 검토할 담당자가 있는가?",
      "분석할 지표와 댓글의 범위·개인정보를 사람이 확인할 수 있는가?",
      "반영할 피드백을 사람이 선택하고 다음 독립 요청을 만들 수 있는가?",
    ],
    ctaTitle: "한 편을 더 만드는 것보다, 다음 편이 나아지는 운영 구조부터.",
    ctaCopy: "최근 콘텐츠 한 편과 검토 가능한 피드백 자료를 선택해 기획, 승인, 제작, 공개, 피드백과 새 요청의 경계를 먼저 설계합니다.",
    ctaLabel: "우리 콘텐츠 순환 구조 설계하기",
    videoNarration: [],
    contentCycle: {
      statusLabel: "15초 활용 영상 · 추후 제작",
      statusCopy: "영상 크레딧과 제작 방식을 확인한 뒤, 이 페이지의 순환 구조를 9:16 영상으로 추가할 예정입니다.",
      center: {
        label: "HUMAN CONTROL",
        title: "콘텐츠 책임자",
        copy: "목표 설정 · 결과 검토 · 공개 승인 · 반영 결정",
      },
      stages: [
        {
          number: "01",
          phase: "PLAN",
          title: "주제와 메시지 기획",
          person: "콘텐츠 리드",
          worker: "콘텐츠 기획 Worker",
          request: "승인된 자료로 주제와 첫 3초 메시지 후보를 준비해 줘.",
          result: "주제 후보 · 후킹 문구 · 구성안 · 확인 근거",
          decision: "주제와 표현을 선택하고 제작 준비를 새로 요청",
        },
        {
          number: "02",
          phase: "PREPARE",
          title: "대본과 장면 준비",
          person: "제작 담당자",
          worker: "제작 준비 Worker",
          request: "승인된 기획을 대본, 장면과 자막 구성으로 구체화해 줘.",
          result: "대본 초안 · 장면표 · 자막·에셋 목록",
          decision: "촬영·편집 범위와 사용할 에셋을 확정",
        },
        {
          number: "03",
          phase: "REVIEW",
          title: "표현 검토와 공개",
          person: "브랜드·채널 책임자",
          worker: "콘텐츠 QA Worker",
          request: "공개 전 표현, 근거와 권리 확인 항목을 정리해 줘.",
          result: "표현·출처·권리 체크리스트 · 확인 후보",
          decision: "수정·보류·공개 여부를 직접 결정",
        },
        {
          number: "04",
          phase: "LEARN",
          title: "반응을 다음 근거로",
          person: "콘텐츠 리드",
          worker: "피드백 분석 Worker",
          request: "제공한 지표와 댓글에서 반복 반응과 개선 후보를 정리해 줘.",
          result: "반응 주제 · 해석 한계 · 개선 후보",
          decision: "채택·유지·보류 후 다음 기획을 새로 요청",
        },
      ],
      registry: [
        { mark: "P", title: "콘텐츠 기획 Worker", copy: "주제·후킹·구성 후보" },
        { mark: "S", title: "제작 준비 Worker", copy: "대본·장면·자막 준비" },
        { mark: "Q", title: "콘텐츠 QA Worker", copy: "표현·출처·권리 확인" },
        { mark: "I", title: "피드백 분석 Worker", copy: "반응·한계·개선 후보" },
      ],
      feedback: {
        label: "가상 운영 사이클 · 실제 조회수나 고객 반응 아님",
        title: "“조금 추상적이에요”를 다음 편의 구체적인 장면으로.",
        firstContentTitle: "첫 번째 콘텐츠 · Worker Host 소개",
        firstContentMessage: "팀의 역할은 유지하고, AI 실행력은 확장하세요.",
        signals: [
          "우리 업무 어디에 넣을 수 있나요?",
          "데이터 분석 사례가 있으면 더 쉽게 이해될 것 같아요.",
        ],
        decisions: [
          { status: "채택", tone: "accept", copy: "다음 편에서 판매 데이터 분석 사례를 구체적으로 보여줌" },
          { status: "유지", tone: "keep", copy: "역할별 Worker와 사람의 승인 원칙은 그대로 유지" },
          { status: "보류", tone: "hold", copy: "특정 구성이 조회 성과를 높인다는 단정은 하지 않음" },
        ],
        nextRequest: "승인된 피드백을 반영해 ‘거래처별 판매량과 매입 대비 매출비율 분석’ 사례의 콘텐츠 기획안을 준비해 줘.",
        nextChanges: [
          "첫 장면에 실제 업무 요청 배치",
          "거래처 순위·비율·확인 항목을 화면으로 제시",
          "담당자가 근거를 확인하고 결정하는 장면으로 마무리",
          "상세 사례 페이지에서 입력·결과·검토 조건 안내",
        ],
        disclaimer: "피드백을 그대로 따라가는 것이 아닙니다. 사람이 무엇을 반영할지 결정하고, Worker는 그 결정을 다음 기획의 검토 가능한 형태로 준비합니다.",
      },
    },
  },
];

export function getUseCase(slug: string) {
  return useCases.find((item) => item.slug === slug);
}
