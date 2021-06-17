// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let planets = document.getElementById("missionTarget");
         planets.innerHTML =
         `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}"></img>`
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      let fuelLevelNum = Number(fuelLevelInput.value);
      let cargoMassNum = Number(cargoMassInput.value);

      
   
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields required.")
      }

      if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
         alert("Invalid input for Pilot Name or Co-pilot Name.");
      }

      if (isNaN(fuelLevelNum) || isNaN(cargoMassNum)) {
         alert("Invalid input for Fuel Level or Cargo Mass.");
      }

      let flightStatusBlock = document.querySelector("#faultyItems");
      let pilotReady = document.querySelector("#pilotStatus");
      let copilotReady = document.querySelector("#copilotStatus");
      let fuelReady = document.querySelector("#fuelStatus");
      let cargoReady = document.querySelector("#cargoStatus");
      let launchReady = document.querySelector("#launchStatus");

      pilotReady.innerHTML = `${pilotNameInput.value} ready for launch.`;
      copilotReady.innerHTML = `${copilotNameInput.value} ready for launch`;

      if (fuelLevelNum < 10000 && cargoMassNum > 10000) {
         flightStatusBlock.style.visibility = "visible"; 
         launchReady.innerHTML = "Shuttle Not Ready For Launch";
         launchReady.style.color = "red";
         fuelReady.innerHTML = "Fuel level too low for launch.";
         cargoReady.innerHTML = "Cargo mass too high for launch."

 
      } else if (cargoMassNum > 10000) {
         flightStatusBlock.style.visibility = "visible"; 
         launchReady.innerHTML = "Shuttle Not Ready For Launch";
         launchReady.style.color = "red";
         cargoReady.innerHTML = "Cargo mass too high for launch.";
         fuelReady.innerHTML = "Fuel level high enough for launch.";

               
      } else if (fuelLevelNum < 10000) {
         flightStatusBlock.style.visibility = "visible"; 
         launchReady.innerHTML = "Shuttle Not Ready For Launch";
         launchReady.style.color = "red";
         fuelReady.innerHTML = "Fuel level too low for launch.";
         cargoReady.innerHTML = "Cargo mass low enough for launch.";

      }
       else {
         launchReady.innerHTML = "Shuttle Ready for Launch";
         launchReady.style.color = "green";
         flightStatusBlock.style.visibility = "hidden";
      }
   });


});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
