import * as vscode from 'vscode';
import { SilkyElementEditorProvider } from './silkyElementEditor';

export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(SilkyElementEditorProvider.register(context));
}
