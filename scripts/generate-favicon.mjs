import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = `${__dirname}/../public/favicon.ico`;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#14182A" />
  <text x="32" y="45" font-family="Arial, sans-serif" font-weight="800" font-size="38" fill="#5B8DEF" text-anchor="middle">R</text>
</svg>
`;

function makeIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + entrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  const images = [];

  for (const { size, buffer } of pngBuffers) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buffer.length;
    entries.push(entry);
    images.push(buffer);
  }

  return Buffer.concat([header, ...entries, ...images]);
}

const sizes = [16, 32, 48];
const pngBuffers = [];
for (const size of sizes) {
  const buffer = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
  pngBuffers.push({ size, buffer });
}

mkdirSync(`${__dirname}/../public`, { recursive: true });
writeFileSync(outPath, makeIco(pngBuffers));
console.log("favicon.ico written to", outPath);
