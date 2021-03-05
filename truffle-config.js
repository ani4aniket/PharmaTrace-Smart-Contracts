/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    local: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: 'negative program payment aunt trap tilt culture very lecture visa evolve hat',
        },
        providerOrUrl: 'http://localhost:7545',
      }),
      network_id: '3',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // match any network
    },
  },
  compilers: {
    solc: {
      version: '0.5.7',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
