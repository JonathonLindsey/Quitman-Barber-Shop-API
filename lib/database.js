const { MongoClient } = require('mongodb');

class Database {
  constructor() {
    this.client = null;
    this.config = null;
  }

  configure = async (config) => {
    this.config = config;
  
    const url = `mongodb://${config.hostname}:${config.port}`;
    console.log(`Trying to connect to Mongo @ ${url}`);
    this.client = new MongoClient(url, config.options);

    await this.client.connect();
    console.log('Successfully connected to Mongo');
    return this.client;
  };

  disconnect = async () => {
    return this.client.close();
  };

  getDb = () => {
    return this.client.db(this.config.database);
  };

}

module.exports = new Database();