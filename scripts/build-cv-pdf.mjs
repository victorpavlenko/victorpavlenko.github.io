import { renderToFile } from '@react-pdf/renderer';
import { createElement } from 'react';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdirSync } from 'node:fs';
import { CvPdfDoc } from '../src/cv-pdf-doc.js';
import { pdfFileName } from '../src/cv-data.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const outDir = resolve(repoRoot, 'public');
const outPath = resolve(outDir, pdfFileName);

mkdirSync(outDir, { recursive: true });

await renderToFile(createElement(CvPdfDoc), outPath);

console.log(`✓ CV PDF generated at public/${pdfFileName}`);
