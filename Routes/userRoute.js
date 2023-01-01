const express = require("express");
const router = express.Router();
const UserLogic = require("../BL/UserLogic");
const { createToken, verifyToken, auth, refreshToken } = require("../middlewares/auth");
const { uploadImage } = require("../middlewares/uploadPhoto");

router.post("/register", async (req, res) => {
  try {
    let newUser = await UserLogic.register(req.body);
    res.send(newUser);
  } catch (e) {
    console.log("error", e);
  }
});

//
router.post("/login", async (req, res) => {
  try {
    let user = await UserLogic.login(req.body);
    res.send(user);
  } catch (e) {
    console.log("error", e);
  }
});


router.post("/uploadPhoto" ,uploadImage.single('image'), async (req, res) => {
  try {
    res.send('Image saved successfully');
  } catch (e) {
    console.log("error", e);
  }
});




router.post("/token",auth,async (req, res) => {
  try {
    let tokens = refreshToken(req.user,req.token)
    if(!tokens) return res.send('no tokens')
    res.send('Image saved successfully');
  } catch (e) {
    console.log("error", e);
  }
});

module.exports = router;
