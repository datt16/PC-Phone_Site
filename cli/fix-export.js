var fs = require('fs')
var path = require('path')

const outDirPath = path.join(__filename, '../../out')

const readdirRecursively = (dir, files = []) => {
  const paths = fs.readdirSync(dir)
  const dirs = []
  for (const path of paths) {
    const stats = fs.statSync(`${dir}/${path}`)
    if (stats.isDirectory()) {
      dirs.push(`${dir}/${path}`)
    } else {
      files.push(`${dir}/${path}`)
    }
  }
  for (const d of dirs) {
    files = readdirRecursively(d, files)
  }
  return files.filter(file => file.match(/.*\.html$/))
}

const replaceText = (filePath) => {
  let relative = path.relative(path.dirname(filePath), outDirPath)
  relative = (relative != '' ? `${relative}/` : relative)
  let text = fs.readFileSync(filePath).toString('utf-8')
  text = text.replace(new RegExp('src="/', 'g'), `src="${relative}`)
  text = text.replace(new RegExp('href="/', 'g'), `href="${relative}`)
  fs.writeFileSync(filePath, text, (err) => {
    if (err) console.log(err)
  })
}

const f = readdirRecursively(outDirPath)
f.forEach(file => {
  replaceText(file)
})
