const Indexer = artifacts.require('Indexer')
const BatchIndices = artifacts.require('BatchIndices')
var _ = require('lodash')

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

module.exports = async (deployer, network) => {
  if (network == 'rinkeby' || network == 'mainnet') {
    // fill in the address of this contract

    let indexer = await Indexer.at('0xbA9aB9710Bd461F30C247f4cA2Cb7f453C22570e')

    const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
    const TUSD = '0x0000000000085d4780B73119b644AE5ecd22b376'
    const BUSD = '0x4Fabb145d64652a948d72533023f6E7A623C7C53'
    const WBTC = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
    const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    const AST = '0x27054b13b1b798b345b591a4d22e6562d47ea75a'
    const USDT = '0xdac17f958d2ee523a2206206994597c13d831ec7'
    const CHI = '0x0000000000004946c0e9F43F4Dee607b0eF1fA1c'
    const GST2 = '0x0000000000b3F879cb30FE243b4Dfee438691c04'
    const sUSD = '0x57ab1ec28d129707052df4df418d58a2d46d5f51'
    const PNK = '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d'
    const MKR = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
    const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
    const renBTC = '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d'
    const wBTC = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
    const cETH = '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5'
    const cDAI = '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643'
    const cWBTC = '0xC11b1268C1A384e55C48c2391d8d480264A3A7F4'
    const cUSDC = '0x39AA39c021dfbaE8faC545936693aC917d5E7563'
    const cUSDT = '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9'
    const cUNI = '0x35A18000230DA775CAc24873d00Ff85BccdeD550'
    const CHAI = '0x06af07097c9eeb7fd685c692751d5c66db49c215'
    const GUSD = '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd'
    const HUSD = '0xdf574c24545e5ffecb9a659c229253d4111d87e1'
    const PAX = '0x8e870d67f660d95d5be530380d0ec0bd388289e1'
    const USDK = '0x1c48f86ae57291f7686349f12601910bd8d470bb'
    const USDS = '0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe'
    const yCRV = '0x9baf8a5236d44ac410c0186fe39178d5aad0bb87'
    const yyCRV = '0x4ee15f44c6f0d8d1136c83efd2e8e4ac768954c6'
    const yUSDT = '0x83f798e925bcd4017eb265844fddabb448f1707d'
    const yUSDC = '0xd6ad7a6750a7593e092a9b218d66c0a814a3436e'
    const yDAI = '0xacd43e627e64355f1861cec6d3a6688b31a6f952'
    const yTUSD = '0x73a052500105205d34daf004eab301916da8190f'

    const deployed_pairs = [
      [WBTC, USDC],
      [AST, WBTC],
      [WBTC, USDT],
      [AST, USDT],
      [CHI, WBTC],
      [GST2, WBTC],
      [WBTC, sUSD],
      [PNK, WETH],
      [MKR, WETH],
      [UNI, WETH],
      [WETH, UNI],
      [renBTC, WETH],
      [renBTC, wBTC],
      [wBTC, DAI],
      [wBTC, TUSD],
      [renBTC, USDC],
      [renBTC, USDT],
      [renBTC, DAI],
      [renBTC, TUSD],
      [AST, DAI],
      [AST, USDC],
      [AST, TUSD],
      [AST, renBTC],
      [cETH, WETH],
      [cETH, DAI],
      [cETH, WBTC],
      [cETH, USDC],
      [cETH, USDT],
      [cDAI, WETH],
      [cDAI, DAI],
      [cDAI, WBTC],
      [cDAI, USDC],
      [cDAI, USDT],
      [cWBTC, WETH],
      [cWBTC, DAI],
      [cWBTC, WBTC],
      [cWBTC, USDC],
      [cWBTC, USDT],
      [cUSDC, WETH],
      [cUSDT, DAI],
      [cUSDC, WBTC],
      [cUSDC, USDC],
      [cUSDC, USDT],
      [cUSDT, WETH],
      [cUSDT, DAI],
      [cUSDT, WBTC],
      [cUSDT, USDC],
      [cUSDT, USDT],
      [cUNI, WETH],
      [cUNI, DAI],
      [cUNI, WBTC],
      [cUNI, USDC],
      [cUNI, USDT],
      [DAI, BUSD],
      [DAI, CHAI],
      [DAI, cDAI],
      [DAI, cUSDC],
      [DAI, cUSDT],
      [DAI, GUSD],
      [DAI, HUSD],
      [DAI, PAX],
      [DAI, sUSD],
      [DAI, USDK],
      [DAI, USDS],
      [DAI, yCRV],
      [DAI, yyCRV],
      [DAI, yUSDT],
      [DAI, yUSDC],
      [DAI, yDAI],
      [DAI, yTUSD],
    ]

    // Deploys both direction
    const pairs = []
    pairArrays = _.unzip(pairs)
    console.log(pairArrays)

    // let batcher = await BatchIndices.new()
    let batcher = await BatchIndices.at(
      '0x5f2c3e30b5e5ad8ceb26dd57b5e5fd498a8fd6cf'
    )
    console.log(`Batcher Address: ${batcher.address}`)

    let gasEstimate = await batcher.createIndices.estimateGas(
      indexer.address,
      pairArrays[0],
      pairArrays[1],
      '0x0000'
    )
    console.log(gasEstimate)

    // REMINDER: update gas price in truffle-config.js and uncomment when ready
    let trx = await batcher.createIndices(
      indexer.address,
      pairArrays[0],
      pairArrays[1],
      '0x0000',
      { gasPrice: 15e9 }
    )
  }
}
