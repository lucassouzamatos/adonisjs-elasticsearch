'use strict'

const { Command } = require('@adonisjs/ace')
const { getMessage } = require('../Helpers/Message');

class ElasticMigrate extends Command {
  static get inject () {
    return ['Config', 'Souzalc/ElasticSearch/Client']
  }

  constructor({ _config }, client) {
    super();
    this._config = _config.elasticsearch;
    this._client = client;
  }

  static get signature () {
    return getMessage('migrate_signature');
  }

  static get description () {
    return getMessage('migrate_description');
  }

  async handle ({ type }, options) {
    const typeConfig = this._config.indexes[type];
    if (!typeConfig) {
      throw new Error(
        getMessage('migrate_type_doenst_exist', [type])
      );
    }

    try {
      /* await this._client.indices.delete({index: "_all"})
      await this._client.indices.create({
        index: "testnado..",
        body: {
            "mappings": {
                "aType": {
                    "properties": {
                        "aProp1": { "type": "string", "index": "not_analyzed" },
                        "aProp2": { "type": "string", "index": "not_analyzed" },
                        "aProp3": { "type": "string", "index": "not_analyzed" },
                        "aProp4": { "type": "string", "index": "not_analyzed" }
                    }
                }
            }
        }
    });
    } catch(e) {
      throw e;
    } */


    this.info('@em desenvolvimento')
  }
}

module.exports = ElasticMigrate
