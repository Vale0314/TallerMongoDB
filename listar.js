const { MongoClient } = require("mongodb");
const { faker } = require('@faker-js/faker');

const uri='mongodb+srv://valeria:admin@cluster0.wcriixv.mongodb.net/?retryWrites=true&w=majority'

// //Listar un documento

// async function crearPropiedad(nuevaPropiedad){
//     const  client=new MongoClient(uri);

//     try {
        
//         await client.connect();

//         const result=await client.db('Publigrafit2').collection('Compras').findOne({supplier: nuevaPropiedad});
        
//         if(result){
//             console.log(result);
//         }

//     } catch (e) {
//         console.error(e);
//     }finally{
//         await client.close()
//     }
// }
// crearPropiedad("Exito")

//Listar todos los documentos

// async function crearPropiedad(nuevaPropiedad){
//     const  client=new MongoClient(uri);

//     try {
        
//         await client.connect();

//         const result=await client.db('Publigrafit2').collection('Compras').find().toArray();

//         console.log(result);
        

//     } catch (e) {
//         console.error(e);
//     }finally{
//         await client.close()
//     }
// }
// crearPropiedad()

//Listar los documentos con el limit
// async function crearPropiedad(nuevaPropiedad){
//     const  client=new MongoClient(uri);

//     try {
        
//         await client.connect();

//         const result=await client.db('Publigrafit2').collection('Compras').find().limit(5);

//         const consulta=await result.toArray();
        
//         console.log(consulta);
        

//     } catch (e) {
//         console.error(e);
//     }finally{
//         await client.close()
//     }
// }
// crearPropiedad()

//Listar todos los documentos con el sort
// async function crearPropiedad(nuevaPropiedad){
//     const  client=new MongoClient(uri);

//     try {
        
//         await client.connect();

//         const result=await client.db('Publigrafit2').collection('Compras').find().sort({firstName:1}); //1 para ascendentes y -1 para descendentes

//         const consulta=await result.toArray();
        
//         console.log(consulta);
        

//     } catch (e) {
//         console.error(e);
//     }finally{
//         await client.close()
//     }
// }
// crearPropiedad()

//async function crearPropiedad(nuevaPropiedad){
