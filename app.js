// Create a object

let norwich = {}
let london = {}
let manchester = {}
let birmingham = {}
let leeds = {}


const locations = [norwich, london, manchester, birmingham, leeds];

// cookies per location

for(let i = 0;i < locations.length;i++){
    let min = Math.floor(Math.random() * 10);
    let max = Math.floor(Math.random() * 20);
    if(min>max){
        let temp = min;
        min = max;
        max = temp;
    }
    locations[i].minPerCustomer = min;
    locations[i].maxPerCustomer = max;
    locations[i].avgCookiesPerCustomer = (min + max) / 2;
    
}


for (let i = 0; i < locations.length; i++) {
    locations[i].randomNumber = function () {
    const upper = this.maxPerCustomer;
    const lower = this.minPerCustomer;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;
    }
}


for (let i = 0; i < locations.length; i++) {
locations[i].cookiesSold = function(){
    //const customers = norwich.randomNumber();
    const customers = this.randomNumber();
    const avgCookies = this.avgCookiesPerCustomer;

    return customers * avgCookies;
}
}



for (let i = 0; i < locations.length; i++) {
console.log("Cookies sold:" + locations[i].cookiesSold());
}




