import ajax from "./ajax.js"
import { makeElements, getElements } from "./elements.js";

// Mind - Advice slip
const adslip = "https://api.adviceslip.com/advice";

let mindP = document.querySelector("#mind-p")

ajax(adslip, (data) => {
    let r = JSON.parse(data);
    console.log(r);
    mindP.innerText = `${r.slip.advice}`
    change()
  });


  function change() {
    setInterval(function() {
        document.querySelector("#mind-top-head").remove()
    }, 2400);
  }
