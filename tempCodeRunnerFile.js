use('Publigrafit2')
db.createCollection("Clientes", {
   validator: {
      $jsonSchema: {
         
         required: [ "supplier", "iva", "firstName", "lastName", "amount", "price" ],
         properties: {
            supplier: {
                bsonType: "string",
                description: "'supplier' Este campo es requerido"
            },
            iva: {
                bsonType: "double",
                description: "'iva' Este campo es requerido"
            },
            firstName: {
               bsonType: "string",
               description: "'firstName' Este campo es requerido"
            },
            lastName: {
                bsonType: "string",
                description: "'lastName' Este campo es requerido"
             },
            amount: {
               bsonType: "int",
               description: "'year' Este campo es requerido"
            },
            price: {
               bsonType: "int",
               description: "'price' Este campo es requerido"
            }
         }
      }
   }
} )