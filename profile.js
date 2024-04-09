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

    // fetch(`https://learn-match-api.onrender.com/user/list/?${user_id}`)
    fetch(`http://127.0.0.1:8000/user/list/?user_id=${user_id}`)
    .then(res => res.json())
    .then(data => {
        const mobile_no = document.getElementById("mobile_no")
        const birth_date = document.getElementById("birth_date")
        const user_image = document.getElementById("user-image")
        // console.log(data[0])
        mobile_no.value = data[0].mobile_no
        birth_date.value = data[0].birth_date
        user_image.src = data[0].image
        
        console.log(data[0].image)
    })
}

const updateUserInfo = (event) =>{
    event.preventDefault()
    const user_id = localStorage.getItem("user_id")
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

    //user data
    fetch(`https://learn-match-api.onrender.com/user/data/${user_id}`,{
    // fetch(`http://127.0.0.1:8000/user/list/?user_id=8`,{
        method : "PUT",
        headers : {"content-type":"application/json"},
        body : JSON.stringify(info)
        
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))

    //for teacher data
    let birth_date = document.getElementById("birth_date").value
    const mobile_no = document.getElementById("mobile_no").value
    const image = document.getElementById("image")
    const imageFIle = image.files[0]
    if (!birth_date){
        birth_date = null
    }

    const formData = new FormData()
    formData.append("image",imageFIle)
    formData.append("birth_date",birth_date)
    formData.append("mobile_no",mobile_no)
    formData.append("education","SSC")
    formData.append("user",8)

    //teacher data
    // fetch(`https://learn-match-api.onrender.com/user/list/?user_id=${user_id}`,{
    fetch(`http://127.0.0.1:8000/user/list/?user_id=8`,{
        method:"PUT",
        // headers:{"content-type":"application/json"},
        // body : JSON.stringify(info2)
        body : formData
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        window.location.reload()
    })
    .catch(err => console.log(err))
    
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