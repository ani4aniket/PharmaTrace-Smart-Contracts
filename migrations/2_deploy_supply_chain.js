const SupplyChain = artifacts.require('SupplyChain');

module.exports = async (deployer) => {
  // eslint-disable-next-line no-console
  console.log('deployed');
  deployer.deploy(SupplyChain);
};
