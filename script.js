// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

    // task 3
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(typeof listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageUrl);
    })

    // task 2
    // add event listener for button here (search textbook, copy/paste)
    let list = this.document.getElementById("faultyItems");
    let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        let pilot = document.getElementsByName("pilotName");
        let copilot = document.getElementsByName("copilotName");
        let fuelLevel = document.getElementsByName("fuelLevel");
        let cargoLevel = document.getElementsByName("cargoMass");



    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();

 });
})