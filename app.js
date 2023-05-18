const { randomUUID } = require('crypto');
const { urlencoded } = require('express');
const express = require('express');
// const fs = require('fs');
// const uuid = require('uuid') ;


// const resData = require('./util/restaurant-data') ;
const defaultroutes = require('./routes/default') ;
const restaurantsroutes = require('./routes/restaurants');



const path = require('path');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');



app.use(express.urlencoded({extended:false}));
//here browser sends req for each css , js image file on server so need to handle them also 
app.use(express.static('public'));

app.use('/',defaultroutes);//checks for the begineeing
app.use('/',restaurantsroutes) ;


// app.post('/recommend',function(req,res){

//    const restaurant= req.body;
//     restaurant.id=uuid.v4();//method 
// //   const filepath = path.join(__dirname,'data','restaurant.json');

// //  const filedata= fs.readFileSync(filepath);
// //  const storedrestaurant = JSON.parse(filedata);
// const storedrestaurant =resData.getstoredRestaurants();
// storedrestaurant.push(restaurant);
// resData.storeRestaurants(storedrestaurant);

// //  fs.writeFileSync(filepath,JSON.stringify( storedrestaurant)) ;

//  res.redirect('/confirm') ;

       
// }) ;




// app.get('/',function(req,res){
//     // const htmlfilepath = path.join(__dirname , 'views','index.html');
//     // res.sendFile(htmlfilepath);

//     res.render('index') ;

// }) ;
// app.get('/index',function(req,res){
//     // const htmlfilepath = path.join(__dirname , 'views','index.html');
//     // res.sendFile(htmlfilepath);

//     res.render('index') ;
// }) ;



// app.get('/restaurants',function(req,res){
//     // const htmlfilepath =path.join(__dirname , 'views','restaurants.html');
//     // res.sendFile(htmlfilepath); 

//     // const filepath = path.join(__dirname,'data','restaurant.json');
//     // const filedata = fs.readFileSync(filepath);
//     // const storedrestaurant =JSON.parse(filedata);

//     const storedrestaurant =resData.getstoredRestaurants();
//     // res.render('restaurants.ejs' , {noofrestaurants :2})
//     res.render('restaurants',{noofrestaurants:storedrestaurant.length , restaurants:storedrestaurant});
    
// }) ;

// app.get('/restaurants/:id',function(req,res){

//    const restaurantid =  req.params.id ;
   
// //    const filepath = path.join(__dirname,'data','restaurant.json');
// //     const filedata = fs.readFileSync(filepath);
// //     const storedrestaurant =JSON.parse(filedata);
// const storedrestaurant =resData.getstoredRestaurants();
//   for(const  restaurant of storedrestaurant){
//     if(restaurant.id===restaurantid){

// return res.render('restaurant-detail',{ restaurant:restaurant}) ;
//     }
//   }
//  res.render(404).res.render('404');  
// }) ;



// // app.get('/about',function(req,res){
// //     // const htmlfilepah = path.join(__dirname,'views','about.html');
// //     // res.sendFile(htmlfilepah);
// //     res.render('about')
    
// // }) ;

// app.get('/recommend',function(req,res){
// // const htmlfilepath = path.join(__dirname,'views','recommend.html');
// // res.sendFile(htmlfilepath);
// res.render('recommend')
// }) ;

// app.get('/confirm',function(req,res){
//     // const htmlfilepath = path.join(__dirname,'views','confirm.html');
//     // res.sendFile(htmlfilepath);
//     res.render('confirm')
//     }) ;


 app.use(function(req,res){
   res.render('404');
 }) ;

 app.use(function(error,req,res,next){
   res.render('500');
 });


    

app.listen(80);