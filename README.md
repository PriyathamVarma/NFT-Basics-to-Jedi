# Basic_NFT
![Hero Image](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/NFT%20(ERC-721%20token).jpg)
This repo is for showing basic implementation of NFTs(ERC-721 tokens) using openZeppelin


NFTs are unique and are owned by owners address. These can be used for real estate, voting rights and other self containing stuff. 

## Use of metadata

APIs for the NFT.

### Metadata schemas

NFTs are digital assets which represent images, videos, links, articles etc and the way we can do it is using through metadata. 

[Metadata](https://en.wikipedia.org/wiki/Metadata) is the data that provides information about other data but not the content of the data. In NFTs case, the metadata represnts the name, description, and other properties. 

> Why metadata standards are needed?

![metadata](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/NFT_1.drawio.png)

To make your NFT's compatible with market places and other platforms we need to follow the standards. [JSON Schema](https://json-schema.org/) is the standard adapted for JSON. 

> JSON for metadata

The most common format used for NFT metadata is [JSON](https://www.json.org/json-en.html). 

## Use of Enumerable

Check the balance of account on how many NFTs an account has.

## Use of URIStorage

Posibility to associate metadata to the NFTs.

The ERC721URIStorage contract is an implementation of ERC721 that includes the metadata standard extensions (IERC721Metadata) as well as a mechanism for per-token metadata. That’s where the _setTokenURI method comes from: we use it to store an item’s metadata.

### [Content Addressing](https://github.com/PriyathamVarma/Basic_NFT/tree/main/Content-addressing)

Content addressing is used to store the data file.



> Linking to NFT Assets

When linking from your metadata to another digital asset like an image file, we recommend storing the asset on IPFS and using an IPFS Uniform Resource Identifier (URI) to reference the asset. An IPFS URI is just the string ipfs:// followed by an IPFS CID (opens new window), for example: ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi.

## Prerequesties

- We need a smart contract to deploy the NFT tokens
- Solidity is the language of prefernce
- Service Provider Node - Alchemy, Infura
- Test tokens to pay gas fees


## Steps

1. First create a alchemy account and choose a testnet.
2. Get testnet tokens using related faucets.
3. Use remix to deploy the [smart contracts](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/blob/main/smart_contract_information.md) using Injected web3provider.
4. Before NFT minting we need to add metadata. Go to [OpenSea](https://docs.opensea.io/docs/metadata-standards) metadata standards.
5. Copy the objects from the page and paste it in [JSON online editor](https://jsoneditoronline.org/#left=local.wayego).
6. We need to upload images to IPFS for which we will use [Filebase](https://filebase.com/) which is free to use.
7. Create a free account and go to your dashboard.
8. Click on buckets --> name bucket then choose IPFS for storage network.
9. Upload an image inside the bucket.
10. Go to the image and you can look at the details of the image.
11. Copy the IPFS gateway URL to check the image that you have uploaded.
12. In your metadata change the image URL to the IPFS gateway URL.
13. Change the parameters if needed and save the file as metadata.json.Go to this [file](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/blob/main/metadata.json) for an overview
14. Upload the metadata.json in the filebase as you did with the image. Cross check the IPFS gateway URL if needed.
15. Copy the IPFS CID and paste it in the safemint method inside the remix contract interface. ** Note that the base URI when creating the contract should be the base link before CID **
16. Wait for the transaction to go through as it will take time.
17. Cross check using balanceOf and enter your address to check the number of tokens for your address.
18. Also go to etherscan to check your txns.
19. Go to [opensea testnet](https://testnets.opensea.io/) and connect with metamask.
20. Go to dashboard and look for your collectibles. Go to this [link](https://testnets.opensea.io/assets/mumbai/0x1ea800fc74bbcaf6e9d9dcd83dfacc3bb8b576c8/0) to check what we have deployed for sample.


## Important Links

- [Open Zeppelin](https://docs.openzeppelin.com/)
- [Best NFT site](https://nftschool.dev/)
- [NFT storage](https://nft.storage/#docs)
- [IPFS](https://docs.ipfs.tech/)
- [Opensea NFt standards](https://docs.opensea.io/docs/metadata-standards)
- [Chainlink NFT standards](https://blog.chain.link/build-deploy-and-sell-your-own-dynamic-nft/)


## Tools

- [Wizard](https://docs.openzeppelin.com/contracts/4.x/wizard)
