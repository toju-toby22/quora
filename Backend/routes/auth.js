const router = require('express').Router()
const Users = require('../models/user')

router.post("/createusers", async (req, res) => {
    //Method to create data
    const users = await signUpModel.create(req.body)
    res.send(users)
    console.log(req.body);
})

router.post("/users", async (req, res) => {
    let user = await signUpModel.findOne({ email: req.body.email, password: req.body.password })
    console.log(user);
    if (user != null) {
        res.send(user);

    } else {
        console.log(user);
    }
    // res.send(user);
})

router.delete("/delete", async (req, res) => {
    const { id } = req.body
    const booking = await signUpModel.findOne({ _id: id })
    if (booking) {
        await signUpModel.deleteOne({ _id: id })

        res.send("This booking have been deleted")
    } else {
        res.send("No booking found with this id")
    }
})

module.exports = router;