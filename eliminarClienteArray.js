const { MongoClient } = require("mongodb");
const { faker } = require('@faker-js/faker');

const uri='mongodb+srv://valeria:admin@cluster0.wcriixv.mongodb.net/?retryWrites=true&w=majority'

// async function eliminarPropiedad(nombrePropiedad){


//     const  client=new MongoClient(uri);

//     try {
        
//         await client.connect();

//         const result=await client.db('Publigrafit2').collection('ClienteArray').deleteMany({supplier: nombrePropiedad})

//         console.log(`${result.deletedCount} propiedad{es} fue{ron} eliminada{s}`);


//     } catch (e) {
//         console.error(e);
//     }finally{
//         await client.close()
//     }
// }
// eliminarPropiedad("Trantow LLC")

async function eliminarPropiedad( nombrePropiedad){


    const  client=new MongoClient(uri);

    try {
        
        await client.connect();

        const result=await client.db('Publigrafit2').collection('ClienteArray').deleteOne({name: nombrePropiedad})

        console.log(`${result.deletedCount} propiedad{es} fue{ron} eliminada{s}`);


    } catch (e) {
        console.error(e);
    }finally{
        await client.close()
    }
}

eliminarPropiedad(99)