# Content addressing

## Content addressing motivation

![Content addressing](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/Content-addressing.drawio.png)

> Why location addressing fails?

- The URL points to a single copy stored in a single location
- The copy disappears, there is no way of knowing other copies locations.
- Malicious attacks on DNS


> The address of the content(fingerprint) is derived from the content itself and not from the location where it is stored.


### CID(Content Identifiers)

- Most fundamental for IPFS architecture.
- Used for content addressing
- Used to name every piece of data in IPFS
- A hash with some metadata

### Integrity Checking

![Integrity Checking](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/Integrity%20checking.drawio.png)

The hash/fingerprint that is requested cannot be changed as every content is hashed and any change in the data automatically changes the entire hash. 

### IPFS components

#### [Content Addressing](https://github.com/PriyathamVarma/Basic_NFT/tree/main/Content-addressing/Chunking)

- Chunking
- Linking chunks in merkle DAGs
- From data to data structures with IPLD
- Anatomy of the IPFS CID

#### Content Discovery & Routing

- Routing & Provider records
- DHT-based Routing
- Gossip-based routing

#### Content Exchange

- Bitswap
- GraphSync

#### Mutable Names & Message Delivery

- Dynamic Data
- IPNS
- PubSub
- CRDTs.




### USeful resources

- [Content-addressing](https://flyingzumwalt.gitbooks.io/decentralized-web-primer/content/avenues-for-access/lessons/power-of-content-addressing.html)

