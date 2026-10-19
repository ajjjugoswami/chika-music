import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { imageManifest } from "./manifest.mjs";

const MAX_WIDTH = 2000;
const srcDir = process.argv[2];

if (!srcDir) {
  console.error("Usage: node scripts/images/build-images.mjs <source-dir>");
  process.exit(1);
}

const root = process.cwd();
const result = {};

for (const entry of imageManifest) {
  const input = path.join(srcDir, entry.file);
  const output = path.join(root, "public/images", entry.out);
  await mkdir(path.dirname(output), { recursive: true });

  const image = sharp(input).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const { width, height } = await image.webp({ quality: 80 }).toFile(output);
  const blur = await sharp(input).rotate().resize(16).webp({ quality: 40 }).toBuffer();

  result[entry.id] = {
    src: `/images/${entry.out}`,
    width,
    height,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };
  console.log(`${entry.id} → ${entry.out} (${width}×${height})`);
}

const target = path.join(root, "src/content/generated/images.json");
await mkdir(path.dirname(target), { recursive: true });
await writeFile(target, `${JSON.stringify(result, null, 2)}\n`);
