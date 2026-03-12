import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';
import { terms } from '../src/data/terms';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

async function prerender() {
  console.log('Starting prerender...');

  // 1. Build the SSR bundle
  await build({
    build: {
      ssr: true,
      outDir: 'dist/server',
      rollupOptions: {
        input: 'src/entry-server.tsx',
      },
    },
  });

  // 2. Import the render function from the built bundle
  const { render } = await import('../dist/server/entry-server.js');

  // 3. Read the index.html template
  const template = fs.readFileSync(toAbsolute('../dist/index.html'), 'utf-8');

  // 4. Define routes to prerender
  // We limit this to the home page and top 100 terms to keep the build light
  const routesToPrerender = [
    '/',
    ...terms.slice(0, 100).map(t => `/term/${t.slug}/`),
  ];

  // 5. Prerender each route
  for (const url of routesToPrerender) {
    const helmetContext = {};
    // Pass the full path including basename to the render function
    const fullUrl = `/maritime-lexicon${url}`;
    const appHtml = render(fullUrl, helmetContext);
    const { helmet } = helmetContext as any;

    // Replace placeholders in template
    let html = template
      .replace('<!--app-html-->', appHtml)
      .replace(/<title>.*?<\/title>/, helmet.title.toString())
      .replace('</head>', `${helmet.meta.toString()}${helmet.link.toString()}</head>`);

    // Determine output path
    const fileName = url === '/' ? 'index.html' : `term/${url.split('/')[2]}/index.html`;
    const filePath = toAbsolute(`../dist/${fileName}`);
    
    // Ensure directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    
    // Write file
    fs.writeFileSync(filePath, html);
    console.log(`Prerendered: ${url} -> ${fileName}`);
  }

  // 6. Cleanup server bundle
  fs.rmSync(toAbsolute('../dist/server'), { recursive: true, force: true });
  console.log('Prerender complete.');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
