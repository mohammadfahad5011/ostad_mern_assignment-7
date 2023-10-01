const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");
const subAdminController = require("../controllers/subAdminController");
const postController = require("../controllers/postController");

//userRoutes
router.get("/getUser", userController.readUser);
router.post("/createUser", userController.createUser);
router.put("/updateUser", userController.updateUser);
router.delete("/deleteUser", userController.deleteUser);

//adminRoutes
router.get("/getAdmin", adminController.readAdmin);
router.post("/createAdmin", adminController.createAdmin);
router.put("/updateAdmin", adminController.updateAdmin);
router.delete("/deleteAdmin", adminController.deleteAdmin);

//subAdminRoutes
router.get("/getSubAdmin", subAdminController.readSubAdmin);
router.post("/createSubAdmin", subAdminController.createSubAdmin);
router.put("/updateSubAdmin", subAdminController.updateSubAdmin);
router.delete("/deleteSubAdmin", subAdminController.deleteSubAdmin);

//postRoutes
router.get("/getPost", postController.readPost);
router.post("/createPost", postController.createPost);
router.put("/updatePost", postController.updatePost);
router.delete("/deletePost", postController.deletePost);

module.exports = router;
