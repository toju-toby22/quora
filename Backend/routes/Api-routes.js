const router = require('express').Router()
const Posts = require('../models/Post-models')
const Users = require('../models/Signupmodel')

router.post('/posts', async (req, res) => {
    try {
        const { title, text, img, userId } = req.body;

        if (!title || !text || !img || !userId)
            return res.status(400).json({ msg: "one or more fields are empty!" })

        const user = await Users.findById(userId)
        if (!user) res.status(404).json({ msg: "user not found!" })

        const newPost = new Posts({
            title, text, img, userId
        })

        await newPost.save()

        return res.status(200).json({
            msg: 'success, post created!',
            newPost
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})

router.get('/posts', async (req, res) => {
    try {
        const limitValue = req.query.size || 100;
        const skipValue = req.query.page || 0;

        const spV = skipValue * limitValue;

        const filter = {}
        if (req.query.userId) filter.userId = req.query.userId

        const posts = await Posts.find(filter)
            .sort({ metacritic: -1 })
            .limit(parseInt(limitValue))
            .skip(parseInt(spV))
            
        const postsCount = await Posts.find(filter).count()

        return res.status(200).json({
            msg: "success",
            total: postsCount,
            page: parseInt(skipValue),
            size: posts.length,
            posts
        })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
})

module.exports = router;