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