const inp = document.querySelectorAll('input');
const fullName = document.querySelector('.full-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const btnSignUp = document.querySelector('.main-btn');
const filds = document.querySelectorAll('.fild');
let user = new Object;

btnSignUp.addEventListener('click', event => {
    event.preventDefault();
    for(let i = 0;i < filds.length; i++){
        if(!filds[i].value){
            console.log('error')
        }else if(password.value !== confirmPassword.value){
            console.log('error password')
        }else{
            user.name = fullName.value;
            user.email = email.value;
            user.password = email.value;
            console.log(user);
        }
    }
})
