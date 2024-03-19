const redis = require('../utils/redis')
const db = require('../utils/db')

class AppController {
    
    static getStatus(request, response) {
        const status =
        {
            "redis": redis.isAlive(),
            "db": db.isAlive()
        };
        return response.status(200).send(status)
    }

    static async getStats(request, response) {
        const users = await db.nbUsers();
        const files = await db.nbFiles();
        const stats = { users, files };
        response.status(200).send(stats);
    }
}

module.exports = AppController;
