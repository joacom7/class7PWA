import { MongoClient } from 'mongodb'
const Mongo = MongoClient
const url = 'mongodb://localhost:27017/'

Mongo.connect(url, (error, db) =>{
      if(error) throw error

     const dbo = db.db('pwa2')

     dbo.collection('cursos').findOne({}, (err, res) => {
        if(error) throw error
        console.log(res)
        console.log('-------------------------------------')
        db.close()
    })
    dbo.collection('cursos').find({}).toArray( (err, res) => {
        if(error) throw error
        console.log(res)
        console.log('-------------------------------------')
        db.close()
    })
    dbo.collection('alumnos').find({}).toArray( (err, res) => {
        if(error) throw error
        console.log(res)
        console.log('-------------------------------------')
        db.close()
    })


})