const handleRegistration = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    const info = {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password
    };

    if (password === confirm_password) {
        document.getElementById("error").innerText = "";
        fetch("https://learn-match-api.onrender.com/user/register/", {
        // fetch("http://127.0.0.1:8000/user/register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((data) => {
            document.getElementById("error").innerText = data;
        })
        .catch((err) => {
            console.error(err);
            document.getElementById("error").innerText = "An error occurred. Please try again.";
        });
    } else {
        document.getElementById("error").innerText = "Password didn't match.";
    }
};

const handleLogin = (event) =>{
    event.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if ((username,password)){
        fetch("https://learn-match-api.onrender.com/user/login/",{
        // fetch("http://127.0.0.1:8000/user/login/",{
            method : "POST",
            headers:{"content-type":"application/json"},
            body : JSON.stringify({username,password})
        })    
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)

            if(data.token && data.user_id){
                localStorage.setItem("token",data.token)
                localStorage.setItem("user_id",data.user_id)
                fetch(`https://learn-match-api.onrender.com/user/list/?user_id=${data.user_id}`)
                // fetch(`http://127.0.0.1:8000/user/list/?user_id=${data.user_id}`)
                .then((res) => res.json())
                .then((data) => {
                localStorage.setItem("teacher_id", data[0].id);
                // redirect korar jonno
                window.location.href = "index.html"
                });
            }
            else if (data.error){
                const login_error = document.getElementById("login-error")
                login_error.innerText = "Username and Password Didn't match."
                login_error.classList = 'text-red-600'
            }
        })
    
    }
}

const getTeacher = () => {

    const user_id = localStorage.getItem("user_id");
  
    fetch(`https://learn-match-api.onrender.com/user/list/?user_id=${user_id}`)
    // fetch(`http://127.0.0.1:8000/user/list/?user_id=${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].id);
        localStorage.setItem("teacher_id", data[0].id);
      });
  };

const change_password = (event) =>{
    
    event.preventDefault()
    
    const old_password = document.getElementById('oldPassword').value;
    const new_password = document.getElementById('newPassword').value;
    const confirm_password = document.getElementById('confirmPassword').value;
    const token = localStorage.getItem("token")
    const user_id = localStorage.getItem("user_id")
    const errorMessage = document.getElementById('error-message');
    const info = {
        "old_password" : old_password,
        "new_password" : new_password,
        "confirm_password" : confirm_password,
        "user_id":user_id
    }
    if (new_password !== confirm_password) {
        errorMessage.innerText = 'Passwords do not match.';
        errorMessage.classList = 'text-red-600 font-bold'
        return;
    }

    else {
        console.log("inside else block")
        fetch("https://learn-match-api.onrender.com/user/change-password/",{
        // fetch("http://127.0.0.1:8000/user/change-password/",{
            method : "PUT",
            headers:{
                "Authorization" : `Token ${token}`,
                "content-type" : "application/json"
            },
            body : JSON.stringify(info)
        })    
        .then((res) => {
            res.json()
            if (!res.ok){
                throw new Error("Old password didn't match.")
            }
        })
        .then((data) =>{
            console.log(data.status)
            errorMessage.innerText = 'Password Change Succesfully.';
            errorMessage.classList = 'text-green-600 font-bold'
        })
        .catch(err => {
            errorMessage.innerText = err.message;    
            errorMessage.classList = 'text-red-600 font-bold'
        })
    }
}

const handlelogout = (event)=>{
    event.preventDefault()
    const token = localStorage.getItem("token")
    const user_id = localStorage.getItem("user_id")
    // console.log(token)
    
    fetch("https://learn-match-api.onrender.com/user/logout/",{
    // fetch("http://127.0.0.1:8000/user/logout/",{
        method:"POST",
        headers:{
            "Authorization" : `Token ${token}`,
            "content-type" : "application/json"
        },
        body : JSON.stringify(
            {
                'user_id' : user_id
            }
        )
    })
    .then((res) => {
        if (res.status === 204){
            localStorage.removeItem("token")
            localStorage.removeItem("user_id")
            localStorage.removeItem("teacher_id")
            console.log("Logout succesfull")
            window.location.href = 'index.html'
        }
    })
    .catch(err => console.log(err))
    
}