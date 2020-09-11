/*jshint esversion: 6 */

// const now = new Date()
// hours = now.getHours()
bodyElm = $('body')
contactBtn = $('.contact')
workBtn = $('.item2')
socialBtn = $('.item3')
workPar = $('.work')
socialPar = $('.social')
landingPar = $('.landingBlurb')
contactPar = $('.contactBlurb')
// contactPar = $(".blurb");
buttons = [contactBtn, workBtn, socialBtn]
sections = [contactPar, workPar, socialPar, landingPar]
infoTags = $('p')
tempTag = document.querySelector('.temp')
url =
  'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=93514,us&appid=3a404b80d0e33ee5a99bbcf17f1ad109'

// check for users local time, apply appropriate day/night mode
// if (hours >= 19 || hours <= 6) {
//   bodyElm.addClass("nightMode");
// } else {
//   bodyElm.addClass("dayMode");
// }

//initiate loading animation
setTimeout(function () {
  // landingPar.addClass("transform");
  // contactPar.addClass("transform");
  infoTags.addClass('active')
}, 400)

//fetch temp from openweathermap, update the dom
const checkTemp = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      realTemp = data.main.temp
      //convert kelvin data to farenheight
      realTemp = Math.round(1.8 * (realTemp - 273) + 32).toString()
      tempTag.innerHTML = realTemp
    })
}

checkTemp()

//upon click of the contactBtn, alter which blurb is showing
buttons.map((item) => {
  return item.click((e) => {
    let currentPar
    if (e.target.innerHTML == 'contact') {
      currentPar = contactPar
    } else if (e.target.innerHTML == 'work') {
      currentPar = workPar
    } else if (e.target.innerHTML == 'social') {
      currentPar = socialPar
    }
    currentPar.removeClass('notClicked').addClass('isClicked')
    if (!(currentPar == contactPar)) {
      $('.blurb').addClass('notClicked')
    } else {
      $('.blurb').removeClass('notClicked')
    }
    sections.map((section) => {
      if (!(section == currentPar)) {
        section.removeClass('isClicked').addClass('notClicked')
      }
    })
  })
})

if (window.innerWidth > 460) {
  document.querySelector(
    '.landingBlurb'
  ).innerHTML = `web development, <br> product strategy and <br> technical writing`
}
