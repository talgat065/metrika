const module = require('module');
const config = {};

config.db = {
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

module.exports = config;