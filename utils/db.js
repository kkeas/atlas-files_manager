const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${host}:${port}/${database}`;

     // create db
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (client) {
          this.db = client.db(database);
          this.users = this.db.collection('users');
          this.files = this.db.collection('files');
        }
        if (err) {
          console.log(err);
          this.db = null;
        }
        });
    }

    isAlive() {
        return this.MongoClient.isConnected();
    };

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
