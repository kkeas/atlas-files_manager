const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${host}:${port}/${database}`;

    this.mongoClient = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
        });
    }

    isAlive() {
        return this.MongoClient.isConnected();
    }

    async nbUsers() {
        return await this.users.countDocuments({});
    }

    async nbFiles() {
        return await this.nbFiles.countDocuments({});
    }
}

//export
const dbClient = new DBClient();
module.exports = dbClient;
