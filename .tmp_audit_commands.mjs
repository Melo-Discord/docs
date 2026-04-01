import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const repo = process.argv[2];
const publicCategories = ['channels','community','config','economy','fun','logging','moderation','roles','utility'];
const out = [];
for (const cat of publicCategories) {
  const dir = path.join(repo, 'src', 'commands', cat);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  for (const file of files) {
    const mod = await import(pathToFileURL(path.join(dir, file)).href);
    const cmd = mod.default || {};
    const data = cmd.data?.toJSON ? cmd.data.toJSON() : null;
    out.push({
      category: cat,
      file,
      name: data?.name,
      description: data?.description,
      serverMod: !!cmd.serverMod,
      userOnly: !!cmd.userOnly,
      developer: !!cmd.developer,
      options: (data?.options || []).map(o => ({ type: o.type, name: o.name, description: o.description, required: o.required ?? false, choices: o.choices?.map(c=>c.name) || [], options: (o.options||[]).map(s=>({type:s.type,name:s.name,description:s.description,required:s.required ?? false})) }))
    });
  }
}
out.sort((a,b)=> a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
console.log(JSON.stringify(out, null, 2));
