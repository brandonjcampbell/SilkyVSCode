# Silky for VS Code

An early experiment (Dec 2022) at bringing [Silky](https://github.com/brandonjcampbell/Silky) — the graph-native story-planning tool — into VS Code as a set of custom editors.

The idea: a Silky project is a folder of JSON files, so instead of a standalone Electron app, register a VS Code custom editor for each actor type and let writers work on their story graph inside the editor they already use. The extension registers four custom text editors:

| File pattern | Editor |
|---|---|
| `*.silky.element` | Element — a character, place, or thing |
| `*.silky.fact` | Fact — something true in the world |
| `*.silky.snippet` | Snippet — a unit of prose |
| `*.silky.thread` | Thread — an ordered sequence of snippets |

Only the Element editor (`src/silkyElementEditor.ts`, `media/silkyElement.*`) got real work; the others are registered but stubbed.

## Status

Abandoned in favor of the Electron app. Kept for reference. The scaffold is Microsoft's [custom-editor-sample](https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample), which is why `package.json` still carries its name and publisher.

## Running it

```bash
npm install
npm run compile
```

Then F5 in VS Code to launch an Extension Development Host and open a `.silky.element` file.
