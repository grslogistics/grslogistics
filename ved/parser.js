const R = require('ramda')
const { readEncoded } = require('./utils')

const ENCODING = 'CP866'
const SEPARATOR = '|'

buildVedGraph()

async function buildVedGraph () {
  const raw = await getData()

  const graph = [raw.sections[0]].map(section => processSection(section, raw))

  console.log(JSON.stringify(graph[0], null, 2))
}

function processSubitem (subitem) {
  return {
    code: subitem.group + subitem.item + subitem.subitem,
    name: subitem.name,
    dateEnd: subitem.dateEnd
  }
}

function processItem (item, raw) {
  const children = raw.subitems
    .filter(R.whereEq({ item: item.item, group: item.group }))
    .map(subitem => processSubitem(subitem))

  return {
    code: item.group + item.item,
    name: item.name,
    childCodes: children.map(R.prop('code')),
    children
  }
}

function processGroup (group, raw) {
  const children = raw.items
    .filter(R.whereEq({ group: group.group }))
    .map(item => processItem(item, raw))

  return {
    code: group.group,
    name: group.name,
    childCodes: children.map(R.prop('code')),
    children
  }
}

function processSection (section, raw) {
  const children = raw.groups
    .filter(R.whereEq({ section: section.section }))
    .map(group => processGroup(group, raw))

  return {
    section: section.section,
    name: section.name,
    childCodes: children.map(R.prop('code')),
    children
  }
}

async function getData () {
  const getRows = R.compose(R.init, R.tail, R.split('\n'))
  return {
    sections: getRows(await readEncoded('./raw/TNVED1.TXT', ENCODING))
      .map(parseRow(['section', 'name', 'annotation', 'dateStart', 'dateEnd']))
      .filter(R.where({ dateEnd: R.isEmpty })),
    groups: getRows(await readEncoded('./raw/TNVED2.TXT', ENCODING))
      .map(
        parseRow([
          'section',
          'group',
          'name',
          'annotation',
          'dateStart',
          'dateEnd'
        ])
      )
      .filter(R.where({ dateEnd: R.isEmpty })),
    items: getRows(await readEncoded('./raw/TNVED3.TXT', ENCODING))
      .map(parseRow(['group', 'item', 'name', 'dateStart', 'dateEnd']))
      .filter(R.where({ dateEnd: R.isEmpty })),
    subitems: getRows(await readEncoded('./raw/TNVED4.TXT', ENCODING))
      .map(
        parseRow(['group', 'item', 'subitem', 'name', 'dateStart', 'dateEnd'])
      )
      .filter(R.where({ dateEnd: R.isEmpty }))
  }
}

const parseRow = keys => row => {
  const values = row.split(SEPARATOR)
  return keys.reduce((data, key, i) => {
    data[key] = formatString(values[i])
    return data
  }, {})
}

function formatString (string) {
  return string.replace(/\s/g, ' ').trim()
}
