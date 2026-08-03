# NovaPDF - Enterprise Windows PDF Reader & Editor

[![Electron](https://img.shields.io/badge/Electron-33.2.1-47848F.svg)](https://electronjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6.svg)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4.svg)](https://tailwindcss.com)
[![Platform](https://img.shields.io/badge/Platform-Windows%20x64-0078D6.svg)](https://microsoft.com/windows)

**NovaPDF** is a production-ready, high-performance Windows desktop PDF reader and editor designed to rival PDF-XChange Editor, Foxit PDF Reader, and Adobe Acrobat Reader. Built with Electron, React 19, TypeScript, Vite, TailwindCSS, Zustand, PDF.js, and Tesseract OCR.

---

## Key Features

### 🚀 High-Performance Engine
- **Sub-2 Second Startup**: GPU hardware acceleration and dynamic module loading.
- **60 FPS Continuous Scroll**: Virtualized HTML5 Canvas viewport with LRU page caching for 1,000+ page documents.
- **Multi-Tab & Split View**: Side-by-side split screen document comparison.

### ✍️ Full Annotation & Vector Tools
- **Text Markups**: Highlight, Underline, Strikeout, Squiggly.
- **Vector Shapes**: Lines, Arrows, Rectangles, Ellipses.
- **Notes & Drawing**: Freehand pencil ink drawing, sticky notes with comment threads, customizable corporate stamps, and digital signatures.

### ✂️ Page Operations & Editing
- **Page Management**: Insert blank pages, delete pages, rotate pages clockwise/counterclockwise, extract page ranges.
- **Merge & Split**: Combine multiple PDF files into one or split large documents by custom page intervals.
- **Watermarking & Security**: Add multi-page text/image watermarks and enforce AES-256 password encryption and permanent redaction.

### 🤖 AI Document Intelligence & OCR
- **Multi-Provider Support**: Seamlessly connects to OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet), Google Gemini, or local Ollama LLMs.
- **Instant AI Tools**: Executive document summarization, context Q&A chat, multi-language translation, study flashcard generation, and table extraction.
- **Tesseract OCR**: Offline optical character recognition converting scanned raster images into searchable PDF text layers.

### 🔌 Extensible Plugin Marketplace
- Pre-packaged plugins for Cloud Drive Sync, Bates Stamping, and Ultra PDF Compressor.

---

## Directory Structure

```text
NovaPDF/
├── app/
│   ├── electron/        # Electron Main, Preload, and IPC Handlers
│   └── src/
│       ├── ai/          # Multi-provider AI Workbench Engine
│       ├── components/  # Ribbon Toolbar, TabBar, Sidebars, Canvas, Modals
│       ├── ocr/         # Tesseract OCR Text Scanner Engine
│       ├── pages/       # Dashboard, Reader, Settings, Plugins, Help
│       ├── pdf/         # Canvas PDF Engine, Search Engine, Exporters
│       ├── store/       # Zustand State Stores (Document, Annotation, AI, Settings, Plugin)
│       └── types/       # Strict TypeScript type definitions
├── docs/                # User Manual & Developer Documentation
├── scripts/             # Asset generation & installer build scripts
├── tests/               # Vitest Unit & Integration test suite
├── electron-builder.yml # Windows Installer (.exe) & Portable (.zip) configuration
└── package.json
```

---

## Quick Start & Build Instructions

### Prerequisites
- Node.js LTS (v20.x or later)
- npm / yarn / pnpm

### Installation
```bash
git clone https://github.com/novapdf/novapdf.git
cd NovaPDF
npm install
```

### Run in Development Mode
```bash
npm run dev
```

### Run Automated Unit Tests
```bash
npm test
```

### Build Windows Installer (.exe) and Portable Package (.zip)
```bash
npm run build
```
The output installers will be generated under `dist-installer/`:
- `NovaPDF-Setup-1.0.0.exe` (NSIS Installer for Windows x64)
- `NovaPDF-1.0.0-win.zip` (Portable Desktop Distribution)

---

## Keyboard Shortcuts

| Action | Shortcut |
| :--- | :--- |
| **Open File** | `Ctrl + O` |
| **Save Document** | `Ctrl + S` |
| **Save As** | `Ctrl + Shift + S` |
| **Print Document** | `Ctrl + P` |
| **Find / Search** | `Ctrl + F` |
| **Zoom In** | `Ctrl + =` |
| **Zoom Out** | `Ctrl + -` |
| **Fit Width / Page** | `Ctrl + 0` |
| **Highlight Tool** | `Ctrl + H` |
| **Pencil Ink Tool** | `Ctrl + N` |

---

## License

Copyright © 2026 NovaPDF Team. Distributed under the MIT License.
