import { ConstRecord } from "../../../types/const";
import Token from "../../../types/token";

var MATIC = {
    name: 'Wrapped Matic',
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    symbol: 'WMATIC',
    decimals: 18,
    chainId: 137,
    website: 'https://polygon.technology/',
    description: 'Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.',
    logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png'
};
var MAI = {
    name: 'Mai',
    address: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
    symbol: 'MAI',
    decimals: 18,
    chainId: 137,
    website: 'https://www.mai.finance/',
    description: "MAI is a stablecoin collateralized by your crypto holdings. It's powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.",
    logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
    documentation: 'https://docs.mai.finance/'
};
var _tokens = {
    frxETH: {
        name: 'Frax Ether',
        symbol: 'frxETH',
        address: '0xEe327F889d5947c1dc1934Bb208a1E792F953E96',
        chainId: 137,
        decimals: 18,
        website: 'https://app.frax.finance/frxeth/mint',
        description: 'frxETH acts as a stablecoin loosely pegged to ETH, so that 1 frxETH always represents 1 ETH and the amount of frxETH in circulation matches the amount of ETH in the Frax ETH system. When ETH is sent to the frxETHMinter, an equivalent amount of frxETH is minted. Holding frxETH on its own is not eligible for staking yield and should be thought of as analogous as holding ETH.',
        logoURI: '',
        documentation: 'https://docs.frax.finance/frax-ether/frxeth-and-sfrxeth'
    },
    wstETH: {
        name: 'Lido Wrapped Staked ETH',
        symbol: 'wstETH',
        address: '0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD',
        chainId: 137,
        decimals: 18,
        website: 'https://lido.fi/',
        description: 'Lido is a liquid staking solution for ETH backed by industry-leading staking providers. Lido lets users stake their ETH - without locking assets or maintaining infrastructure - whilst participating in on-chain activities, e.g. lending. Lido attempts to solve the problems associated with initial ETH staking - illiquidity, immovability and accessibility - making staked ETH liquid and allowing for participation with any amount of ETH to improve security of the Ethereum network.',
        logoURI: '',
        documentation: 'https://docs.lido.fi/'
    },
    MVX: {
        name: 'MVX',
        address: '0x2760E46d9BB43dafCbEcaad1F64b93207f9f0eD7',
        symbol: 'MVX',
        decimals: 18,
        website: 'https://metavault.trade/',
        documentation: 'https://docs.metavault.trade/',
        description: "MVX is the Metavault.Trade's governance and utility token. 30% of swap and leverage trading fees are converted to $MATIC and distributed to the accounts staking MVX.",
        chainId: 137,
        logoURI: ''
    },
    BUSD: {
        name: 'Binance USD',
        address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
        symbol: 'BUSD',
        decimals: 18,
        website: 'https://www.binance.com/en/busd/',
        documentation: 'https://www.binance.com/en/busd',
        description: 'These are digitised US Dollars and are always purchased and redeemed at 1 BUSD for 1 US dollar.',
        chainId: 137,
        logoURI: ''
    },
    spUSDC: {
        name: 'Stargate USD Coin LP',
        address: '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
        symbol: 'spUSDC',
        decimals: 6,
        website: 'https://www.circle.com/usdc',
        documentation: 'https://stargateprotocol.gitbook.io/stargate/v/user-docs/',
        description: 'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
        chainId: 137,
        logoURI: 'https://ftmscan.com/token/images/USDC_32.png'
    },
    'USD+': {
        name: 'USD+ Stablecoin',
        symbol: 'USD+',
        address: '0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f',
        chainId: 137,
        decimals: 6,
        website: 'https://overnight.fi/',
        description: 'USD+ is USDC that pays you yield daily via rebase.  It is 100% collateralized with assets immediately convertible into USDC.  Yield is generated via strategies such as lending and stable-to-stable pools. Initial strategies include Aave, Rubicon, and Pika.',
        logoURI: '',
        documentation: 'https://docs.overnight.fi/'
    },
    spUSDT: {
        name: 'Stargate Tether USD LP',
        symbol: 'spUSDT',
        address: '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
        chainId: 137,
        decimals: 6,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://tether.to/',
        description: 'Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem.',
        documentation: 'https://stargateprotocol.gitbook.io/stargate/v/user-docs/'
    },
    DYST: {
        name: 'Dystopia token',
        symbol: 'DYST',
        address: '0x39aB6574c289c3Ae4d88500eEc792AB5B947A5Eb',
        chainId: 137,
        decimals: 18,
        logoURI: '',
        website: 'https://www.dystopia.exchange/',
        description: 'Dystopia is a decentralized exchange and automated market marker focused on providing efficient token swaps and deep liquidity for stablecoins and other assets. Dystopia has a sophisticated governance structure using the ve(3,3) system that provides the possibility to maximize gains for all users of the ecosystem.'
    },
    SOLACE: {
        name: 'solace',
        symbol: 'SOLACE',
        address: '0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40.svg',
        website: 'https://solace.fi/',
        description: 'Solace is building a community around making this space safe, secure and trusted so that we can onboard and de-risk DeFi and other crypto applications while opening the space to millions of users. We recently launched a coverage policy protocol that enables protection for liquidity providers, Defi protocols or DAOs to mitigate loss from hacks, bugs and exploits. Our purpose is to transform DeFi by delivering intelligent and empowering tools for a safe, secure and trusted industry.'
    },
    PAE: {
        name: 'Ripae',
        symbol: 'PAE',
        address: '0x8063037ea50E4a066bF1430EA1E3e609CD5cEf6B',
        chainId: 137,
        decimals: 18,
        website: 'https://matic.ripae.finance/',
        description: 'Ripae Finance’s full focus is to build a true cross-chain algorithmic stable coin protocol that is stabilized with true use-cases all around the DeFi Ecosystem.',
        logoURI: 'https://matic.ripae.finance/static/media/ripae_pae.87e37ce1.svg'
    },
    pMATIC: {
        name: 'pMATIC',
        symbol: 'pMATIC',
        address: '0xA0dF47432d9d88bcc040E9ee66dDC7E17A882715',
        chainId: 137,
        decimals: 18,
        website: 'https://matic.ripae.finance/',
        description: 'Ripae Finance’s full focus is to build a true cross-chain algorithmic stable coin protocol that is stabilized with true use-cases all around the DeFi Ecosystem.',
        logoURI: 'https://matic.ripae.finance/static/media/ripae_pftm.1a3fe2b4.svg'
    },
    LCD: {
        name: 'Lucidao',
        address: '0xc2A45FE7d40bCAc8369371B08419DDAFd3131b4a',
        symbol: 'LCD',
        decimals: 18,
        chainId: 137,
        website: 'https://lucidao.com/',
        description: 'Lucidao aims to gather a community of oracles and users to build the infrastructure and facilitate the bridge between crypto and the real worlds.',
        logoURI: 'https://assets.coingecko.com/coins/images/23693/large/lcd-icon-color-200px.png?1645450706'
    },
    LDO: {
        name: 'Lido DAO',
        address: '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756',
        symbol: 'LDO',
        decimals: 18,
        chainId: 137,
        website: 'https://stake.lido.fi/',
        documentation: 'https://docs.lido.fi/',
        description: 'Lido is a liquid staking solution for ETH 2.0 backed by industry-leading staking providers.',
        logoURI: 'https://assets.coingecko.com/coins/images/13573/large/Lido_DAO.png?1609873644'
    },
    cxBTC: {
        name: 'CelsiusX Wrapped BTC',
        symbol: 'cxBTC',
        address: '0xD30DC92b8ec0fa8de625768d208f51A93C10aFF2',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0xD30DC92b8ec0fa8de625768d208f51A93C10aFF2.svg',
        website: '',
        description: ''
    },
    NZDS: {
        name: 'New Zealand Dollar Stablecoin',
        symbol: 'NZDS',
        address: '0xeaFE31Cd9e8E01C8f0073A2C974f728Fb80e9DcE',
        chainId: 137,
        decimals: 6,
        website: 'https://www.techemynt.com/',
        description: 'All NZDS tokens are backed 100% by New Zealand dollars held in trust in a bank account (or cash equivalents) confirmed every six months by a leading accounting firm. ',
        logoURI: 'https://assets.coingecko.com/coins/images/20394/small/nzds.png?1636964381'
    },
    jNZD: {
        name: 'Jarvis Synthetic New Zealand Dollar',
        symbol: 'jNZD',
        address: '0x6b526Daf03B4C47AF2bcc5860B12151823Ff70E0',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'jNZD is a multi-collateralized synthetic token tracking the price of the New Zealand Dollar. It is built on the top of UMA and Chainlink.',
        logoURI: 'https://app.jarvis.exchange/assets/bd5ec61c3163ddb222eaadb2ce8d8042.svg'
    },
    newQUICK: {
        name: 'Quickswap',
        address: '0xB5C064F955D8e7F38fE0460C556a72987494eE17',
        symbol: 'newQUICK',
        decimals: 18,
        chainId: 137,
        website: 'https://quickswap.exchange/#/swap',
        description: 'Next-gen Layer 2 DEX. Trade at lightning-fast speeds with near-zero gas fees.',
        logoURI: 'https://assets.coingecko.com/coins/images/15185/small/quickswap.png?1620044811'
    },
    QUIDD: {
        name: 'QUIDD',
        address: '0x123706cDD8e60324e610E9A2CC7012D0F45A5b8E',
        symbol: 'QUIDD',
        decimals: 18,
        chainId: 137,
        website: 'https://www.quiddtoken.com/',
        description: 'A fungible utility token built on Ethereum, QUIDD is the cornerstone of a new, cooperative economic system that aligns the interests of collectors, creators, and developers.',
        logoURI: 'https://assets.coingecko.com/coins/images/19725/small/quidd.png?1637303435'
    },
    '4EUR': {
        name: 'Curve Factory 4EUR',
        symbol: '4EUR',
        address: '0xAd326c253A84e9805559b73A08724e11E49ca651',
        chainId: 137,
        decimals: 18,
        logoURI: '',
        website: 'https://polygon.curve.fi',
        description: 'Curves Factory 4EUR Pool'
    },
    MaticX: {
        name: 'Stader Staking Matic',
        symbol: 'MaticX',
        address: '0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6',
        chainId: 137,
        decimals: 18,
        logoURI: '',
        website: 'https://polygon.staderlabs.com/liquid-staking/maticx',
        description: 'Stader is a non-custodial smart contract-based staking platform that helps you conveniently discover and access staking solutions. We are building key staking middleware infra for multiple PoS networks for retail crypto users, exchanges and custodians.'
    },
    SD: {
        name: 'Stader ',
        symbol: 'SD',
        address: '0x1d734A02eF1e1f5886e66b0673b71Af5B53ffA94',
        chainId: 137,
        decimals: 18,
        logoURI: '',
        website: 'https://staderlabs.com/',
        description: 'Stader is a non-custodial smart contract-based staking platform that helps you conveniently discover and access staking solutions. We are building key staking middleware infra for multiple PoS networks for retail crypto users, exchanges and custodians.'
    },
    beQI: {
        name: 'Beefy QI',
        symbol: 'beQI',
        address: '0x97bfa4b212A153E15dCafb799e733bc7d1b70E72',
        chainId: 137,
        decimals: 18,
        logoURI: '',
        website: 'https://beefy.com',
        description: 'beQI is a Beefy-wrapped version of eQI. Holding beQI will be a great way to earn a bunch of QI. Beefy will distribute weekly QI rewards to beQI stakers. beQI holders will recieve the same rewards as max lock eQI holders'
    },
    stMATIC: {
        name: 'Lido Staked Matic stMATIC',
        symbol: 'stMATIC',
        address: '0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://assets.coingecko.com/coins/images/24185/large/stMATIC.png?1646789287/',
        website: 'https://polygon.lido.fi/',
        description: 'Lido for Polygon is a liquid staking solution for MATIC backed by industry-leading staking providers.'
    },
    ONE: {
        name: 'Wrapped ONE',
        address: '0x80c0CBDB8d0B190238795d376f0bD57fd40525F2',
        symbol: 'WONE',
        decimals: 18,
        chainId: 137,
        website: 'https://www.harmony.one/',
        description: 'Harmony is an open and fast blockchain. Our mainnet runs Ethereum applications with 2-second transaction finality and 100 times lower fees.',
        logoURI: 'https://res.cloudinary.com/dnz2bkszg/image/fetch/f_auto/https://raw.githubusercontent.com/sushiswap/icons/master/token/one.jpg'
    },
    METIS: {
        name: 'METIS',
        address: '0xA863246658DEA34111C3C1DceDb2cfd5d6067334',
        symbol: 'WMETIS',
        decimals: 18,
        chainId: 137,
        website: 'https://www.metis.io/',
        description: 'METIS IS SOLVING ETHEREUMS SIX BIGGEST CHALLENGES. SIMPLICITY. SPEED. STORAGE. SCALABILITY. SECURITY. SAVINGS.',
        logoURI: ''
    },
    NEAR: {
        name: 'NEAR',
        symbol: 'NEAR',
        address: '0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d.svg',
        website: 'https://near.org/',
        description: 'Through simple, secure, and scalable technology, NEAR empowers millions to invent and explore new experiences. Business, creativity, and community are being reimagined for a more sustainable and inclusive future.'
    },
    CEL: {
        name: 'Celsius CEL',
        symbol: 'CEL',
        address: '0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6',
        chainId: 137,
        decimals: 4,
        website: 'https://celsius.network/',
        description: "An economy where financial freedom doesn't come with a price tag.  Our goal is to disrupt the financial industry, one happy user at a time, and introduce financial freedom through crypto.",
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2700.png'
    },
    PAR: {
        name: 'PAR Stablecoin',
        symbol: 'PAR',
        address: '0xE2Aa7db6dA1dAE97C5f5C6914d285fBfCC32A128',
        chainId: 137,
        decimals: 18,
        website: 'https://mimo.capital/',
        description: 'Mimo have a lending platform allowing people to borrow PAR, a stable token algorithmically pegged to the Euro.',
        logoURI: 'https://assets.coingecko.com/coins/images/14153/small/par_round_200.png?1614670422'
    },
    EURS: {
        name: 'STATIS EURS Token',
        symbol: 'EURS',
        address: '0xE111178A87A3BFf0c8d18DECBa5798827539Ae99',
        chainId: 137,
        decimals: 2,
        website: 'https://stasis.net/',
        description: 'EURS token is a virtual financial asset that is designed to digitally mirror the EURO on the condition that its value is tied to the value of its collateral.',
        logoURI: 'https://assets.coingecko.com/coins/images/5164/small/EURS_300x300.png?1550571779'
    },
    EURt: {
        name: 'Euro Tether',
        symbol: 'EURt',
        address: '0x7BDF330f423Ea880FF95fC41A280fD5eCFD3D09f',
        chainId: 137,
        decimals: 6,
        website: 'https://tether.to/en/',
        description: 'Euro Tether token (EURt) is the first euro-pegged stablecoin pegged to the Euro.',
        logoURI: 'https://assets.coingecko.com/coins/images/17385/small/Tether_full_logo_dm.png?1627537298'
    },
    renBTC: {
        name: 'renBTC',
        symbol: 'renBTC',
        address: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
        chainId: 137,
        decimals: 8,
        website: 'https://renproject.io/',
        description: 'RenBTC is an ERC-20 token built on the Ethereum network, pegged to Bitcoin. This means that each RenBTC can be always redeemed for one Bitcoin, and hence tends to maintain its value at close to the Bitcoin market rate.',
        logoURI: 'https://tokens.pancakeswap.finance/images/0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c.png'
    },
    IXT: {
        name: 'IX Token IXT',
        symbol: 'IXT',
        address: '0xE06Bd4F5aAc8D0aA337D13eC88dB6defC6eAEefE',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://assets.coingecko.com/coins/images/20927/large/IXT_SYMBOL_SVG_RGB_BLACK.png?1637934555',
        website: 'https://www.planetix.com/',
        description: 'Planet IX is an online NFT-strategy game where a broken digital rendition of Planet Earth is its game field.'
    },
    STG: {
        name: 'Stargate',
        symbol: 'STG',
        address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590/logo.png',
        website: 'https://stargate.finance/',
        description: 'Stargate is a community-driven organization building the first fully composable native asset bridge, and the first dApp built on LayerZero.',
        documentation: 'https://stargateprotocol.gitbook.io/stargate/v/user-docs/'
    },
    XSGD: {
        name: 'StraitsX Singapore Dollar',
        symbol: 'XSGD',
        address: '0x769434dcA303597C8fc4997Bf3DAB233e961Eda2',
        chainId: 137,
        decimals: 6,
        website: 'https://www.straitsx.com/sg',
        description: 'XSGD is the digital Singapore Dollar running on the Ethereum and Zilliqa blockchains.',
        logoURI: ''
    },
    jSGD: {
        name: 'Jarvis Synthetic Singapore Dollar',
        symbol: 'jSGD',
        address: '0xa926db7a4CC0cb1736D5ac60495ca8Eb7214B503',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'jSGD is a multi-collateralized synthetic token tracking the price of the Singapore Dollar. It is built on the top of UMA and Chainlink.',
        logoURI: ''
    },
    FUSE: {
        name: 'Fuse',
        symbol: 'FUSE',
        address: '0xF915fDDa4c882731C0456a4214548Cd13A822886',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xd3974AE5A9BCD4AE4c9037a25A67374a11df4154/logo.png',
        website: 'https://fuse.io/',
        description: 'Fuse was founded in 2019 with a mission to bring the power of mobile payments to communities around the world.'
    },
    ORBS: {
        name: 'Orbs Token',
        symbol: 'ORBS',
        address: '0x614389EaAE0A6821DC49062D56BDA3d9d45Fa2ff',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3835.png',
        website: 'https://www.orbs.com/',
        description: 'Making Your Smart Contracts Smarter'
    },
    SX: {
        name: 'SX Network SX',
        symbol: 'SX',
        address: '0x840195888Db4D6A99ED9F73FcD3B225Bb3cB1A79',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://assets.coingecko.com/coins/images/13779/large/sx.png?1636034699',
        website: 'https://sx.technology/',
        description: 'SX Network is the first public blockchain to combine a smart contract platform with an on-chain community treasury and a native prediction market protocol.'
    },
    GENESIS: {
        name: 'Genesis Worlds GENESIS',
        symbol: 'GENESIS',
        address: '0x51869836681BcE74a514625c856aFb697a013797',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://assets.coingecko.com/coins/images/19905/large/kKkWmniB_400x400.jpg?1636100432',
        website: 'https://genesis.game/',
        description: 'Genesis is a multicreator gaming universe, with a diverse community working together to achieve a common goal: A metaverse that will still be growing, evolving, and actively played in 100 years'
    },
    BICO: {
        name: 'Biconomy BICO',
        symbol: 'BICO',
        address: '0x91c89A94567980f0e9723b487b0beD586eE96aa7',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://assets.coingecko.com/coins/images/21061/large/biconomy_logo.jpg?1638269749',
        website: 'https://www.biconomy.io/',
        description: 'Biconomy is a multichain relayer protocol that aims to improve the user onboarding and transaction experience on decentralized applications (DApps)'
    },
    BOOK: {
        name: 'Bookie Dao BOOK',
        symbol: 'BOOK',
        address: '0x8192759Bf7f247cC92F74E39B3A4225516624fC1',
        chainId: 137,
        decimals: 8,
        logoURI: 'https://bookie.farm/logoether/bookie200.png',
        website: 'https://bookie.farm/',
        description: 'Decentralized Betting, where Odds & Games meet the Bookie - play the game or be the house, your stake!'
    },
    cxETH: {
        name: 'CelsiusX Wrapped ETH',
        symbol: 'cxETH',
        address: '0xfe4546feFe124F30788c4Cc1BB9AA6907A7987F9',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://i.ibb.co/VDPBwHS/cx-ETH-128x128.png',
        website: 'https://celsiusx.io/ ',
        description: 'CelsiusX Wrapped ETH Token'
    },
    cxADA: {
        name: 'CelsiusX Wrapped ADA',
        symbol: 'cxADA',
        address: '0x64875Aaa68d1d5521666C67d692Ee0B926b08b2F',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://i.ibb.co/x3RcB6Q/cx-ADA-128x128.png',
        website: 'https://celsiusx.io/ ',
        description: 'CelsiusX Wrapped ADA Token'
    },
    cxDOGE: {
        name: 'CelsiusX Wrapped DOGE',
        symbol: 'cxDOGE',
        address: '0x9Bd9aD490dD3a52f096D229af4483b94D63BE618',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://i.ibb.co/FH1GMYX/cx-DOGE-128x128.png',
        website: 'https://celsiusx.io/ ',
        description: 'CelsiusX Wrapped DOGE Token'
    },
    FODL: {
        name: 'Fodl Finance FODL',
        symbol: 'FODL',
        address: '0x5314bA045a459f63906Aa7C76d9F337DcB7d6995',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://assets.coingecko.com/coins/images/19040/large/new.jpg?1634559024',
        website: 'https://fodl.finance/',
        description: 'Fodl enables traders to utilize leverage for their trades without paying a funding rate. This leverage is derived from existing DeFi building blocks, such as Compound and Aave.'
    },
    SAND: {
        name: 'Sandbox',
        symbol: 'SAND',
        address: '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
        chainId: 137,
        decimals: 18,
        website: 'https://www.sandbox.game',
        description: 'The Sandbox is a virtual Metaverse where players can play, build, own, and monetize their virtual experiences. ',
        logoURI: 'https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg?1597397942'
    },
    CADC: {
        name: 'CAD Coin',
        symbol: 'CADC',
        address: '0x5d146d8B1dACb1EBBA5cb005ae1059DA8a1FbF57',
        chainId: 137,
        decimals: 18,
        website: 'https://paytrie.com/cadc',
        description: 'CADC is a fully-backed stable coin for the Canadian Dollar, issued by PayTrie.',
        logoURI: 'https://assets.coingecko.com/coins/images/14149/small/cadc_2.png?1614666625'
    },
    jCAD: {
        name: 'Jarvis Synthetic Canadian Dollar',
        symbol: 'jCAD',
        address: '0x8ca194A3b22077359b5732DE53373D4afC11DeE3',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'jCAD is a multi-collateralized synthetic token tracking the price of the Canadian Dollar. It is built on the top of UMA and Chainlink.',
        logoURI: 'https://yield.jarvis.network/static/media/jCAD.832ff304.png'
    },
    USTw: {
        name: 'TerraUSD (Wormhole)',
        symbol: 'UST',
        address: '0xE6469Ba6D2fD6130788E0eA9C0a0515900563b59',
        chainId: 137,
        decimals: 6,
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
        website: 'https://coinmarketcap.com/currencies/terrausd-wormhole/',
        description: 'Terra stablecoins offer instant settlements, low fees and seamless cross-border exchange - loved by millions of users and merchants.'
    },
    ETH2x: {
        name: 'ETH 2x Flexible Leverage Index',
        symbol: 'ETH2x',
        address: '0x3Ad707dA309f3845cd602059901E39C4dcd66473',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9789.png',
        website: 'https://www.indexcoop.com/ethfli',
        description: 'The Ethereum Flexible Leverage Index lets you leverage a collateralized debt position in a safe and efficient way, by abstracting its management into a simple index. It enabled market participants to take on leverage while minimizing the transaction costs and risks associated with maintaining collateralized debt.'
    },
    gOHM: {
        name: 'Governance OHM',
        symbol: 'gOHM',
        address: '0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1.svg',
        website: 'https://www.olympusdao.finance/',
        description: 'Olympus is building a community-owned decentralized financial infrastructure to bring more stability and transparency for the world.'
    },
    TUSD: {
        name: 'True USD',
        symbol: 'TUSD',
        address: '0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756',
        decimals: 18,
        chainId: 137,
        website: 'https://www.trueusd.com/',
        description: 'TrueUSD is one of a number of cryptocurrency stablecoins administered by TrustToken, a platform for tokenizing real-world assets.',
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2563.png'
    },
    WCRO: {
        name: 'WCRO',
        symbol: 'WCRO',
        address: '0xf2D8124b8F9267DaD61351c7aD252362880C6638',
        chainId: 137,
        decimals: 18,
        website: 'https://cronos.crypto.org/',
        description: 'Crypto.com Coin',
        logoURI: 'https://vvs.finance/images/tokens/0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23.svg'
    },
    SHIB: {
        name: 'SHIBA INU',
        symbol: 'SHIB',
        address: '0x6f8a06447Ff6FcF75d803135a7de15CE88C1d4ec',
        chainId: 137,
        decimals: 18,
        website: 'https://shibatoken.com/',
        description: 'A Decentralized Meme Token that Evolved into a Vibrant Ecosystem.',
        logoURI: 'https://assets.coingecko.com/coins/images/11939/small/shiba.png?1622619446'
    },
    FTM: {
        name: 'Fantom Token',
        symbol: 'FTM  ',
        address: '0xB85517b87BF64942adf3A0B9E4c71E4Bc5Caa4e5',
        chainId: 137,
        decimals: 18,
        website: 'https://fantom.foundation/',
        description: 'Fantom is a fast, high-throughput open-source smart contract platform for digital assets and dApps.',
        logoURI: 'https://ftmscan.com/token/images/wFtm_32.png'
    },
    jEUR: {
        name: 'Jarvis Synthetic Euro',
        symbol: 'jEUR',
        address: '0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'jEUR is a multi-collateralized synthetic token tracking the price of Euro. It is built on the top of UMA and Chainlink.',
        logoURI: 'https://i.imgur.com/ZvP634G.png',
        documentation: 'https://learn.jarvis.network/'
    },
    jGBP: {
        name: 'Jarvis Synthetic British Pound',
        symbol: 'jGBP',
        address: '0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'jGBP is a multi-collateralized synthetic token tracking the price of the British Pound. It is built on the top of UMA and Chainlink.',
        logoURI: 'https://i.imgur.com/zOLD6Vf.png'
    },
    jCHF: {
        name: 'Jarvis Synthetic Swiss Franc',
        symbol: 'jCHF',
        address: '0xbD1463F02f61676d53fd183C2B19282BFF93D099',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'jCHF is a multi-collateralized synthetic token tracking the price of the Swiss Franc. It is built on the top of UMA and Chainlink.',
        logoURI: 'https://i.imgur.com/EknGhAl.png'
    },
    JRT: {
        name: 'Jarvis Reward Token',
        symbol: 'JRT',
        address: '0x596eBE76e2DB4470966ea395B0d063aC6197A8C5',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'The Jarvis Reward Token  is a utility token for securing and governing the Jarvis network, and rewarding agents who would bring value to it.',
        logoURI: 'https://cdn.coinranking.com/vLU4_a_Zp/jarvis.svg?size=48x48'
    },
    pBREW: {
        name: 'pBREW',
        symbol: 'pBREW',
        address: '0xb5106A3277718eCaD2F20aB6b86Ce0Fee7A21F09',
        chainId: 137,
        decimals: 18,
        website: 'https://polygon.cafeswap.finance/',
        description: 'Safest & Lowest fee AMM on BSC & Polygon.',
        logoURI: 'https://polygon.cafeswap.finance/images/tokens/pbrew.png'
    },
    FOX: {
        name: 'FOX',
        symbol: 'FOX',
        address: '0x65A05DB8322701724c197AF82C9CaE41195B0aA8',
        chainId: 137,
        decimals: 18,
        website: 'https://shapeshift.com/',
        description: 'FOX is ShapeShift’s official loyalty token. Holders of FOX enjoy zero-commission trading and win ongoing USDC crypto payments from Rainfall (payments increase in proportion to your FOX holdings). Use at ShapeShift.com.',
        logoURI: 'https://assets.coingecko.com/coins/images/9988/large/FOX.png'
    },
    CRYSTL: {
        name: 'CrystalToken',
        symbol: 'CRYSTL',
        address: '0x76bF0C28e604CC3fE9967c83b3C3F31c213cfE64',
        chainId: 137,
        decimals: 18,
        website: 'https://www.crystl.finance/',
        description: 'Crystl Finance is a decentralized yield farm that runs on Polygon and ApeSwap Polygon Exchange, and pays out $CRYSTL, the native currency. With it, you can earn profits from your capital in a way that is fair, transparent, and secure.',
        logoURI: 'https://www.crystl.finance/images/crystlbg.png'
    },
    TETU: {
        name: 'TETU',
        symbol: 'TETU',
        address: '0x255707B70BF90aa112006E1b07B9AeA6De021424',
        chainId: 137,
        decimals: 18,
        website: 'https://app.tetu.io/',
        description: 'Tetu implements automated yield farming strategies in order to provide investors with a safe and secure method of receiving high yield on their investments.',
        logoURI: 'https://github.com/tetu-io/tetu-brand-assets/blob/master/token_icons/flat_icon.svg'
    },
    WATCH: {
        name: 'YieldWatch',
        symbol: 'WATCH',
        address: '0x09211Dc67f9fe98Fb7bBB91Be0ef05f4a12FA2b2',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8621.png',
        website: 'https://www.yieldwatch.net/',
        description: 'Smart Defi Dashboard'
    },
    AXS: {
        name: 'Axie Infinity Shard',
        symbol: 'AXS',
        address: '0x61BDD9C7d4dF4Bf47A4508c0c8245505F2Af5b7b',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/6783.png',
        website: 'https://axieinfinity.com/',
        description: 'Axie Infinity is a Pokémon-inspired digital pet universe built on the Ethereum blockchain where anyone can earn token rewards through skilled gameplay and contributions to the ecosystem.'
    },
    AVAX: {
        name: 'Avalanche',
        symbol: 'AVAX',
        address: '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818',
        website: 'https://www.avax.network/',
        description: 'Avalanche is the fastest smart contracts platform in the blockchain industry, as measured by time-to-finality, and has the most validators securing its activity of any proof-of-stake protocol.'
    },
    PEAR: {
        name: 'PearZap',
        symbol: 'PEAR',
        address: '0xc8bcb58caEf1bE972C0B638B1dD8B0748Fdc8A44',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://assets.coingecko.com/coins/images/17173/small/pear200.png',
        website: 'https://pearzap.com/',
        description: 'PearZap is a high yield farm & pool on the Polygon Chain (MATIC) and Binance Smart Chain'
    },
    SPADE: {
        name: 'PolygonFarm',
        symbol: 'SPADE',
        address: '0xf5EA626334037a2cf0155D49eA6462fDdC6Eff19',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://polygonfarm.finance/images/spade.png',
        website: 'https://polygonfarm.finance/',
        description: 'PolygonFarm Finance is a community led next generation stable-yield farming protocol established exclusively on the Polygon ecosystem'
    },
    $DG: {
        name: 'decentral.games',
        address: '0x2a93172c8DCCbfBC60a39d56183B7279a2F647b4',
        symbol: '$DG',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/dg.jpg',
        website: 'https://decentral.games/',
        description: 'decentral.games is a DAO-governed metaverse casino powered by $DG'
    },
    AAVE: {
        name: 'Aave',
        address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
        symbol: 'AAVE',
        decimals: 18,
        chainId: 137,
        website: 'https://aave.com/',
        description: 'Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.',
        logoURI: 'https://etherscan.io/token/images/aave_32.png'
    },
    AZUKI: {
        name: 'DokiDokiAzuki',
        address: '0x7CdC0421469398e0F3aA8890693d86c840Ac8931',
        symbol: 'AZUKI',
        decimals: 18,
        chainId: 137,
        website: 'https://dokidoki.com/',
        description: 'AZUKI is a secondary token designed for use in Doki Doki NFT products',
        logoURI: 'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/azuki.png'
    },
    BAL: {
        name: 'Balancer',
        symbol: 'BAL',
        address: '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3',
        chainId: 137,
        decimals: 18,
        website: 'https://balancer.fi/',
        description: 'Balancer turns the concept of an index fund on its head: instead of a paying fees to portfolio managers to rebalance your portfolio, you collect fees from traders, who rebalance your portfolio by following arbitrage opportunities. ',
        logoURI: 'https://hecoinfo.com/token/images/bal_32.png'
    },
    BANANA: {
        name: 'ApeSwapFinance Banana',
        address: '0x5d47bAbA0d66083C52009271faF3F50DCc01023C',
        symbol: 'BANANA',
        decimals: 18,
        chainId: 137,
        website: 'https://apeswap.finance/',
        description: 'ApeSwap is a leading decentralized exchange (DEX) on Binance Smart Chain and Polygon focused on offering a premier trading experience. Users are incentivized to pool liquidity on ApeSwap through yield farming to earn the native currency, $BANANA. Additionally, apes can use their earned $BANANA to stake and earn other tokens and unlock exclusive features. Built by DeFi apes, for DeFi apes, we have a dedicated team with years of experience who are committed to the DeFi community and growing the ApeSwap Jungle.',
        logoURI: 'https://raw.githubusercontent.com/ApeSwapFinance/apeswap-token-lists/main/assets/BANANA.svg'
    },
    BIFI: {
        name: 'beefy.finance',
        address: '0xFbdd194376de19a88118e84E279b977f165d01b8',
        symbol: 'BIFI',
        decimals: 18,
        chainId: 137,
        website: 'https://www.beefy.finance/',
        description: 'Beefy Finance is a Decentralized, Multi-Chain Yield Optimizer platform that allows its users to earn compound interest on their crypto holdings.',
        logoURI: 'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png',
        documentation: 'https://docs.beefy.finance/'
    },
    DAI: {
        name: 'Dai Stablecoin',
        address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
        symbol: 'DAI',
        decimals: 18,
        chainId: 137,
        website: 'https://makerdao.com/',
        description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png'
    },
    DEGEN: {
        name: 'DEGEN Index',
        address: '0x8a2870fb69A90000D6439b7aDfB01d4bA383A415',
        symbol: 'DEGEN',
        decimals: 18,
        chainId: 137,
        website: 'https://indexed.finance/',
        description: 'A higher risk/reward index of promising Ethereum protocols that have significant room to grow',
        logoURI: 'https://raw.githubusercontent.com/sameepsi/quickswap-default-token-list/master/assets/DEGEN_LOGO.png'
    },
    ETH: {
        name: 'Ether',
        address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
        symbol: 'ETH',
        decimals: 18,
        chainId: 137,
        website: 'https://ethereum.org/',
        description: 'The native currency that flows within the Ethereum economy is called Ether (ETH). Ether is typically used to pay for transaction fees called Gas, and it is the base currency of the network.',
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    },
    FISH: {
        name: 'Fish',
        address: '0x3a3Df212b7AA91Aa0402B9035b098891d276572B',
        symbol: 'FISH',
        decimals: 18,
        chainId: 137,
        website: 'https://polycat.finance/vaults',
        description: 'Polycat is a value-oriented, economically sustainable and decentralized hybrid yield optimizer (yield farm and yield aggregator) running on the Polygon blockchain (formerly known as MATIC).',
        logoURI: 'https://i.imgur.com/ncleoTN.png'
    },
    FRAX: {
        name: 'Frax',
        address: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
        symbol: 'FRAX',
        decimals: 18,
        chainId: 137,
        website: 'https://frax.finance/',
        description: 'The Frax Protocol introduced the world to the concept of a cryptocurrency being partially backed by collateral and partially stabilized algorithmically.',
        logoURI: 'https://avatars.githubusercontent.com/u/56005256?s=200&v=4'
    },
    FXS: {
        name: 'Frax Share',
        address: '0x1a3acf6D19267E2d3e7f898f42803e90C9219062',
        symbol: 'FXS',
        decimals: 18,
        chainId: 137,
        website: 'https://frax.finance/',
        description: 'The Frax Share token (FXS) is the non-stable, utility token in the protocol. It is meant to be volatile and hold rights to governance and all utility of the system. It is important to note that we take a highly governance-minimized approach to designing trustless money in the same ethos as Bitcoin. We eschew DAO-like active management such as MakerDAO. The less parameters for a community to be able to actively manage, the less there is to disagree on. Parameters that are up for governance through FXS include adding/adjusting collateral pools, adjusting various fees (like minting or redeeming), and refreshing the rate of the collateral ratio. No other actions such as active management of collateral or addition of human-modifiable parameters are possible other than a hardfork that would require voluntarily moving to a new implementation entirely. ',
        logoURI: 'https://app.sushi.com/images/tokens/fxs-square.jpg'
    },
    GHST: {
        name: 'Aavegotchi GHST Token',
        address: '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7',
        symbol: 'GHST',
        decimals: 18,
        chainId: 137,
        website: 'https://www.aavegotchi.com/',
        description: 'Aavegotchis are crypto-collectibles living on the Ethereum blockchain, backed by the ERC721 standard used in popular blockchain games.',
        logoURI: 'https://aavegotchi.com/images/ghsttoken.svg'
    },
    GNS: {
        name: 'Gains Network Token',
        address: '0xE5417Af564e4bFDA1c483642db72007871397896',
        symbol: 'GNS',
        decimals: 18,
        chainId: 137,
        website: 'https://gainsnetwork.io/',
        description: 'Decentralized leverage trading platform on Polygon and Arbitrum.',
        logoURI: 'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/GNS.png',
        documentation: 'https://gains-network.gitbook.io/docs-home/'
    },
    LINK: {
        name: 'ChainLink Token',
        address: '0xb0897686c545045aFc77CF20eC7A532E3120E0F1',
        symbol: 'LINK',
        decimals: 18,
        website: 'https://chain.link/',
        description: 'Link is the currency used to pay the Chainlink node operators for their work. Chainlink node operators have to stake LINK in the network in order to participate and provide data services.',
        chainId: 137,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png'
    },
    MANA: {
        name: 'Decentraland MANA',
        address: '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4',
        symbol: 'MANA',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png'
    },
    MAI: MAI,
    miMATIC: MAI,
    MUST: {
        name: 'Must',
        address: '0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f',
        symbol: 'MUST',
        decimals: 18,
        chainId: 137,
        website: 'https://www.cometh.io/',
        description: 'Explore the galaxy and mine precious tokens out of asteroids. Cometh is a defi powered game with yield generating NFT. Get a spaceship, explore the galaxy and earn tokens.',
        logoURI: 'https://etherscan.io/token/images/cometh_32.png'
    },
    QI: {
        name: 'Qi Dao',
        address: '0x580A84C73811E1839F75d86d75d88cCa0c241fF4',
        symbol: 'QI',
        decimals: 18,
        chainId: 137,
        website: 'https://www.mai.finance/',
        description: 'QiDao is a self-sustaining, community-governed protocol that allows you to borrow stablecoins interest-free against your crypto assets used as collateral. Loans are paid out and repaid in miTokens (stablecoin soft pegged to the USD).',
        logoURI: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/qi.png',
        documentation: 'https://docs.mai.finance/'
    },
    QUICK: {
        name: 'Quickswap',
        address: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
        symbol: 'QUICK',
        decimals: 18,
        chainId: 137,
        website: 'https://quickswap.exchange/#/swap',
        description: 'Next-gen Layer 2 DEX. Trade at lightning-fast speeds with near-zero gas fees.',
        logoURI: 'https://assets.coingecko.com/coins/images/15185/small/quickswap.png?1620044811'
    },
    dQUICK: {
        name: "Dragon's Quick",
        address: '0xf28164A485B0B2C90639E47b0f377b4a438a16B1',
        symbol: 'dQUICK',
        decimals: 18,
        chainId: 137,
        website: 'https://quickswap.exchange/#/syrup',
        description: 'Deposit your dQUICK tokens to earn more through the QuickSwap platform.',
        logoURI: 'https://assets.coingecko.com/coins/images/15185/small/quickswap.png?1620044811'
    },
    newdQUICK: {
        name: "Dragon's Quick",
        address: '0x958d208Cdf087843e9AD98d23823d32E17d723A1',
        symbol: 'dQUICK',
        decimals: 18,
        chainId: 137,
        website: 'https://quickswap.exchange/#/syrup',
        description: 'Deposit your dQUICK tokens to earn more through the QuickSwap platform.',
        logoURI: 'https://assets.coingecko.com/coins/images/15185/small/quickswap.png?1620044811'
    },
    SOL: {
        name: 'Solana',
        address: '0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4',
        symbol: 'SOL',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452',
        website: 'https://solana.com/',
        description: 'The Solana protocol is designed to facilitate decentralized app (DApp) creation. It aims to improve scalability by introducing a proof-of-history (PoH) consensus combined with the underlying proof-of-stake (PoS) consensus of the blockchain.'
    },
    TEL: {
        name: 'Telcoin',
        address: '0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32',
        symbol: 'TEL',
        decimals: 2,
        chainId: 137,
        website: 'https://www.telco.in/',
        description: 'A cryptocurrency distributed by your mobile operator and accepted everywhere.',
        logoURI: 'https://pbs.twimg.com/profile_images/933388441475194881/57fOk40N_400x400.jpg'
    },
    UNI: {
        name: 'Uniswap',
        address: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
        symbol: 'UNI',
        decimals: 18,
        website: 'https://uniswap.org/',
        description: 'UNI is the governance token for Uniswap. UNI was introduced on 16th September 2020 through a retrospective airdrop to users who have interacted with the protocol either by swapping tokens or by providing liquidity.',
        chainId: 137,
        logoURI: 'https://raw.githubusercontent.com/sameepsi/quickswap-interface/master/public/favicon1.png'
    },
    USDC: {
        name: 'USD Coin',
        address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        symbol: 'USDC',
        decimals: 6,
        website: 'https://www.circle.com/usdc',
        description: 'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
        chainId: 137,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
    },
    USDT: {
        name: 'Tether USD',
        address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        symbol: 'USDT',
        decimals: 6,
        chainId: 137,
        website: 'https://tether.to/',
        description: 'Tether converts cash into digital currency, to anchor or tether the value to the price of national currencies like the US dollar, the Euro, and the offshore Chinese yuan.',
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png'
    },
    VISION: {
        name: 'Vision Token',
        address: '0x034b2090b579228482520c589dbD397c53Fc51cC',
        symbol: 'VISION',
        decimals: 18,
        chainId: 137,
        website: 'https://matic.apy.vision/',
        description: 'All-in-one liquidity pool analytics and yield farming rewards tracking tool',
        logoURI: 'https://s3-us-west-2.amazonaws.com/acf-uploads/apyvisionlogo200circle.png'
    },
    WBTC: {
        name: 'Wrapped BTC',
        address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
        symbol: 'WBTC',
        decimals: 8,
        website: 'https://wbtc.network/',
        description: 'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
        chainId: 137,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png'
    },
    WEXpoly: {
        name: 'WEXPoly',
        address: '0x4c4BF319237D98a30A929A96112EfFa8DA3510EB',
        symbol: 'WEXPoly',
        decimals: 18,
        chainId: 137,
        website: 'https://wault.finance/',
        description: 'WEXpoly, or Wault EXchange Token, is the foundational token of WaultSwap, on the Polygon network. ',
        logoURI: 'https://assets.coingecko.com/coins/images/16282/small/ws_purple_circle_200x200_%281%29.png'
    },
    MATIC: MATIC,
    WMATIC: MATIC,
    WNATIVE: MATIC,
    xMARK: {
        name: 'Standard',
        address: '0xf153EfF70DC0bf3b085134928daeEA248d9B30d0',
        symbol: 'xMARK',
        decimals: 9,
        chainId: 137,
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/8cb78aca77b340510958ed98a3cd260d2d7f0420/blockchains/ethereum/assets/0x36b679bd64Ed73DBfd88909cDCB892cB66Bd4CBb/logo.png',
        website: 'https://benchmarkprotocol.finance/',
        description: 'Benchmark Protocol is an elastic stablecoin-alternative bridging capital markets to DeFi.'
    },
    YFI: {
        name: 'yearn.finance',
        address: '0xDA537104D6A5edd53c6fBba9A898708E465260b6',
        symbol: 'YFI',
        decimals: 18,
        chainId: 137,
        website: 'https://yearn.finance/',
        description: 'Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain. The protocol is maintained by various independent developers and is governed by YFI holders.',
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png'
    },
    ROUTE: {
        name: 'Route',
        address: '0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4',
        symbol: 'ROUTE',
        decimals: 18,
        chainId: 137,
        website: 'https://routerprotocol.com/',
        description: 'Router is developing the bridging infrastructure to allow contract level data flow across various blockchains, thus enabling asset level data transfer.',
        logoURI: 'https://assets.coingecko.com/coins/images/13709/small/route_token_200x200-19.png'
    },
    DFYN: {
        name: 'Dfyn',
        address: '0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97',
        symbol: 'DFYN',
        decimals: 18,
        chainId: 137,
        website: 'https://exchange.dfyn.network/#/swap',
        description: 'With Dfyn nodes spread across multiple Layer 1 and Layer 2 blockchains, Dfyn will act as a multi-chain DEX. This will allow Dfyn to plug into a liquidity super-mesh, enabling users to perform their asset trades seamlessly on several blockchains from a single interface. Dfyn will also build a decentralized swap station to swap large assets natively like BTC, ETH, ADA in a non-custodial way.',
        logoURI: 'https://raw.githubusercontent.com/dfyn/assets/main/DFYN_logo.png'
    },
    IRON: {
        name: 'Iron',
        address: '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a',
        symbol: 'IRON',
        decimals: 18,
        chainId: 137,
        logoURI: 'https://polygon.iron.finance/static/media/IRON.484ee2b8.png'
    },
    SUSHI: {
        name: 'Sushi',
        address: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
        symbol: 'SUSHI',
        decimals: 18,
        chainId: 137,
        website: 'https://sushi.com/',
        description: 'Sushi is the home of DeFi. Their community is building a comprehensive, decentralized trading platform for the future of finance. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform.',
        logoURI: 'https://app.sushi.com/static/media/logo.11fafaa5.png'
    },
    GRT: {
        name: 'The Graph',
        address: '0x5fe2B58c013d7601147DcdD68C143A77499f5531',
        symbol: 'GRT',
        decimals: 18,
        chainId: 137,
        website: 'https://thegraph.com/',
        description: 'The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.',
        logoURI: 'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x5fe2B58c013d7601147DcdD68C143A77499f5531/logo.png'
    },
    WOOFY: {
        name: 'Woofy',
        address: '0xD0660cD418a64a1d44E9214ad8e459324D8157f1',
        symbol: 'WOOFY',
        decimals: 12,
        chainId: 137,
        website: 'https://woofy.finance/',
        description: 'The WOOFY token is the blue dog companion token of YFI. Utilizing special Woof technology, it allows two-way conversion between the two tokens, allowing holders to be exposed to YFI in a fluffier package.',
        logoURI: 'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xD0660cD418a64a1d44E9214ad8e459324D8157f1/logo.png'
    },
    renDOGE: {
        name: 'renDOGE',
        address: '0xcE829A89d4A55a63418bcC43F00145adef0eDB8E',
        symbol: 'renDOGE',
        decimals: 8,
        chainId: 137,
        website: 'https://renproject.io/',
        description: 'renDOGE is a one-for-one representation of Dogecoin (DOGE) on Polygon via RenVM.',
        logoURI: 'https://polygonscan.com/token/images/rendogecoin_32.png'
    },
    SNX: {
        name: 'SNX',
        address: '0x50B728D8D964fd00C2d0AAD81718b71311feF68a',
        symbol: 'SNX',
        decimals: 18,
        chainId: 137,
        website: 'https://synthetix.io/',
        description: 'Synthetix is the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets.',
        logoURI: 'https://app.sushi.com/images/tokens/snx-square.jpg'
    },
    CRV: {
        name: 'Curve Protocol',
        symbol: 'CRV',
        address: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
        chainId: 137,
        decimals: 18,
        website: 'https://curve.fi/',
        description: 'Curve is an exchange liquidity pool on Ethereum. Curve is designed for extremely efficient stablecoin trading and low risk, supplemental fee income for liquidity providers, without an opportunity cost.',
        logoURI: 'https://external-content.duckduckgo.com/ip3/resources.curve.fi.ico'
    },
    DOKI: {
        name: 'DokiDoki Finance',
        symbol: 'DOKI',
        address: '0x5C7F7Fe4766fE8f0fa9b41E2E4194d939488ff1C',
        chainId: 137,
        decimals: 18,
        website: 'https://dokidoki.finance/stake/pool/1',
        description: 'Doki is the platform token for DokiDoki Finance.',
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544/logo.png'
    },
    PZAP: {
        name: 'PolyZap',
        symbol: 'PZAP',
        address: '0xeb2778f74E5ee038E67AA6c77f0F0451ABd748FD',
        chainId: 137,
        decimals: 18,
        website: 'https://farm.polyzap.finance/',
        description: 'PolyZap is an innovative and reliable, next-generation Automated Market Maker (AMM) and Yield Farm on the Polygon Network, with unique features and attributes:',
        logoURI: 'https://polyzap.finance/logo.png'
    },
    WFIL: {
        name: 'Wrapped Filecoin',
        symbol: 'WFIL',
        address: '0xEde1B77C0Ccc45BFa949636757cd2cA7eF30137F',
        chainId: 137,
        decimals: 18,
        website: 'https://filecoin.io/',
        description: 'Filecoin is an open-source cloud storage marketplace, protocol, and cryptocurrency.',
        logoURI: 'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xEde1B77C0Ccc45BFa949636757cd2cA7eF30137F/logo.png'
    },
    ibBTC: {
        name: 'Interest bearing BTC',
        symbol: 'ibBTC',
        address: '0x4EaC4c4e9050464067D673102F8E24b2FccEB350',
        chainId: 137,
        decimals: 18,
        website: 'https://app.badger.finance/ibBTC',
        description: 'ibBTC is an asset launched in collaboration with DeFiDollar, it stands for Interest Bearing Bitcoin. It was created to serve as the default Bitcoin asset on Ethereum while generating interest to the users who hold it.',
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png'
    },
    BNB: {
        name: 'AnySwap Bridge Polygon Binance Coin',
        symbol: 'BNB',
        address: '0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F',
        chainId: 137,
        decimals: 18,
        website: 'https://www.binance.com/',
        description: 'Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain.',
        logoURI: 'https://tokens.pancakeswap.finance/images/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png'
    },
    PUP: {
        name: 'Polypup.Finance',
        symbol: 'PUP',
        address: '0xcFe2cF35D2bDDE84967e67d00aD74237e234CE59',
        chainId: 137,
        decimals: 18,
        website: 'https://www.polypup.finance/',
        description: 'PolyPup Finance is a new DeFi project on Polygon featuring a deflationary token model with a maximum supply of 31,000 PUP tokens.',
        logoURI: 'https://polypup.finance/images/egg/9.png'
    },
    rUSD: {
        name: 'Ramp USD',
        symbol: 'rUSD',
        address: '0xfC40a4F89b410a1b855b5e205064a38fC29F5eb5',
        chainId: 137,
        decimals: 18,
        website: 'https://rampdefi.com/',
        description: 'Ramp aims to empower users with access to a global, blockchain-agnostic liquidity network. rUSD can be minted on Binance Smart Chain and Polygon, with more chains in the near future.',
        logoURI: 'https://appv2.rampdefi.com/assets/icon/rusdc.svg'
    },
    UST: {
        name: 'USD Terra',
        symbol: 'UST',
        address: '0x692597b009d13C4049a947CAB2239b7d6517875F',
        chainId: 137,
        decimals: 18,
        website: 'https://www.terra.money/',
        description: 'Terra stablecoins offer instant settlements, low fees and seamless cross-border exchange - loved by millions of users and merchants.',
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png'
    },
    WMATIC_DFYN: {
        name: 'Wrapped Matic, DFYN version',
        symbol: 'WMATIC',
        address: '0x4c28f48448720e9000907BC2611F73022fdcE1fA',
        chainId: 137,
        decimals: 18,
        website: 'https://polygon.technology/',
        description: 'DFyn version. Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.',
        logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png'
    },
    pWINGS: {
        name: 'JetSwap Polygon Token',
        symbol: 'pWINGS',
        address: '0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25',
        chainId: 137,
        decimals: 18,
        website: 'https://jetswap.finance/',
        description: 'Jetswap is a decentralized Automated Market Maker (AMM) on Binance Smart Chain & Polygon with low fees and instant trade execution. Trade from the comfort of your own wallet! ',
        logoURI: 'https://polygon-info.jetswap.finance/static/media/wings.dca9f9fe.png'
    },
    HONOR: {
        name: 'FarmHero HONOR',
        symbol: 'HONOR',
        address: '0xb82A20B4522680951F11c94c54B8800c1C237693',
        chainId: 137,
        decimals: 18,
        website: 'https://polygon.farmhero.io/',
        description: 'FarmHero is a protocol that mixes NFT, gaming and DEFI concepts.',
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10620.png'
    },
    ironICE: {
        name: 'Iron Finance ICE Token',
        symbol: 'ironICE',
        address: '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef',
        chainId: 137,
        decimals: 18,
        website: 'https://iron.finance/',
        description: 'Iron Finance is building a full suite of decentralized finance ecosystem of products and use cases on the Polygon network. The official Iron Finance token is the ICE token, inspired by A Song of Ice and Fire novels, where the Iron Throne is a well-known symbol.',
        logoURI: 'https://app.iron.finance/static/media/ice-square.6e960434.svg'
    },
    ICE: {
        name: 'IceToken',
        address: '0x4e1581f01046eFDd7a1a2CDB0F82cdd7F71F2E59',
        symbol: 'ICE',
        decimals: 18,
        chainId: 137,
        website: 'https://popsicle.finance/',
        description: 'Popsicle is a next-gen cross-chain yield enhancement platform focusing on Automated Market-Making (AMM) Liquidity Providers (LP).',
        logoURI: 'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/0xf16e81dce15B08F326220742020379B855B87DF9/logo.png'
    },
    NEXO: {
        name: 'Nexo',
        symbol: 'NEXO',
        address: '0x41b3966B4FF7b427969ddf5da3627d6AEAE9a48E',
        chainId: 137,
        decimals: 18,
        website: 'https://nexo.io/',
        description: 'Since 2018 Nexo has strived to bring professional financial services to the world of digital assets. Leveraging the best of the team’s years of experience in FinTech along with the power of blockchain technology, Nexo is empowering thousands of people to harness the value behind their crypto assets and live the future of finance today.',
        logoURI: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2694.png'
    },
    DINO: {
        name: 'DINO',
        symbol: 'DINO',
        address: '0xAa9654BECca45B5BDFA5ac646c939C62b527D394',
        chainId: 137,
        decimals: 18,
        website: 'https://dinoswap.exchange/',
        description: 'DinoSwap is a cross-chain infrastructure project that builds liquidity for layer-one blockchains, AMMs and partnering projects.',
        logoURI: 'https://assets.coingecko.com/coins/images/17103/small/DINO.png'
    },
    BCT: {
        name: 'Toucan Protocol: Base Carbon Tonne',
        symbol: 'BCT',
        address: '0x2F800Db0fdb5223b3C3f354886d907A671414A7F',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x2F800Db0fdb5223b3C3f354886d907A671414A7F.svg',
        website: 'https://toucan.earth/',
        description: 'Toucan Protocol brings carbon as a new money-lego to Web3. Kickstarting an open and decentralized climate finance ecosystem.'
    },
    KLIMA: {
        name: 'Klima DAO',
        symbol: 'KLIMA',
        address: '0x4e78011Ce80ee02d2c3e649Fb657E45898257815',
        chainId: 137,
        decimals: 9,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4e78011Ce80ee02d2c3e649Fb657E45898257815.svg',
        website: 'https://www.klimadao.finance/',
        description: 'Klima DAO gives Web3 builders and users the opportunity to participate in the carbon market through the KLIMA token.'
    },
    polyWISE: {
        name: 'Polywise',
        symbol: 'WISE',
        address: '0x4c19DdeebAF84cA3A255730295AD9d824D4Ff51f',
        chainId: 137,
        decimals: 18,
        website: 'https://polywise.finance/',
        description: 'PolyWise Finance is a next-generation yield farming protocol on the Polygon network with lots of unique and creative features that enable you to earn a passive income. We are trying to create a protocol like Yearn, but with a reduced token supply and high value for Polygon Network users, LP providers and stakers. The max supply of WISE token is 5400.'
    },
    polySAGE: {
        name: 'PolySage',
        symbol: 'SAGE',
        address: '0x2ed945Dc703D85c80225d95ABDe41cdeE14e1992',
        chainId: 137,
        decimals: 18,
        website: 'https://polysage.finance/',
        description: 'PolySage Finance is a next-generation yield farming protocol on the Polygon network with lots of unique and creative features that enable you to earn a passive income.',
        logoURI: 'https://polysage.finance/images/sage.png'
    },
    TOMB: {
        name: 'TOMB',
        symbol: 'TOMB',
        address: '0x0e98C977B943f06075b2D795794238fBfB9b9a34',
        chainId: 137,
        decimals: 18,
        logoURI: '',
        website: 'https://tomb.finance/',
        description: 'The first algorithmic stablecoin on Fantom Opera, pegged to the price of 1 FTM via seigniorage'
    },
    CLAM: {
        name: 'Otter Clam',
        symbol: 'CLAM',
        address: '0xC250e9987A032ACAC293d838726C511E6E1C029d',
        chainId: 137,
        decimals: 9,
        logoURI: '',
        website: 'https://www.otterclam.finance/#/',
        description: 'The first store of value meme'
    },
    HBAR: {
        name: 'HBAR[0x]',
        symbol: 'HBAR',
        address: '0x1646C835d70F76D9030DF6BaAeec8f65c250353d',
        chainId: 137,
        decimals: 8,
        logoURI: '',
        website: 'https://hedera.com/',
        description: 'Hedera is the most used enterprise-grade public network for you to make your digital world exactly as it should be – yours. HBAR is the native, energy-efficient cryptocurrency of Hedera that powers the decentralized economy. Whether youre a startup or enterprise, a creator or consumer, Hedera goes beyond blockchain for developers to create the next era of fast, fair, and secure applications.'
    },
    agEUR: {
        name: 'agEUR',
        symbol: 'agEUR',
        address: '0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4',
        chainId: 137,
        decimals: 18,
        logoURI: '',
        website: 'https://www.angle.money/',
        description: 'Angle is an over-collateralized, decentralized and capital-efficient stablecoin protocol. It offers full convertibility between stable assets and collateral at oracle value.'
    },
    jJPY: {
        name: 'Jarvis Synthetic Yen',
        symbol: 'jJPY',
        address: '0x8343091F2499FD4b6174A46D067A920a3b851FF9',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'jJPY is a multi-collateralized synthetic token tracking the price of Yen. It is built on the top of UMA and Chainlink.',
        logoURI: ''
    },
    JPYC: {
        name: 'JPY Coin',
        symbol: 'JPYC',
        address: '0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB',
        chainId: 137,
        decimals: 18,
        website: 'https://jpyc.jp/',
        description: "JPYC (JPYCoin) is Japan's first Japanese Yen stablecoin that utilizes blockchain technology.",
        logoURI: ''
    },
    PSP: {
        name: 'ParaSwap',
        symbol: 'PSP',
        address: '0x42d61D766B85431666B39B89C43011f24451bFf6',
        chainId: 137,
        decimals: 18,
        website: 'https://paraswap.io/',
        description: "ParaSwap aggregates decentralized exchanges and other DeFi services in one comprehensive interface to streamline and facilitate users' interactions with decentralized finance on Ethereum and EVM-compatible chains: Polygon, Avalanche, BSC & more to come.",
        logoURI: ''
    },
    KIRO: {
        name: 'Kirobo',
        symbol: 'KIRO',
        address: '0xB382C1cfA622795a534e5bd56Fac93d59BAc8B0D',
        chainId: 137,
        decimals: 18,
        website: 'https://www.kirobo.io/',
        description: 'Kirobos decentralized applications remove the risk of losing funds enabling you to use blockchain technology to its fullest potential from one consolidated platform.',
        logoURI: ''
    },
    GIDDY: {
        name: 'Giddy',
        symbol: 'GIDDY',
        address: '0x67eB41A14C0fe5CD701FC9d5A3D6597A72F641a6',
        chainId: 137,
        decimals: 18,
        website: 'https://www.giddy.co/',
        description: 'Giddy is an in-development app that simplifies sophisticated DeFi processes into a one-tap investing experience. The app will allow users to earn passive income with crypto assets using a multi-identity, self-custody, private key solution. The fully doxxed Giddy team focuses on security, compliance, and ease of use. Its mission is simple: to grow and adapt to the ever-changing regulatory landscape. This goal will keep investors and their funds within the bounds of current financial regulation. The Giddy token standard allows smart contracts to communicate effectively with compliant tokens. Its method involves encoding contract approval data into a meta-transaction, which removes the need for standalone and infinite contract approvals. GIDDY has a max capped supply of 1 billion tokens and began trading on April 6, 2022',
        logoURI: ''
    },
    EURe: {
        name: 'Monerium EURe emoney',
        symbol: 'EURe',
        address: '0x18ec0A6E18E5bc3784fDd3a3634b31245ab704F6',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://assets.coingecko.com/coins/images/23354/small/eur.png?1643926562',
        website: 'https://monerium.com/',
        description: 'EURe is a Euro stable-coin from Monerium. Monerium is the first company authorized to issue money on blockchains under European financial regulation. They have issued EUR, USD, GBP, and ISK as e-money tokens on Ethereum and EUR on Algorand. Monerium also operates a gateway for instant transfers of EUR between bank accounts and blockchain wallets/smart contracts.'
    },
    HOP: {
        name: 'HOP Protocol',
        symbol: 'HOP',
        address: '0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC',
        chainId: 137,
        decimals: 18,
        website: 'https://app.hop.exchange',
        description: 'Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
        logoURI: 'https://docs.velodrome.finance/tokens/HOP.svg',
        documentation: 'https://docs.hop.exchange/'
    },
    hETH: {
        name: 'ETH Hop Token',
        symbol: 'hETH',
        address: '0x1fDeAF938267ca43388eD1FdB879eaF91e920c7A',
        chainId: 137,
        decimals: 18,
        website: 'https://app.hop.exchange',
        description: 'hETH is the bridge token for transferring ETH via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
        logoURI: '',
        documentation: 'https://docs.hop.exchange/'
    },
    hUSDC: {
        name: 'USDC Hop Token',
        symbol: 'hUSDC',
        address: '0x9ec9551d4A1a1593b0ee8124D98590CC71b3B09D',
        chainId: 137,
        decimals: 6,
        website: 'https://app.hop.exchange',
        description: 'hUSDC is the bridge token for transferring USDC via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
        logoURI: '',
        documentation: 'https://docs.hop.exchange/'
    },
    hUSDT: {
        name: 'USDT Hop Token',
        symbol: 'hUSDT',
        address: '0x9F93ACA246F457916E49Ec923B8ed099e313f763',
        chainId: 137,
        decimals: 6,
        website: 'https://app.hop.exchange',
        description: 'hUSDT is the bridge token for transferring USDT via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
        logoURI: '',
        documentation: 'https://docs.hop.exchange/'
    },
    hDAI: {
        name: 'DAI Hop Token',
        symbol: 'hDAI',
        address: '0xb8901acB165ed027E32754E0FFe830802919727f',
        chainId: 137,
        decimals: 18,
        website: 'https://app.hop.exchange',
        description: 'hDAI is the bridge token for transferring DAI via the Hop Protocol. Hop Protocol is a blockchain bridge protocol that allows users to move tokens from one chain to another without having to wait for a challenge period.',
        logoURI: '',
        documentation: 'https://docs.hop.exchange/'
    },
    amUSDT: {
        name: 'Aave Tether USD',
        symbol: 'amUSDT',
        address: '0x60D55F02A771d515e077c9C2403a1ef324885CeC',
        chainId: 137,
        decimals: 6,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://tether.to/',
        description: 'Aave interest bearing USDT. Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem.',
        documentation: 'https://docs.aave.com/developers/v/2.0/the-core-protocol/atokens'
    },
    wamUSDT: {
        name: 'Wrapped Aave Tether USD',
        symbol: 'wamUSDT',
        address: '0x19C60a251e525fa88Cd6f3768416a8024e98fC19',
        chainId: 137,
        decimals: 6,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://tether.to/',
        documentation: 'https://docs.aave.com/developers/v/2.0/the-core-protocol/atokens',
        description: 'Wrapped Aave interest bearing USDT. Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem.'
    },
    bbamUSDT: {
        name: 'Balancer Aave USDT Linear Pool',
        symbol: 'bbamUSDT',
        address: '0xFf4ce5AAAb5a627bf82f4A571AB1cE94Aa365eA6',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://app.balancer.fi/#/',
        documentation: 'https://docs.balancer.fi/products/balancer-pools/boosted-pools',
        description: 'Balancer linear pool that consist of 50/50 USDT and wrapped Aave Interest Bearing USDT.'
    },
    amUSDC: {
        name: 'Aave USDC',
        symbol: 'amUSDC',
        address: '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F',
        chainId: 137,
        decimals: 6,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://www.circle.com/usdc',
        documentation: 'https://docs.aave.com/developers/v/2.0/the-core-protocol/atokens',
        description: 'Aave interest bearing USDC. USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.'
    },
    wamUSDC: {
        name: 'Wrapped Aave Tether USD',
        symbol: 'wamUSDC',
        address: '0x221836a597948Dce8F3568E044fF123108aCc42A',
        chainId: 137,
        decimals: 6,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://www.circle.com/usdc',
        documentation: 'https://docs.aave.com/developers/v/2.0/the-core-protocol/atokens',
        description: 'Wrapped Aave interest bearing USDC. USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.'
    },
    bbamUSDC: {
        name: 'Balancer Aave USDC Linear Pool',
        symbol: 'bbamUSDC',
        address: '0xF93579002DBE8046c43FEfE86ec78b1112247BB8',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://app.balancer.fi/#/',
        documentation: 'https://docs.balancer.fi/products/balancer-pools/boosted-pools',
        description: 'Balancer linear pool that consist of 50/50 USDC and wrapped Aave Interest Bearing USDC.'
    },
    amDAI: {
        name: 'Aave DAI',
        symbol: 'amDAI',
        address: '0x27F8D03b3a2196956ED754baDc28D73be8830A6e',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://makerdao.com/en/',
        documentation: 'https://docs.aave.com/developers/v/2.0/the-core-protocol/atokens',
        description: 'Aave interest bearing DAI. Dai is a stablecoin cryptocurrency which aims to keep its value as close to one United States dollar as possible through an automated system of smart contracts on the Ethereum blockchain.'
    },
    wamDAI: {
        name: 'Wrapped Aave Tether DAI',
        symbol: 'wamDAI',
        address: '0xEE029120c72b0607344f35B17cdD90025e647B00',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://makerdao.com/en/',
        documentation: 'https://docs.aave.com/developers/v/2.0/the-core-protocol/atokens',
        description: 'Wrapped Aave interest bearing DAI. Dai is a stablecoin cryptocurrency which aims to keep its value as close to one United States dollar as possible through an automated system of smart contracts on the Ethereum blockchain.'
    },
    bbamDAI: {
        name: 'Balancer Aave DAI Linear Pool',
        symbol: 'bbamDAI',
        address: '0x178E029173417b1F9C8bC16DCeC6f697bC323746',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://app.balancer.fi/#/',
        documentation: 'https://docs.balancer.fi/products/balancer-pools/boosted-pools',
        description: 'Balancer linear pool that consist of 50/50 DAI and wrapped Aave Interest Bearing DAI.'
    },
    bbamUSD: {
        name: 'Balancer Aave Stable Composable Pool',
        symbol: 'bbamUSD',
        address: '0x48e6B98ef6329f8f0A30eBB8c7C960330d648085',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://app.balancer.fi/#/',
        documentation: 'https://docs.balancer.fi/products/balancer-pools/boosted-pools',
        description: 'Balancer composable pool that consist of bbaUSDT, bbaUSDC, and bbaDAI. bbTokens are Aave boosted linear pools.'
    },
    '2BRZ': {
        name: 'Balancer 2BRZ Pool',
        symbol: '2BRZ',
        address: '0xE22483774bd8611bE2Ad2F4194078DaC9159F4bA',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://app.balancer.fi/#/',
        documentation: 'https://docs.balancer.fi/products/balancer-pools/',
        description: 'Balancer composable pool that consist of BRZ and jBRL'
    },
    jBRL: {
        name: 'Jarvis Synthetic Brazilian Real',
        symbol: 'jBRL',
        address: '0xf2f77FE7b8e66571E0fca7104c4d670BF1C8d722',
        chainId: 137,
        decimals: 18,
        website: 'https://jarvis.network/',
        description: 'jBRL is a multi-collateralized synthetic token tracking the price of Brazilian Real. It is built on the top of UMA and Chainlink.',
        logoURI: 'https://jarvis.network/images/jBRL.svg',
        documentation: 'https://learn.jarvis.network/'
    },
    BRZ: {
        name: 'BRZ Token',
        symbol: 'BRZ',
        address: '0x491a4eB4f1FC3BfF8E1d2FC856a6A46663aD556f',
        chainId: 137,
        decimals: 4,
        website: 'https://brztoken.io/',
        description: 'BRZ is the first Brazilian stablecoin in circulation. It will allow Brazilians to directly ramp up investments in foreign exchanges and to trade a Brazilian Real (BRL) pegged stablecoin in global scale.',
        logoURI: 'https://bscscan.com/token/images/brztoken_32.png',
        documentation: 'https://brztoken.io/files/white_paper_BRZ_2023.pdf'
    },
    wUSDR: {
        name: 'Real USD',
        symbol: 'wUSDR',
        address: '0xAF0D9D65fC54de245cdA37af3d18cbEc860A4D4b',
        chainId: 137,
        decimals: 9,
        website: 'https://www.tangible.store/realusd',
        documentation: 'https://docs.tangible.store/',
        description: 'Real USD (USDR) is the world’s first stablecoin collateralized by tokenized, yield-producing real estate. USDR has a value accrual system built into its design. Using a consistent stream of dependable yield derived from rental revenue, Real USD delivers a native yield to holders.',
        logoURI: ''
    },
    USDR: {
        name: 'Real USD',
        symbol: 'USDR',
        address: '0xb5DFABd7fF7F83BAB83995E72A52B97ABb7bcf63',
        chainId: 137,
        decimals: 9,
        website: 'https://www.tangible.store/realusd',
        documentation: 'https://docs.tangible.store/',
        description: 'Real USD (USDR) is the world’s first stablecoin collateralized by tokenized, yield-producing real estate. USDR has a value accrual system built into its design. Using a consistent stream of dependable yield derived from rental revenue, Real USD delivers a native yield to holders.',
        logoURI: ''
    },
    amWBTC: {
        name: 'Aave WBTC',
        symbol: 'amWBTC',
        address: '0x5c2ed810328349100A66B82b78a1791B101C9D61',
        chainId: 137,
        decimals: 8,
        logoURI: '',
        website: 'https://wbtc.network/',
        documentation: 'https://docs.aave.com/developers/v/2.0/the-core-protocol/atokens',
        description: 'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.'
    },
    aWMATIC: {
        name: 'Aave WMATIC',
        symbol: 'aWMATIC',
        address: '0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://polygon.technology/',
        description: 'Aave interest bearing MATIC. Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.'
    },
    waWMATIC: {
        name: 'Wrapped Aave WMATIC',
        symbol: 'waWMATIC',
        address: '0x0D6135b2cFBAE3b1c58368a93b855fa54FA5aae1',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://polygon.technology/',
        description: 'Wrapped Aave interest bearing MATIC. Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.'
    },
    bbaWMATIC: {
        name: 'Balancer Aave WMATIC Linear Pool',
        symbol: 'bbaWMATIC',
        address: '0xE4885Ed2818Cc9E840A25f94F9b2A28169D1AEA7',
        chainId: 137,
        decimals: 18,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x4988a896b1227218e4A686fdE5EabdcAbd91571f.svg',
        website: 'https://polygon.technology/',
        description: 'Balancer Boosted Aave interest bearing MATIC. Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.'
    },
    aWETH: {
        name: 'Aave WETH',
        symbol: 'aWETH',
        address: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
        chainId: 137,
        decimals: 18,
        website: 'https://weth.io/',
        description: 'Aave interest bearing WETH. Ether or ETH is the native currency built on the Ethereum blockchain.',
        logoURI: '',
        documentation: 'https://ethereum.org/en/developers/docs/'
    },
    waWETH: {
        name: 'Wrapped Aave WETH',
        symbol: 'waWETH',
        address: '0xa5bBf0f46B9dc8a43147862ba35c8134eB45f1F5',
        chainId: 137,
        decimals: 18,
        website: 'https://weth.io/',
        description: 'Wrapped Aave Interest Bearing ETH. Ether or ETH is the native currency built on the Ethereum blockchain.',
        logoURI: '',
        documentation: 'https://ethereum.org/en/developers/docs/'
    },
    bbaWETH: {
        name: 'Balancer Aave WETH Linear Pool',
        symbol: 'bbaWETH',
        address: '0x43894DE14462B421372bCFe445fA51b1b4A0Ff3D',
        chainId: 137,
        decimals: 18,
        website: 'https://weth.io/',
        description: 'Balancer Boosted Aave ETH. Ether or ETH is the native currency built on the Ethereum blockchain.',
        logoURI: '',
        documentation: 'https://ethereum.org/en/developers/docs/'
    },
    AXL: {
        name: 'Axelar',
        symbol: 'AXL',
        address: '0x6e4E624106Cb12E168E6533F8ec7c82263358940',
        chainId: 137,
        decimals: 6,
        website: 'https://axelar.network/',
        description: 'Axelar delivers secure cross-chain communication for Web3, enabling you to build Interchain dApps that grow beyond a single chain. Secure means Axelar is built on proof-of-stake, the battle-tested approach used by Ethereum, Polygon, Cosmos, and more. Cross-chain communication means you can build a complete experience for your users that lets them interact with any asset, any application, on any chain with one click.',
        logoURI: '',
        documentation: 'https://docs.axelar.dev/'
    },
    axlUSDC: {
        name: 'Axelar Wrapped USDC',
        symbol: 'axlUSDC',
        address: '0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed',
        chainId: 137,
        decimals: 6,
        logoURI: 'https://tokens.pancakeswap.finance/images/0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed.svg',
        website: 'https://axelar.network/',
        description: 'Axelar Bridged USDC',
        documentation: 'https://docs.axelar.dev/'
    },
    BETS: {
        name: 'BetSwirl Token',
        symbol: 'BETS',
        address: '0x9246a5F10A79a5a939b0C2a75A3AD196aAfDB43b',
        chainId: 137,
        decimals: 18,
        logoURI: '',
        website: 'https://www.betswirl.com/',
        description: 'BetSwirl is a fully decentralized online cryptocurrency gaming platform, where everyone will be able to enjoy a fair play, a fun time and an innovative gamer experience.',
        documentation: 'https://documentation.betswirl.com/'
    },
    PLT: {
        name: "Plancia Timelock",
        symbol: "PTL",
        address: "0x6d065E2BE1b46130a02f32141Ad6D356c40c3B11",
        chainId: 137,
        decimals: 18,
        logoURI: "",
        website: "https://plancia.vercel.app/",
        description: "",
        documentation: ""
    },
    PLT20: {
        name: "Plancia Timelock ERC20",
        symbol: "PTL20",
        address: "0x20dF0Dfd899DE9efb27DEC094BbAe96bCF879711",
        chainId: 137,
        decimals: 18,
        logoURI: "",
        website: "https://plancia.vercel.app/",
        description: "",
        documentation: ""
    },
    PLT721: {
        name: "Plancia Timelock ERC721",
        symbol: "PTL20",
        address: "0x8F359697f33aDdDBdC3a9baD83Ad20B50e9f6d93",
        chainId: 137,
        decimals: 18,
        logoURI: "",
        website: "https://plancia.vercel.app/",
        description: "",
        documentation: ""
    }
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
