
const redis = require('redis')
const { promisify } = require('util');

class RedisClient {

    constructor() {
        this.client = redis.createClient();
        this.getAsync = promisify(this.client.get).bind(this.client);
        this.setAsync = promisify(this.client.set).bind(this.client);
        this.delAsync = promisify(this.client.del).bind(this.client);
        this.client.on('error', (err) => {
          console.log(err);
        });
    }

    isAlive() {
        return this.client.connected;
    }

    async set(key, value, duration) {
        return this.client.set(key, value, 'EX',  duration)
    }

    async get(key) {
        return this.getAsync(key);
      }

    async del(key) {
        return this.client.delAsync(key);
    }
}


//export 
const redisClient = new RedisClient()
module.exports = redisClient
