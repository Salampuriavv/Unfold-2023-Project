const UserCounter = artifacts.require("UserCounter");

module.exports = function (deployer) {
  deployer.deploy(UserCounter);
};

