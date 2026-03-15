# Contributing to Tailwind v4 Migrator 🚀

First off, thank you for considering contributing!
We welcome contributions from developers of all experience levels.

This project aims to help developers automatically migrate **Tailwind CSS v3 projects to v4**, and contributions that improve reliability, performance, and developer experience are highly appreciated.

---

# Code of Conduct

Please be respectful and constructive when contributing.
We expect all contributors to maintain a positive and inclusive environment.

---

# How to Contribute

There are several ways you can contribute:

• Fix bugs
• Improve documentation
• Add new migration rules
• Improve performance
• Add tests
• Suggest new features

---

# Getting Started

### 1. Fork the Repository

Click **Fork** on the GitHub repository.

Then clone your fork:

```
git clone https://github.com/<your-username>/tailwind-v4-migrator.git
```

Move into the project directory:

```
cd tailwind-v4-migrator
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Run the Project Locally

```
npm run dev
```

This will run the CLI locally for testing.

Example:

```
npm run dev -- ../example-project
```

---

# Branching Strategy

Create a new branch for every change.

Branch naming examples:

```
feature/add-clsx-support
fix/css-migration-bug
docs/update-readme
```

Create a branch:

```
git checkout -b feature/your-feature-name
```

---

# Making Changes

When implementing a feature or fix:

• Keep changes small and focused
• Follow the existing project structure
• Write clean, readable code
• Add comments where necessary

---

# Running Tests

If tests exist:

```
npm test
```

Make sure all tests pass before submitting a pull request.

---

# Commit Guidelines

Use clear and descriptive commit messages.

Examples:

```
feat: add support for clsx class migration
fix: prevent scanning node_modules
docs: update README installation steps
```

Recommended commit prefixes:

```
feat
fix
docs
refactor
test
chore
```

---

# Submitting a Pull Request

1. Push your branch:

```
git push origin feature/your-feature-name
```

2. Open a Pull Request on GitHub.

3. Provide a clear description of the changes.

Example PR description:

```
Adds support for migrating Tailwind classes inside clsx() calls.

This improves migration accuracy for React projects using conditional classes.
```

---

# Reporting Bugs

If you find a bug, please open an issue and include:

• Description of the problem
• Steps to reproduce
• Example code
• Expected behavior

---

# Feature Requests

Feature suggestions are welcome!

Please open an issue describing:

• The problem you're trying to solve
• Proposed solution
• Example use cases

---

# Project Structure

```
src/
 ├── cli
 ├── scanner
 ├── transforms
 ├── constants
 └── index.ts
```

Migration logic should be implemented inside the **transforms** directory.

---

# Thank You

Your contributions help improve this tool for developers everywhere.

If you find this project useful, please consider giving it a ⭐ on GitHub.
