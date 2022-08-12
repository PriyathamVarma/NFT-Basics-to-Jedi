# IDX -> Identity Index

IDX is a multi-platform identity protocol that replaces centralized user tables with a decentralized alternative. 
IDX allows users to build up a unified digital identity consisting of all their data while enabling developers to 
break down silos and freely share a users data between applications.


## How it works
Explore the components that make IDX possible.

![IDX](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/blob/main/Diagrams/data%20models.png)

### Index
The index is a key-value store document that stores a list of definition to record mappings. Every user has one global index and its entries represent the entire catalog of data that belongs to a user. An index is similar to a row in a user table.

![Index](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/blob/main/Diagrams/index.png)

### Records
Records are documents that store discrete units of identity information for a user. They can store content and/or foreign key references to external datastores. A record is similar to a cell in a user table. The recordURL is a value in the index.

### Definitions
Definitions are documents that describe records with metadata and a schema. Definitions allow records to be discovered and queried using metadata and are similar to a column in a user table. The definitionID is a key in the index.

## Useful links

- [IDX](https://idx.xyz/)
- [Developers docs IDX](https://developers.idx.xyz/reference/idx/)
