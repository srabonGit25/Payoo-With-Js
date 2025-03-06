document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();  // <---------- problem for beginners to understand this

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    // validation example: without server
    if( phoneNumber === '5' && pinNumber === '1234'){
        console.log('logged in')
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong Phone Number or Pin');
    }
})