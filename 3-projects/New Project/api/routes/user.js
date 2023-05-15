const express = require('express')
const router =express.Router()
const User = require('../models/User.js')

router.get('/', async (req,res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
})


router.get('/:id', async (req,res, next) => {
    try {
        const users = await User.findById(req.params.id)
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
})




router.delete('/:id', async(req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (error) {
        next(error)
    }
})












module.exports = router