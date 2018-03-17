require('dotenv').config()
const MBTiles = require('mbtiles-offline')
const db = new MBTiles(process.env.MBTILES)

db.metadata().then(md => {
  console.log(JSON.stringify(JSON.parse(md.json), null, 2))
})

