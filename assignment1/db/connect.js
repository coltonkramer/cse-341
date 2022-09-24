const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://coltonkramer:gtNLG1SGYMGF0PgI@contacts.5ik2eyo.mongodb.net/?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);
    
    try{
        await client.connect();
        await findContactByName(client , "Romina")

    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }

}

main().catch(console.error)

async function findContactByName(client, nameOfContact){
    const result = await client.db("contact").collection("contact").findOne({firstName: nameOfContact});
    
    
    if (result) {
        console.log(`Found a contact in the db: ${nameOfContact}`)
        console.log(result)
    } else {
        console.log(`No listings found with the firstName: ${nameOfContact}`)
    }
}



// async function listDatabases(client){
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }

// async function addContact(client, newContact){
//     const result = await client.db("contact").collection("contact").insertOne(newContact)
//     console.log(`New contact created with the following id: ${result.insertedId}`)
// }
