let now = new Date();
// let now = new Date('August 19, 1975 23:15:30 GMT-3:00');
//^^ use this to test nightMode

let hours = now.getHours();
//select the body that has the background fill in it

let body = $(".body");
let contactBtn = $(".contact");
let landingBlurb = $(".landingBlurb");
let landingBool = 1;
let infoBlurb = $(".infoBlurb");
let infoBool = 0;
let tempTag = document.querySelector(".temp")
const url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=81601,us&appid=3a404b80d0e33ee5a99bbcf17f1ad109";
  //need to find an API that serves HTTP for this url to work


if (hours >= 19)
  {
    console.log("nighttime!");
    body.addClass("nightMode");
    //change the animation style name from bgDay to bgNight
  }
else
  {
    console.log("daytime!");
    body.addClass("dayMode");
    //reverse
  }

// ^^^^^ this code triggers night versus day mode, different color palettes are pulled for the fade, depending on the user's local time

contactBtn.click(function()
  {
    if (landingBool == 1 || infoBool == 0)
      {
        landingBlurb.removeClass("isClicked").addClass("notClicked");
        landingBool = 0;
        infoBlurb.removeClass("notClicked").addClass("isClicked");
        infoBool = 1;
      }
    else
      {
        infoBlurb.removeClass("isClicked").addClass("notClicked");
        infoBool = 0;
        landingBlurb.removeClass("notClicked").addClass("isClicked");
        landingBool = 1;
      }

  });

/*  ^^^^^^^^^^^^^^^^
- create an event listener that waits for clicks on the contactBtn **
- upon click, determine whether the landingBlurb as a class of 'isClicked'
- if it does, remove 'isClicked' and add 'notClicked'
- do the reverse for the infoBlurb
*/


const checkTemp = function() {
    console.log("checktemp ran")
    fetch(url)
      .then(response => response.json())
        .then(data => {
          console.log(data.main.temp)
          realTemp = data.main.temp
          realTemp = Math.round(1.8 * (realTemp - 273) + 32)
            //convert kelvin data to farenheight
          tempTag.innerHTML = realTemp.toString()
    })
  }

checkTemp();

// make a function that checks the temperature and updates to the html
