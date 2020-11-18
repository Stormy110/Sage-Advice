import ajax from "/modules/ajax.js"
const dogPics = "https://dog.ceo/api/breeds/image/random";


ajax(dogPics, (data) => {
    let res = JSON.parse(data)
    console.log(res)
    let soulBody = document.querySelector('#soul-main')
    let returnButton = document.querySelector('#return-button')   
    let soulImg = document.querySelector('#soul-img')
    let soulP = document.querySelector('#soul-p')
    soulP.innerText = ""
    soulImg.src = res.message
    soulBody.append(soulImg,soulP,returnButton)
    change2()
  });
  function change2() {
    setInterval(function() {
        document.querySelector("#soul-top-head").remove()
    }, 2400);
  }