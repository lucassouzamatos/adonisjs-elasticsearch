# AdonisJs ElasticSearch
:file_folder: pacote de integração do elasticsearch.js com adonisjs

![Em desenvolvimento](https://img.shields.io/badge/initial%20version-in--progress-brightgreen.svg)

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
