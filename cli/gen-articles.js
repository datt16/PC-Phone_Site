const fs = require('fs')
const path = require('path')
const metadataParser = require('markdown-yaml-metadata-parser')

const paths = fs.readdirSync('articles')
let fileText = 'const data = [\n'

for (let p of paths) {
  p = `articles/${p}`
  const fileName = path.basename(p, '.md')
  if (fileName.startsWith('_')) console.log(`${fileName} をスキップしました`)
  if (fs.statSync(p).isFile() && !fileName.startsWith('_')) {
    const result = metadataParser(fs.readFileSync(p).toString('utf-8'))
    const tags = String(result.metadata.tags).split(',').filter(t => t !== 'undefined').map((t) => `'${t}'`).join(', ')
    const camera = String(result.metadata.camera).split(',').filter(t => t !== 'undefined').map((t) => `'${t}'`).join(', ')
    const biometrics = String(result.metadata.biometrics).split(',').filter(t => t !== 'undefined').map((t) => `'${t}'`).join(', ')
    fileText += '  {\n' +
      `    id: '${fileName}',\n` +
      `    name: '${result.metadata.name ? result.metadata.name : ''}',\n` +
      `    image: '${result.metadata.image ? result.metadata.image : ''}',\n` +
      `    type: '${result.metadata.type ? result.metadata.type : ''}',\n` +
      `    cpu: '${result.metadata.cpu ? result.metadata.cpu : ''}',\n` +
      `    ram: '${result.metadata.ram ? result.metadata.ram : ''}',\n` +
      `    storage: '${result.metadata.storage ? result.metadata.storage : ''}',\n` +
      `    battery: '${result.metadata.battery ? result.metadata.battery : ''}',\n` +
      `    camera: [${camera}],\n` +
      `    biometrics: [${biometrics}],\n` +
      `    ipCode: '${result.metadata.ipCode ? result.metadata.ipCode : ''}',\n` +
      `    hasEarphone: ${result.metadata.hasEarphone ? true : false},\n` +
      `    charge: '${result.metadata.charge ? result.metadata.charge : ''}',\n` +
      `    tags: [${tags}],\n` +
      `    content: '${(result.content.startsWith('\n') ? result.content.replace(/^\n/, '') : result.content).replace(/\n/g, '\\n')}',\n` +
    '  },\n'
    console.log(`${fileName} が見つかりました`)
  }
}

fileText += ']\n\nexport default data\n'

fs.writeFile('src/lib/articles.js', fileText, (err) => {
  if (err) throw err
  console.log('記事の変換が成功しました')
})
