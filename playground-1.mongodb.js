use('Publigrafit2')
// db.createCollection("Compras", {
//    validator: {
//       $jsonSchema: {
         
//          required: [ "supplier", "iva", "firstName", "lastName", "amount", "price" ],
//          properties: {
//             supplier: {
//                 bsonType: "string",
//                 description: "'supplier' Este campo es requerido"
//             },
//             iva: {
//                 bsonType: "double",
//                 description: "'iva' Este campo es requerido"
//             },
//             firstName: {
//                bsonType: "string",
//                description: "'firstName' Este campo es requerido"
//             },
//             lastName: {
//                 bsonType: "string",
//                 description: "'lastName' Este campo es requerido"
//              },
//             amount: {
//                bsonType: "int",
//                description: "'amount' Este campo es requerido"
//             },
//             price: {
//                bsonType: "int",
//                description: "'price' Este campo es requerido"
//             }
//          }
//       }
//    }
// } )

db.createCollection('Clientes', {
   validator: {
      $jsonSchema: {
         
         required: [ "DNI", "name", "lastName", "telephone", "address", "email" ],
         properties: {
            DNI: {
                bsonType: "string",
                description: "'DNI' Este campo es requerido"
            },
            name: {
                bsonType: "string",
                description: "'name' Este campo es requerido"
            },
            lastName: {
               bsonType: "string",
               description: "'lastName' Este campo es requerido"
            },
            telephone: {
                bsonType: "int",
                description: "'telephone' Este campo es requerido"
             },
            address: {
               bsonType: "string",
               description: "'address' Este campo es requerido"
            },
            email: {
               bsonType: "email",
               description: "'email' Este campo es requerido"
            }
         }
      }
   }
} )





// db.Compras.aggregate([

//    {
//       $unwind:"$Productos"
//    }
// ])
//PIPELINE - Organizadores
// db.Compras.aggregate([


//    {
//       $match: {supplier:"Exito"}
         
//    },{
//       $limit:2
//    },
//    {
//       $sort: {
//         amount: 1
//       }
//    }
// ])
// db.Compras.aggregate([
//    {
//       $match:{price:{$gt:5}}
//    },
//    {
//       $group:{ _id:null, count:{$sum:1}}
//  },
//    {
//       $project: {
//         iva:false
//       }
//    }

// ])

// db.Compras.aggregate([
//    {
//       $lookup: {
//         from: 'ClienteArray',
//         localField: "'_id'",
//         foreignField: "'_id'",
//         as: "Comentarios"
//       }
//    },{
//       $project: {
//         "_id":true
//       }
//    }
// ])