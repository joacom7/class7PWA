import { MongoClient } from 'mongodb'
const Mongo = MongoClient
const url = 'mongodb://localhost:27017/'

/* Mongo.connect(url, (error, db) =>{
      if(error) throw error

    const dbo = db.db('pwa2')
    const consulta =  {
        nombre: 'Joaco'
    }

     dbo.collection('cursos').deleteOne(consulta, (error, res) => {
        if(error) throw error
        console.log(`Registro eliminado: ${consulta}`)
        console.log('-------------------------------------')
        db.close()
    })


}) */


//Delete with backup

Mongo.connect(url, (error, db) =>{
    if(error) throw error

  const dbo = db.db('pwa2')
  const consulta =  {
      nombre: 'Joaco'
  }

  dbo.collection('eliminados').insertOne(consulta, (err, res) => {
    if(error) throw error
    console.log('Inserccion de datos correcta')
    db.close()
})


   dbo.collection('cursos').deleteOne(consulta, (error, res) => {
      if(error) throw error
      console.log(`Registro eliminado: ${consulta}`)
      console.log('-------------------------------------')
      db.close()
  })


})
