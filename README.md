# OBN Portfolio & Toolbase

This repository contains the Open Build Network (OBN) portfolio site combined with the comprehensive offline-first Toolbase project.

## OBN Portfolio
This repo is the portfolio site of OBN, showcasing our mission to build open, privacy-first, community-driven technologies.

---

## Toolbase

> Every tool you need. Zero data leaves your machine.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![CI](https://github.com/toolbase/toolbase/actions/workflows/ci.yml/badge.svg)](https://github.com/toolbase/toolbase/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Powered by WebAssembly](https://img.shields.io/badge/Powered%20by-WebAssembly-654ff0)](https://webassembly.org)
[![Built with Pyodide](https://img.shields.io/badge/Python-Pyodide-3776ab)](https://pyodide.org)

---

## What is Toolbase?

Toolbase is a privacy-first, browser-native toolbase — a single platform where every tool you need lives in one place, and every operation happens entirely on your machine.

No uploads. No servers. No subscriptions. No compromises.

Whether you're compressing a PDF, analyzing a dataset, redacting secrets from config files, or building a diagram — Toolbase processes everything locally using WebAssembly. Your files never leave your browser.

---

## Why Toolbase?

| Feature                   | Toolbase            | Typical Online Tools       |
| ------------------------- | ------------------- | -------------------------- |
| Files processed locally   | ✅ Always           | ❌ Uploaded to servers     |
| Free to use               | ✅ Forever          | ⚠️ Freemium / paywalled    |
| Works offline             | ✅ PWA support      | ❌ Requires internet       |
| Open source               | ✅ MIT License      | ❌ Proprietary             |
| No account required       | ✅ Never            | ⚠️ Often required          |
| No data retention         | ✅ Nothing stored   | ❌ Files stored on servers |
| Python-powered processing | ✅ Via Pyodide/WASM | N/A                        |

---

## Tools

| Tool                 | Category  | Description                                    | Engine        |
| -------------------- | --------- | ---------------------------------------------- | ------------- |
| 🔮 Magic PDF         | PDF       | Compress, merge, split, protect, sign, convert | Python + WASM |
| 🪓 Pixel Axe         | Image     | Compress, resize, upscale, steganography       | Python + WASM |
| 🔍 Data Lens         | Data      | SQL + Python analysis on CSV/JSON              | Python + WASM |
| 🔒 Redact Secrets    | Security  | Scan and redact API keys, passwords, tokens    | Python + WASM |
| 🎨 Open Draw         | Drawing   | Diagrams, flowcharts, architecture charts      | Browser JS    |
| 🔤 Base64            | Developer | Encode/decode text, files, images              | Browser JS    |
| 📐 JSON to Interface | Developer | Convert JSON to TypeScript interfaces          | Browser JS    |
| 📡 Ping Tester       | Network   | Test host latency and reachability             | Browser JS    |
| ⚡ Speed Test        | Network   | Measure download/upload speed                  | Browser JS    |

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (TypeScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **WebAssembly:** [Pyodide](https://pyodide.org) — Python in the browser
- **Processing:** Web Workers — heavy tasks never block the UI
- **Architecture:** 100% client-side — zero backend

---

## Getting Started

### Run locally

```bash
# Start the development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Other commands

```bash
npm run build        # Production build
npm run lint         # Run ESLint
npm run test         # Run tests
```

---

## Contributing

Toolbase is open source and we welcome contributions of all kinds — new tools, bug fixes, performance improvements, documentation, and more.

---

## Security

Toolbase's security model is simple: **nothing leaves the browser.** All processing happens in your browser's sandboxed environment using WebAssembly.

---

## License

[MIT](LICENSE) — free to use, modify, and distribute.

---

_Built with ❤️ for privacy, by people who believe powerful tools should be free._
