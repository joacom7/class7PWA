// Creacion de Bases de Datos en Mongo

import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017/pwa2'

MongoClient.connect(url, (error, db) =>{
/*     const dbo =db.db('pwa2')
 */
    if(error) throw error
    console.log('Base de datos creada')
    db.close()


/*     dbo.createCollection('profesores', (err, Collection) => {
        if(error) throw error
        console.log('Coleccion de datos creada')
        db.close()
    }) */
})