import { scanProject } from "./scanner/scanProject";
import { migrateCss } from "./transforms/migrateCss";
import { migrateReact } from "./transforms/migrateReact";

export async function runMigration() {
  const project = scanProject();

  console.log("React files:", project.reactFiles.length);
  console.log("CSS files:", project.cssFiles.length);

  migrateCss(project.cssFiles);
  migrateReact(project.reactFiles);

  console.log("Migration finished 🚀");
}
