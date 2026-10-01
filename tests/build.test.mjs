import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { test } from 'node:test';

const output = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', output), 'utf8');
const assets = await readdir(new URL('assets/', output));

test('content is available in HTML before JavaScript loads', () => {
  assert.match(html, /<h1[^>]*>mayank yadav/);
  for (const text of ['Goldman Sachs', '230+', '1,400+', '100+', 'TypeScript', 'Terraform', 'Northeastern University']) {
    assert.ok(html.includes(text), `Missing portfolio content: ${text}`);
  }
  assert.doesNotMatch(html, /<!--portfolio-->|id="root"/);
  assert.equal((html.match(/class="project-row"/g) || []).length, 3);
  assert.equal((html.match(/class="experience-row"/g) || []).length, 3);
});

test('all section links have a target', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs');
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(target), `Broken section link: #${target}`);
  }
});

test('JavaScript, CSS, and fonts stay within loading budgets', async () => {
  const budgets = { '.js': 10_000, '.css': 20_000, '.woff2': 50_000 };
  for (const [extension, budget] of Object.entries(budgets)) {
    const files = assets.filter(file => file.endsWith(extension));
    assert.equal(files.length, 1, `Expected a single ${extension} asset`);
    const size = (await stat(new URL(`assets/${files[0]}`, output))).size;
    assert.ok(size <= budget, `${extension} exceeds loading budget: ${size} bytes`);
  }
  const portrait = (await stat(new URL('profile.webp', output))).size;
  assert.ok(portrait <= 15_000, 'Portrait exceeds 15 KB loading budget');
});

test('the local resume is valid when used and is not preloaded', async () => {
  const resumeLink = html.match(/class="resume-link" href="([^"]+)"/)?.[1];
  assert.ok(resumeLink, 'Missing resume link');
  if (/^https?:\/\//.test(resumeLink)) return;
  const resume = await readFile(new URL('resume.pdf', output));
  assert.equal(resume.subarray(0, 4).toString(), '%PDF');
  assert.doesNotMatch(html, /<link[^>]+rel="preload"[^>]+\.pdf/);
});
