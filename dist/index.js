'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onHandleVirtual = onHandleVirtual;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://developer.mozilla.org/en-US/docs/Web/API
var code = '\n/**\n * @external {CanvasRenderingContext2D} https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D\n */\n\n/**\n * @external {DocumentFragment} https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment\n */\n\n/**\n * @external {Element} https://developer.mozilla.org/en-US/docs/Web/API/Element\n */\n\n/**\n * @external {Event} https://developer.mozilla.org/en-US/docs/Web/API/Event\n */\n\n/**\n * @external {Node} https://developer.mozilla.org/en-US/docs/Web/API/Node\n */\n\n/**\n * @external {NodeList} https://developer.mozilla.org/en-US/docs/Web/API/NodeList\n */\n\n/**\n * @external {XMLHttpRequest} https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest\n */\n\n/**\n * @external {AudioContext} https://developer.mozilla.org/en/docs/Web/API/AudioContext\n */\n';

/**
 * Adds external references to be processed.
 *
 * @param {PluginEvent} ev - A plugin event.
 */
function onHandleVirtual(ev) {
  ev.data.code.push({ code: code, filePath: _path2.default.relative(process.cwd(), __filename) });
}