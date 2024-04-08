const handleUserProfile = () =>{
    const user_id = localStorage.getItem("user_id")
    fetch(`https://learn-match-api.onrender.com/user/data/${user_id}`)
    .then(res => res.json())
    .then(data => {
        const first_name = document.getElementById("first_name")
        const last_name = document.getElementById("last_name")
        const username = document.getElementById("username")
        const email = document.getElementById("email")
        first_name.value = data.first_name
        last_name.value = data.last_name
        username.value = data.username
        email.value = data.email
    })

    fetch(`https://learn-match-api.onrender.com/user/list/?${user_id}`)
    .then(res => res.json())
    .then(data => {
        const mobile_no = document.getElementById("mobile_no")
        const birth_date = document.getElementById("birth_date")
        const user_image = document.getElementById("user-image")
        // console.log(data[0])
        mobile_no.value = data[0].mobile_no
        birth_date.value = data[0].birth_date
        console.log(data[0].image)
    })
}

const updateUserInfo = (event) =>{
    event.preventDefault()
    const first_name = document.getElementById("first_name").value
    const last_name = document.getElementById("last_name").value
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const info = {
        "username":username,
        "first_name":first_name,
        "last_name":last_name,
        "email":email
    }
    fetch(`https://learn-match-api.onrender.com/user/data/8`,{
        method : "PUT",
        headers : {"content-type":"application/json"},
        body : JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))
}
const checkLoginStatus = () => {
    const user_id = localStorage.getItem("user_id")
    const token = localStorage.getItem("token")
    if (!user_id && !token){
         window.location.href = "login.html"
    }
}
handleUserProfile()
checkLoginStatus()