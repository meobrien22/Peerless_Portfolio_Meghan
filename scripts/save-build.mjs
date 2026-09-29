import {cp, readdir, rm, mkdir, access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'out');
const site = path.join(root, 'site');
await access(path.join(out, 'index.html'));
await rm(site, {recursive:true, force:true});
await mkdir(site, {recursive:true});
const publicNames = new Set(await readdir(path.join(root, 'public')));
for (const name of await readdir(out)) {
  if (!publicNames.has(name)) await cp(path.join(out,name),path.join(site,name),{recursive:true});
}
console.log('Updated the prebuilt website in site/.');
