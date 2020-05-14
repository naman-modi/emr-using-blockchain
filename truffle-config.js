module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // match any network
    },
    //development: {
    //  host: "127.0.0.1",
    //  port: 7545,
    //  network_id: "*", // Match any network id
    //},
    develop: {
      port: 8545,
    },
  },
};
