// const express = required('express');

// const router = express.Router();
// const {generateShortUrl} =require('../controllers/urlController');

// router.post("/",generateShortUrl);
// module.exports = router;


// const express = require("express");
// const router = express.Router();

// const {
//   generateShortUrl,
//   redirectToUrl,
// } = require("../controllers/url_controllers");

// // Create short URL
// router.post("/", generateShortUrl);

// // Redirect route
// router.get("/:shortId", redirectToUrl);

// module.exports = router;

const express = require('express');
const app = express();
const router = express.Router();
const { generateShortUrl } = require('../Controllers/url_controller');
router.post('/', generateShortUrl);

module.exports = router;