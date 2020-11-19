import ajax from "/modules/ajax.js"

const dogPics = "https://dog.ceo/api/breeds/image/random";

// API call for random puppy pictures
ajax(dogPics, (data) => {

    // parses the data into an array of objects
    let res = JSON.parse(data)
    console.log(res)

    // assigns variables to DOM elements
    let soulBody = document.querySelector('#soul-main')
    let returnButton = document.querySelector('#return-button')   
    let soulImg = document.querySelector('#soul-img')
    let soulP = document.querySelector('#soul-p')
    
    // adds a line of blank text to p to seperate the image from the bottom of the div when you hover over the image
    soulP.innerText = ""

    // assigns a random pupy picture to the image
    soulImg.src = res.message
    
    // appends the elements to the soul div
    soulBody.append(soulImg,soulP,returnButton)
    
    //removes the top head after 2 seconds
    changeSoul()
  });

  // defines the function to remove soul's top head
  function changeSoul() {
    setInterval(function() {
        document.querySelector("#soul-top-head").remove()
    }, 2400);
  }