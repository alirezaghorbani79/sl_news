const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const app = require('./app')
const sequelize = require('./utils/database')

const DB = process.env.DATABASE_LOCAL

const port = process.env.PORT || 5000


sequelize
//   .sync({ force: true })
  .sync()
  // .then((result) => {
  //   return Class.create({
  //     name: 'Technology',
  //   })
  // })
  // .then((result) => {
  //   return Hall.create({
  //     capacity: 50
  //   })
  // })
  .then(() => {
    app.listen(port, () => {
      console.log('Running', port)
    })
  })

  // console.log(result)
  .catch((err) => {
    console.log(err)
  })