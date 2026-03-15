import { glob } from "glob";

export function scanProject() {
  const reactFiles = glob.sync("src/**/*.{js,jsx,ts,tsx}");

  const cssFiles = glob.sync("src/**/*.{css}");

  return {
    reactFiles,
    cssFiles,
  };
}
