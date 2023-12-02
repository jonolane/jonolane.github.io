
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jonathanlane/Documents/Development/Jono Lane/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/jonathanlane/Documents/Development/Jono Lane/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/jonathanlane/Documents/Development/Jono Lane/src/pages/index.tsx"))
}

