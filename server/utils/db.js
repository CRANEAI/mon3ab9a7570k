/* Removal static URL when deploying. Use ONLY env vars */
module.exports = require("mongo-utility")(process.env.MONGO_URL || "mongodb://")
