const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const app = require('./app')
const sequelize = require('./utils/database')

const DB = process.env.DATABASE_LOCAL

const port = process.env.PORT || 5000

sequelize
  .sync({ force: true })
//   .sync()
  // .then((result) => {
  //   return Movie.create({
  //     name: 'clifford the big red dog',
  //     year: 2021,
  //     director: 'walt becker',
  //     duration: 96.,
  //     genre: 'adventure, comedy, family',
  //     stars: 'darby camp, jack whitehall, izaac wang',
  //     rating: 6,
  //     description: 'A young girls love for a tiny puppy named Clifford makes the dog grow to an enormous size.',
  //     imgUrl: '123',
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