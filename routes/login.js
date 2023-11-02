const router = require('express').Router()
const auth = require('../controllers/auth')

router.get('/login',auth.renderLoginPage)
router.post('/login',auth.checkAuth)
router.get('/logout',auth.logOut)

module.exports = router
