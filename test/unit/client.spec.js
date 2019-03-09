'use strict'

const { test } = use('Test/Suite')('Client test')
const ElasticClient = use('Souzalc/ElasticSearch/Client');

test('instance', async ({ assert }) => {
  assert.equal(typeof ElasticClient, 'object')
})
