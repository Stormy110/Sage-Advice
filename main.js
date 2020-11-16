// Import Modules
import ajax from "/modules/ajax.js";
import { makeElements, getElements } from "/modules/elements.js";
// API's
// Body - Crosfit Gym's
const apiKey = "Enter Here";
const gyms = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
// Mind - Chuck Norris
const chuck = "https://api.chucknorris.io/jokes/random";
// Soul - Dog Pictures
const dogPics = "https://random.dog/woof.json";

ajax(gyms, (data) => {
  console.log(data);
});

ajax(chuck, (data) => {
  console.log(data);
});

ajax(dogPics, (data) => {
  console.log(data);
});
