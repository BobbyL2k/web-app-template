# Backend

## Project Setup

1. Setup project as NPM package
   - `npm init`
2. update `.gitignore`
   - added `node_modules`
3. Use biomejs as default formatter
   - `npm install --save-dev --save-exact @biomejs/biome`
   - `npx @biomejs/biome init`
   - update `biome.json`
      - formatter:
        - indentStyle: `"space"`
        - indentWidth: `4`
      - files.ignore:
        - added `"dist/**/*"`
      - javascript.formatter.quoteStyle: `"single"`
   - update `package.json`
      - scripts.lint: "biome --write"
3. Install TypeScript
   - `npm install typescript tsc-alias concurrently @types/node --save-dev`
   - `npx tsc --init`
   - update `tsconfig.json`
      - Configure for Node.js 20 LTS
         - based on https://www.npmjs.com/package/@tsconfig/node20
         - compilerOptions:
           - target: "es2022"
           - module: "node16"
      - General project and code style config
         - compilerOptions:
           - sourceMap: true
           - paths:

              ```json
              {
                 "@/lib/*": ["../common/lib/*", "./lib/*"],
                 "@/*": ["../common/src/*"]
              }
              ```
           - outDir: "./dist"
           - allowSyntheticDefaultImports: false
           - esModuleInterop: false
   - update `.gitignore`
     - added `dist`
   - update `package.json`
     - type:
       - `"module"`
   - added `../common`