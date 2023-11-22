const Course = require('../models/courses/coursesSchema');

const createCourse = async (req, res) => {
    try {
       if (!req.auth.id) {
        res.status(401).json("Unauthorized action");
       }
       
       const data = {
        ...req.body, author: req.auth.id
       }

      const course = await Course.create(data);
        res.status(200).json({
            status: 'Success',
            message: 'Course created successfully',
            data: course
        });

    } catch (err) {
        res.status(500).json({
            status:'Failed',
            message: err
        });
    };
};

const getOneCourse = async (req, res) => {
    try {
    const gettingOne = await Course.findById(req.params.id);
        res.status(200).json({
            status:'Success',
            message:'Course found successfully by Id',
            data: gettingOne
        })
    } catch (err) {
        res.status(400).json({
            status:'Failed',
            message: err
        })
   };
};

const getAllCourses = async (req, res) => {
    try {
    const allCourses = await Course.find();
        res.status(200).json({
            status:'Success',
            message:'Courses found successfully by Id',
            data: allCourses
        })
    } catch (err) {
        res.status(400).json({
            status:'Failed',
            message: err
        });
    };
};

const updateCourse = async (req, res) => {
    try {
     if (!req.auth.id) {
        res.status(401).json('Unauthorized action !');

        const data = {
            ...req.body, author: req.auth.id
        }

        await Course.findByIdAndUpdate(req.params.id, data);
        res.status(204).json({
            status: 'Success',
            message: 'Course updated successfully',
            data: null
        })
     }

    } catch (err) {
        res.status(400).json({
            status:'Failed',
            message: err
        });
    };
};


const deleteCourse = async (req, res) => {
    try {
        if(!req.auth.id) {
            res.status(401).json('Unauthorized action'); 
        }
      await Course.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: "Success",
        message: "Course deleted successfully",
        data: null
      })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        });
    };
};


module.exports ={
    createCourse,
    updateCourse,
    deleteCourse,
    getAllCourses,
    getOneCourse,
}