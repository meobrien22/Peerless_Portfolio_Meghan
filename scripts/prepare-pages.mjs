import {cp, mkdir, readFile, readdir, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, '_site');
const marker = '/__GITHUB_PAGES_BASE__';
const base = (process.env.PAGES_BASE_PATH || '').replace(/\/$/, '');
if (base && !/^\/[A-Za-z0-9._~%/-]+$/.test(base)) throw Error('Invalid Pages base path');
await rm(output, {recursive:true, force:true});
await mkdir(output, {recursive:true});
await cp(path.join(root, 'public'), output, {recursive:true});
await cp(path.join(root, 'site'), output, {recursive:true});
let changed = 0;
async function rewrite(dir) {
  for (const item of await readdir(dir, {withFileTypes:true})) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) { await rewrite(file); continue; }
    if (!/\.(html|js|css|json|txt|xml|svg|webmanifest)$/.test(item.name)) continue;
    const original = await readFile(file, 'utf8');
    if (!original.includes(marker)) continue;
    await writeFile(file, original.replaceAll(marker, base));
    changed++;
  }
}
await rewrite(output);
// The old About and Workshops pages now point to the main portfolio page.
for (const route of ['about', 'workshops']) {
  const dir = path.join(output, route);
  await mkdir(dir, {recursive:true});
  await writeFile(path.join(dir,'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${base}/"><title>Meghan Fasano</title></head><body><a href="${base}/">Continue to Meghan Fasano’s portfolio</a></body></html>`);
}
for (const [oldRoute,newRoute] of [['work/frontier-ai','work/ai-storytelling'],['work/core-ai','work/connected-ai'],['work/microsoft-launch-tool','work/product-launch-tool']]) {
  const dir=path.join(output,oldRoute); await mkdir(dir,{recursive:true});
  await writeFile(path.join(dir,'index.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${base}/${newRoute}/"><title>Meghan Fasano</title></head><body><a href="${base}/${newRoute}/">Continue to the case study</a></body></html>`);
}
await writeFile(path.join(output, '.nojekyll'), '');
console.log(`Prepared GitHub Pages at ${base || '/'} (${changed} files adjusted).`);
