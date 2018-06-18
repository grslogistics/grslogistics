exports.onCreateNode = function ({ node }) {
  if (node.internal.type === 'File') {
    console.log(node)
  }
}

// exports.onCreatePage = function ({ page }) {
//   console.log('#PAGE', page, '###')
// }
