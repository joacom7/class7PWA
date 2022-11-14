import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/'

MongoClient.connect(url, (error, db) =>{
    if(error) throw error

    const dbo = db.db('pwa2')
    const data = {
        nombre: 'Joaco',
        curso: 'pwa',
        pais: 'Argentina'
    }
    const data2 = {
        nombre: 'Juan',
        curso: 'pwa',
        pais: 'Brasil'
    }


        //Creamos la coneccion
        dbo.collection('cursos').insertOne(data, (err, Collection) => {
            if(error) throw error
            console.log('Inserccion de datos correcta')
            db.close()
        })
})