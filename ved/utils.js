const fs = require('fs')
const { promisify } = require('util')
const iconv = require('iconv-lite')
const path = require('path')

const readFile = promisify(fs.readFile)

exports.readEncoded = async (pathname, encoding) => {
  const content = await readFile(path.resolve(__dirname, pathname))
  return iconv.decode(content, encoding)
}
