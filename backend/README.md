# Isomorphic TypeScript Web Backend

## Setup

1. After initial clone, run
    - `npm install` to install all dependencies.
    - `npm run setup` to install TypeScript patches for `ts-runtime-checks`

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
5. Set up backend project to be able to import common code
    - See step 3 in `../common`
    - Updated `start` script in `package.json` to account for common code
    - Updated `tsconfig.json` with
        ```json
        {
            "compilerOptions": {
                "paths": {
                    "@/lib/*": ["./lib/*", "../common/lib/*"],
                    "@/*": ["./src/*", "../common/src/*"],
                },
            }
        }
        ```
    - Updated `index.ts` to test importing common code
6. Set up `ts-runtime-checks`
    - `npm install --save-dev ts-runtime-checks ts-patch`
    - Updated `README.md` with instructions for setting up `ts-runtime-checks`
    - Updated `tsconfig.json` with
        ```json
        {
            "compilerOptions": {
                "plugins": [
                    {
                        "transform": "ts-runtime-checks"
                    }
                ]
            }
        }
        ```
    - Added `setup` scripts to `package.json`
