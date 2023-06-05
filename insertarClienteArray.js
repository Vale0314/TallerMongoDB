const { MongoClient } = require("mongodb");
const { faker } = require('@faker-js/faker');

const uri='mongodb+srv://valeria:admin@cluster0.wcriixv.mongodb.net/?retryWrites=true&w=majority'
async function crearPropiedad(nuevaPropiedad){
    const  client=new MongoClient(uri);

    try {
        
        await client.connect();

        const result=await client.db('Publigrafit2').collection('ClienteArray').insertMany(nuevaPropiedad);
        console.log(`El documento que ingreso es: ${result.insertedIds}`);
        console.log(nuevaPropiedad)

    } catch (e) {
        console.error(e);
    }finally{
        await client.close()
    }
}
    for (let i=0; i<100; i++){
    
crearPropiedad([
    {
        "DNI":faker.company.name(), //Sting
        "name":faker.number.int({min:1,max:100}), //Int
        "lastname":new Date(), //Date
        "telephone":faker.number.int({min:1,max:100000}), //Int
        "adress":faker.location.city(), //Int
        "email":faker.internet.email(), //Int
        "size":['daniel', 'garcia']
    },
    
])
} 