// clicking Dark_mode button changes the page mode
darkModeLink.addEventListener('click',function(){document.body.classList.toggle('dark-mode');if(darkModeLink.innerHTML==='Light Mode'){darkModeLink.innerHTML='Dark Mode'}else{darkModeLink.innerHTML='Light Mode'}});
// if filter button is clicked the function iterates all the projects and displays projects of the chosen category
const o=document.querySelectorAll('.filter-btn');const n=document.querySelectorAll('.project');o.forEach(o=>{o.addEventListener('click',function(){const e=this.getAttribute('data-category');n.forEach(o=>{if(o.getAttribute('data-category')===e||e==='all the projects'){o.style.display='block'}else{o.style.display='none'}})})});
// if one of project buttons is clicked the function calls a function checkButton with a project as a paremeter 
n.forEach(o=>{o.addEventListener('click',function(){e(o)})});
// call showDescription or hideDescription depending on button label
function e(o){
// get button from the container
const e=o.querySelector('button');
// check button label and call  showDescription or hideDescription
if(e.innerHTML==="Show details"){t(o)}else{c(o)}}
// shows project description, hide picture, renew button label
function t(o){
// get height of the container divImg
const e=o.querySelector('.divImg');const n=e.clientHeight;
// hide the picture
const t=o.querySelector('img');t.style.display="none";
// show the description
const c=o.querySelector('p');c.style.display="block";
// show the link to the live page
const i=o.querySelector('a');i.style.display="block";
// make scroll visible
e.style.overflowY="scroll";
// assign height for the container
e.style.height=`${n}px`;
// change button label
const s=o.querySelector('button');s.innerHTML="Hide details"}
// hides project description, shows picture, renew button label
function c(o){
// const container = document.querySelector(containerName);
// show the picture
const e=o.querySelector('img');e.style.display="block";
// hide the description
const n=o.querySelector('p');n.style.display="none";
// hide the link to the live page
const t=o.querySelector('a');t.style.display="none";
// hide scroll
const c=o.querySelector('.divImg');c.style.overflow="hidden";
// change button label
const i=o.querySelector('button');i.innerHTML="Show details"}
// clicking submit button calls a function checkValidation
submitBtn.addEventListener('click',function(o){
// cancel default behaviour of the form   
o.preventDefault();i()});
// check if name and email fields are empty
// if all the required fields are filled call emailValidation 
function i(){
// get elements by ID
const o=document.getElementById('name');const e=document.getElementById('email');const n=document.getElementById('nameError');const t=document.getElementById('emailError');
// clear Error signs
n.innerHTML="";t.innerHTML="";let c=true;
//check if name field is empty
if(o.value.trim()===""){n.innerHTML="Please fill out the name";c=false}
//check if email field is empty
if(e.value.trim()===""){t.innerHTML="Please fill out the email";c=false}
// if name and email fields are filled in call validateEmail
if(c){const i=e.value.trim();s(i)}}
// validate email using regex pattern
function s(o){
// email pattern
const e=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// test email for the pattern
const n=e.test(o);let t=true;
// If email failed the validation show error, otherwise call saveInfo
if(!n){emailError.innerHTML="Please check the email"}else{a()}}
// get information from the form and display it
function a(){
// get elements' values
const o=document.getElementById('name').value;const e=document.getElementById('email').value;const n=document.getElementById('message').value;const t=document.getElementById('checkbox');console.log("Name: ",o);console.log("Email: ",e);console.log("Message: ",n);if(t.checked){l()}
// reset the form
const c=document.getElementById('form');c.reset()}
// gets user's location
function l(){
// check if geolocation is supported
if(navigator.geolocation){
// get user's current position
navigator.geolocation.getCurrentPosition(r,u)}else{
// display an error if geolocation is not supported
console.error("Error: Geolocation is not supported by this browser")}}
// displays the user's position
function r(o){
// Display the latitude and longitude
console.log(`Location: Latitude: ${o.coords.latitude}, Longitude: ${o.coords.longitude}`)}
// handles errors
function u(o){let e="";
// handle different error codes
switch(o.code){case o.PERMISSION_DENIED:e="User denied the request for Geolocation.";break;case o.POSITION_UNAVAILABLE:e="Location information is unavailable.";break;case o.TIMEOUT:e="The request to get user location timed out.";break;case o.UNKNOWN_ERROR:e="An unknown error occurred.";break}console.error("Error: ",e)}