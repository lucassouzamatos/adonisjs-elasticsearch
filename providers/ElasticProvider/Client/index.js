var elasticsearch = require('elasticsearch');

class Client {
    constructor(Config) {
        this._config = Config.get('elasticsearch');

        const { host, port } = this._config || {
            host: 'localhost',
            port: 9200
        };

        this._client = new elasticsearch.Client({
            host: `${host}:${port}`,
            log: 'trace'
          });

        return this._client;
    }
}

module.exports = Client;