# Dynamic NFTs

Dynamic NFTs can also be called as mutable NFTs.

NFTs main purpose was to create immutable assets which are represented by metadata and an image. But, there are situations in real world where these NFTs could/need to change. 
To address this feature we can transfer the NFTs to new contracts and use new features. But, this involves lots of work and lots of issues. Also, with ever growing gas fees we cannot
have feasible option of changing the data of NFTs. So, there are few answers for this.

## Approach 1 : CID + Domain name

Here domain name could be any DNS or ENS which contains the CID attached to it will be used to mint the NFT. To mint an NFT we need tow main things - tokenURI and address of the reciever.
So, instead of pointing towards CID which is immutable we could actually include an domain name. So whenver we change the data and the CID changes we can point that to the domain name which is pointed 
towards the smart contract.

![dynamic Nfts](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/blob/main/Diagrams/Dynamic_NFTs.drawio.png)

## Approach 2 : [Ceramic Streams](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/tree/main/Dynamic-NFT/Ceramic)

Ceramic (opens new window)is an IPFS-based system for decentralized data streams. A Ceramic stream consists of an append-only log of commits where updates are signed by a decentralized identifier (DID), validated against a set of state transition rules, then anchored on a blockchain.

With this approach, each NFT would get a new stream and a stream identifier (streamID). StreamIDs are a type of uniform resource locator (URI) formatted like ceramic://kjzl6fddub9hxf2q312a5qjt9ra3oyzb7lthsrtwhne0wu54iuvj852bw9wxfvs). The smart contract would be created as normal, using the streamID to represent your asset.

Updating the NFT metadata is as simple as writing new data to the stream. To render or use the NFT, you would fetch the streamID and process the commit log to get the latest state of the asset. As of now, Ceramic supports JSON data, so this would be a good way to manage mutable NFT properties and metadata as opposed to editable images or video. This approach might be best suited for NFTs that must be updated extremely frequently

# Useful Resources

- [Ceramic](https://ceramic.network/)
- [Tableland](https://docs.tableland.xyz/use-cases)
- [Recommended Tools](https://nftschool.dev/reference/recommended-tools/#online-integrated-development-environments-ides)
- [How to create dynamic NFT](https://blog.chain.link/build-deploy-and-sell-your-own-dynamic-nft/)
