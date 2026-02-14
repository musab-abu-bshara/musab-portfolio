import gltfPipeline from "gltf-pipeline";
import fsExtra from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const processGltf = gltfPipeline.processGltf;

async function compressModel(inputPath, outputPath) {
  console.log(`\nCompressing: ${inputPath}`);

  try {
    const gltf = await fsExtra.readJson(inputPath);

    const options = {
      dracoOptions: {
        compressionLevel: 10, // Maximum compression
        quantizePositionBits: 14,
        quantizeNormalBits: 10,
        quantizeTexcoordBits: 12,
        quantizeColorBits: 8,
        quantizeGenericBits: 12,
        unifiedQuantization: true,
      },
      resourceDirectory: path.dirname(inputPath),
    };

    const results = await processGltf(gltf, options);

    await fsExtra.writeJson(outputPath, results.gltf, { spaces: 2 });

    // Calculate size reduction
    const originalSize = JSON.stringify(gltf).length;
    const compressedSize = JSON.stringify(results.gltf).length;
    const reduction = ((1 - compressedSize / originalSize) * 100).toFixed(2);

    console.log(`✓ Compressed successfully!`);
    console.log(`  Original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`  Compressed: ${(compressedSize / 1024).toFixed(2)} KB`);
    console.log(`  Reduction: ${reduction}%`);

    return true;
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
    return false;
  }
}

async function compressAllModels() {
  console.log("=== 3D Model Compression with Draco ===\n");

  const models = [
    {
      input: "./public/planet/scene.gltf",
      output: "./public/planet/scene-compressed.gltf",
    },
    {
      input: "./public/desktop_pc/scene.gltf",
      output: "./public/desktop_pc/scene-compressed.gltf",
    },
  ];

  let successCount = 0;

  for (const model of models) {
    const success = await compressModel(model.input, model.output);
    if (success) successCount++;
  }

  console.log(`\n=== Compression Complete ===`);
  console.log(
    `Successfully compressed ${successCount}/${models.length} models`
  );
  console.log(
    "\nNote: Original files kept as backup. Update your components to use:"
  );
  console.log("  - ./planet/scene-compressed.gltf");
  console.log("  - ./desktop_pc/scene-compressed.gltf");
}

// Run compression
compressAllModels().catch(console.error);
