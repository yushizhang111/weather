const express = require('express');
const weather = require('../models/Weather');
const responseFormatter = require ('../utils/responseFormatter');
const countryValidator = require('../middleware/countryValidator');
const router = express.Router();

router.get('/:cc/:city/',countryValidator, (req,res) => {
    const {cc, city} = req.params;
    const weatherType = req.query.weatherType;
    weather
        .getData(city,cc,weatherType)
        .then(response =>{
            responseFormatter(res,200,null,response);
        })
        .catch(err => console.log(err));

});

module.exports = router;