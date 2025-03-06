document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();  // <---------- problem for beginners to understand this

    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})