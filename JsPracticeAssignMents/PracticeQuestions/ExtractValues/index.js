const btnRef = document.querySelector('button');

btnRef.addEventListener('click',function(event){
    event.preventDefault();
    const userRef = document.getElementById('username');
    const passwordRef = document.getElementById('password');
    
    console.log(userRef.value, passwordRef.value);
});




