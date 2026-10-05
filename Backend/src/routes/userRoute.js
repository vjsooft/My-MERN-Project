const express = require('express');
const {userLogin, userRegister, userLogout} = require('../controllers/userController')

const validateMiddle = require('../middlewares/validationMiddle')

const router = express.Router();

router.post('/login', userLogin);

router.post('/signup',validateMiddle, userRegister);

router.post('/logout', userLogout);


// router.get("/profile", (req, res) => {
//     console.log("========== PROFILE ROUTE HIT ==========");

//     return res.status(200).json({
//         message: "Profile route working"
//     });
// });



module.exports = router;