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
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }, {
        "supplier":faker.company.name(), //Sting
        "iva":faker.number.float(), //Double
        "firstName":faker.person.firstName(), // String
        "lastName":faker.person.lastName(), // String
        "amount":faker.number.int(), //Int
        "price":faker.number.int(), //Int
    }
])
}