
// const mongoose = require("mongoose");

// const urlSchema = new mongoose.Schema(
//   {
//     shortId: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     ActualURL: {
//       type: String,
//       required: true,
//     },
//     visitHistory: [
//       {
//         timestamp: {
//           type: Date,
//           default: Date.now,
//         },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const UrlModel = mongoose.model("UrlModel", urlSchema);

// module.exports = UrlModel;





const { nanoid } = require('nanoid');
const Url = require('./url_model');

async function generateShortUrl(req, res) {
    try {
        const { actualUrl } = req.body;

        if (!actualUrl) {
            return res.status(400).json({ error: 'Actual URL is required' });
        }

        const shortId = nanoid(7);

        const url = await Url.create({
            shortUrl: shortId,
            actualUrl
        });

        return res.status(201).json({
            shortUrl: url.shortUrl,
            actualUrl: url.actualUrl
        });

    } catch (error) {
        return res.status(500).json({ error: 'Error creating short URL' });
    }
}

module.exports = { generateShortUrl };