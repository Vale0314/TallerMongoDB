const { MongoClient } = require("mongodb");
const { faker } = require('@faker-js/faker');

const uri='mongodb+srv://valeria:admin@cluster0.wcriixv.mongodb.net/?retryWrites=true&w=majority'

//Listar un documento

async function crearPropiedad(){
    const  client=new MongoClient(uri);

    try {
        
        await client.connect();

        const result=await client.db('Publigrafit2').collection('Clientes').find({}).toArray();
        
        if(result){
            console.log(result);
        }

    } catch (e) {
        console.error(e);
    }finally{
        await client.close()
    }
}
crearPropiedad()

async function crearPropiedad(nuevaPropiedad){
    const  client=new MongoClient(uri);

    try {
        
        await client.connect();

        const result=await client.db('Publigrafit2').collection('Clientes').findOne({name: nuevaPropiedad});
        
        if(result){
            console.log(result);
        }

    } catch (e) {
        console.error(e);
    }finally{
        await client.close()
    }
}
crearPropiedad("Camilo")

