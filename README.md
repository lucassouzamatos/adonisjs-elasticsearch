# AdonisJs ElasticSearch
:file_folder: pacote de integração do elasticsearch.js com adonisjs

## Instalação
Após a instalação, é necessário registrar os providers e comandos no `start/app.js`:

##### start/app.js
```javascript
const providers = [
  ...,
  'souzalc-elastic/providers/ElasticProvider'
]

const commands = [
  ...,
  'souzalc-elastic/providers/ElasticProvider/Commands/ElasticMigrate',
  'souzalc-elastic/providers/ElasticProvider/Commands/ElasticConfigure'
]
```
