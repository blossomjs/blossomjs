export function Datashaping(
  originData = [],
  primaryKey = "id",
  parentKey = "parentId",
  childrenKey = "children",
  orderBy = "orderIndex",
  sorting = -1
) {
  let Items = []
  let temp = {}
  originData.forEach(function (item) {
    if (!item[parentKey]) {
      Items.push(item)
    } else {
      temp[item[parentKey]] = temp[item[parentKey]] || []
      temp[item[parentKey]].push(item)
    }
  })
  Items.sort(function (a, b) {
    return sorting * (a[orderBy] - b[orderBy])
  })
  for (let key of Object.keys(temp)) {
    temp[key].sort(function (a, b) {
      return sorting * (a[orderBy] - b[orderBy])
    })
    for (let object of originData) {
      if (`${object[primaryKey]}` === key) {
        object[childrenKey] = temp[key]
      }
    }
  }
  return Items
}
