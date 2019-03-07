'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class ElasticProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Souzalc/ElasticSearch/Client', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('./Client'))(Config)
    })
  }
}

module.exports = ElasticProvider
