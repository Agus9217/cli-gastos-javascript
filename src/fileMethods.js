import fs from 'fs'

export const get = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file + '.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(JSON.parse(data))
    })
  })
}

export const save = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file + '.json', JSON.stringify(content), (err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}