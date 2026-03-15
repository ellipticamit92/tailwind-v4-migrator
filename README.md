# Tailwind v4 Migrator 🚀

Automatically upgrade **Tailwind CSS v3 projects to Tailwind CSS v4** with a single command.

This CLI tool scans your project, updates Tailwind configuration, migrates CSS directives, and safely transforms Tailwind classes using AST-based transformations.

---

## ✨ Features

* 🔄 Upgrade **Tailwind CSS v3 → v4**
* 🎨 Convert `@tailwind` directives → `@import "tailwindcss"`
* ⚡ Generate `global.css` from `tailwind.config`
* 🧠 AST-based class transformation
* 🔍 Project scanning with safe file filtering
* 🛡 Avoids modifying `node_modules`, `dist`, `.next`
* 📦 Automatically updates `package.json`

---

## 📦 Installation

Run directly using **npx**:

```
npx tailwind-v4-migrator ./my-project
```

Or install globally:

```
npm install -g tailwind-v4-migrator
```

Then run:

```
tailwind-v4-migrator ./my-project
```

---

## 🚀 Usage

Upgrade a Tailwind project:

```
tailwind-v4-migrator ./project-folder
```

Example output:

```
Scanning project...

React files: 18
CSS files: 2

Updated CSS: src/styles/global.css
Updated Tailwind version in package.json

Migration finished 🚀
```

---

## 🔧 What This Tool Migrates

### CSS Directives

Before (Tailwind v3)

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

After (Tailwind v4)

```
@import "tailwindcss";
```

---

### React Class Migration

Before:

```
className="space-x-4 text-white"
```

After:

```
className="gap-x-4 text-white"
```

---

### Config Migration

Before (`tailwind.config.ts`)

```
theme: {
  extend: {
    colors: {
      primary: "#1da1f2"
    }
  }
}
```

After (`global.css`)

```
@import "tailwindcss";

@theme {
  --color-primary: #1da1f2;
}
```

---

## 📁 Project Structure

```
tailwind-v4-migrator
│
├── src
│   ├── cli
│   ├── scanner
│   ├── transforms
│   ├── constants
│   └── index.ts
│
├── codemods
├── examples
├── tests
```

---

## 🛣 Roadmap

Planned features:

* Support `clsx` and `classnames`
* Template literal class detection
* Conditional class migration
* Full Tailwind config parser
* GitHub pull request automation
* SaaS migration platform

---

## 🧪 Example Project

A sample project is included in:

```
examples/demo-project
```

You can test migrations locally.

---

## 🤝 Contributing

Contributions are welcome!

Steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

See **CONTRIBUTING.md** for details.

---

## 🛡 License

MIT License.

---

## ⭐ Support the Project

If this tool helped you migrate your Tailwind project:

⭐ Star the repository
🐛 Report bugs
💡 Suggest improvements

---

## 👨‍💻 Author

Created by **Amit** — frontend engineer passionate about developer tooling.
