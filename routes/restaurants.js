const express = require('express');
const router= express.Router();

const resData = require('../util/restaurant-data') ;
const uuid = require('uuid') ;
const fs = require('fs');


router.get('/restaurants',function(req,res){
  
  let order = req.query.order;
  let nextOrder='desc';

  if(order!=='asc' && order !== 'desc'){
    order='asc' ;
  }

   if(order==='desc'){
        nextOrder='asc';
  }


    const storedrestaurant =resData.getstoredRestaurants();

    storedrestaurant.sort(function(resA, resB){
          if(( order ==='asc' && resA.name>resB.name) ||
          ( order ==='desc' && resB.name>resA.name)
          ){
          return 1 
          }
          return -1;
    });


    res.render('restaurants',{noofrestaurants:storedrestaurant.length , restaurants:storedrestaurant , nextOrder:nextOrder});
    
}) ;

router.get('/restaurants/:id',function(req,res){

   const restaurantid =  req.params.id ;
   

const storedrestaurant =resData.getstoredRestaurants();
  for(const  restaurant of storedrestaurant){
    if(restaurant.id===restaurantid){

return res.render('restaurant-detail',{ restaurant:restaurant}) ;
    }
  }
 res.render(404).res.render('404');  
}) ;

router.post('/recommend',function(req,res){

  const restaurant= req.body;
   restaurant.id=uuid.v4();
const storedrestaurant =resData.getstoredRestaurants();
storedrestaurant.push(restaurant);
resData.storeRestaurants(storedrestaurant);

res.redirect('/confirm') ;      
}) ;



router.get('/recommend',function(req,res){

res.render('recommend')
}) ;

router.get('/confirm',function(req,res){
    res.render('confirm')
 }) ;

module.exports = router;