const loadTuition = (search) => {
  document.getElementById("tuition-container").innerHTML = "";
  // fetch(`https://learn-match-api.onrender.com/tuition/?search=${search ? search :""}`)
  fetch(`http://127.0.0.1:8000/tuition/?search=${search ? search : ""}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        document.getElementById("tuition-no").innerText = `${data.length} `;
        displayTuition(data);
      } else {
        document.getElementById("tuition-container").innerHTML = "";
      }
    })
    // jodi error ashe tahole eita korbe
    .catch((err) => console.log(err));
};

const loadTuition_by_filter = (search) => {
  document.getElementById("tuition-container").innerHTML = "";
  // fetch(`https://learn-match-api.onrender.com/tuition/?search=${search ? search :""}`)
  fetch(`http://127.0.0.1:8000/tuition/?search=${search ? search : ""}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length > 0) {
        document.getElementById(
          "tuition-no"
        ).innerText = `${data.results.length}`;

        displayTuition(data?.results);
      } else {
        document.getElementById("tuition-container").innerHTML = "";
      }
    })
    // jodi error ashe tahole eita korbe
    .catch((err) => console.log(err));
};

const displayTuition = (tuitions) => {
  tuitions.forEach((tuition) => {
    const parent = document.getElementById("tuition-container");
    const div = document.createElement("div");
    div.classList.add("mt-5");

    div.innerHTML = `
        <div class="card bg-white shadow-xl">
            <div class="card-body ">
            <div class="flex ">
              <h2 class="text-2xl font-bold">${tuition.grade}</h2>
              <div class="flex ml-auto">
              <h2 class="text-lg ">ID : ${tuition.id}</h2>
              </div>
              </div>
              <h2 class="my-4"> <i class="fa-solid fa-location-dot"></i> ${tuition.location}</h2>
              <h2 class=""> <i class="fa-solid fa-globe"></i> ${tuition.tuition_type}</h2>
              <h2 class=""> <i class="fa-solid fa-dollar-sign"></i> ${tuition.salary}</h2>
              
              <h2 class="">Address : ${tuition.address}</h2>
              <h2 class="card-title"> <i class="fa-solid fa-calendar-days"></i> Days : ${tuition.day_perweek}</h2>
              <a class="btn btn-neutral mt-4" href="tuition_details.html?tuition_id=${tuition.id}" target="_blank"> Details </a>
            </div>
          </div>
        `;
    parent.appendChild(div);
  });
};

const handleSearch = () => {
  const value = document.getElementById("search").value;
  loadTuition(value);
};

loadTuition();
