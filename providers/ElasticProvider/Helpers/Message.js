'use strict';

const Messages = require('./messages.json')

function getMessage(key, vars) {
  let message = Messages[key];

  if (vars) {
    for(let i in vars) {
      message = message.replace(/<[^>]+>/, vars[i]);
    }
  }

  return message;
};

module.exports = { getMessage };
