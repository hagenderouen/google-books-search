const db = require("../models");
const axios = require('axios');

const BOOKS_API_ROOT = 'https://www.googleapis.com/books/v1';

module.exports = {
    searchByTitle: function(req, res) {
            axios.get(`${BOOKS_API_ROOT}/volumes?q=${req.query.q}`)
            .then((result) => {
                console.log(result.data);
                res.json(result.data)
            })
            .catch((e) => res.json(e));
    }
}