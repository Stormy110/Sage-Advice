import ajax from "./ajax.js"


// Mind - Advice slip
const adslip = "https://api.adviceslip.com/advice";


// API call for the random advice slip
ajax(adslip, (data) => {

    //parses the data into an array of objects that we can use
    let r = JSON.parse(data);

    //assigns variables to the DOM elements
    let mindP = document.querySelector("#mind-p")
    
    //assigns the random advice to the p
    mindP.innerText = `${r.slip.advice}`
    
    //removes the top head after 2 seconds
    changeMind()
  });


  //defines the function to remove the top head in mind
  function changeMind() {
    setInterval(function() {
        document.querySelector("#mind-top-head").remove()
    }, 2400);
  }
