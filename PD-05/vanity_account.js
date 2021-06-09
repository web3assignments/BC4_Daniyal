Web3 = require('web3');
web3 = new Web3();
let i = 0;
const find = "111111";
const findLengthPlusTwo = find.length + 2;
let prefix;
let newAccount;

do {
    newAccount = web3.eth.accounts.create();

    // We use 2 in the slice() so that we start looking after '0x' characters in the beginning of an ethereum address
    prefix = newAccount.address.slice(2, findLengthPlusTwo).toLowerCase();

    // To give a short report on how many new accounts have been created to find the intended one
    if (++i % 1000 == 0) console.log(i);
} while (prefix != find);

console.log(`Found an address with prefix ${prefix}`);
console.log(`address=${newAccount.address}`);
console.log(`privateKey=${newAccount.privateKey}`);

