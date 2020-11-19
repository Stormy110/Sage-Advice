// Import Modules
import ajax from "/modules/ajax.js";


// API's

// Body - Chuck Norris

const chuck = "https://api.chucknorris.io/jokes/random";

// Mind - Advice slip
const adslip = "https://api.adviceslip.com/advice";

// Soul - Dog Pictures
const dogPics = "https://random.dog/woof.json";


// API Call for Body page with Chuck Norris jokes
ajax(chuck, (data) => {;

  //parses the data into an array of objects so we can use the data
  let info = JSON.parse(data)

  //assigning variables to DOM elements in the body page
  let bodyMain = document.querySelector('#body-main')
  let bodyHeader = document.querySelector('#body-header')
  let bodyImg = document.querySelector('#body-img')
  let bodyP = document.querySelector('#body-p')
  let returnButton = document.querySelector('#return-button')
 
  // assigning the random chuck norris joke to the body p
  bodyP.innerText = info.value

  // assigning chuck norris image to the image 
  bodyImg.src = 'https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F16176508-3cd0-4249-ae19-4785290e507d_640x427.jpeg'
  
  // appending all the elements to the main div on the body page
  bodyMain.append(bodyHeader,bodyImg, bodyP,returnButton)
  
  //removes the top header after 2 seconds
  changeBody()
})

// defines the function changeBody
function changeBody() {
  setInterval(function() {
      document.querySelector("#body-top-head").remove()
  }, 2400);
}


