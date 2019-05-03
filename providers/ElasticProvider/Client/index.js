const { Client: ElasticClient } = require('@elastic/elasticsearch')

class Client {
    constructor(Config) {
        this._config = Config.get('elasticsearch');
        const { host, port } = this._config || {
            host: 'http://localhost',
            port: 9200
        };

        this._client = new ElasticClient({
            node: `${host}:${port}`,
          });

        return this._client;
    }
}

module.exports = Client;
