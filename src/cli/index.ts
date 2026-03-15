import { runMigration } from "../index";

async function start() {
  console.log("Starting Tailwind upgrade...");

  await runMigration();
}

start();
