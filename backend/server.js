const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const app = require('./app')

const DB = process.env.DATABASE_LOCAL

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Running', port)
})
