const getParams = () => {
  const param = new URLSearchParams(window.location.search).get("tuition_id");
  fetch(`https://learn-match-api.onrender.com/tuition/?tuition_id=${param}`)
    .then((res) => res.json())
    .then((data) => displayTuition(data[0]));
};



const displayTuition = (tuition) => {
  const div = document.getElementById("tuition-detials-container");
  div.innerHTML = `
  <main class="bg-gray-200 px-4 lg:px-24 py-4 lg:py-16 flex flex-col lg:flex-row gap-6 lg:gap-8">
        <section>

            <!-- stu info -->
            <section class="bg-white p-10 rounded-lg">
                <h1 class="text-2xl font-semibold text-blueish">Student Information</h1>

                <div class="mt-6 grid lg:grid-cols-3">

                    <!-- category -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-layer-group text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Category</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.category}</p>

                        </div>
                    </div>

                    <!-- course -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-brands fa-discourse text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Courses</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.grade}</p>

                        </div>
                    </div>

                    <!-- Subject -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-book text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Subject</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.subject}</p>

                        </div>
                    </div>

                    <!-- Days & week -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-calendar-days text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Days and Week</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.day_perweek}</p>

                        </div>
                    </div>

                    <!-- tutoring time -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-regular fa-clock text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Tutoring Time</h1>
                            <p class="py-1 text-gray-500 text-lg">4:00</p>

                        </div>
                    </div>

                    <!-- tutoring duration -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-hourglass-start text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Tutoring Duration</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.tuition_duration}</p>

                        </div>
                    </div>

                    <!-- Tutoring Method -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-gear text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Tutoring Method</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.tuition_type}</p>

                        </div>
                    </div>

                    <!-- Maximum Salary -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-money-bills text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Maximum Salary</h1>
                            <p class="py-1 text-gray-500 text-lg">BDT ${tuition.salary} TK</p>

                        </div>
                    </div>

                    <!-- Number of Students -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-user-graduate text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Number of Students</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.no_of_student}</p>

                        </div>
                    </div>

                    <!-- Student Gender -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-venus-mars text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Student Gender</h1>
                            <p class="py-1 text-gray-500 text-lg">Female</p>

                        </div>
                    </div>


                </div>
            </section>

            <!-- tutor req -->
            <section class="bg-white p-10 rounded-lg mt-6">
                <h1 class="text-2xl font-semibold text-blueish">Tutor Requirements</h1>

                <div class="mt-6 grid lg:grid-cols-2">

                    <!-- university -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-graduation-cap text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">University</h1>
                            <p class="py-1 text-gray-500 text-lg">Jagannath University (JNU)</p>

                        </div>
                    </div>

                    <!-- department -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-bookmark text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Department</h1>
                            <p class="py-1 text-gray-500 text-lg">Applied Mathematics</p>

                        </div>
                    </div>

                    <!-- tutor gender -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-venus-mars text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Tutor Gender</h1>
                            <p class="py-1 text-gray-500 text-lg">Female</p>

                        </div>
                    </div>

                    <!-- hiring -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-regular fa-calendar-days text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Hiring From</h1>
                            <p class="py-1 text-gray-500 text-lg">30 mar 2024</p>

                        </div>
                    </div>


                </div>

                <div class="flex items-center gap-4 mt-8">
                    <i class="fa-regular fa-file-lines text-3xl text-blueish"></i>
                    <div>
                        <h1 class="text-xl font-bold text-gray-600">Other Requirement</h1>
                        <p class="py-1 text-gray-500 text-lg">" Experienced at English Medium " tutors are requested to
                            apply.</p>

                    </div>
                </div>
            </section>

            <!-- stu contact -->
            <section class="bg-white p-10 rounded-lg mt-6">
                <h1 class="text-2xl font-semibold text-blueish">Contact Information</h1>

                <div class="mt-6 grid lg:grid-cols-2">

                    <!-- country -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-globe text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Country</h1>
                            <p class="py-1 text-gray-500 text-lg">Bangladesh</p>

                        </div>
                    </div>

                    <!-- City -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-city text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">City</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.location}</p>

                        </div>
                    </div>

                    <!-- location -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-solid fa-location-dot text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Location</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.location}</p>

                        </div>
                    </div>

                    <!-- address -->

                    <div class="flex items-center gap-4 mt-8">
                        <i class="fa-regular fa-address-card text-3xl text-blueish"></i>
                        <div>
                            <h1 class="text-xl font-bold text-gray-600">Full Address</h1>
                            <p class="py-1 text-gray-500 text-lg">${tuition.address}</p>

                        </div>
                    </div>
                </div>
            </section>

        </section>

        <div class="flex flex-col bg-white rounded-lg px-16 py-10 gap-4 h-80 lg:w-1/4">
            <a href="" class="btn bg-black text-white">Get Direction</a>
            <a href="" class="btn">Location</a>
            <a href="" class="btn">Share</a>
            <a href="" id='apply' onclick="handleApplication(event)" class="btn bg-blueish text-white">Apply Now</a>
        </div>
    </main>
  `;
  const apply = document.getElementById("apply")
  const token = localStorage.getItem("token") 
  const user_id = localStorage.getItem("user_id") 
  if (!token && !user_id){
    console.log("inside if")
    apply.setAttribute('onclick',"showalert(event)") 
  }
};
const showalert = (event)=>{
    event.preventDefault()
    alert("Log In First!")
}
const handleApplication = (event) =>{
  event.preventDefault()
  const tuition_id = new URLSearchParams(window.location.search).get("tuition_id")
  console.log("inside hangle application")
  fetch("https://learn-match-api.onrender.com/application/",{
    method : "POST",
    headers : {"content-type":"application/json"},
    body:JSON.stringify({
      "confirm": false,
      "tuition": tuition_id,
      "teacher": localStorage.getItem("teacher_id")
    })
  })
  .then((res) => res.json())
  .then(data => console.log(data))
  .then(err => console.log(err))
}
getParams();

