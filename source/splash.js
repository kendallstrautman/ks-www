const now = new Date();
const hours = now.getHours();
const bodyElm = $("body");
const contactBtn = $(".contact");
const landingPar = $(".landingBlurb");
let isClicked;
const contactPar = $(".contactBlurb");
const infoTags = $("p");
const tempTag = document.querySelector(".temp");
const url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=81601,us&appid=3a404b80d0e33ee5a99bbcf17f1ad109";

    // check for users local time, apply appropriate day/night mode
if (hours >= 19 || hours <= 6){
      bodyElm.addClass("nightMode");
  } else {
      bodyElm.addClass("dayMode");
  }

    //initiate loading animation
setTimeout( function () {
    landingPar.addClass('transform');
    contactPar.addClass('transform');
    infoTags.addClass('active');
  }, 400);

    //upon click of the contactBtn, alter which blurb is showing


contactBtn.click(function() {
    if (isClicked) {
          contactPar.removeClass("isClicked").addClass("notClicked");
          landingPar.removeClass("notClicked").addClass("isClicked");
          isClicked = false;
      } else {
          landingPar.removeClass("isClicked").addClass("notClicked");
          contactPar.removeClass("notClicked").addClass("isClicked");
          isClicked = true;
      }
    });

      //fetch temp from openweathermap, update the dom
const checkTemp = function() {
    fetch(url)
      .then(response => response.json())
        .then(data => {
            realTemp = data.main.temp;
                //convert kelvin data to farenheight
            realTemp = Math.round(1.8 * (realTemp - 273) + 32).toString();
            tempTag.innerHTML = realTemp;
          })
    };

checkTemp();
