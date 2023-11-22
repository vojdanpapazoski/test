const Academy = require('../models/academies/academiesSchema');

const createAcademy = async (req, res) => {
    try {
      const academy = await Academy.create(req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Academy created successfully',
            data: academy
        });

    } catch (err) {
        res.status(500).json({
            status:'Failed',
            message: err
        });
    };
};

const getOneAcademy = async (req, res) => {
    try {
    const gettingOne = await Academy.findById(req.params.id);
        res.status(200).json({
            status:'Success',
            message:'Academy found successfully by Id',
            data: gettingOne
        })
    } catch (err) {
        res.status(400).json({
            status:'Failed',
            message: err
        })
   };
};

const getAllAcademies = async (req, res) => {
    try {
    const allAcademies = await Academy.find().populate("courses");
        res.status(200).json({
            status:'Success',
            message:'All Academies found successfully',
            data: allAcademies
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status:'Failed',
            message: err
        });
    };
};

const updateAcademy = async (req, res) => {
    try {
        await Academy.findByIdAndUpdate(req.params.id, req.body);
            res.status(204).json({
            status: 'Success',
            message: 'Academy updated successfully',
            data: null
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status:'Failed',
            message: err
        });
    };
};


const deleteAcademy = async (req, res) => {
    try {
        await Academy.findByIdAndDelete(req.params.id);
        res.status(204).json({
        status: "Success",
        message: "Academy deleted successfully",
        data: null
      })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        });
    };
};


module.exports = {
    createAcademy, 
    updateAcademy, 
    deleteAcademy,
    getAllAcademies,
    getOneAcademy,
}