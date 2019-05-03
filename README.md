# AdonisJs ElasticSearch
:file_folder: pacote de integração do elasticsearch.js com adonisjs

## Instalação
Após a instalação, é necessário registrar os providers e comandos no `start/app.js`:

##### start/app.js
```javascript
const providers = [
  ...,
  '---/providers/ElasticProvider'
]

const commands = [
  ...,
  '---/providers/ElasticProvider/Commands/ElasticMigrate',
  '---/providers/ElasticProvider/Commands/ElasticConfigure'
]
```
