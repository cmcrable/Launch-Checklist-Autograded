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
    list = document.getElementById("faultyItems");
    h2 = document.getElementById("launchStatus");
    pilotStatus = document.getElementById("pilotStatus");
    copilotStatus = document.getElementById("copilotStatus");
    fuelStatus = document.getElementById("fuelStatus");
    cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // Field validation
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
       alert('Input cannot be empty');
    }
    else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert('Please enter a valid number!');
    }     
    else if (validateInput(fuelLevel) === "Is a Number"){
        if (fuelLevel < 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            h2.innerHTML = "Shuttle Not Ready for Launch";
            h2.style.color = "red";
        }
        else if (validateInput(cargoLevel) === "Is a Number"){
            if (cargoLevel > 10000){
                list.style.visibility = "visible";
                fuelStatus.innerHTML="Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                h2.innerHTML = "Shuttle Not Ready for Launch";
                h2.style.color = "red";
            }
        else {
            list.style.visibility = "visible";
            fuelStatus.innerHTML="Fuel level high enough for launch";
            cargoStatus.innerHTML="Cargo mass low enough for launch";
            h2.innerHTML = "Shuttle is Ready for Launch";
            h2.style.color = "green";
        }
    }
    }
}

 
 async function myFetch() {
     let planetsReturned;
    //  let planets = [];
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        // const result = response.json();
        // result.then( function(json){
        //     console.log(result);
        //     planets = [json[0].name, json[1].name, json[2].name, json[3].name, json[4].name, json[5].name];
        //     console.log(planets);
        //     return planets;
        // });
        console.log(response.json);
        return response.json();
    })
    // .then((data) => {
    //     let planets = data;
    //     planets.map(function(planet) {
    //         console.log(planet.name);
    //         return planet.name;
    //     })
    // })
        .then((data) => {
        let planets = data;
        planets.map(function(planet) {
            console.log(planet);
            return planet;
        })
    })
         //console.log("??", JSON.stringify(planetsReturned,null,2));
         console.log(planetsReturned);
     return planetsReturned;
     //return response.json();
 }
 
 function pickPlanet(planets) {
    console.log(typeof planets);
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