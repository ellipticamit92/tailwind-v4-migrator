import * as fs from "fs";

export function migrateCss(files: string[]) {
  files.forEach((file) => {
    let content = fs.readFileSync(file, "utf8");

    if (content.includes("@tailwind")) {
      content = content
        .replace("@tailwind base;", "")
        .replace("@tailwind components;", "")
        .replace("@tailwind utilities;", "");

      content = '@import "tailwindcss";\n' + content;

      fs.writeFileSync(file, content);

      console.log("Updated:", file);
    }
  });
}
