import "dotenv/config";

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-contract-sizer";
import "hardhat-abi-exporter";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-gas-reporter";
// import "hardhat-typechain";
import "solidity-coverage";
import { HardhatUserConfig } from "hardhat/types";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const accounts = {
  mnemonic:
    process.env.MNEMONIC ||
    "test test test test test test test test test test test junk",
  // accountsBalance: "990000000000000000000",
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  abiExporter: {
    path: "./abi",
    clear: false,
    flat: true,
    // only: [],
    // except: []
  },
  defaultNetwork: "hardhat",
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: "USD",
    enabled: true,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    dev: {
      default: 1,
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_RINKEBY_TESTNET_KEY}`,
        // url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_MAINNET_KEY}`,
        enabled: true,
      },
      gasPrice: "auto",
      accounts,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts,
      chainId: 1,
      live: false,
      saveDeployments: true,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts,
      chainId: 4,
      live: false,
      saveDeployments: true,
      tags: ["staging"],
      gasPrice: 9000000000,
      gasMultiplier: 2,
    },
    bscTest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
      gasMultiplier: 2,
    },
    bscMain: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
    },
    arbitrum: {
      url: "https://rinkeby.arbitrum.io/rpc",
      chainId: 421611,
      accounts: { mnemonic: process.env.MNEMONIC },
      live: true,
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      arbitrumTestnet: process.env.ARBITRUM_API_KEY,
    },
  },
  paths: {
    deploy: "deploy",
    deployments: "deployments",
    sources: "contracts",
    tests: "test",
  },
  mocha: {
    timeout: 300000,
  },
  // contractSizer: {
  //   alphaSort: true,
  //   disambiguatePaths: true,
  //   runOnCompile: true,
  // },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 900,
          },
        },
      },
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 900,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 900,
          },
        },
      },
    ],
  },
};

export default config;
