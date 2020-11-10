var fs = require('fs')
var path = require('path')

const outDirPath = path.join(__filename, '../../out')

fs.readdir(outDirPath, function(_, files){
  const f = files.filter(file => file.match(/.*\.html$/))
  f.forEach(file => {
    const filePath = path.join(outDirPath, file)
    let text = fs.readFileSync(filePath).toString('utf-8')
    text = text.replace(new RegExp('src="/', 'g'), 'src="')
    text = text.replace(new RegExp('href="/', 'g'), 'href="')
    fs.writeFileSync(filePath, text, (err) => {
      if (err) console.log(err)
    })
  })
})
