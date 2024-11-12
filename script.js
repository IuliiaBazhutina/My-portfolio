
// clicking next buttons pass their container names to function checkButton

project1Btn.addEventListener('click', () => { checkButton('.container1') });
project2Btn.addEventListener('click', () => { checkButton('.container2') });
project3Btn.addEventListener('click', () => { checkButton('.container3') });
project4Btn.addEventListener('click', () => { checkButton('.container4') });



// call showDescription or hideDescription depending on button label

function checkButton(containerName) {

    // get container by classname
    const container = document.querySelector(containerName);

    // get button from the container
    const btn = container.querySelector('button');

    // check button label and call  showDescription or hideDescription
    if (btn.innerHTML === "Show details") {
        showDescription(containerName);
    }
    else { hideDescription(containerName) }
};



// shows project description, hide picture, renew button label

function showDescription(containerName) {

    // get container by classname
    const container = document.querySelector(containerName);

    // get height of div container
    const divHeight = container.clientHeight;

    // hide the picture
    const img = container.querySelector('img');
    img.style.display = "none";

    // assign height for the container
    container.style.height = `${divHeight}px`;

    // show the description
    const text = container.querySelector('p');
    text.style.display = "block";

    // change button label
    const btn = container.querySelector('button');
    btn.innerHTML = "Hide details";
};



// hides project description, shows picture, renew button label

function hideDescription(containerName) {

    const container = document.querySelector(containerName);

    // show the picture
    const img = container.querySelector('img');
    img.style.display = "block";

    // hide the description
    const text = container.querySelector('p');
    text.style.display = "none";

    // change button label
    const btn = container.querySelector('button');
    btn.innerHTML = "Show details";
};
