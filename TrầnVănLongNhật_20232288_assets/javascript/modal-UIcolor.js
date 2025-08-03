// Lấy thuộc tính
var htmlElement = document.documentElement;
//Dark mode - TEXT
var darkModeSetting = document.querySelector('.js-Setting-DarkMode');
var lightModeSetting = document.querySelector('.js-Setting-LightMode');
var settingReset = document.querySelector('.js-setting-reset')

function resetAll() {
    // UI
    htmlElement.style.removeProperty('--white-UIColor', '#242526');
    htmlElement.style.removeProperty('--lightWhite-UIColor', '#18191A');
    // TEXT
    htmlElement.style.removeProperty('--dark-textColor', '#fff');
}

lightModeSetting.addEventListener('click', resetAll)
settingReset.addEventListener('click', resetAll)

darkModeSetting.addEventListener('click', function(){
    // UI
    htmlElement.style.setProperty('--white-UIColor', '#242526');
    htmlElement.style.setProperty('--lightWhite-UIColor', '#18191A');
    // TEXT
    htmlElement.style.setProperty('--dark-textColor', '#fff');
})
