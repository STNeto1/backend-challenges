const router = require("express").Router();

// Controller
const { register, login, getUserInfo } = require("../controllers/auth");

// Auth middleware
const { protect } = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getUserInfo);

module.exports = router;
