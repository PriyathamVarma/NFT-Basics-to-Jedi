// main.js 

// Imports
import { CeramicClient } from '@ceramicnetwork/http-client'
import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'
import { DIDDataStore } from '@glazed/did-datastore'
import { DIDSession } from '@glazed/did-session'

/* Did you notice that some packages come 
from @ceramicnetwork and others come from @glazed?

Packages that come from @ceramicnetwork are part of 
the core Ceramic protocol. They help connect applications to Ceramic nodes.

Packges that come from @glazed are not part of the core Ceramic protocol, 
they are referred to as middleware and provide developers with some added 
functionality and convenience. */

// Constants to get the DOM elements

const profileForm       = document.getElementById('profileForm')
const walletBtn         = document.getElementById('walletBtn')
const profileName       = document.getElementById('profileName')
const profileGender     = document.getElementById('profileGender')
const profileCountry    = document.getElementById('profileCountry')
const submitBtn         = document.getElementById('submitBtn')

// Use Ceramic client that is imported in imports to get a new ceramic client
const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com")


/*  create a variable named 
 aliases that will hold the reference information for the BasicProfile data model */


const aliases = {
    schemas: {
        basicProfile: 'ceramic://k3y52l7qbv1frxt706gqfzmq6cbqdkptzk8uudaryhlkf6ly9vx21hqu4r6k1jqio',

    },
    definitions: {
        BasicProfile: 'kjzl6cwe1jw145cjbeko9kil8g9bxszjhyde21ob8epxuxkaon1izyqsu8wgcic',
    },
    tiles: {},
}

/* The DIDDataStore allows the applicaiton to write and read data from Ceramic.
 The DIDDataStore is based on Data models*/

 //  To configure the DIDDataStore to use the aliases and ceramic instance
 const datastore = new DIDDataStore({ ceramic, model: aliases });

 /* If your dapp required it, you could add more Data models to the aliases
  variable by adding the schema, definition and tiles necessary! */

 /* SIGN IN WITH PROVIDER ---> METAMASK */
 
 async function authenticateWithEthereum(ethereumProvider) {

    const accounts = await ethereumProvider.request({
    method: 'eth_requestAccounts',
    })

    const authProvider = new EthereumAuthProvider(ethereumProvider, accounts[0])

    const session = new DIDSession({ authProvider })

    const did = await session.authorize()

    ceramic.did = did
}

//The DIDSession is what it handling the signin authentication flow for you

// To check if metamask is enabled

async function auth() {
    if (window.ethereum == null) {
        throw new Error('No injected Ethereum provider found')
    }
    await authenticateWithEthereum(window.ethereum)
    }

/* READING DATA USING CERAMIC */

// getter functions
async function getProfileFromCeramic() {
    try {
        
        //use the DIDDatastore to get profile data from Ceramic
        const profile = await datastore.get('BasicProfile')
        
        //render profile data to the DOM (not written yet)
        renderProfileData(profile)
    } catch (error) {
        console.error(error)
        }
    }

/* As you can see, by calling datastore.get() method, 
you can simply reference the definition of the data model 
you wish to read data from.

The DIDDatastore uses the DID assinged to the Ceramic 
client to make this call. It returns the profile object 
white get's stored in the profile variable.*/    


/* You will need to create the renderProfileData 
function to extract this profile data and show it 
in the browser window */

function renderProfileData(data) {
    if (!data) return
    data.name ? profileName.innerHTML = "Name:     " + data.name : profileName.innerHTML = "Name:     "
    data.gender ? profileGender.innerHTML = "Gender:     " + data.gender : profileGender.innerHTML = "Gender:     "
    data.country ? profileCountry.innerHTML = "Country:     " + data.country : profileCountry.innerHTML = "Country:     "
    
}

/* The data is the profile object that is returned from the datastore.get() call. 
The properties of data are defined in the BasicProfile data model */


/* Writing data to the Ceramic network */

// The next piece to implement is writing data to the Ceramic Network using the DIDDatastore

async function updateProfileOnCeramic() {
    try {
    const updatedProfile = getFormProfile()
    submitBtn.value = "Updating..."

    //use the DIDDatastore to merge profile data to Ceramic
    await datastore.merge('BasicProfile', updatedProfile)

    //use the DIDDatastore to get profile data from Ceramic
    const profile = await datastore.get('BasicProfile')

    renderProfileData(profile)

    submitBtn.value = "Submit"
    } catch (error) {
    console.error(error)
    }
}

/* There are two important things to talk about before moving on.

First: The DIDDatastore has two methods that allow writes to a data model:

merge(), which only writes to fields that have changed
set(), which overwrites ALL fields including those that have not changed. 
This can lead to data be removed in an unwanted way. It is recommended to use merge rather than set for that reason.

Second: Reading data from the DIDDatastore simply to render it to the DOM using renderProfileData() 
in this scenario is sub-optimal. There is no real need to read the data from Ceramic at this stage. 
This was included to show you how simple reading and writing can be, as each take one line when using the DIDDatastore. */

function getFormProfile() {

    const name = document.getElementById('name').value
    const country = document.getElementById('country').value
    const gender = document.getElementById('gender').value

    return {
        name,
        country,
        gender
    }
}

/* The object properties of name, country and gender, 
they are all found on the BasicProfile datamodel. 
There are additional properties for a BasicProfile 
which are not referenced in this project. You should 
explore the use of these properties in you own projects! */

/* EVENT LISTENERS and OTHER NORMAL THINGS */

async function connectWallet(authFunction, callback) {
    try {
    walletBtn.innerHTML = "Connecting..."
    await authFunction()
    await callback()
    walletBtn.innerHTML = "Wallet Connected"

    } catch (error) {
    console.error(error)
    }

}


//add both event listeners to that the buttons work when they are clicked
walletBtn.addEventListener('click', async () => await connectWallet(auth, getProfileFromCeramic))

profileForm.addEventListener('submit', async (e) => {
e.preventDefault()
await updateProfileOnCeramic()

});