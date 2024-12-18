// clicking Dark_mode button changes the page mode

darkModeLink.addEventListener('click', function () {

    document.body.classList.toggle('dark-mode');

    if (darkModeLink.innerHTML === 'Light Mode') {
        darkModeLink.innerHTML = 'Dark Mode'
    } else {
        darkModeLink.innerHTML = 'Light Mode'
    }
})



// if filter button is clicked the function iterates all the projects and displays projects of the chosen category

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (project.getAttribute('data-category') === category || category === 'all the projects') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});




// if one of project buttons is clicked the function calls a function checkButton with a project as a paremeter 

projects.forEach(project => {
    project.addEventListener('click', function () {
        checkButton(project);
    })
})



// call showDescription or hideDescription depending on button label

function checkButton(project) {

    // get button from the container
    const btn = project.querySelector('button');

    // check button label and call  showDescription or hideDescription
    if (btn.innerHTML === "Show details") {
        showDescription(project);
    }
    else { hideDescription(project) }
};



// shows project description, hide picture, renew button label

function showDescription(project) {

    // get height of the container divImg
    const divImg = project.querySelector('.divImg');
    const containerHeight = divImg.clientHeight;

    // hide the picture
    const img = project.querySelector('img');
    img.style.display = "none";

    // show the description
    const text = project.querySelector('p');
    text.style.display = "block";

    // show the link to the live page
    const link = project.querySelector('a');
    link.style.display = "block";

    // make scroll visible
    divImg.style.overflowY = "scroll";

    // assign height for the container
    divImg.style.height = `${containerHeight}px`;

    // change button label
    const btn = project.querySelector('button');
    btn.innerHTML = "Hide details";
};



// hides project description, shows picture, renew button label

function hideDescription(project) {

    // const container = document.querySelector(containerName);

    // show the picture
    const img = project.querySelector('img');
    img.style.display = "block";

    // hide the description
    const text = project.querySelector('p');
    text.style.display = "none";

    // hide the link to the live page
    const link = project.querySelector('a');
    link.style.display = "none";

    // hide scroll
    const divImg = project.querySelector('.divImg');
    divImg.style.overflow = "hidden";

    // change button label
    const btn = project.querySelector('button');
    btn.innerHTML = "Show details";
};



// clicking submit button calls a function checkValidation

submitBtn.addEventListener('click', function (event) {

    // cancel default behaviour of the form   
    event.preventDefault();
    checkValidation();
});



// check if name and email fields are empty
// if all the required fields are filled call emailValidation 

function checkValidation() {

    // get elements by ID
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    // clear Error signs
    nameError.innerHTML = "";
    emailError.innerHTML = "";

    let isvalid = true;

    //check if name field is empty
    if (name.value.trim() === "") {
        nameError.innerHTML = "Please fill out the name";
        isvalid = false;
    }

    //check if email field is empty
    if (email.value.trim() === "") {
        emailError.innerHTML = "Please fill out the email";
        isvalid = false;
    }

    // if name and email fields are filled in call validateEmail
    if (isvalid) {
        const emailTrimmed = email.value.trim();
        validateEmail(emailTrimmed);
    }
}



// validate email using regex pattern

function validateEmail(email) {
    // email pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // test email for the pattern
    const result = emailPattern.test(email);

    let isvalid = true;

    // If email failed the validation show error, otherwise call saveInfo
    if (!result) {
        emailError.innerHTML = "Please check the email";
    }
    else { saveInfo(); }
}



// get information from the form and display it

function saveInfo() {

    // get elements' values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const checkbox = document.getElementById('checkbox');

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    if (checkbox.checked) {
        getLocation();
    }

    // reset the form
    const form = document.getElementById('form');
    form.reset();
}



// gets user's location

function getLocation() {

    // check if geolocation is supported
    if (navigator.geolocation) {

        // get user's current position
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {

        // display an error if geolocation is not supported
        console.error("Error: Geolocation is not supported by this browser");
    }
}



// displays the user's position

function showPosition(position) {

    // Display the latitude and longitude
    console.log(`Location: Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}



// handles errors

function showError(error) {

    let msg = "";

    // handle different error codes
    switch (error.code) {
        case error.PERMISSION_DENIED:
            msg = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            msg = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            msg = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            msg = "An unknown error occurred.";
            break;
    }

    console.error("Error: ", msg);
}