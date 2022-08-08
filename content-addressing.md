# Content addressing

## Content addressing motivation

![Content addressing](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/Content-addressing.drawio.png)

* Why location addressing fails?

- The URL points to a single copy stored in a single location
- The copy disappears, there is no way of knowing other copies locations.
- Malicious attacks on DNS


> The address of the content(fingerprint) is derived from the content itself and not from the location where it is stored.


## CID(Content Identifiers)

- Most fundamental for IPFS architecture.
- Used for content addressing
- Used to name every piece of data in IPFS
- A hash with some metadata

## Content addressing in IPFS(Inter Planetary file system)

1. Chunking
2. Linking Chunks in Merkle DAGs
3. Going from data to data structures with IPLD

## Anatomy of the IPFS content Identifier(CID)



### USeful resources

- [Content-addressing](https://flyingzumwalt.gitbooks.io/decentralized-web-primer/content/avenues-for-access/lessons/power-of-content-addressing.html)
