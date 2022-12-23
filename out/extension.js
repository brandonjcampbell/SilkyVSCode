"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const silkyElementEditor_1 = require("./silkyElementEditor");
function activate(context) {
    // Register our custom editor providers
    context.subscriptions.push(silkyElementEditor_1.SilkyElementEditorProvider.register(context));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map