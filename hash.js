const { createHash } = require('node:crypto');

function hash(text) {
    return createHash('sha256').update(text).digest('hex');
}

console.log(hash('Hash this sentence'));