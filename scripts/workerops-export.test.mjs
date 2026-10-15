import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { createHash } from "node:crypto";

const root = new URL("../out/", import.meta.url); // Run after npm run build.
const read = (route) => readFile(new URL(`${route}index.html`, root), "utf8");
const cases = ["sales-data-analysis", "institution-documents", "business-operations", "software-team", "youtube-content-operations"];
const reference = "5606dce58d3df76a9b316b0ecd50b98187bf90fd";

test("exports two standalone pages with scoped reference and canonical metadata", async () => {
  for (const route of ["why-workerops/", "workerops-in-action/"]) {
    const html = await read(route);
    assert.match(html, /<h1\b/);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.ok(html.includes(reference));
    assert.ok(html.includes(`href="https://worker-host.dreamlabs.co.kr/${route}"`));
    assert.match(html, /미커밋 변경이 있는 Wiki 작업본/);
    assert.match(html, /실제 고객 사례 아님|메일 발송 검증 아님/);
  }
});

test("home and all five cases link to the operating perspective", async () => {
  const home = await read("");
  assert.match(home, /href="\/why-workerops\/"/);
  assert.match(home, /href="\/workerops-in-action\/"/);
  assert.match(home, /현재 도구로 요구를 충족한다면/);
  assert.doesNotMatch(home, /Standalone Worker가 다른 Worker를 직접 호출하거나/);
  for (const slug of cases) {
    const html = await read(`use-cases/${slug}/`);
    assert.match(html, /id="case-ops-title"/);
    assert.match(html, /href="\/workerops-in-action\/#(?:handoff|guidelines|permissions|recovery|collaboration)"/);
    assert.ok(html.includes(reference));
  }
});

test("scenes separate proposals from narrow historical evidence", async () => {
  const html = await read("workerops-in-action/");
  for (const id of ["handoff", "guidelines", "permissions", "recovery", "collaboration", "evidence"]) assert.ok(html.includes(`id="${id}"`));
  assert.match(html, /Source-only/);
  assert.match(html, /fb5e05ba/);
  assert.match(html, /122204ef/);
  assert.match(html, /전체 흐름 검증 전/);
  assert.match(html, /중복 변경 여부/);
  assert.match(html, /실제 Worker 실행 환경을 새로 점검하거나 변경한 것은 아닙니다/);
  assert.match(html, /worker0 → worker1/);
  assert.match(html, /2026-10-03 만료/);
  assert.match(html, /후속 요청도 새 승인을/);
  assert.match(html, /소스 검증 완료 · 운영 기능 검증 대기/);
  assert.match(html, /설치 기록을|설치·설치 기록/);
});

test("home architecture and case captions describe controlled collaboration without replacing media", async () => {
  const home = await read("");
  assert.match(home, /worker-host-system-architecture-v5\.svg/);
  const architectureReference = home.match(/<div class="architecture-reference">([\s\S]*?)<\/div>/)?.[1];
  assert.ok(architectureReference?.includes(reference), "architecture must use its scoped October reference");
  assert.ok(!architectureReference.includes("6b9c349"), "legacy case reference must not label refreshed architecture");
  assert.match(home, /Skill Registry/);
  assert.match(home, /후속 요청/);
  const diagram = await readFile(new URL("media/architecture/worker-host-system-architecture-v5.svg", root), "utf8");
  assert.ok(diagram.includes(reference));
  assert.match(diagram, /worker0 → worker1/);
  assert.match(diagram, /새 미리보기·승인/);
  assert.match(diagram, /Worker 간 첨부 전달 보류/);
  for (const slug of cases.filter(slug => slug !== "youtube-content-operations")) {
    const html = await read(`use-cases/${slug}/`);
    assert.match(html, /후속 요청도 새 승인이 필요/);
    assert.doesNotMatch(html, /Worker 간 연계는 승인된 외부 시스템/);
    assert.match(html, /<video\b/);
  }
});

test("central guidance distinguishes catalog, installation, activation and request use", async () => {
  const html = await read("why-workerops/");
  for (const text of ["승인된 카탈로그", "Skill·버전을 선택해 설치", "사용할 지침을 활성화", "이번 요청에 필요한 지침 사용"]) assert.ok(html.includes(text));
  assert.match(html, /Skill 지침이 권한을 부여하지는 않습니다/);
  assert.match(html, /활성화·요청 반영·화면 상태의 운영 검증은 남아 있습니다/);
  assert.match(html, /기존 환경이 이 요구를 충분히 충족한다면/);
});

