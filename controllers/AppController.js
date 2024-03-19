const redis = require('/routes/redis')
const db = require('/routes/db')

class AppController {
    
    static getStatus(request, response) {
        const status =
        {
            "redis": isRedisAlive(),
            "db": isDatabaseAlive()
        };
        return response.status(200).send(status)
    }

    static async getStats(request, response) {
        const users = await dbClient.nbUsers();
        const files = await dbClient.nbFiles();
        const stats = { users, files };
        response.status(200).send(stats);
    }
}

module.exports = AppController;
