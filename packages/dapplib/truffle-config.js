require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind punch harvest casual flat genuine'; 
let testAccounts = [
"0xfae370cd5d285f1c492228af4e1a0ddfcec2f553e021866d98bb2d02fd8b2fa1",
"0xbc01a428a5a465d3a857dcfbc0b3b1df63c905ae8b4473b554649627e5f2e64b",
"0x69f576dbf0f24d58db82e383b868f8ac1d563c8def27a1f88f5d39ec1e87f38a",
"0x7366cba0de7058bd319e7ad9bd14a340022612f023c1e960654fee98776d50d5",
"0xffc17d810b60951038d106b85ac794e440204042c8d99f27c3bf0c1ab5af3455",
"0x5d843b462e4f8a8e01c9da30555b83b05287092747ba773fd0633c7ef8c47cb9",
"0x416990b6b57bb2e800ffc646170cf76d26324fc3c8fc3008ca49674e689b4ade",
"0x3d25046adf54c41ade57e1740fee68dcabec81acd7539bc82cc3e7ce5f2d9a3b",
"0x0f04bb42ac3c7a2205bfc207634d8c58c10972feb2aa672acb1a25f1371aecfd",
"0x80758fc862bb646eab58619e39f01729db95a85fbc74f57ac9bd0455ed44f116"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


