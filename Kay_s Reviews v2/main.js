// Get modal Element
var modal = document.getElementById('simpleModal');
//Get Modal Button
var modalBtn = document.getElementById('modalBtn');
//Get Close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for a  open click
modalBtn.addEventListener('click', openModal);

// Listen for a close click 
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

//Function to open Modal
function openModal () {
    modal.style.display = 'block';
}

// Function to close Modal
function closeModal () {
    modal.style.display = 'none';
}

// Function to close Modal if outside click
function clickOutside (e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}