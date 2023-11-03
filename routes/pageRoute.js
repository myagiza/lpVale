const express = require('express')
const pageController = require('../controllers/pageController')

const router = express.Router()

router.route('/').get(pageController.getLoginPage)
router.route('/sign-up').get(pageController.getSignUpPage)

module.exports = router;