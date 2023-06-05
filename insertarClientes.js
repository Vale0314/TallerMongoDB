const { MongoClient } = require("mongodb");
const { faker } = require('@faker-js/faker');

const uri='mongodb+srv://valeria:admin@cluster0.wcriixv.mongodb.net/?retryWrites=true&w=majority'
async function crearPropiedad(nuevaPropiedad){
    const  client=new MongoClient(uri);

    try {
        
        await client.connect();

        const result=await client.db('Publigrafit2').collection('Compras').insertMany(nuevaPropiedad);
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
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    },
    {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    },
    {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    },
    {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    },
    {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    },
    {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    },
    {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    },
    {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    },
    {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "amount":faker.number.int({min:1,max:100}), //Int
        "date":new Date(), //Date
        "total":faker.number.int({min:1,max:100000}), //Int
    }
])
} 