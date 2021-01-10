"use strict"

var db = require('../db-connection');

function routeReviews(app) {
    app.route('/reviews')
        .post((request, respond) => {
            var review = request.body;
            var sql = "INSERT INTO restaurant_review.reviews (restaurant_id, restaurant_feedback, star_ratings) VALUES(?,?,?)";
            var values = [review.restaurant_id,
            review.restaurant_feedback,
            review.star_ratings
            ];
            db.query(sql, values, function (error, result) {
                if (error) {
                    throw error;
                } else {
                    respond.json(result);
                }
            });
        })
        .get((request, respond) => {
            var sql = "SELECT * FROM restaurant_review.reviews";

            if (request.query.restaurant_id !== undefined) {
                sql = "SELECT * FROM restaurant_review.reviews WHERE restaurant_id = " + request.query.restaurant_id;
            }

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
module.exports = { routeReviews };

