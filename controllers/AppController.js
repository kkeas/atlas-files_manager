const redis = require('/routes/redis')
const db = require('/routes/db')

class AppController {
    
    static getStatus(request, response) {
        const status =
        {
            "redis": isRedisAlive(),
            "db": isDatabaseAlive()
          }
          return response.status(200).send(status)
    }
}
