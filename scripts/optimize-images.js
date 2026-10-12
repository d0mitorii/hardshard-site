const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

const INPUT_DIR = "./static/img/reports/season-4/report-3-may-sept-2026/";
const OUTPUT_DIR = "./static/img/reports/season-4/report-3-may-sept-2026/";
const FILE_NAME_PREFIX = "rep3";

const PREVIEW_WIDTH = 800;
const FULL_WIDTH = 1800;

async function processImage(file) {
  const fileName = path.basename(file, path.extname(file));

  const previewPath = path.join(OUTPUT_DIR, `${fileName}-preview.webp`);
  const fullPath = path.join(OUTPUT_DIR, `${fileName}-full.webp`);

  await fs.ensureDir(OUTPUT_DIR);

  // preview
  await sharp(file)
    .resize({ width: PREVIEW_WIDTH })
    .webp({ quality: 75 })
    .toFile(previewPath);

  // full
  await sharp(file)
    .resize({ width: FULL_WIDTH })
    .webp({ quality: 85 })
    .toFile(fullPath);

  console.log(`✅ ${fileName}`);
}

async function run() {
  const fileNamePattern = FILE_NAME_PREFIX ? `${FILE_NAME_PREFIX}*` : "*";
  const files = glob.sync(`${INPUT_DIR}/**/${fileNamePattern}.{jpg,jpeg,png}`);

  for (const file of files) {
    await processImage(file);
  }

  console.log("🎉 Done!");
}

run();