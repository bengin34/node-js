const express = require("express");
const Blog = require("../models/Blog.js");
const {verifyAdmin, verifyUser} = require("../utils/verifyToken.js")

const router = express.Router()

router.get('/',verifyUser, async (req,res,next) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json({success:true, data:blogs})
    } catch (error) {
        next(error)
    }
})

router.get('/:id',verifyUser, async (req,res,next) => {
    try {
        const blog = await Blog.findById(id)
        res.status(200).json({success:true, data:blog})

    } catch (error) {
        next(error)
    }
})

router.post('/', verifyUser ,async (req,res,next) => {
    try {
        const blog = await Blog(req.body)
        await blog.save()
        res.status(201).json({success:true, msg:"Blog is created successfully", data:blog})
    } catch (error) {
        
    }
} )



router.put("/:id",verifyAdmin, async (req, res, next) => {
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

router.delete("/:id",verifyAdmin, async (req, res, next) => {
    const {id} =req.params
    try {
      await User.findByIdAndDelete(id );
      res.status(204).json({ success: true, msg:"Successfully Deleted" });
    } catch (error) {
      next(error);
    }
  });


module.exports = router;