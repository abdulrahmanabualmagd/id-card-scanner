const router = require("express").Router();
const multer = require("multer");
const { uploadCardController, performOcrController } = require("../controller/cardController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = file.originalname.split(".")[1];
        const name = file.originalname.split(".")[0];
        // Get original extension
        cb(null, `${uniqueSuffix}-${name}.${ext ?? ".png"}`); // Custom filename format
    },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), uploadCardController);

router.post("/process", upload.single("file"), performOcrController);

module.exports = router;
