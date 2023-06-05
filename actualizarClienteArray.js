const { MongoClient } = require("mongodb");
const { faker } = require('@faker-js/faker');

const uri='mongodb+srv://valeria:admin@cluster0.wcriixv.mongodb.net/?retryWrites=true&w=majority'

async function actualizarPropiedad(campoActualizar){
    const  client=new MongoClient(uri);

    try {
        
        await client.connect();

        const result=await client.db('Publigrafit2').collection('Clientes').
        updateMany({}, {$set: {telephone: campoActualizar}})

        console.log(`${result.matchedCount} propiedad{es} cumple con el criterio de busqueda`);
        console.log(`${result.modifiedCount} propiedad{es} fue{ron} actualizada{s}`);

    } catch (e) {
        console.error(e);
    }finally{
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