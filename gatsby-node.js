const R = require('ramda')
const path = require('path')

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

exports.onCreateNode = ({ node, getNode, getNodes, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.owner === 'gatsby-transformer-yaml') {
    const { dir } = getNode(node.parent)
    addImageRelativePaths(node, node, dir, boundActionCreators)
  }

  if (node.internal.type === 'ServicesYaml') {
    const slug = node.title.replace(/[^a-zA-Z0-9\-_]/g, '').toLowerCase()
    createNodeField({
      node,
      name: 'slug',
      value: '/services/' + slug
    })
  }

  if (node.internal.type === 'PagesYaml') {
    const { name } = getNode(node.parent)
    createNodeField({
      node,
      name: 'filename',
      value: name
    })
  }
}

module.exports.resolvableExtensions = () => ['.json']

function addImageRelativePaths (
  node,
  data,
  dirname,
  boundActionCreators,
  prefix = ''
) {
  Object.keys(data).forEach(key => {
    const value = data[key]
    if (isPlainObject(value)) {
      addImageRelativePaths(
        node,
        value,
        dirname,
        boundActionCreators,
        prefix + key + '_'
      )
    } else if (isImagePath(value)) {
      const absolutePath = path.join(__dirname, 'static', value)
      const relative = path.relative(dirname, absolutePath)
      const { createNodeField } = boundActionCreators
      createNodeField({
        node,
        name: prefix + key + '_relative',
        value: relative
      })
    }
  })
}

function isPlainObject (obj) {
  return !Array.isArray(obj) && R.is(Object, obj)
}

function isImagePath (maybePath) {
  if (typeof maybePath !== 'string') return false

  const ext = path.extname(maybePath).toLowerCase()
  return ['.jpeg', '.jpg', '.png', '.webp', '.tif', '.tiff'].includes(ext)
}
