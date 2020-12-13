const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify')

const outDirPath = path.join(__filename, '../../out')

const beautifyOptions = {
  indent_size: 2,
  end_with_newline: true,
  preserve_newlines: false,
  max_preserve_newlines: 0,
  wrap_line_length: 0,
  wrap_attributes_indent_size: 0,
}

const readdirRecursively = (dir, files = []) => {
  const paths = fs.readdirSync(dir)
  const dirs = []
  for (const path of paths) {
    fs.statSync(`${dir}/${path}`).isDirectory() ? dirs.push(`${dir}/${path}`) : files.push(`${dir}/${path}`)
  }
  for (const d of dirs) files = readdirRecursively(d, files)
  return files.filter(file => file.match(/.*\.(html||js)$/))
}

const replaceText = (filePath) => {
  let relative = path.relative(path.dirname(filePath), outDirPath)
  let text = fs.readFileSync(filePath).toString('utf-8')
  let result = ''
  const isHTML = filePath.match(/.*\.html$/)
  const isJS = filePath.match(/.*\.js$/)

  relative = (relative != '' ? `${relative}/` : relative)

  if (isHTML) {
    text = text.replace(new RegExp('src="/', 'g'), `src="${relative}`)
      .replace(new RegExp('href="/', 'g'), `href="${relative}`)
      .replace('&quot;', '\'')
    result = beautify.html(text, beautifyOptions)
  } else if (isJS) {
    result = beautify.js(text, beautifyOptions)
  }


  fs.writeFileSync(filePath, result, (err) => {
    if (err) console.log(err)
  })
}

const f = readdirRecursively(outDirPath)
f.forEach(file => {
  replaceText(file)
})
