# IDX -> Identity Index > This is deprecated and only refer for knowledge

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

### Writing Records

1. Developer creates a schema.
2. Developer creates a definition and includes the schemaURL.
3. User creates a record that conforms to the definition.
4. User adds the definitionID and recordID to their index.

### Reading Records

1. Developer queries an index using a DID and a definitionID or alias.
2. Developer gets back the record that corresponds to the definitionID.

![IDX writing records](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/blob/main/Diagrams/idx-explanation.png)

## Why IDX?¶
### Eliminate user identities from your server.
By relying on DIDs for identifiers and indexes for user tables, you can greatly reduce the amount of sensitive identity information stored on your servers and instead rely on the trust and security of decentralized protocols.

### Discover and import data from other applications.
Unified identities allow you to query a user's index and get access to their entire catalog of data regardless of where the data is stored, what type of database was used, or which application first created the data. This simplifies onboarding by allowing you to bootstrap your application with a rich data set.

### Store data wherever you want.
The index seamlessly integrates with all databases and storage backends so you can choose to store information in whichever technology or combination of technologies best suits the needs of your application.

### Easily make your data available to other applications.
By adding your application's data to the indexes of your users, you are adding it to a global catalog where it can conveniently be consumed by every other application that uses the IDX protocol withouot requiring difficult, one-off data integrations.

### Seamless integration with all Web3 technologies and blockchains.
IDX's cross-ecosystem, technology-agnostic identity protocol seamlessly integrates with all Web3 wallets, blockchain networks, and decentralized storage platforms. IDX identities unify the Web3 ecosystem and deliver seamless cross-platform user experiences.

### Build with standards and flexible, open source technology.
Identity is one of the most important architectural decisions you can make for your project. IDX ensures this is a future-proof one by being flexible, cross-platform, open source, and having strong community support.

## Core libraries needed

- [Packages](https://developers.idx.xyz/learn/packages/) > Depreacted
- [Glaze Suite](https://developers.ceramic.network/reference/glaze/)

## Useful links

- [IDX](https://idx.xyz/)
- [DID w3c recommendation](https://www.w3.org/TR/did-core/)
- [Learn IDX](https://developers.idx.xyz/learn/welcome/)
- [Developers docs IDX](https://developers.idx.xyz/reference/idx/)
- [Writing Records](https://developers.idx.xyz/build/writing/)
- [Reading Records](https://developers.idx.xyz/build/reading/)
