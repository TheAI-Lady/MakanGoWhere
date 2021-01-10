
//This function is to call the restaurant api and get all the restaurants
function getRestaurantData() {
    var res = alasql("SELECT * FROM restaurants");
    // console.log(res); // NOTE: res is "unreadable" if concatenated with a string in console.log()!
    restaurant_array = res;
    displayRestaurants("all", restaurant_array);
}

//This function is to display the restaurants list
function displayRestaurants(district, restaurant_list) {
    var table = document.getElementById("restaurantTable");
    // Clear all DOM data below HTML element with id="restaurantTable"
    table.innerHTML = "";

    const totalResults = restaurant_list.length;
    for (var count = 0; count < totalResults; count++) {
        if (district == "all" || district == restaurant_list[count].restaurant_district.trim()) {
            var restaurant = restaurant_list[count];
            //restaurant_list.forEach(function (restaurant, index) {
                var thumbnail = "/images/Restaurants/" + restaurant.restaurant_id + ".jpg";
                var cell = '<div class="col-md-3" style="float: none; margin: 0 auto;">' +
                    '<div class="flip-container" >' +
                    '<div class="flipper">' +
                    '<div class="front">' +
                    '<a id="restaurant" href="#" data-toggle="modal" data-target="#restaurantModal" item=' + restaurant.restaurant_id + '>' +
                    '<img class="h-100 w-100 img-cover" src=' + thumbnail + ' />' +
                    '</a>' +
                    '</div>' +
                    '<div class="back">' +
                    '<div class="h-100 bg-pink text-white text-center" >' +
                    '<span><br>' + restaurant.name + '</span><br>' +
                    '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-sm bg-cream" onClick="showRestaurantDetails(this)" >See More</button> ' +
                    '<button href="#" data-toggle="modal" data-target="#reviewModal" item="' + count + '" type="button" class="btn btn-sm bg-cream" onClick="showRestaurantReviews(' + restaurant.restaurant_id + ')" >Reviews</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                table.insertAdjacentHTML('beforeend', cell);
            //});
      

            // document.getElementById("summary").textContent = totalResults + " Restaurants";
            // document.getElementById("parent").textContent = "";
        }
    }
}

//This function is to display the individual restaurant details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;

    // console.log("Restaurant data is:");
    // console.log(restaurant_array[item]);

    var restaurant_image = "/images/Restaurants/" + restaurant_array[currentIndex].restaurant_id + "_detail.jpg";

    document.getElementById("restaurantName").textContent = restaurant_array[currentIndex].name;
    document.getElementById("restaurantImage").src = restaurant_image;
    document.getElementById("restaurantAddress").textContent = restaurant_array[currentIndex].address;
    document.getElementById("restaurantDistrict").textContent = restaurant_array[currentIndex].district;
    document.getElementById("restaurantCuisine").textContent = restaurant_array[currentIndex].cuisine;
    document.getElementById("openingHours").textContent = restaurant_array[currentIndex].opening_hours;
    document.getElementById("phonenumber").textContent = restaurant_array[currentIndex].phone_number;
    document.getElementById("website").textContent = restaurant_array[currentIndex].website;
    document.getElementById("map").innerHTML = restaurant_array[currentIndex].google_maps_link;
    document.getElementsByTagName("iframe")[0].width = "100%";
}


function displayTanjongPagar(district) {
    event.preventDefault();
    // district = "Tanjong Pagar";
    displayRestaurants(district, restaurant_array);
}
