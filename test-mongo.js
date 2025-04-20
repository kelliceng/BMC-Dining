const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://kelliceng:AbsGqAkNG8bXzzKe@diningapp.9zzxdkc.mongodb.net/DiningApp?retryWrites=true&w=majority&appName=DiningApp";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged your deployment. Successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
