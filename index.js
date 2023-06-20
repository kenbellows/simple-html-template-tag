/**
 * Convert a template string into an Element tree
 * @param {string[]} strings
 * @param  {...any} exprs
 * @returns {Element}
 */
export function html(strings, ...exprs) {
  let s = strings[0]
  for (let i = 0; i < exprs.length; i++) {
    s += parseHtmlExpr(exprs[i])
    s += strings[i + 1]
  }
  const tmp = document.createElement('template')
  tmp.innerHTML = s
  return tmp.content.firstElementChild
}
export default html

function parseHtmlExpr(e) {
  if (e == null) {
    return ''
  }

  if (typeof e === 'string') {
    return e
  } else if (typeof e === 'number') {
    return String(e)
  } else if (e instanceof Element) {
    return e.outerHTML
  } else if (e instanceof Node) {
    return e.textContent
  }

  if (Symbol.iterator in e) {
    return Array.from(e).map(parseHtmlExpr).join('')
  }

  try {
    return JSON.stringify(e)
  } catch {
    return String(e)
  }
}
