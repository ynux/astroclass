# Sunys Webpage

This is my personal webpage for going freelance.

It is basically the code from the scrimba / coursera class [Build Fast Websites with Astro](https://www.coursera.org/learn/build-fast-websites-with-astro) by [James Q. Quick]. I really enjoyed this course and highly recommend it. The class again is based on the Astro basics template, as you see below.

I'm not a frontend person. I just did this because I had to, then found I enjoyed it. Not the first time in my career. However, this is probably as far as i get in this field.

It all started with https://brittanychiang.com . Every search led to it, and the first time i saw it, i wondered: Nice, but this is really what everybody is so crazy about? This shows how blind i was. The more i look at it the more beautiful it gets. It is so beautiful, in every detail.

## Design Decisions

- Keep everything on one page
- do not use all data fields of the projects (industry, roles)
- do not attempt to do the cool mouse effect of Brittany Chiang (it would be cool, though ...)

## Deployment

locally: `npm run dev`
to github pages: Follow https://docs.astro.build/en/guides/deploy/github/

## Troubleshooting

- getting a `The collection "project" does not exist or is empty. Please check your content config file for errors.`, or rounding of image edges doesn't have an effect : Kill your server and run `npm run dev` again

## Glitches

## Astro Starter Kit: Basics (not Suny's documentation)

```sh
npm create astro@latest -- --template basics
```

### 🚀 Project Structure

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

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
