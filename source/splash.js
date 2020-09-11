/*jshint esversion: 6 */

contactBtn = $('.contact')
workBtn = $('.item2')
socialBtn = $('.item3')
workPar = $('.work')
socialPar = $('.social')
landingPar = $('.landingBlurb')
contactPar = $('.contactBlurb')
buttons = [contactBtn, workBtn, socialBtn]
sections = [contactPar, workPar, socialPar, landingPar]
infoTags = $('p')
tempTag = document.querySelector('.temp')
url =
  'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=93514,us&appid=3a404b80d0e33ee5a99bbcf17f1ad109'

//initiate loading animation
setTimeout(function () {
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

const cursor = document.getElementById('cursor')
const cursorTail = document.getElementById('cursor-tail')
let mouseX = 0
let mouseY = 0
let tailX = 0
let tailY = 0

function checkTouchDevice() {
  return 'ontouchstart' in document.documentElement
}

/*------------------custom cursor ------------------------*/

function handleAnimateTail() {
  const speed = 0.15
  const distX = mouseX - tailX
  const distY = mouseY - tailY

  tailX += distX * speed
  tailY += distY * speed

  cursorTail.style.left = tailX + 'px'
  cursorTail.style.top = tailY + 'px'

  requestAnimationFrame(handleAnimateTail)
}

handleAnimateTail()

document.addEventListener('mousemove', (event) => {
  if (!checkTouchDevice()) {
    cursor.style.display = 'inline'
    cursorTail.style.display = 'inline'
    x = event.pageX
    y = event.pageY

    if (
      x <= document.documentElement.clientWidth &&
      y <= document.documentElement.clientHeight
    ) {
      cursor.style.top = y + 'px'
      cursor.style.left = x + 'px'
      mouseX = x + 4
      mouseY = y + 4
      console.log(cursor.style.top)
    }
  } else {
    document.querySelector('body').style.cursor = 'auto'
  }
})

document.addEventListener('mouseleave', () => {
  cursor.style.display = 'none'
  cursorTail.style.display = 'none'
})

document.addEventListener('mouseenter', () => {
  cursor.style.display = 'inline'
  cursorTail.style.display = 'inline'
})
