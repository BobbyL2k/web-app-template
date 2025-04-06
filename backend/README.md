# Isomorphic TypeScript Web Backend

## Project Setup

Instructions on how this project was setup.

1. Set up project as NPM package
    - `npm init`
    - Added .gitignore entry for `node_modules`
2. Added [Biome](https://biomejs.dev/)
    - `npm install --save-dev --save-exact @biomejs/biome`
    - Initialized `biome.json` with `npx @biomejs/biome init`
    - Updated `biome.json`
        ```json
        {
            "files": {
                "ignore": [
                    "dist/**/*"
                ]
            },
            "formatter": {
                "indentStyle": "space",
                "indentWidth": 4
            },
        }
        ```
    - Added `lint`, `lint:fix` scripts to `package.json`
3. Installed TypeScript dependencies
    - `npm install typescript tsc-alias concurrently @types/node --save-dev`
4. Added minimal TypeScript code for testing compilation
    - Initialized `tsconfig.json` with `npx tsc --init`
    - Updated `tsconfig.json` with
        ```json
        {
            "compilerOptions": {
                "target": "es2022",
                "module": "node16",
                "paths": {
                    "@/lib/*": ["./lib/*"],
                    "@/*": ["./src/*"],
                },
                "sourceMap": true,
                "outDir": "./dist",
                "allowSyntheticDefaultImports": false,
                "esModuleInterop": false,
                "forceConsistentCasingInFileNames": true,
            }
        }
        ```
    - Added minimal code for testing TypeScript compilation
        - Added `src` directory with `index.ts` file
        - Added `lib` directory with `add.ts` file
        - Added `dist` directory to `.gitignore`
        - Added `start`, `build`, `build:watch`, `clean` scripts to `package.json`
