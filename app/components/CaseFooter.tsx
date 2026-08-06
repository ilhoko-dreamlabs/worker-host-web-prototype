import Link from "next/link";
import { useCases } from "../use-cases/cases";

export default function CaseFooter() {
  return (
    <footer>
      <div className="footer-main">
        <Link className="brand footer-brand" href="/" aria-label="Worker Host 홈">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span><strong>WORKER HOST</strong><small>DREAMLABS</small></span>
        </Link>
        <p>역할별 AI Worker로 조직의 반복 업무를 검토 가능한 결과로 연결합니다.</p>
        <nav aria-label="활용 사례">
          {useCases.map((item) => <Link href={`/use-cases/${item.slug}`} key={item.slug}>{item.navLabel}</Link>)}
        </nav>
      </div>
      <div className="footer-legal">
        <p>본 페이지는 적용 가능성을 설명하는 가상 시나리오입니다. 시스템 연계와 실제 사용 가능 기능은 적용 버전, 운영 상태와 검증 결과에 따라 구분해 확인합니다.</p>
        <span>Prototype · Baseline 078680e</span>
      </div>
    </footer>
  );
}
