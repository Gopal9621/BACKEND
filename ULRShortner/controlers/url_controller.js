// const {nanoid} = require("nanoid");
// const URL = require("../models/urlModel");
// async function generateShortUrl(req,res){
//     const {ActualUrl} = req.body;
//     if(!ActualUrl) return res.status(404).json({err: "Url is required"});
// }

// const shortid = nanoid(7);
// await URL.create({
//     shortURLId: shortURLId,
//     ActualUrl: url
// });

// return res.json

// const { nanoid } = require("nanoid");
// const URL = require("../models/urlModel");

// async function generateShortUrl(req, res) {
//     const { ActualUrl } = req.body;

//     // validation
//     if (!ActualUrl) {
//         return res.status(400).json({
//             err: "URL is required",
//         });
//     }

//     // generate short id
//     const shortid = nanoid(7);

    // try {
        // store in database
        // const newUrl = await URL.create({
        //     shortId: shortid,
        //     ActualURL: ActualUrl,
        // });

        // response
        // return res.status(201).json({
        //     msg: "Short URL created successfully",
        //     id: newUrl.shortId,
        // });

    // } catch (error) {
    //     return res.status(500).json({
    //         err: "Server error",
    //     });
    // }


// module.exports = {
//     generateShortUrl,
// };


// const { nanoid } = require("nanoid");
// const URL = require("../models/url_models");

// // Create Short URL
// async function generateShortUrl(req, res) {
//   const { ActualUrl } = req.body;

//   if (!ActualUrl) {
//     return res.status(400).json({
//       err: "URL is required",
//     });
//   }

//   const shortid = nanoid(8);

//   try {
//     await URL.create({
//       shortId: shortid,
//       ActualURL: ActualUrl,
//       visitHistory: [],
//     });

//     return res.status(201).json({
//       msg: "Short URL created successfully",
//       id: shortid,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       err: "Server error",
//     });
//   }
// }

// // Redirect to original URL
// async function redirectToUrl(req, res) {
//   const shortId = req.params.shortId;

//   const entry = await URL.findOneAndUpdate(
//     {
//       shortId: shortId,
//     },
//     {
//       $push: {
//         visitHistory: {
//           timestamp: Date.now(),
//         },
//       },
//     }
//   );

//   if (!entry) {
//     return res.status(404).send("URL not found");
//   }

//   res.redirect(entry.ActualUrl);
// }

// module.exports = {
//   generateShortUrl,
//   redirectToUrl,
// };




const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },    
    actualUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Model create
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;