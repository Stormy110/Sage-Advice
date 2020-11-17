// Import Modules
import ajax from "./modules/ajax.js";
import { makeElements, getElements } from "./modules/elements.js";


// API's
// Body - Chuck Norris
const chuck = "https://api.chucknorris.io/jokes/random";

// Mind - Advice slip
const adslip = "https://api.adviceslip.com/advice";

// Soul - Dog Pictures
const dogPics = "https://random.dog/woof.json";



ajax(chuck, (data) => {
  console.log(data);
});

ajax(adslip, (data) => {
  let r = JSON.parse(data);
  console.log(r);
});

ajax(dogPics, (data) => {
  console.log(data);
})

