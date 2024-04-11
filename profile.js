const handleUserProfile = () =>{
    const user_id = localStorage.getItem("user_id")

    // user-model data show 
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

    // Teacher-model data display 
    // fetch(`https://learn-match-api.onrender.com/user/list/?${user_id}`)
    fetch(`http://127.0.0.1:8000/user/list/?user_id=${user_id}`)
    .then(res => res.json())
    .then(data => {
        const mobile_no = document.getElementById("mobile_no")
        const birth_date = document.getElementById("birth_date")
        
        // console.log(data[0])
        mobile_no.value = data[0].mobile_no
        birth_date.value = data[0].birth_date
        
    })

    // teacher image display 
    fetch("http://127.0.0.1:8000/user/image/8")
    .then(res => res.json())
    .then(data => {

        const user_image = document.getElementById("user-image")
        user_image.src = data.image
        const date = data.date
        const formated_date = new Date(date).toLocaleString()
        console.log(formated_date)
    })
}

const updateUserInfo = (event) =>{
    event.preventDefault()

    // getting user model data
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

    //Fetching user data
    fetch(`https://learn-match-api.onrender.com/user/data/${user_id}`,{
    // fetch(`http://127.0.0.1:8000/user/list/?user_id=8`,{
        method : "PUT",
        headers : {"content-type":"application/json"},
        body : JSON.stringify(info)
        
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))

    //getting teacher data
    let birth_date = document.getElementById("birth_date").value
    const mobile_no = document.getElementById("mobile_no").value
    // const user_image = document.getElementById("user-image")
    const image = document.getElementById("image")
    let imageFIle = image.files[0]
    if (!birth_date){
        birth_date = null
    }
    
    // creating inputted teacher data object
    const formData = new FormData()
    // formData.append("image",imageFIle)
    formData.append("birth_date",birth_date)
    formData.append("mobile_no",mobile_no)
    formData.append("education","SSC")
    formData.append("user",8)

    //fetching teacher data
    // fetch(`https://learn-match-api.onrender.com/user/list/?user_id=${user_id}`,{
    fetch(`http://127.0.0.1:8000/user/list/?user_id=8`,{
        method:"PUT",
        body : formData
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        window.location.reload()
    })
    .catch(err => console.log(err))
}

const changeImage = (event)=>{
    event.preventDefault()
    const user_id = localStorage.getItem("user_id")
    const teacher_id = localStorage.getItem("teacher_id")
    let inputfield = document.getElementById("image")
    if (inputfield){
        const formdata = new FormData()
        formdata.append("image", inputfield.files[0])
        formdata.append("user",user_id ),
        formdata.append("teacher",teacher_id )
        fetch(`http://127.0.0.1:8000/user/image/8`,{
            method:"PUT",
            body:formdata
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
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