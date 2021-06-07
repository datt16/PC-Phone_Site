import articles from './articles'

const search = function search(tag:string, type?:string) {
  let list = articles
  if (type !== '') { list = articles.filter((a) => a.type === type) }
  return list.filter((article) => {
    let success = false
    article.tags.forEach(t => {
      if (!success) success = t.toLowerCase().search(new RegExp(tag.toLowerCase())) !== -1
    })
    return success
  })
}

export default search
