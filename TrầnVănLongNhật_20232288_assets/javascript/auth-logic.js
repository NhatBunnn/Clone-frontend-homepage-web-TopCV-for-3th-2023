
var accounts = []

var formNoticeText = document.querySelectorAll('.js-formNotice-text');
var formNoticeBox = document.querySelectorAll('.js-formNotice-box');
var formNoticeUserName = document.querySelectorAll('.js-formOutline-userName');
var formNoticeUserEmail = document.querySelectorAll('.js-formOutline-email');
var formNoticeUserPassword = document.querySelectorAll('.js-formOutline-passWord');
var formNoticeUserPasswordNew = document.querySelectorAll('.js-formOutline-passWordNew');
var formSuccessText = document.querySelectorAll('.js-auth-ss-title')


function resetAuthFormNotice(){
    for (var i = 0; i < formNoticeBox.length; i++) {
        formNoticeBox[i].classList.remove('open-block')
    }
    for (var i = 0; i < formNoticeUserName.length; i++) {
        formNoticeUserName[i].classList.remove('form-notice-outline')
    }
    for (var i = 0; i < formNoticeUserEmail.length; i++) {
        formNoticeUserEmail[i].classList.remove('form-notice-outline');
    }
    for (var i = 0; i < formNoticeUserPassword.length; i++) {
        formNoticeUserPassword[i].classList.remove('form-notice-outline');
    }
    for (var i = 0; i < formNoticeUserPasswordNew.length; i++) {
        formNoticeUserPasswordNew[i].classList.remove('form-notice-outline');
    }
}

// Tạo tk
function register() {
    var userName = document.querySelector('#register-userName').value;
    var passWord = document.querySelector('#register-passWord').value;
    var confirmPassword = document.querySelector('#register-confirmPassword').value;
    var email = document.querySelector('#register-email').value;
    var checkBox = document.querySelector('#checkBox');

    resetAuthFormNotice()   

    for(var i=0;i<accounts.length;i++){
        if(accounts[i].userName === userName){
            for (var i = 0; i < formNoticeText.length; i++) {
                formNoticeText[i].innerHTML = 'Tên người dùng đã tồn tại'
            }
            for (var i = 0; i < formNoticeBox.length; i++) {
                formNoticeBox[i].classList.add('open-block')
            }
            for (var i = 0; i < formNoticeUserPassword.length; i++) {
                formNoticeUserName[i].classList.add('form-notice-outline')
            }
            return;
        }
    }

    for(var i=0;i<accounts.length;i++){
        if(accounts[i].email === email){
            for (var i = 0; i < formNoticeText.length; i++) {
                formNoticeText[i].innerHTML = 'Email đã tồn tại'
            }
            for (var i = 0; i < formNoticeBox.length; i++) {
                formNoticeBox[i].classList.add('open-block')
            }
            for (var i = 0; i < formNoticeUserPassword.length; i++) {
                formNoticeUserEmail[i].classList.add('form-notice-outline');
            }
            return;
        }
    }

    if(passWord !== confirmPassword){
        for (var i = 0; i < formNoticeText.length; i++) {
            formNoticeText[i].innerHTML = 'Mật khẩu không trùng khớp'
        }
        for (var i = 0; i < formNoticeBox.length; i++) {
            formNoticeBox[i].classList.add('open-block')
        }
        for (var i = 0; i < formNoticeUserPassword.length; i++) {
            formNoticeUserPassword[i].classList.add('form-notice-outline');
        }
        return;
    }

    if(!checkBox.checked){
        for (var i = 0; i < formNoticeText.length; i++) {
            formNoticeText[i].innerHTML = 'Bạn chưa nhấp vào check box'
        }
        for (var i = 0; i < formNoticeBox.length; i++) {
            formNoticeBox[i].classList.add('open-block')
        }
        return;
    }

    var account = {
        userName: userName,
        email: email,
        passWord: passWord,
        confirmPassword: confirmPassword
    };

    accounts.push(account);

    // reset

    for (var i = 0; i < formSuccessText.length; i++) {
        formSuccessText[i].innerHTML = 'Đăng ký thành công'
    }
    authSuccessShow()
    modalRegAuth.classList.remove('open-flex')
    resetInputAuth()
    resetAuthFormNotice()
}


//  đn tk

