// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitbutton = document.querySelector('#submit-button');
submitbutton.addEventListener('click', function(e){
    e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value; 

    if(emailValue.includes('@')) {
        alert('thank you for entering a valid email and your message');
    } else {
        alert('oh no. That does not look like a valid email address. Please try again. ');
    }
})

// attaching 'click listeners'
// getting user entered values
// javascript validations

 