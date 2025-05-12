/*
 * optimize-images.js
 *
 * To integrate this script into your project:
 *
 * 1. Place this file at the project root (next to package.json).
 *
 * 2. Install required dev dependencies:
 *    ```bash
 *    npm install --save-dev sharp glob heic-convert
 *    ```
 *
 * 3. Add the following script to your package.json under "scripts":
 *    ```json
 *    {
 *      "scripts": {
 *        "optimize-images": "node optimize-images.js"
 *      }
 *    }
 *    ```
 *
 * 4. Organize your images:
 *    - Source images go in src/assets/gallery-assets
 *    - Optimized images will be saved to src/assets/optimized-gallery
 *
 * 5. Customize settings (inside this file):
 *    - Max width: change `width: 1200` to another pixel value
 *    - Target size: change `500 * 1024` to desired max bytes
 *    - JPEG quality range: initial `quality = 70`, min `> 20`
 *    - PNG compression: `compressionLevel` and `quality` array control PNG size/quality
 *    - HEIC support: the script converts HEIC/HEIF to JPEG before resizing
 *
 * 6. Run optimization:
 *    ```bash
 *    npm run optimize-images
 *    ```
 */

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import sharp from 'sharp';
import heicConvert from 'heic-convert';

(async () => {
  const cwd        = process.cwd();
  const INPUT_DIR  = path.join(cwd, 'src/assets/photos-05-12');
  const OUTPUT_DIR = path.join(cwd, 'src/assets/optimized-photos-05-12-NEW');

  console.log('🔍 Scanning:', INPUT_DIR);
  try {
    await fs.access(INPUT_DIR);
  } catch {
    console.error('❌ Input folder not found:', INPUT_DIR);
    process.exit(1);
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  console.log('📁 Output folder ready:', OUTPUT_DIR);

  const pattern = `${INPUT_DIR}/**/*.{jpg,jpeg,png,heic}`;
  console.log('🔍 Glob pattern:', pattern);

  const files = await glob(pattern, { nodir: true });
  console.log(`🎯 Found ${files.length} file(s).`);

  for (const file of files) {
    const relPath = path.relative(INPUT_DIR, file);
    let outPath = path.join(OUTPUT_DIR, relPath);
    await fs.mkdir(path.dirname(outPath), { recursive: true });

    try {
      const rawBuffer = await fs.readFile(file);
      let bufferToProcess = rawBuffer;
      let ext = path.extname(file).toLowerCase();

      let metadata;
      try {
        metadata = await sharp(rawBuffer).metadata();
      } catch {}

      const isHeif = metadata?.format === 'heif';
      if (isHeif || ext === '.heic') {
        bufferToProcess = await heicConvert({ buffer: rawBuffer, format: 'JPEG', quality: 0.7 });
        ext = '.jpg';
        outPath = outPath.replace(/\.(heic|HEIC)$/, '.jpg');
      }

      let pipeline = sharp(bufferToProcess, { failOnError: false })
        .resize({ width: 1200, withoutEnlargement: true })
        .withMetadata();

      if (ext === '.png') {
        await pipeline.png({ compressionLevel: 9, quality: [0.5,0.7], adaptiveFiltering: true }).toFile(outPath);
      } else {
        let quality = 70;
        await pipeline.jpeg({ mozjpeg:true, quality, progressive:true }).toFile(outPath);
        let stats = await fs.stat(outPath);
        while (stats.size > 500*1024 && quality>20) {
          quality -= 10;
          await pipeline.jpeg({ mozjpeg:true, quality, progressive:true }).toFile(outPath);
          stats = await fs.stat(outPath);
        }
      }

      const finalStats = await fs.stat(outPath);
      console.log(`✅ ${relPath} → ${(finalStats.size/1024).toFixed(1)} KB`);
    } catch (err) {
      console.error(`❌ Failed ${relPath}: ${err.message}`);
    }
  }

  console.log('✅ Optimization complete.');
})();
