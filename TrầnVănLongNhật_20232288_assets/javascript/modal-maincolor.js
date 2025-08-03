var htmlElement = document.documentElement

var mainColorRed = document.querySelector('.js-setting-mainColor-red')
var mainColorYellow = document.querySelector('.js-setting-mainColor-yellow')
var mainColorPink = document.querySelector('.js-setting-mainColor-pink')
var mainColorOrange = document.querySelector('.js-setting-mainColor-orange')
var mainColorDefault = document.querySelector('.js-setting-mainColor-default')
var settingReset = document.querySelector('.js-setting-reset')

function resetAll() {
    htmlElement.style.removeProperty('--green-textColor', '#fff')
    htmlElement.style.removeProperty('--green-UIColor', '#b16d00')
    htmlElement.style.removeProperty('--green-UISlider1', '#332912')
    htmlElement.style.removeProperty('--green-UISlider2', '#976d18')
    htmlElement.style.removeProperty('--green-UISliderBox1', 'rgba(60, 50, 19, 0.5)')
    htmlElement.style.removeProperty('--green-UISliderBox2', 'rgba(96, 81, 20, 0.5)')
    htmlElement.style.removeProperty('--green-UIOutLine1', 'rgba(215, 17, 17, 0)')
    htmlElement.style.removeProperty('--green-UIOutLine2', 'rgb(215, 17, 17)')
    htmlElement.style.removeProperty('--green-UI-Hr', 'rgb(202, 2, 2)')
}

settingReset.addEventListener('click', resetAll)
mainColorDefault.addEventListener('click', resetAll)

mainColorRed.addEventListener('click', function(){
    htmlElement.style.setProperty('--green-textColor', '#ca0202')
    htmlElement.style.setProperty('--green-UIColor', '#b10000')
    htmlElement.style.setProperty('--green-UISlider1', '#331212')
    htmlElement.style.setProperty('--green-UISlider2', '#971818')
    htmlElement.style.setProperty('--green-UISliderBox1', 'rgba(60, 19, 19, 0.5)')
    htmlElement.style.setProperty('--green-UISliderBox2', 'rgba(96, 20, 20, 0.5)')
    htmlElement.style.setProperty('--green-UIOutLine1', 'rgba(215, 17, 17, 0)')
    htmlElement.style.setProperty('--green-UIOutLine2', 'rgb(215, 17, 17, 1)')
    htmlElement.style.setProperty('--green-UI-Hr', 'rgb(202, 2, 2)')
})

mainColorYellow.addEventListener('click', function(){
    htmlElement.style.setProperty('--green-textColor', '#c7ca02')
    htmlElement.style.setProperty('--green-UIColor', '#abb100')
    htmlElement.style.setProperty('--green-UISlider1', '#303312')
    htmlElement.style.setProperty('--green-UISlider2', '#8a9718')
    htmlElement.style.setProperty('--green-UISliderBox1', 'rgba(57, 60, 19, 0.5)')
    htmlElement.style.setProperty('--green-UISliderBox2', 'rgba(87, 96, 20, 0.5')
    htmlElement.style.setProperty('--green-UIOutLine1', 'rgba(198, 215, 17, 0)')
    htmlElement.style.setProperty('--green-UIOutLine2', 'rgba(202, 215, 17, 1)')
    htmlElement.style.setProperty('--green-UI-Hr', 'rgb(202, 195, 2)')
})

mainColorPink.addEventListener('click', function(){
    htmlElement.style.setProperty('--green-textColor', '#b602ca')
    htmlElement.style.setProperty('--green-UIColor', '#ab00b1')
    htmlElement.style.setProperty('--green-UISlider1', '#331233')
    htmlElement.style.setProperty('--green-UISlider2', '#971891')
    htmlElement.style.setProperty('--green-UISliderBox1', 'rgba(60, 19, 60, 0.5)')
    htmlElement.style.setProperty('--green-UISliderBox2', 'rgba(93, 20, 96, 0.5)')
    htmlElement.style.setProperty('--green-UIOutLine1', 'rgba(215, 17, 185, 0)')
    htmlElement.style.setProperty('--green-UIOutLine2', 'rgba(208, 17, 215, 1)')
    htmlElement.style.setProperty('--green-UI-Hr', 'rgb(202, 2, 195)')
})

mainColorOrange.addEventListener('click', function(){
    htmlElement.style.setProperty('--green-textColor', '#ca9102')
    htmlElement.style.setProperty('--green-UIColor', '#b16d00')
    htmlElement.style.setProperty('--green-UISlider1', '#332912')
    htmlElement.style.setProperty('--green-UISlider2', '#976d18')
    htmlElement.style.setProperty('--green-UISliderBox1', 'rgba(60, 50, 19, 0.5)')
    htmlElement.style.setProperty('--green-UISliderBox2', 'rgba(96, 81, 20, 0.5)')
    htmlElement.style.setProperty('--green-UIOutLine1', 'rgba(215, 96, 17, 0)')
    htmlElement.style.setProperty('--green-UIOutLine2', 'rgb(215, 109, 17)')
    htmlElement.style.setProperty('--green-UI-Hr', 'rgb(202, 109, 2)')
})
