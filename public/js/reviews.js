// Get all reviews for a restaurant
function showRestaurantReviews(restaurant_id) {
    var request = new XMLHttpRequest();
    request.open('GET', "/reviews?restaurant_id=" + restaurant_id, true);

    // This function will be called when data returns from the web api
    request.onload = function () {
        review_array = JSON.parse(request.responseText);
        displayReviews(review_array);
    };
    // Send request to get user reviews
    request.send();
}

//This function is to display the reviews 
function displayReviews(reviews) {
    var reviewHolder = document.getElementById("reviewHolder");
    // Clear all DOM data below HTML element with id="reviewHolder"
    reviewHolder.innerHTML = "";

    for (review of reviews) {
        var cell =
            '<div class="bg-light">' +
            review.restaurant_feedback
        '</div>';

        var stars = '';
        for (var index = 1; index <= 5; index++) {
            if (index <= review.star_ratings) {
                stars += '<i class="fas fa-star text-warning"></i>';
            } else {
                stars += '<i class="far fa-star text-warning"></i>';
            }
        }

        var time = new Date(review.feedback_date);

        var rawHtml = cell +
            "<p>" + stars + "</p>" +
            "<p>" + time.toDateString() + "</p>";

        reviewHolder.insertAdjacentHTML('beforeend', rawHtml);
    }
}

function newReview() {
    $('#restaurantModal').modal('hide');
    $('#newreviewModal').modal('show');
}

function rateStars(starId) {
    var star_ids = ['star_1', 'star_2', 'star_3', 'star_4', 'star_5'];

    for (var index = 0; index < star_ids.length; index++) {
        if (star_ids[index] <= starId) {
            document.getElementById(star_ids[index]).classList.add("fas");
            document.getElementById(star_ids[index]).classList.remove("far");
            rating_stars = index + 1;
        } else {
            document.getElementById(star_ids[index]).classList.remove("fas");
            document.getElementById(star_ids[index]).classList.add("far");
        }
    }
}


function addReview() {
    review = document.getElementById("userComments").value;

    var request = new XMLHttpRequest();
    request.open('POST', "/reviews", true);
    request.setRequestHeader("Content-Type", "application/json");

    // This function will be called when data returns from the web api
    request.onload = function () {
        $('#newreviewModal').modal('hide');
    };

    // Send request to get user reviews
    request.send(JSON.stringify(
        {
            "restaurant_id": currentIndex+ 1,
            "restaurant_feedback": review,
            "star_ratings": rating_stars
        }
    ));
}