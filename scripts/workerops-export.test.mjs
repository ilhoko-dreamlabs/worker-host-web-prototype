import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../out/", import.meta.url); // Run after npm run build.
const read = (route) => readFile(new URL(`${route}index.html`, root), "utf8");
const cases = ["sales-data-analysis", "institution-documents", "business-operations", "software-team", "youtube-content-operations"];
const reference = "d50ba89596ff37cd6d4f99731baa670b710e797b";

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
    assert.match(html, /href="\/workerops-in-action\/#(?:handoff|guidelines|permissions|recovery)"/);
    assert.ok(html.includes(reference));
  }
});

test("scenes separate proposals from narrow historical evidence", async () => {
  const html = await read("workerops-in-action/");
  for (const id of ["handoff", "guidelines", "permissions", "recovery", "evidence"]) assert.ok(html.includes(`id="${id}"`));
  assert.match(html, /Source-only/);
  assert.match(html, /fb5e05ba/);
  assert.match(html, /122204ef/);
  assert.match(html, /전 과정 검증 전/);
  assert.match(html, /중복 실행·중복 변경/);
  assert.match(html, /실제 Worker 실행 환경을 새로 점검한 것은 아닙니다/);
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
