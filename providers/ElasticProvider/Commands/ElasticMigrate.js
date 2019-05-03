'use strict'

const { Command } = require('@adonisjs/ace')

class ElasticMigrate extends Command {
  static get signature () {
    return 'elastic:migrate { model }'
  }

  static get description () {
    return 'Migrate a model to Elastic Search'
  }

  async handle (args, options) {
    this.info('@em desenvolvimento')
  }
}

module.exports = ElasticMigrate
