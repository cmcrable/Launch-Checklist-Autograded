// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

    // task 3
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        console.log("result =", result);
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageUrl);
    })

    // task 2
    // add event listener for button here (search textbook, copy/paste)
    let list = this.document.getElementById("faultyItems");
    let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        // let pilotStatus = document.getElementById("pilotStatus");
        // let copilotStatus = document.getElementById("copilotStatus");
        // let fuelStatus = document.getElementById("fuelStatus");
        // let cargoStatus = document.getElementById("cargoStatus");


    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault(); // something like this to prevent using default submit code

 });
})