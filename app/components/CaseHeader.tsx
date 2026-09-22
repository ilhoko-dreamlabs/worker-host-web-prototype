"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { WorkerHostLogo } from "./BrandAssets";

export default function CaseHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header case-site-header">
      <Link className="brand" href="/" aria-label="Worker Host 홈" onClick={closeMenu}>
        <WorkerHostLogo variant="white" className="brand-logo" preload />
      </Link>
      <button
        ref={menuButtonRef}
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={menuOpen}
        aria-controls="case-navigation"
        onKeyDown={(event) => { if (event.key === "Escape") closeMenu(); }}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav id="case-navigation" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="사이트 메뉴" onKeyDown={(event) => { if (event.key === "Escape") { closeMenu(); menuButtonRef.current?.focus(); } }}>
        <Link href="/why-workerops/" onClick={closeMenu}>왜 WorkerOps인가</Link>
        <Link href="/workerops-in-action/" onClick={closeMenu}>운영 장면</Link>
        <Link href="/#usecases" onClick={closeMenu}>활용 사례</Link>
        <Link href="/#architecture" onClick={closeMenu}>전체 구성</Link>
        <Link className="nav-cta" href="/#contact" onClick={closeMenu}>도입 검토</Link>
      </nav>
    </header>
  );
}
