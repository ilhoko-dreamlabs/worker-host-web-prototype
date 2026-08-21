import Link from "next/link";
import { WorkerHostLogo } from "./BrandAssets";
import { WORKER_HOST_BASELINE_SHA, WORKER_HOST_REFERENCE_DATE } from "../product-reference";
import { useCases } from "../use-cases/cases";

export default function CaseFooter() {
  return (
    <footer>
      <div className="footer-main">
        <Link className="brand footer-brand" href="/" aria-label="Worker Host 홈">
          <WorkerHostLogo variant="white" className="footer-brand-logo" />
        </Link>
        <p>역할별 AI Worker로 승인된 업무 데이터를 사람이 검토하고 결정할 수 있는 결과로 연결합니다.</p>
        <nav aria-label="활용 사례">
          {useCases.map((item) => <Link href={`/use-cases/${item.slug}`} key={item.slug}>{item.navLabel}</Link>)}
        </nav>
      </div>
      <div className="footer-legal">
        <p>본 페이지는 적용 가능성을 설명하는 가상 시나리오입니다. 실제 사용 가능 기능은 Source-only / Deployed / Blocked 상태와 적용 환경의 검증 결과를 구분해 확인합니다.</p>
        <span>Prototype · Product reference {WORKER_HOST_BASELINE_SHA} · {WORKER_HOST_REFERENCE_DATE}</span>
      </div>
    </footer>
  );
}
