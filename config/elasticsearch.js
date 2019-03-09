module.exports = {
    host: 'localhost',
    port: 9200,

    indexes: {
        user: {
            properties: {
                'username': { type: 'text' },
                'email': { type: 'text' },
            },
            model: 'App/Models/User',
            populator: 'App/Manager/Elastic/UserPopulator' 
        }
    }
}