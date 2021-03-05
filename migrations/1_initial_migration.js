const Migrations = artifacts.require('Migrations');

module.exports = async (deployer) => {
  // eslint-disable-next-line no-console
  console.log('deployed migrations');
  deployer.deploy(Migrations);
};
