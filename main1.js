// Import Modules
import ajax from "/modules/ajax.js";
import { makeElements, getElements } from "/modules/elements.js";
import change from "/modules/change.js"

// API's
// Body - Crosfit Gym's
//const apiKey = "Enter Here";
//const gyms = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
// Mind - Chuck Norris

const chuck = "https://api.chucknorris.io/jokes/random";

// Mind - Advice slip
const adslip = "https://api.adviceslip.com/advice";

// Soul - Dog Pictures
const dogPics = "https://random.dog/woof.json";

//ajax(gyms, (data) => {
 // console.log(data);
//});

ajax(chuck, (data) => {;
  let info = JSON.parse(data)
  console.log(info)
  let bodyMain = document.querySelector('#body-main')
  let bodyHeader = document.querySelector('#body-header')
  let bodyImg = document.querySelector('#body-img')
  let bodyP = document.querySelector('#body-p')
  let returnButton = document.querySelector('#return-button')
  bodyP.innerText = info.value
  bodyImg.src = 'https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F16176508-3cd0-4249-ae19-4785290e507d_640x427.jpeg'
  bodyMain.append(bodyHeader,bodyImg, bodyP,returnButton)
})



ajax(adslip, (data) => {
  let r = JSON.parse(data);
  console.log(r);
});

ajax(dogPics, (data) => {
  console.log(data);
})

