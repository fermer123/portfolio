import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { stdout } from 'node:process';
import sharp from 'sharp';

const inputDirectory = path.resolve('src/assets/images');
const outputDirectory = path.join(inputDirectory, 'optimized');
const sourceFiles = (await readdir(inputDirectory)).filter((file) =>
  /\.(png|jpe?g)$/i.test(file),
);

await mkdir(outputDirectory, { recursive: true });

for (const file of sourceFiles) {
  const inputPath = path.join(inputDirectory, file);
  const outputPath = path.join(
    outputDirectory,
    `${path.parse(file).name}.webp`,
  );

  await sharp(inputPath)
    .webp({ quality: 82, effort: 5, alphaQuality: 90 })
    .toFile(outputPath);

  const { size: sourceSize } = await stat(inputPath);
  const { size: outputSize } = await stat(outputPath);
  const savedPercent = Math.round((1 - outputSize / sourceSize) * 100);
  stdout.write(`${file}: ${savedPercent}% smaller\n`);
}
