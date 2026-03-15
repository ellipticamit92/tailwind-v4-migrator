import * as fs from "fs";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

function transformClasses(classes: string) {
  return classes.replace("space-x-", "gap-x-").replace("space-y-", "gap-y-");
}

export function migrateReact(files: string[]) {
  files.forEach((file) => {
    const code = fs.readFileSync(file, "utf8");

    const ast = parse(code, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    traverse(ast, {
      JSXAttribute(path) {
        if (path.node.name.name === "className") {
          const value = path.node.value;

          if (value && value.type === "StringLiteral") {
            const updated = transformClasses(value.value);

            if (path.node.value) {
              if (value.type === "StringLiteral") {
                value.value = updated;
              }
            }
          }
        }
      },
    });

    const output = generate(ast, {}, code);

    fs.writeFileSync(file, output.code);

    console.log("Updated:", file);
  });
}
