import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertImage(inputPath, outputDir) {
  const fileName = path.basename(inputPath);
  const baseName = path.parse(fileName).name;

  try {
    console.log(`\nConverting: ${fileName}`);

    // Get original file size
    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;

    // Convert to WebP
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(inputPath).webp({ quality: 85, effort: 6 }).toFile(webpPath);

    const webpStats = await fs.stat(webpPath);
    const webpSize = webpStats.size;
    const webpReduction = ((1 - webpSize / originalSize) * 100).toFixed(2);

    console.log(
      `  ✓ WebP: ${(webpSize / 1024).toFixed(
        2
      )} KB (${webpReduction}% reduction)`
    );

    // Convert to AVIF (even better compression)
    const avifPath = path.join(outputDir, `${baseName}.avif`);
    await sharp(inputPath).avif({ quality: 80, effort: 6 }).toFile(avifPath);

    const avifStats = await fs.stat(avifPath);
    const avifSize = avifStats.size;
    const avifReduction = ((1 - avifSize / originalSize) * 100).toFixed(2);

    console.log(
      `  ✓ AVIF: ${(avifSize / 1024).toFixed(
        2
      )} KB (${avifReduction}% reduction)`
    );
    console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);

    return { originalSize, webpSize, avifSize };
  } catch (error) {
    console.error(`  ✗ Error converting ${fileName}:`, error.message);
    return null;
  }
}

async function processDirectory(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const results = [];

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        // Recursively process subdirectories
        const subResults = await processDirectory(fullPath);
        results.push(...subResults);
      } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
        // Skip if WebP or AVIF already exists
        const baseName = path.parse(entry.name).name;
        const webpExists = await fs
          .access(path.join(dirPath, `${baseName}.webp`))
          .then(() => true)
          .catch(() => false);
        const avifExists = await fs
          .access(path.join(dirPath, `${baseName}.avif`))
          .then(() => true)
          .catch(() => false);

        if (webpExists && avifExists) {
          console.log(`\nSkipping ${entry.name} (already converted)`);
          continue;
        }

        const result = await convertImage(fullPath, dirPath);
        if (result) {
          results.push(result);
        }
      }
    }

    return results;
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
    return [];
  }
}

async function optimizeImages() {
  console.log("=== Image Optimization to WebP and AVIF ===\n");

  const directories = ["./src/assets", "./public"];

  let totalOriginal = 0;
  let totalWebP = 0;
  let totalAVIF = 0;
  let fileCount = 0;

  for (const dir of directories) {
    console.log(`\nProcessing: ${dir}`);
    console.log("=".repeat(50));

    const results = await processDirectory(dir);

    results.forEach((result) => {
      totalOriginal += result.originalSize;
      totalWebP += result.webpSize;
      totalAVIF += result.avifSize;
      fileCount++;
    });
  }

  console.log("\n" + "=".repeat(50));
  console.log("=== Optimization Complete ===\n");
  console.log(`Files converted: ${fileCount}`);
  console.log(
    `\nTotal original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Total WebP size: ${(totalWebP / 1024 / 1024).toFixed(2)} MB (${(
      (1 - totalWebP / totalOriginal) *
      100
    ).toFixed(2)}% reduction)`
  );
  console.log(
    `Total AVIF size: ${(totalAVIF / 1024 / 1024).toFixed(2)} MB (${(
      (1 - totalAVIF / totalOriginal) *
      100
    ).toFixed(2)}% reduction)`
  );
  console.log(
    `\nNext step: Update LazyImage.jsx to use <picture> element with WebP/AVIF formats`
  );
}

// Run optimization
optimizeImages().catch(console.error);
