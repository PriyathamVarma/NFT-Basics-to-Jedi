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

# Useful Resources

- [Ceramic](https://ceramic.network/)
