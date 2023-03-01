const knex = require('knex');

const dotenv = require('dotenv');

dotenv.config();


const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    }
  });


//   db.select('*') 
//   .select('id', 'name', 'price')
//   .then(rows => {
//         console.log(rows)
//       })
//       .catch(err => {
//         console.log(err)
//       })


  db.select('*').from('country')
  .then(rows => {
    console.log(rows)
  })
  .catch(err => {
    console.log(err)
  })

//   db('country')
//   .update({country: 'dev'})
//   .where({country_id:2})
//   .returning('*')
//   .then(rows => {
//     console.log(rows)
//   })
//   .catch(err => {
//     console.log(err)
//   })

//   db('country')
//   .insert([
//     {country: 'Amy 1'},
//     {country: 'Claire 1'},
//     {country: 'Stas 1'}
//   ])
//   .returning('*')
//   .then(rows => {
//     console.log(rows)
//   })
//   .catch(err => {
//     console.log(err)
//   })
