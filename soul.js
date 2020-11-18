import ajax from "/modules/ajax.js"
const dogPics = "https://dog.ceo/api/breeds/image/random";


ajax(dogPics, (data) => {
    let res = JSON.parse(data)
    console.log(res)
    let soulBody = document.querySelector('#soul-main')
    let soulImg = document.querySelector('#soul-img')
    soulImg.src = res.message
    soulBody.append(soulImg)
  });
