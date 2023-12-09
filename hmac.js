const { createHmac } = require('node:crypto')

const hmac = createHmac('sha256', 'Top Secret');

hmac.update('Message to be hashed');

console.log(hmac.digest('hex'))