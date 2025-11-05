
## Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with live reload:

```bash
npm start
```

The site will be available at `http://localhost:8080`

### Build

Build the static site for production:

```bash
npm run build
```

Output is in the `_site` directory.

## Project Structure

```
src/
├── css/
│   └── style.css           # Main stylesheet with Tailwind
├── _layouts/
│   └── base.njk           # Base layout template
├── _includes/
│   ├── navigation.njk     # Navigation component
│   └── footer.njk         # Footer component
├── index.njk              # Home page
├── about.njk              # About page
├── music.njk              # Music page
└── collections.njk        # Collections page
```

## Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration with custom colors
- `.eleventy.js` - 11ty configuration with Tailwind CSS v4 processing
- `postcss.config.js` - PostCSS configuration
- `package.json` - Project dependencies and scripts

## Customization

### Adding New Pages

1. Create a new `.njk` file in the `src` directory
2. Add front matter with layout, title, and permalink:

```yaml
---
layout: base.njk
title: Page Title
description: Page description
permalink: /page-slug/
---
```

3. Add content below the front matter

### Modifying Colors

Edit `tailwind.config.js` and update the colors in the `theme.extend.colors` section.

### Styling Components

Use Tailwind CSS utility classes in your templates. The custom colors are available as:
- `text-darkPurple`
- `bg-lilac`
- `text-justBlack`
- etc.

## Built With

- [11ty v3](https://www.11ty.dev/) - Static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [PostCSS](https://postcss.org/) - CSS transformation
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating engine

## Deployment
### Vercel

The project includes a `vercel.json` configuration that automatically tells Vercel to use `_site` as the output directory.

1. Push your repository to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel will automatically detect the configuration and deploy

No additional configuration needed!

### Other Hosting Options

Since this is a static site, you can deploy the `_site` directory to:
- **Netlify** - Connect your GitHub repo directly
- **GitHub Pages** - Push to `gh-pages` branch
- **AWS S3 + CloudFront**
- **Any static hosting service**

Simply build the project with `npm run build` and upload the `_site` folder.

## License

This project is open source and available under the MIT License.