function login() {
    var email = document.querySelector('#login-email').value;
    var passWord = document.querySelector('#login-passWord').value;

    resetAuthFormNotice()   

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email){
            if(accounts[i].passWord === passWord){
                modalLoginAuth.classList.remove('open-flex')
                resetInputAuth()
                resetAuthFormNotice()   
                for (var i = 0; i < formSuccessText.length; i++) {
                    formSuccessText[i].innerHTML = 'Đăng nhập thành công'
                }
                authSuccessShow()
            }else{
                for (var i = 0; i < formNoticeText.length; i++) {
                    formNoticeText[i].innerHTML = 'Sai mật khẩu'
                }
                for (var i = 0; i < formNoticeBox.length; i++) {
                    formNoticeBox[i].classList.add('open-block')
                }
                for (var i = 0; i < formNoticeUserPassword.length; i++) {
                    formNoticeUserPassword[i].classList.add('form-notice-outline');
                }
            }
            return
        } 
    }

    for (var i = 0; i < formNoticeText.length; i++) {
        formNoticeText[i].innerHTML = 'Tài khoản không tồn tại'
    }
    for (var i = 0; i < formNoticeBox.length; i++) {
        formNoticeBox[i].classList.add('open-block')
    }
    for (var i = 0; i < formNoticeUserPassword.length; i++) {
        formNoticeUserEmail[i].classList.add('form-notice-outline');
    }
    
}

// đổi mk

function changePass(){
    var email = document.querySelector('#changePass-email').value;
    var passWordOld = document.querySelector('#changePass-passWord-old').value;
    var passWordNew = document.querySelector('#changePass-passWord-new').value;
    var passWordConfirmNew = document.querySelector('#changePass-conFirm-passWord-new').value;

    resetAuthFormNotice()

    for(var i=0;i<accounts.length;i++){
        if(accounts[i].email === email){
            if(accounts[i].passWord === passWordOld){
                if(passWordOld === passWordNew){
                    for (var i = 0; i < formNoticeText.length; i++) {
                        formNoticeText[i].innerHTML = 'Mật khẩu mới trùng với mật khẩu cũ'
                    }
                    for (var i = 0; i < formNoticeBox.length; i++) {
                        formNoticeBox[i].classList.add('open-block')
                    }
                    for (var i = 0; i < formNoticeUserPasswordNew.length; i++) {
                        formNoticeUserPasswordNew[i].classList.add('form-notice-outline');
                    }
                }else{
                    if(passWordNew !== passWordConfirmNew){
                        for (var i = 0; i < formNoticeText.length; i++) {
                            formNoticeText[i].innerHTML = 'Mật khẩu không giống nhau'
                        }
                        for (var i = 0; i < formNoticeBox.length; i++) {
                            formNoticeBox[i].classList.add('open-block')
                        }
                        for (var i = 0; i < formNoticeUserPasswordNew.length; i++) {
                            formNoticeUserPasswordNew[i].classList.add('form-notice-outline');
                        }
                    }else{
                        accounts[i].passWord = passWordNew
                        for (var i = 0; i < formSuccessText.length; i++) {
                            formSuccessText[i].innerHTML = 'Đổi mật khẩu thành công'
                        }
                        authSuccessShow()
                        resetInputAuth()
                        resetAuthFormNotice() 
                        modalChangePassAuth.classList.remove('open-flex')
                        modal.classList.remove('open-flex')
                    }
                }
            }else{
                for (var i = 0; i < formNoticeText.length; i++) {
                    formNoticeText[i].innerHTML = 'Sai mật khẩu'
                }
                for (var i = 0; i < formNoticeBox.length; i++) {
                    formNoticeBox[i].classList.add('open-block')
                }
                for (var i = 0; i < formNoticeUserPassword.length; i++) {
                    formNoticeUserPassword[i].classList.add('form-notice-outline');
                }
            }
            return
        }
    }
    for (var i = 0; i < formNoticeText.length; i++) {
        formNoticeText[i].innerHTML = 'Tài khoản không tồn tại'
    }
    for (var i = 0; i < formNoticeBox.length; i++) {
        formNoticeBox[i].classList.add('open-block')
    }
    for (var i = 0; i < formNoticeUserPassword.length; i++) {
        formNoticeUserEmail[i].classList.add('form-notice-outline')
    }
}


// reset input
function resetInputAuth(){
    var resetInput = document.querySelectorAll('.js-resetInput')

    for (var i = 0; i < resetInput.length; i++) {
        resetInput[i].value = ''
        resetInput[i].checked = false
    }
    resetAuthFormNotice() 
}








    

