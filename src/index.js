import path from 'path';

// https://developer.mozilla.org/en-US/docs/Web/API
const code = `
/**
 * @external {CanvasRenderingContext2D} https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */

/**
 * @external {DocumentFragment} https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
 */

/**
 * @external {Element} https://developer.mozilla.org/en-US/docs/Web/API/Element
 */

/**
 * @external {Event} https://developer.mozilla.org/en-US/docs/Web/API/Event
 */

/**
 * @external {Node} https://developer.mozilla.org/en-US/docs/Web/API/Node
 */

/**
 * @external {NodeList} https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 */

/**
 * @external {XMLHttpRequest} https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest
 */

/**
 * @external {AudioContext} https://developer.mozilla.org/en/docs/Web/API/AudioContext
 */
`;

/**
 * Adds external references to be processed.
 *
 * @param {PluginEvent} ev - A plugin event.
 */
export function onHandleVirtual(ev)
{
   ev.data.code.push({ code, filePath: path.relative(process.cwd(), __filename) });
}
