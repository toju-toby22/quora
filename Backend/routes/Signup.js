const express = require('express'); 
const router = express.Router();
// const homeModel = require('../models/home_page_models')
const signUpModel = require('../models/SignUpModel')




// router.post("/users", async (req, res) => {
//     const postUsers = await signUpModel.find().lean()
//     res.send(postUsers)
// })

router.post("/users", async (req, res) => {
    // const { id } = req.body
    let user = await signUpModel.findOne({ email:req.body.email, password:req.body.password })
    console.log(user);
    if(user!=null){
    res.send(user);

    }else{
    console.log(user);
    }
    // res.send(user);
}) 


router.post("/createusers", async (req, res) => {   
    //Method to create data
    const users = await signUpModel.create(req.body)
    res.send(users)
   console.log(req.body);
}) 

router.delete("/delete", async (req, res)=>{
    const {id} = req.body
    const booking = await signUpModel.findOne({_id:id})
   if(booking){
    await signUpModel.deleteOne({_id:id})

    res.send("This booking have been deleted")
   }else{
    res.send("No booking found with this id")
   }
})

module.exports = router;






 // // let newData = {
    // //     Banner_image: "/img/3.jpeg",
    // //     subtitleText: "The best free stock photos, royalty  free images & videos shared by creators.",
    // //     action1Text: "Hyper Realism Art",
    // //     action2Text: "3D PIxels",
    // //     action2Text: "Wallpapers",
    // //     Image1: "/img/2.jpeg",
    // // }//

    // homePageMode.create(newData) //Savee the object to the database using the model class name

    // let homePageRecords = await homePageMode.find()

    // homePageRecords = homePageRecords[0]
    // console.log(homePageRecords)
