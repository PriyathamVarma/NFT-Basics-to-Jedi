// Imports
const Name = require('w3name');

console.log('W3name generator');

// Global Variables
let name;
let CID_Hash;
let revision;
let newRevision;

// Creating a new name using Name.create() function which is asynchronous
const  generateNewName = async() =>{
    name = await Name.create();
    console.log(name.toString());// this should be converted into a string as you will be getting a number sequence
    CID_Hash = 'bafkreigrn56ady6a5rzizbkahrizgefqn4j457t3ig3ghv6niwhlohms4y';// This is the CID from any ipfs storage provider
    // Using Name.v0 to create initial revision
    revision = await Name.v0(name, CID_Hash);
    console.log(revision);

    // PUBLISH
    const publishedRevision = await Name.publish(revision,name.key);
    console.log("name "+ name);
    console.log("name public "+ name.key);
    console.log("name private "+ name._privKey);
    console.log("Published Revision "+ publishedRevision);

    const resolvedName = Name.parse(name.toString());
    console.log("Resolved Name:" + resolvedName);

    // Get the link
    console.log(`https://gateway.ipfs.io/ipns/${name}`);
};


// Call the function

// You will get something like k51qzi5uqu5dgibwfv8p2arsj47vkpd88wkwasnnsb5no5wxflb8v8088dorl5

// Publishing the first revision
/* To publish a value, we need to create a "revision."
 A revision contains a value that can be published to w3name, 
 along with some IPNS metadata. 
All revisions have a sequence number that gets incremented each 
time the name is updated with a new value. */

/*const value = 'ipfs://bafkreigrn56ady6a5rzizbkahrizgefqn4j457t3ig3ghv6niwhlohms4y';// This is from any ipfs storage provider
// Using Name.v0 to create initial revision
const revision = await Name.v0(name, value);*/


    
generateNewName();







