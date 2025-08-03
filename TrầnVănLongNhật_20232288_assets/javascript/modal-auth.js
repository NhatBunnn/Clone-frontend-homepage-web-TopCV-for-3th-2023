// register
var openRegAuth = document.querySelector('.js-register')
var modalRegAuth = document.querySelector('.js-auth-reg')
var closeModalRegAuth = document.querySelector('.js-auth-reg-close')
// login
var openLoginAuth = document.querySelector('.js-login')
var modalLoginAuth = document.querySelector('.js-auth-login')
var closeModalLoginAuth = document.querySelector('.js-auth-login-close')
// list
var openListAuth = document.querySelector('.js-List')
var modalListAuth = document.querySelector('.js-auth-List')
var closeModalListAuth = document.querySelector('.js-auth-List-close')
// success
var modalSuccessAuth = document.querySelector('.js-auth-Success')
var closeModalSuccessAuth = document.querySelector('.js-auth-Success-close')

// Change pass

var openChangePassAuth = document.querySelector('.js-auth-changePass-open')
var modalChangePassAuth = document.querySelector('.js-auth-changePass')
var closeChangePassAuth = document.querySelector('.js-auth-changePass-close')

// register
openRegAuth.addEventListener('click', function(){
    modalRegAuth.classList.add('open-flex')
})

closeModalRegAuth.addEventListener('click', function(){
    modalRegAuth.classList.remove('open-flex')
})

// login
openLoginAuth.addEventListener('click', function(){
    modalLoginAuth.classList.add('open-flex')
})

closeModalLoginAuth.addEventListener('click', function(){
    modalLoginAuth.classList.remove('open-flex')
})

// list
openListAuth.addEventListener('click', function(){
    modalListAuth.classList.add('open-flex')
})

closeModalListAuth.addEventListener('click', function(){
    modalListAuth.classList.remove('open-flex')
})

// success
function authSuccessShow(){
    modalSuccessAuth.classList.add('open-flex')
}

closeModalSuccessAuth.addEventListener('click', function(){
    modalSuccessAuth.classList.remove('open-flex')

})

// changespassword
openChangePassAuth.addEventListener('click', function(){
    modalChangePassAuth.classList.add('open-flex')
})

closeChangePassAuth.addEventListener('click', function(){
    modalChangePassAuth.classList.remove('open-flex')
})





