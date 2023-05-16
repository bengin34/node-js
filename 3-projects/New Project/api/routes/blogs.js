const express = require("express");
const Blog = require("../models/Blog.js");

const router = express.Router()

router.get('/', async (req,res,next) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json({success:true, data:blogs})
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req,res,next) => {
    try {
        const blog = await Blog.findById(id)
        res.status(200).json({success:true, data:blog})

    } catch (error) {
        next(error)
    }
})

router.post('/', async (req,res,next) => {
    try {
        const blog = await Blog(req.body)
        await blog.save()
        res.status(201).json({success:true, msg:"Blog is created successfully", data:blog})
    } catch (error) {
        
    }
} )



router.put("/:id", async (req, res, next) => {
    const {id} =req.params
    try {
      const updatedBlog = await User.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json({ success: true, data: updatedBlog });
    } catch (error) {
      next(error);
    }
  });


module.exports = router;