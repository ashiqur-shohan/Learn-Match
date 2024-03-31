var profile = document.getElementById("profile-container")
var login = document.getElementById("login-container")
var registration = document.getElementById("registration-container")

// html ta fully load hoar por call hobe function ta 
document.addEventListener("DOMContentLoaded", function() {
    showProfile();
  });

const showProfile = () =>{
    const user_id = localStorage.getItem("user_id")
    const token = localStorage.getItem("token")
    if (user_id==null && token == null){
        profile.style.display = "none"
    }
    else{
        login.style.display = "none"
        registration.style.display = "none"
    }
}
