// Import necessary libraries

const {Web3} = require("web3")
const {ChainlinkPlugin, MainnetPriceFeeds} = require("@chainsafe/web3-plugin-chainlink")


// Create a new instance of Web3
const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);

// Create a new instance of the ChainlinkPlugin
const chainlinkPlugin = new ChainlinkPlugin();

// Register the ChainlinkPlugin to the Web3 instance

web3.registerPlugin(chainlinkPlugin);


// Get the latest price of ETH/USD


async function getETHPrice() {
    const EthUsdprice = await chainlinkPlugin.getPrice(MainnetPriceFeeds.EthUsd);

    console.log("Ethereum price is", "$", String(EthUsdprice.answer).slice(0,4))
    
}

getETHPrice();