const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const { data } = await graphql(`
    {
      allServicesYaml {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  data.allServicesYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/service.jsx'),
      context: {
        slug: node.fields.slug
      }
    })
  })
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'ServicesYaml') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: '/services' + slug.replace(/\/$/, ``)
    })
  }

  if (node.internal.type === 'StaticYaml') {
    const { name } = getNode(node.parent)
    createNodeField({
      node,
      name: 'filename',
      value: name
    })
  }
}

module.exports.resolvableExtensions = () => ['.json']

// exports.onCreatePage = ({ page, boundActionCreators }) => {
//   const { createPage, deletePage } = boundActionCreators
//   return new Promise(resolve => {
//     const oldPage = Object.assign({}, page)
//     page.path = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))
//     if (page.path !== oldPage.path) {
//       deletePage(oldPage)
//       createPage(page)
//     }
//     resolve()
//   })
// }
