// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {
    // 3 to 4 if statements, about 8 lines
    // testInput will be the text of the input (pilot, copilot, fuelLevel, cargoLevel, etc)
    // return "Empty", "Not a Number", or "Is a Number"
    if (testInput === "") {
        return "Empty"
    }
    else if (isNaN(testInput)) {
        return "Not a Number"
    }
    else if (isNaN(testInput) === false) {
        return "Is a Number"
    }

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // bulk of the code
    list = document.getElementById("faultyItems");
    h2 = document.getElementById("launchStatus");
    pilotStatus = document.getElementById("pilotStatus");
    copilotStatus = document.getElementById("copilotStatus");
    fuelStatus = document.getElementById("fuelStatus");
    cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerHTML=`Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`;

    // Empty Fields validation
    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty"){
       alert('Input cannot be empty');
    }

    // // Copilot validation
    // if (validateInput(copilot.value) === "Empty"){
    //     //alert('Input cannot be empty');
    // }

    // Fuel Level validation
    // if (validateInput(fuelLevel.value) === "Empty"){
    //     //alert('Input cannot be empty');
    // }     
    // else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number"){
    //     alert('Please enter a valid number!');
    // }     
    /*else*/ if (validateInput(fuelLevel.value) === "Is a Number"){
        if (fuelLevel.value < 10000) {
            list.style="visibility: visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            h2.innerHTML = "Shuttle not ready for launch";
            h2.style="color: red";
        }
        else if (validateInput(cargoLevel.value) === "Is a Number"){
            if (cargoLevel.value > 10000){
                list.style="visibility: visible";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                h2.innerHTML = "Shuttle not ready for launch";
                h2.style="color: red";
            }
        else {
            list.style="visibility: visible";
            fuelStatus.innerHTML="Fuel level high enough for launch";
            cargoStatus.innerHTML="Cargo mass low enough for launch";
            h2.innerHTML = "Shuttle is ready for launch";
            h2.style="color: green";
        }
    }

    // Cargo Level validation
    // if (validateInput(cargoLevel.value) === "Empty"){
    //     //alert("Input cannot be empty");
    // }
    // else if (validateInput(cargoLevel.value) === "Not a Number"){
    //     alert("Please enter a valid number!");
    // }
    // else if (validateInput(cargoLevel.value) === "Is a Number"){
    //     if (cargoLevel.value > 10000){
    //         list.style="visibility: visible";
    //         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    //         h2.innerHTML = "Shuttle not ready for launch";
    //         h2.style="color: red";
    //     }
        // else {
        //     list.style="visibility: visible";
        //     cargoStatus.innerHTML="Cargo mass low enough for launch";
        //     h2.innerHTML = "Shuttle is ready for launch";
        //     h2.style="color: green";
        // }
    }
    // else {
    //     list.style="visibility: visible";
    //     fuelStatus.innerHTML="Fuel level high enough for launch";
    //     cargoStatus.innerHTML="Cargo mass low enough for launch";
    //     h2.innerHTML = "Shuttle is ready for launch";
    //     h2.style="color: green";
    // }

    // draw a table to map out 'if' conditionals
}

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json){
            console.log(json);
        })
    });
         //console.log("??", JSON.stringify(planetsReturned,null,2));
         console.log(planetsReturned);
     return planetsReturned;
     //return response.json();
 }
 
 function pickPlanet(planets) {
    console.log("MY Planets: ", planets);
    let planet = {};
    // Get random number and get planet with that index
    let randomNumber = Math.floor(Math.random()*7);
    console.log(randomNumber);
    return planets[randomNumber];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;