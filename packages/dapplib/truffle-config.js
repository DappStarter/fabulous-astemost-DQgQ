require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain common inner clock forward travel'; 
let testAccounts = [
"0xaaf76963f5b647f4f53cca3ab415ecf08562a2fd2ee331c81388965def651432",
"0x53aabc71ab917eba741e07b6620789c28d2eba64499ab59c8015826ee2acec72",
"0xe91b233397dfb35f84304f0a1fb727bd4a0cd09a76fbf82dcf3908d331adb249",
"0x6ec42c49699ce1bd56a0bb12c613426bf47d784165d8d6886da29d62ce152471",
"0x94ae9738374c18c5a91ffc1839b2a15a5b1f9342d27e8e83769be048170efa30",
"0xd13c117af2e389238a96cff3c2e4af705f2a92f499ae199a5cf48499a64c4770",
"0x439756e22ff28dafe89c8af28ad367610f4cb7ab4bf81643be92c629c0635c5f",
"0xd3f0faf0b7d4096eb74f9cf1821eb38c7fcb76ca5cbcb0109d4eb5b0c910a2b2",
"0xc8ff17696fa54e4b3006bdc899541053063c3c1a66237d4b97117da5b7d536ba",
"0x85cbe1b1b0aebc266cb1e7ff72e2d5117750da74b6de210c7474cedf2d9f1456"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

