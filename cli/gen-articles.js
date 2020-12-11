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
    const tags = String(result.metadata.tags).split(',').map((t) => `'${t}'`).join(', ')
    fileText += '  {\n' +
      `    id: '${fileName}',\n` +
      `    name: '${result.metadata.name}',\n` +
      `    image: '${result.metadata.image}',\n` +
      `    type: '${result.metadata.type}',\n` +
      `    tags: [${tags}],\n` +
      `    content: '${(result.content.startsWith('\n') ? result.content.replace(/^\n/, '') : result.content).replace(/\n/g, '\\n')}',\n` +
    `  },\n`
    console.log(`${fileName} が見つかりました`)
  }
}

fileText += ']\n\nexport default data\n'

fs.writeFile('src/lib/articles.js', fileText, (err) => {
  if (err) throw err
  console.log('記事の変換が成功しました')
})
