import { MongoClient } from "mongodb";
import Students from "../../server/model/studentModel";


// Replace the uri string with your MongoDB deployment's connection string.
const uri = "<connectionmongodb+srv://justinecerezo:group1@data.dlatr.mongodb.net/Information?retryWrites=true&w=majority string uri>";

const client = new MongoClient(MONGO_URI);

async function run() {
  try {
    await client.connect();
    const database = client.db("Information");
    const Students = database.collection("students");
    // Query for movies from Canada.
    const query = { countries: "Canada" };
    // Find the number of documents that match the specified
    // query, (i.e. with "Canada" as a value in the "countries" field)
    // and print out the count.
    const countStudents = await students.countDocuments(query);
    console.log(`Number of movies from Canada: ${countStudents}`);
    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);