//El código actualiza un campo en una colección MongoDB para todos o un documento específico según los criterios dados.

const { MongoClient } = require("mongodb"); //Conexion con el mongo 
const { faker } = require('@faker-js/faker');

//Establecer una conexion con la base de datos
const uri='mongodb+srv://valeria:admin@cluster0.wcriixv.mongodb.net/?retryWrites=true&w=majority'

async function actualizarPropiedad(campoActualizar){ //Se actualizar el campo "teléfono" para todos los documentos de la colección "Clientes" en la base de datos.

    const  client=new MongoClient(uri); //Crear una instancia y pasar la URI para la conexion con mongo

    try { 
        
        await client.connect(); //Establecer la conexion con la base de datos

        const result=await client.db('Publigrafit2').collection('Clientes'). //Actualizar el campo telefono en todos los documentos de la coleccion
        updateMany({}, {$set: {telephone: campoActualizar}})

        console.log(`${result.matchedCount} propiedad{es} cumple con el criterio de busqueda`);
        console.log(`${result.modifiedCount} propiedad{es} fue{ron} actualizada{s}`);

    } catch (e) { //Excepcion de error
        console.error(e);
    }finally{//Finalizar
        await client.close()
    }
}
actualizarPropiedad(99021)

async function actualizarPropiedad(nombrePropiedad, campoActualizar){
    const  client=new MongoClient(uri);

    try {
        
        await client.connect();

        const result=await client.db('Publigrafit2').collection('Cliente').
        updateOne({supplier: nombrePropiedad}, {$set: {price: campoActualizar}})

        console.log(`${result.matchedCount} propiedad{es} cumple con el criterio de busqueda`);
        console.log(`${result.modifiedCount} propiedad{es} fue{ron} actualizada{s}`);

    } catch (e) {
        console.error(e);
    }finally{
        await client.close()
    }
}
actualizarPropiedad("Camilo",45123)