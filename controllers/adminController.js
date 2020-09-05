const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const db = require('../models/database.js');
const Artists = require('../models/ArtistModel.js');
const Items = require('../models/ItemModel.js');
const Bundles = require('../models/BundleModel.js');

const adminController = {
    //Render admin
    getLoginAdmin: function(req, res, next){
        //find artist then render with details
        db.findMany(Artists, {}, '', result=>{
        
            let artistArray = [];

            for (let i=0;i<result.length;i++){
                artistObj = {
                        artistID: result[i].artistID,
                        artistName: result[i].artistName,
                    }
                artistArray.push(artistObj);
            }

            //details of admin page
            var details = {
                artist: artistArray,
                artistItems: [{
                    artistID: 1,
                    item: [{
                        itemID: 001,
                        itemPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWxMyKjtheIlC1HLrWeJMU4t4aynpeaJ-VlA&usqp=CAU",
                        itemName: "Item 1",
                        itemPrice: 5.00,
                        stocksQuantity: 20
                    },{
                        itemID: 002,
                        itemPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWxMyKjtheIlC1HLrWeJMU4t4aynpeaJ-VlA&usqp=CAU",
                        itemName: "Item 2",
                        itemPrice: 5.00,
                        stocksQuantity: 20
                    },{
                        itemID: 003,
                        itemPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWxMyKjtheIlC1HLrWeJMU4t4aynpeaJ-VlA&usqp=CAU",
                        itemName: "Item 3",
                        itemPrice: 5.00,
                        stocksQuantity: 20
                    },{
                        itemID: 004,
                        itemPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWxMyKjtheIlC1HLrWeJMU4t4aynpeaJ-VlA&usqp=CAU",
                        itemName: "Item 2",
                        itemPrice: 5.00,
                        stocksQuantity: 20
                    },{
                        itemID: 005,
                        itemPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWxMyKjtheIlC1HLrWeJMU4t4aynpeaJ-VlA&usqp=CAU",
                        itemName: "Item 3",
                        itemPrice: 5.00,
                        stocksQuantity: 20
                    }]
                }]
            }

            if (result){
                res.render('admin',details)
            }
            else {
                res.render('admin')
            }            
        })
        
    },

    //Add artist to database
    postAddArtist: function(req, res, next){
        data = {
            _id: new mongoose.Types.ObjectId(),
            artistID: req.body.artistID,
            artistName: req.body.artistName
        }
        db.insertOne(Artists, data, result=>{
            if (result) {
                console.log("Successfully added artist to the artists collection");
            }
            else {
                console.log("Error adding artist to the artists collection");
            }
        });
        
        res.redirect('/admin');
    },

    //Add item to database
    //TODO: eventID and multer for itemPicture
    postAddItem: function(req, res, next){
        //multer storage
        const storage = multer.diskStorage({
            destination: './public/photo/',
            filename: function(req, file, cb) {
              cb(null,file.originalname);
            }
          });
  
          const upload = multer({
              storage: storage
          }).single('itemPhotoPickerInput');

          upload(req, res, (err) => {
            if (!err){
                data = {
                    _id: new mongoose.Types.ObjectId(),
                    artistID: req.body.selectedArtist,
                    eventID: new mongoose.Types.ObjectId(), //temp
                    itemName: req.body.newItemName,
                    itemPrice: req.body.newPriceStock,
                    stockQuantity: req.body.newStockQuantity,
                    itemsSold: 0,
                    itemPicture: '/photo/'+ req.file.originalname,
                }
                db.insertOne(Items, data, result=>{
                    if (result) {
                        console.log("Successfully added item to the items collection");
                    }
                    else {
                        console.log("Error adding item to the items collection");
                    }
                });  
                res.redirect('/admin');
            }
        })
    },

    //Add bundle to database
    postAddBundle: function(req, res, next){
        data = {
            _id: new mongoose.Types.ObjectId(),
            //artistID: req.body.artistID,
            //eventID:,
            //includedItems:,
            //bundleName:,
            //bundlePrice:,
            //bundleSold:,
            //bundleStock:,
        }

        /*
        db.insertOne(Bundles, data, result=>{
            if (result) {
                console.log("Successfully added bundle to the bundles collection");
            }
            else {
                console.log("Error adding bundle to the bundles collection");
            }
        });
        */
        res.redirect('/admin');
    },
    
}

module.exports = adminController;