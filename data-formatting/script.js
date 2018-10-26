require('dotenv').config()
const fs = require('fs')

const base = require('airtable').base('appyahDjTyD3MR0tU')
let data = []

base('Data').select({
  view: 'published'
}).eachPage(function page (records, fetchNextPage) {
  records.forEach(record => {
    delete record.fields['Which underrepresented group are you a member of?']
    delete record['_table']
    delete record['_rawJson']
  })
  data = data.concat(records)
  fetchNextPage()
}, (err) => {
  if (err) {
    console.error(err)
  } else {
    fs.writeFile('src/data.json', JSON.stringify(data), function (err, _) {
      if (err) console.log(err)
      console.log('Successfully Written to File.')
      console.log(data.length + ' records')
    })
  }
})
