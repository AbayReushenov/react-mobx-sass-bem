#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const [, , rawName] = process.argv;
if (!rawName) {
  console.error("Usage: npm run gen:block -- <BlockName>");
  process.exit(1);
}

const blockName = rawName.replace(/\s+/g, "");
if (!/^[A-Z][A-Za-z0-9]+$/.test(blockName)) {
  console.error("Block name must be in PascalCase, e.g. Card, UserProfile");
  process.exit(1);
}

const componentsDir = path.resolve("./src/components", blockName);
fs.mkdirSync(componentsDir, { recursive: true });

const tsxPath = path.join(componentsDir, `${blockName}.tsx`);
const scssPath = path.join(componentsDir, `${blockName}.scss`);

const tsxContent = `import React from "react";
import "./${blockName}.scss";

type ${blockName}Props = {
  className?: string;
  children?: React.ReactNode;
};

export const ${blockName}: React.FC<${blockName}Props> = ({ className = "", children }) => {
  const baseClass = "${blockName.toLowerCase()}";
  const classes = [baseClass, className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      <div className="${blockName.toLowerCase()}__content">{children}</div>
    </div>
  );
};
`;

const scssContent = `.${blockName.toLowerCase()} {
  // Block styles
  &__content {
    // Element styles
  }

  &--modifier {
    // Modifier styles
  }
}
`;

if (!fs.existsSync(tsxPath)) fs.writeFileSync(tsxPath, tsxContent, "utf8");
if (!fs.existsSync(scssPath)) fs.writeFileSync(scssPath, scssContent, "utf8");

console.log(`Created BEM block at src/components/${blockName}`);
