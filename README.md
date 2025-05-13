# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📁 Asset Handling

This project uses Astro's built-in asset handling system for all images and static files. Rather than referencing files with direct URLs, we use the following pattern:

```astro
---
// Import individual images directly
import myImage from '../assets/images/my-image.jpg';

// For multiple images like in a gallery, use dynamic imports
const imageImports = await Promise.all(
  Array.from({ length: 10 }).map(async (_, i) => {
    return import(`../assets/images/gallery/image-${i + 1}.jpg`);
  })
);
---

<!-- Using a single image -->
<img src={myImage.src} alt="My Image" />

<!-- Using the Image component (better for optimization) -->
<Image src={myImage} alt="My Image" />

<!-- Using dynamically imported images -->
{imageImports.map((img, i) => (
  <Image src={img.default} alt={`Gallery image ${i}`} />
))}
```

This approach ensures that:
1. Assets are properly optimized during build
2. Files are fingerprinted for cache busting
3. References work correctly in both development and production
4. No need to manually copy files between directories
