

import { Collection, MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/pwa2'

MongoClient.connect(url, (error, db) =>{
    if(error) throw error
    //Selecciona la base de datos
    const dbo =db.db('pwa2')

    //Creamos la coneccion
    dbo.createCollection('profesores', (err, Collection) => {
        if(error) throw error
        console.log('Coleccion de datos creada')
        db.close()
    })
    dbo.createCollection('cursos', (err, Collection) => {
        if(error) throw error
        console.log('Coleccion de datos creada')
        db.close()
    })
    dbo.createCollection('alumnos', (err, Collection) => {
        if(error) throw error
        console.log('Coleccion de datos creada')
        db.close()
    })


})