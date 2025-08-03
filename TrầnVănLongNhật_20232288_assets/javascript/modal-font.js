var htmlElement = document.documentElement

var settingReset = document.querySelector('.js-setting-reset')
var fontDefault = document.querySelector('.js-Setting-font-Default')
var fontLodestone = document.querySelector('.js-Setting-font-Lodestone')
var fontSoupofJustice = document.querySelector('.js-Setting-font-SoupofJustice')
var fontSummerShow = document.querySelector('.js-Setting-font-SummerShow')
var fontAlluring = document.querySelector('.js-Setting-font-Alluring')

function resetAll() {
    htmlElement.style.removeProperty('--font-family', 'Lexend-Medium')
}

settingReset.addEventListener('click', resetAll)
fontDefault.addEventListener('click', resetAll)

fontLodestone.addEventListener('click', function(){
    htmlElement.style.setProperty('--font-family', 'Lodestone')
})

fontSoupofJustice.addEventListener('click', function(){
    htmlElement.style.setProperty('--font-family', 'SoupofJustice')
})

fontSummerShow.addEventListener('click', function(){
    htmlElement.style.setProperty('--font-family', 'SummerShow')
})

fontAlluring.addEventListener('click', function(){
    htmlElement.style.setProperty('--font-family', 'Alluring')
})