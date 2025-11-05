import fs from 'fs';
import path from 'path';
import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

export default function (eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Watch CSS files
  eleventyConfig.addWatchTarget("src/css/**/*.css");

  // Compile Tailwind CSS before Eleventy processes files
  eleventyConfig.on('eleventy.before', async () => {
    const inputPath = path.resolve('./src/css/style.css');
    const outputPath = './_site/css/style.css';

    const cssContent = fs.readFileSync(inputPath, 'utf8');
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const processor = postcss([
      tailwindcss(),
      cssnano({ preset: 'default' }),
    ]);

    const result = await processor.process(cssContent, {
      from: inputPath,
      to: outputPath,
    });

    fs.writeFileSync(outputPath, result.css);
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
    templateFormats: ['njk', 'md', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
}
