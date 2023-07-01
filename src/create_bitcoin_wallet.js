const bitcore = require('bitcore-lib');
const network = 'testnet';

const privateKey = new bitcore.PrivateKey(network);
const address = privateKey.toAddress();

console.log(`Your private key: ${privateKey.toString()}`);
console.log(`Your wallet address: ${address.toString()}`);