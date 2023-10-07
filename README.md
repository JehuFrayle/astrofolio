# My Portfolio

Currently working on my portfolio, wich is mean to work as an index page to my projects section.

For this I'm using **TypeScript** on the logic and **TailwindCSS** for the styles.

![Portfolio header](https://projects.jehufrayle.com/resources/images/ssportfolio-desktop.jpg)

## proyectos.json
My portfolio dynamically adds card of each project reading the information of the *proyectos.json*. This file contains an array with all the projects using the **Project** type in *types.d.ts*.

This type have the follow structure:
```TypeScript
type project = {
    name: string,
    url: string,
    imageURL: string,
    description: string,
    technologies: technologies[]
}
type technologies = 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'NodeJS' | 'VueJS' | 'TypeScript' | 'Webpack';
```

## referentes.json
Recently I moved the proyectos.json to an *info* directory because I realized I will need more json files for the information. In this directory I save the new *referentes.json* file, logic is the same of *proyectos.json* but this one is for the Referents section.

For this, I created a new referent type with the following structure:
```TypeScript
type referent = {
    name: string,
    URL: string,
    imgURL: string,
    reason: string
}
```
Maybe I should be more specific about types...

---

### Current issues I have found and I'm fixing (or I've fixed).
- Entry transitions (called revealingAnimations on the project) are causing overflow and making the site wider. ✅
- Referents transition delay is causing them to fight each other. ✅
- Social media container is not centered. ✅
- Projects cards doesn't show the backface on Firefox. ✅
- Improved with Astro 🚀
---
| I'm leaving the Astro initial readme for begginers (like me).

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
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

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
