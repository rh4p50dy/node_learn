const router = require('express').Router()
const auth = require('../controllers/auth')

router.get('/login',auth.renderLoginPage)
router.get('/register',auth.renderRegisterPage)
router.post('/login',auth.loginHandler)
router.post('/register',auth.registerHandler)
router.get('/logout',auth.logOut)

module.exports = router
