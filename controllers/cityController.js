const cityModel =
    require("../models/cityModel");


async function getCities(
    req,
    res,
    next
) {

    try {

        const cities =
            await cityModel.searchCities(
                req.query
            );


        res.json(cities);

    } catch (error) {

        next(error);

    }
}


async function getCity(
    req,
    res,
    next
) {

    try {

        const city =
            await cityModel.getCityById(
                req.params.id
            );


        if (!city) {

            return res.status(404).json({

                message:
                    "City not found"

            });
        }


        res.json(city);

    } catch (error) {

        next(error);

    }
}


module.exports = {
    getCities,
    getCity
};