# Basic_NFT
![Hero Image](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/NFT%20(ERC-721%20token).jpg)
This repo is for showing basic implementation of NFTs(ERC-721 tokens) using openZeppelin


NFTs are unique and are owned by owners address. These can be used for real estate, voting rights and other self containing stuff. 

### Use of metadata

APIs for the NFT.

### Use of Enumerable

Check the balance of account on how many NFTs an account has.

### Use of URIStorage

Posibility to associate metadata to the NFTs.

The ERC721URIStorage contract is an implementation of ERC721 that includes the metadata standard extensions (IERC721Metadata) as well as a mechanism for per-token metadata. That’s where the _setTokenURI method comes from: we use it to store an item’s metadata.

### Content Addressing



### Metadata schemas

NFTs are digital assets which represent images, videos, links, articles etc and the way we can do it is using through metadata. 

[Metadata](https://en.wikipedia.org/wiki/Metadata) is the data that provides information about other data but not the content of the data. In NFTs case, the metadata represnts the name, description, and other properties. 

> Why metadata standards are needed?

![metadata](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/NFT_1.drawio.png)

To make your NFT's compatible with market places and other platforms we need to follow the standards. [JSON Schema](https://json-schema.org/) is the standard adapted for JSON. 

> JSON for metadata

The most common format used for NFT metadata is [JSON](https://www.json.org/json-en.html). 

## Prerequesties

- We need a smart contract to deploy the NFT tokens
- Solidity is the language of prefernce
- Service Provider Node - Alchemy, Infura
- Test tokens to pay gas fees


## Steps


## Important Links

- [Open Zeppelin](https://docs.openzeppelin.com/)
- [Best NFT site](https://nftschool.dev/)


## Tools

- [Wizard](https://docs.openzeppelin.com/contracts/4.x/wizard)
