"use strict"

var db = require('../db-connection');

function routeRestaurants(app) {
    app.route('/restaurants')
        .get((request, respond) => {
            var sql = "SELECT * FROM restaurant_review.restaurant";
            db.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                else {
                    respond.json(result);
                }
            });
        });
}
module.exports = { routeRestaurants };


