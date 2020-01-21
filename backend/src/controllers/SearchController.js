const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index (req, res) {
        const { latitude, longitude, techs } = req.query;

        // converting every value in the array as a case insensitive RegExp
        const techsArray = parseStringAsArray(techs).map(str => new RegExp(str, "i"));

        // $in: operador Mongo (https://docs.mongodb.com/manual/reference/operator/query/in/#op._S_in)
        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return res.json({ devs })
    }

}
