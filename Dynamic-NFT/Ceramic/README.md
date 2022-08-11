# Ceramic Protocol

## Ceramic is a decentralized network for composable data.
Ceramic makes building applications with composable Web3 data as easy as browsing a marketplace of data models, plugging them into your app, and storing,
updating, and retrieving data from those models. When different applications reuse the same data models, 
their data is automatically interoperable. By decentralizing application databases, Ceramic makes data composable and reusable across all applications.


## Technicalities

### DID Flow

![Did flow](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/blob/main/Diagrams/did_flow.png)

### Data Streams

Data streams are structure for a stream. More like a schema for a data strucrture.

### Data Models

Used to represent the data.

```
## Parts of a datamodel

* schemas: Define the JSON schema for the data model.

* definitions: Link a user-friendly model name and description to a specific schema.

* tiles: Individual data records based on parameters set within the schema.

```
![data model](https://github.com/PriyathamVarma/NFT-Basics-to-Jedi/blob/main/Diagrams/data%20models.png)

### Steps

1. Create a folder named as you like.
2. Create an index.html file and enter the code that is there in the index.html file in this repo
3. Create a styles.css and add to the index.html
4. Initialize nodejs project using npm init -y
5. Install dependencies --> npm install -D buffer dids key-did-provider-ed25519 key-did-resolver webpack webpack-cli
6. And --> npm install @ceramicnetwork/blockchain-utils-linking @ceramicnetwork/http-client @glazed/did-datastore @glazed/did-session
7. Create a js file called main.js in the root directory
8. Use the js code inside the main.js to work with ceramic network
9. Add webpack.config.js in the root directory and copy the code in this repo to paste it in your page
10. Add ``` "build" : "webpack" ``` inside the scripts in package.json.
11. Run ``` npm run build ``` to bundle the packages


## Terms to be discussed

- [Decentralised identifier(DID)](https://www.w3.org/TR/did-core/)
- [DID resolver](https://medium.com/decentralized-identity/a-universal-resolver-for-self-sovereign-identifiers-48e6b4a5cc3c)
- [Ethereum Provider](https://docs.unstoppabledomains.com/developer-toolkit/reference/ethereum-providers/)
- [Data Stream Types](https://en.wikipedia.org/wiki/Data_stream)
- [Datamodels](https://en.wikipedia.org/wiki/Data_model)


## Skills Required to understand

- [HTML](https://www.w3schools.com/html/default.asp)
- [CSS](https://www.w3schools.com/css/default.asp)
- [JS](https://www.w3schools.com/js/)
- [NPM](https://www.npmjs.com/)
- [Webpack](https://webpack.js.org/)
- [Git](https://github.com/)



## Useful Links
- [Ceramic docs](https://developers.ceramic.network/learn/welcome/)
- [DID](https://tykn.tech/decentralized-identifiers-dids/)
- [DID in depth](https://decentralized-id.com/web-standards/w3c/wg/did/decentralized-identifier/)
- [Whitepaper](https://github.com/WebOfTrustInfo/rwot2-id2020/blob/master/topics-and-advance-readings/DID-Whitepaper.md)
- [Ceramic Improvement Protocol](https://github.com/ceramicnetwork/CIP)
