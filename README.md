# My Portfolio

A modern, fast, and elegant personal portfolio built with **11ty v3** and **Tailwind CSS v4**.

## Features

- ⚡ **Static Site Generation** - Blazing fast with 11ty
- 🎨 **Beautiful UI** - Styled with Tailwind CSS v4
- 🎵 **Music Section** - Dedicated page for music projects
- 🖼️ **Collections** - Showcase all your projects
- 🌙 **Dark Mode** - Built-in dark mode support
- 📱 **Fully Responsive** - Mobile-first design
- 🚀 **Zero Dependencies** - Minimal and clean setup

## Pages

- **Home** - Landing page with featured projects
- **About** - About you and your skills
- **Music** - Music projects and collaborations
- **Collections** - All your projects in one place

## Custom Color Palette

This portfolio uses a curated color theme:

- **Just Black**: `#131313`
- **Light Lavender**: `#E6E6FA`
- **Lilac**: `#C8A2C8`
- **Periwinkle**: `#CCCCFF`
- **Light Gray**: `#F2F2F2`
- **Dark Purple**: `#5D4777`
- **Soft Black**: `#333333`
- **Soft Sage**: `#D1E2C4`
- **Pale Silver**: `#E8E8E8`

## Getting Started

### Prerequisites

- Node.js 18.x or higher
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

## License

This project is open source and available under the MIT License.