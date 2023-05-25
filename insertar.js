const { MongoClient } = require("mongodb");
const { faker } = require('@faker-js/faker');

const uri='mongodb+srv://valeria:admin@cluster0.wcriixv.mongodb.net/?retryWrites=true&w=majority'

async function actualizarPropiedad(nombrePropiedad, campoActualizar){
    const  client=new MongoClient(uri);

    try {
        
        await client.connect();

        const result=await client.db('Publigrafit2').collection('Compras').
        updateOne({supplier: nombrePropiedad}, {$set: {price: campoActualizar}}, {upsert: true})

        console.log(`${result.matchedCount} propiedad{es} cumple con el criterio de busqueda`);
        console.log(`${result.modifiedCount} propiedad{es} fue{ron} actualizada{s}`);

    } catch (e) {
        console.error(e);
    }finally{
        await client.close()
    }
}
actualizarPropiedad("Medellin",25000)