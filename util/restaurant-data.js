const path = require('path');
const fs= require('fs');

const filepath = path.join(__dirname,'..','data','restaurant.json');
function getstoredRestaurants(){

 const filedata= fs.readFileSync(filepath);
 const storedrestaurant = JSON.parse(filedata);

 return storedrestaurant;

}

function storeRestaurants(storablerestaurant){
    fs.writeFileSync(filepath,JSON.stringify(storablerestaurant)) ;
} 

module.exports = {
    getstoredRestaurants:getstoredRestaurants,
    storeRestaurants:storeRestaurants
} ;