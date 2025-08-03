// Mở modal
const settingBtn = document.querySelector('.js-setting')
const modal = document.querySelector('.js-UIsetting')
// Tắt modal
const modalClose = document.querySelector('.js-UIsetting-close')

function showModal(){
    modal.classList.add('open-flex')
}

function closeModal(){
    modal.classList.remove('open-flex')
}

settingBtn.addEventListener('click', showModal)
modalClose.addEventListener('click', closeModal)