test("System Events, context and recovery keep source, image and operating qualifications separate", async () => {
  const why = await read("why-workerops/");
  const scenes = await read("workerops-in-action/");
  assert.match(why, /id="guidance-updates"/);
  for (const html of [why, scenes]) {
    assert.match(html, /수신 꺼짐·발행자 0개/);
    assert.match(html, /HTTPS 전달 설정과 CI 연동 검증/);
    assert.match(html, /(?:신규 설치|새 Skill 설치)·자동 활성화·권한 부여/);
    assert.match(html, /13개/);
    assert.match(html, /2,000건/);
    assert.match(html, /6902cec9/);
    assert.match(html, /f577e8aa/);
  }
  assert.match(scenes, /Source-only · 실제 Worker 적용 검증 전/);
  assert.match(scenes, /화면 재접속만으로 작업을 다시 실행하지 않습니다/);
  assert.match(scenes, /기본 20초 설정의 동일 품질/);
  assert.match(scenes, /60초 설정/);
});

test("all four approved videos ship on the same origin with identical bytes", async () => {
  const hashes = {
    "business-operations": "666c76b8a28647d1f2f8598d26cdf277a89e2dbb20de628d10ab817a168cd058",
    "institution-documents": "bcc819ff63e3bb46a19ad03d62236af1d4d099fd8a8c6a0ac3d0043c82308e65",
    "sales-data-analysis": "5c93fb4ac3919f3af948318333624cb1cf15a20e8a5febb7ec6ccbd0b2986cbd",
    "software-team": "d441456b7eac5e04b6dbbf4bb4de8df1c9b122cbdf4d14376be2a3e99e5fe569",
  };
  for (const [slug, sha256] of Object.entries(hashes)) {
    const html = await read(`use-cases/${slug}/`);
    assert.ok(html.includes(`src="/media/use-cases/${slug}/scenario-v6.mp4"`));
    assert.doesNotMatch(html, /cdn\.jsdelivr\.net/);
    const bytes = await readFile(new URL(`media/use-cases/${slug}/scenario-v6.mp4`, root));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), sha256, slug);
  }
});

test("static SEO exports describe eight public pages and consultation is a local preparation tool", async () => {
  const home = await read("");
  assert.match(home, /rel="canonical" href="https:\/\/worker-host\.dreamlabs\.co\.kr\/"/);
  assert.match(home, /도입 상담 준비 메모 만들기/);
  assert.match(home, /메모 복사/);
  assert.match(home, /\.txt 내려받기/);
  const robots = await readFile(new URL("robots.txt", root), "utf8");
  const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");
  assert.match(robots, /Sitemap: https:\/\/worker-host\.dreamlabs\.co\.kr\/sitemap.xml/);
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, 8);
  for (const route of ["", "why-workerops/", "workerops-in-action/", ...cases.map(slug => `use-cases/${slug}/`)]) assert.ok(sitemap.includes(`<loc>https://worker-host.dreamlabs.co.kr/${route}</loc>`));
  assert.doesNotMatch(sitemap, /<lastmod>/);
});

test("README and scoped product reference remain synchronized", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  const source = await readFile(new URL("../app/operations-reference.ts", import.meta.url), "utf8");
  assert.ok(readme.includes(reference));
  assert.ok(source.includes(reference));
  assert.match(readme, /2026-10-15/);
  assert.match(readme, /미커밋 변경이 있는 Wiki 작업본/);
});

test("Windows nested RSC segments have byte-identical flat aliases", async () => {
  async function verify(directory, aliasRoot, prefix = []) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
      const parts = [...prefix, entry.name];
      if (entry.isDirectory()) await verify(file, aliasRoot, parts);
      else if (entry.name.endsWith(".txt")) {
        assert.deepEqual(await readFile(new URL(parts.join("."), aliasRoot)), await readFile(file));
      }
    }
  }
  for (const route of ["why-workerops/", "workerops-in-action/", ...cases.map(slug => `use-cases/${slug}/`)]) {
    const directory = new URL(route, root);
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (entry.isDirectory() && entry.name.startsWith("__next.")) await verify(new URL(`${entry.name}/`, directory), directory, [entry.name]);
    }
  }
});
