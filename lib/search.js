import articles from "./articles";

// tags (tag の配列) を渡すとそれの全てが含まれるものを返す
const searchAllTags = function searchAllTag(tags, type) {
  let list = []
  let data = [];
  if (type != '') {
    list = articles.filter((a) => {return a.type == type})
  }
  if (type === '' || tags === []) { return list }
  list.forEach((l) => {
    let include = false;
    l.tags = l.tags.map((t) => {return t.toLowerCase()})
    tags.some((t) => {
      if (l.tags.includes(t.toLowerCase())) {
        include = true
      } else {
        include = false
        return true;
      }
    });
    if (include) {
      data.push(l);
    }
  });
  return data;
}

// tags (tag の配列) を渡すとそれのいずれかが含まれるものを返す
const searchAnyTags = function searchAnyTag(tags, type) {
  let list = articles
  let data = [];
  if (type != '') {
    list = articles.filter((a) => {return a.type == type})
  }
  if (tags.length === 0) { return list }
  tags = tags.map((t) => {return t.toLowerCase()})
  list.forEach((l) => {
    l.tags.some((t) => {
      if (tags.includes(t.toLowerCase())) {
        data.push(l);
        return true;
      }
    });
  });
  return data;
};

export {
  searchAllTags,
  searchAnyTags,
};
