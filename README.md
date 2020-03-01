# Gatsby Starter Kit (with typescript)

## Usage:

- Clone the repo
- install the dependencies `$ npm install`
- create a `.env.development` file at the root of the project.
  - populate it with this content: `GATSBY_GRAPHQL_IDE=playground`
  - Later on, you will want to add your API Keys and whatnot inside this file.
- dev mode `$ npm run developp`
- build `$ npm run build`

## Generate GraphQL Typescript definitions:

- run `$ npm run developp`
  - once it's ready, run `$ npm run generate` inside another tab
  - beware, the generated types will often contain duplicates that you will have to clean up manually.

## Features:

- Styles: [Tailwind CSS](https://tailwindcss.com/)
