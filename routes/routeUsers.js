"use strict"

var db = require('../db-connection');

function routeUsers(app) {
    app.route('/users')
        .get((request, respond) => {
            var sql = "SELECT * FROM restaurant_review.users";
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
module.exports = { routeUsers };


