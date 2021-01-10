function fetchUsers() {
    var request = new XMLHttpRequest();

    request.open('GET', user_url, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        user_array = JSON.parse(request.responseText);
    };
    request.send();
}

function newUser() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";
    document.getElementById("nickname").value = "";
}

function addUser() {
    var user = new Object();
    // user.userId = user_array[currentIndex].userId;
    user.firstName = document.getElementById("firstName").value;
    user.lastName = document.getElementById("lastName").value;
    user.loginId = document.getElementById("loginId").value;
    user.password = document.getElementById("password").value;

    // Get gender from radio button  
    var ele = document.getElementsByName("gender");
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            user.gender = ele[i].value;
    }

    user.address = document.getElementById("address").value;
    user.mobile = document.getElementById("mobile").value;
    user.email = document.getElementById("email").value;

    console.log("came here") 
    console.log(user.gender)


    var postUser = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postUser.open("POST", user_url, true); //Use the HTTP POST method to send data to server

    postUser.setRequestHeader("Content-Type", "application/json");
    postUser.onload = function () {
        fetchUsers(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postUser.send(JSON.stringify(user));
    console.log(JSON.stringify(user).toString());
}
function loginFunction()
{
    event.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("pwd").value;
    console.log("email:" + email+" and password:" +password);
    
    var account = new Object();
    account.email = email;
    var postLogin = new XMLHttpRequest();
 
    postLogin.open("POST", "/login", true); //use the HTTP post method
    postLogin.setRequestHeader("Content-Type", "application/json"); // set format for postman
    postLogin.onload = function(){
        if(postLogin.responseText === "[]"){
            alert("Incorrect Username or Password");
        }
        else{
            account_array = JSON.parse(postLogin.responseText);
 
            if(password === account_array[0].password){
                alert("Login Successful");
                $('#loginModal').modal('hide');
                localStorage.setItem("loggedIn", account_array[0].firstName);
                localStorage.setItem("userPk", account_array[0].userId);
                loadUserbarFunction();
            }
            else{
                alert("Incorrect Username or Password");
            }
        }

}
