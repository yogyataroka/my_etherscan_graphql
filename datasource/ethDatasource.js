const { RESTDataSource } = require("apollo-datasource-rest"); 

// Vitalik Buterin's Ethereum address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Etherscan Data Source Class extending RESTDataSource
class EtherDataSource extends RESTDataSource {

  constructor() {
    super(); 

    // Base URL for Etherscan API 
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    
    // Get account balance for the eth_address
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async totalSupplyOfEther() {
    
    // Get total ether supply
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Additional API endpoints

  async getLatestEthereumPrice() {
    
    // Get latest ETH price
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async getBlockConfirmationTime() {

    // Get estimated block confirmation time 
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
