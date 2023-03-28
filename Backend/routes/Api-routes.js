const express = require('express'); 
const router = express.Router();
// const homeModel = require('../models/home_page_models')
const postModel = require('../models/Post-models')



router.get("/posts", async (req, res) => {
    const postData = await postModel.find().lean()
    res.send(postData)
})

// router.get("/card-table/:id", async(req, res) => {
//     let aData =  await PostModel.findOne({_id:req.params.id})
//     res.send(aData)
// })

router.get("/posts", async (req, res) => {
    // const { post_id } = req.body
    const userpost = await postModel.find()
    res.send(userpost)
})


router.post("/card-posts", async (req, res) => {   
    //Method to create data
    const category = await postModel.create(req.body)
    res.send(category)
   console.log(req.body);
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
