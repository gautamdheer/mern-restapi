const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message : "Get Goals"})
})
router.post('/', (req, res) => {
    res.status(200).json({message : "Set goal"})
})

router.get('/', (req, res) => {
    res.status(200).json({message : "Get Goals"})
})
router.get('/', (req, res) => {
    res.status(200).json({message : "Get Goals"})
})

module.exports = router;