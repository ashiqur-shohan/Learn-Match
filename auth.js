// const handleRegistration = (event) =>{
//     event.preventDefault()
//     const username = document.getElementById("username").value
//     const first_name = document.getElementById("first_name").value
//     const last_name = document.getElementById("last_name").value
//     const email = document.getElementById("email").value
//     const birth_date = document.getElementById("birth_date").value
//     const education = document.getElementById("education").value
//     const password = document.getElementById("password").value
//     const confirm_password = document.getElementById("confirm_password").value
//     const info = 
//         {
//             username,
//             first_name,
//             last_name,
//             email,
//             password,
//             confirm_password
//         }

//         if (password == confirm_password){
//             document.getElementById("error").innerText = ""
//             fetch("https://learn-match-api.onrender.com/user/register/",
//             {
//                 method:"POST",
//                 headers:{"content-type":"application/json"},
//                 body:JSON.stringify(info),
//             })
//             .then((res) => res.json())
//             .then((data) => console.log(data))
//             .catch((err) => console.log(err))
//         }
//         else {
//             document.getElementById("error").innerText = "Pasword didn't match."
//         }
// }


// from avishek bhai

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
        .then((data) => console.log(data))
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
                // redirect korar jonno
                window.location.href = "index.html"
            }
        })
    
    }
}

const change_password = (event) =>{
    
    event.preventDefault()
    const oldPassword = document.getElementById('old-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const errorMessage = document.getElementById('error-message');
    if (newPassword !== confirmPassword) {
        errorMessage.innerText = 'Passwords do not match.';
        return;
    }

    else {
        fetch("https://learn-match-api.onrender.com/user/change-password/",{
            method : "PUT",
            headers:{"content-type":"application/json"},
            body : JSON.stringify({oldPassword,newPassword,confirmPassword})
        })    
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            errorMessage.innerText = 'Password Change Succesfully.';
        })
    
    }
}