const express = require('express')
const empController = require('../controllers/empController')






const router = express.Router()
router.get('/getAllEmp' , empController.getAllEmp)

router.post('/createEmp', empController.createEmp)



module.exports = router