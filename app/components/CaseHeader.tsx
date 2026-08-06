"use client";

import Link from "next/link";
import { useState } from "react";

export default function CaseHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header case-site-header">
      <Link className="brand" href="/" aria-label="Worker Host 홈" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">W</span>
        <span>
          <strong>WORKER HOST</strong>
          <small>DREAMLABS</small>
        </span>
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="사례 페이지 메뉴">
        <Link href="/#value" onClick={closeMenu}>제품 가치</Link>
        <Link href="/#usecases" onClick={closeMenu}>활용 사례</Link>
        <Link href="/#architecture" onClick={closeMenu}>전체 구성</Link>
        <Link className="nav-cta" href="/#contact" onClick={closeMenu}>도입 검토</Link>
      </nav>
    </header>
  );
}
