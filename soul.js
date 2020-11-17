import ajax from "/modules/ajax.js"
const dogPics = "https://dog.ceo/api/breeds/image/random";
const doggy = document.getElementById("doggy")
fetch(dogPics).then(function (response){
    console.log(response.json())
    return response.json()
}).then(function(i){
    console.log(i);
    const dog = document.createElement("img")
    dog.setAttribute("src",i.url)
    // document.body.appendChild(dog)
    doggy.appendChild(dog)

})
ajax(dogPics, (data) => {
    console.log(data);
  });
