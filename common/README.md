# Common code for Isomorphic TypeScript Web Application

## Project Setup

Instructions on how this project was setup.

1. Setup project as NPM package
    - `npm init`
    - Added .gitignore entry for `node_modules`
2. Added [Biome](https://biomejs.dev/)
    - `npm install --save-dev --save-exact @biomejs/biome@1.9.4` to match backend
    - Initialized `biome.json` with `npx @biomejs/biome init`
    - Updated `biome.json`
        ```json
        {
            "formatter": {
                "indentStyle": "space",
                "indentWidth": 4
            },
        }
        ```
    - Added `lint`, `lint:fix` scripts to `package.json`
3. Added minimal code for testing import from backend
    - See step 5  in `../backend`
    - Added `src` directory with `sub.ts` file
    - Added `lib` directory with `assert.ts` file
