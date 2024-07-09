import { Router } from "express";
import { 
    loginUser,  
    registerUser, 
    logoutUser,
    refreshAccessToken,
    checkAccessToken,
    medical_inf,
    ngo_inf,
    otherCause_inf,
    donation_inf,
    donation,
   
} from "../controllers/user.controller.js";
import { chatController} from "../controllers/chat.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()



router.route("/register").post(
    upload.single('avatar'),
    registerUser
    )

router.route("/medical").post(
    verifyJWT,
    upload.single('avatar'),
    medical_inf)

router.route("/ngo_charity").post(
        verifyJWT,
        upload.single('avatar'),
        ngo_inf)
router.route("/Donation").post(
            verifyJWT,
            upload.single('avatar'),
            donation_inf)
router.route("/donation").get(
                verifyJWT,
                
                donation,)
router.route("/otherCause").post(
    verifyJWT,
    upload.single('avatar'),
    otherCause_inf)

router.route("/login").post(loginUser)


router.route('/talk').post(chatController);

router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/access-token").post(checkAccessToken)


export default router