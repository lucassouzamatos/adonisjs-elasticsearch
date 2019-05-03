'use strict'

const { Command } = require('@adonisjs/ace')

class ElasticMigrate extends Command {
  static get inject () {
    return ['Adonis/Src/Database']
  }

  constructor(database) {
    super();
    this.db = database;
  }

  static get signature () {
    return 'elastic:configure { table }'
  }

  static get description () {
    return 'Configure a model to Elastic Search'
  }

  async handle ({ table }) {
    const hasTable = await this.db.schema.hasTable(table);

    if (!hasTable) {
      throw new Error(`Table "${table}" doesn't exist`);
    }

    const hasColumn = await this.db.schema.hasTable(table);
    if (!hasColumn) {
      await this.db.schema.table(table, (table) => {
        table.boolean('elastic_updated').defaultTo(false);
      });
    }

    this.db.close();
    this.info(`Table "${table}" was configured with successful`);
  }
}

module.exports = ElasticMigrate
