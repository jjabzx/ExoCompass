let allPlanets = [];

const planetName = document.getElementById('planet-name');
const hostName = document.getElementById('host-name');
const discoveryMethod = document.getElementById('discovery-method');
const discoveryYear = document.getElementById('discovery-year');
const orbitalPeriod = document.getElementById('orbital-period');
const planetMass = document.getElementById('planet-mass');
const planetRadius = document.getElementById('planet-radius');
const randomPlanet = document.getElementById('random-planet');


function displayPlanet(planet){
    planetName.textContent = planet.pl_name || 'Unknown Planet';
    hostName.textContent = planet.hostname || 'N/A';
    discoveryMethod.textContent = planet.discoverymethod || 'N/A';
    discoveryYear.textContent = planet.disc_year || 'N/A';
    orbitalPeriod.textContent = planet.pl_orbper ? `${Number(planet.pl_orbper).toFixed(2)} days` : 'N/A';
    planetMass.textContent = planet.pl_masse ? `${Number(planet.pl_masse).toFixed(2)}x Earth` : 'N/A';
    planetRadius.textContent = planet.pl_rade ? `${Number(planet.pl_rade).toFixed(2)}x Earth` : 'N/A';
}

function getRandomPlanet(){
    const randomIndex = Math.floor(Math.random() * allPlanets.length);
    const randomPlanet = allPlanets[randomIndex];

    displayPlanet(randomPlanet);
}

async function initialize(){
    const apiUrl = '/api/proxy';

    const response = await fetch(apiUrl);

    const data = await response.json();

    allPlanets = data;

    getRandomPlanet();
}

randomPlanet.addEventListener('click', getRandomPlanet);

initialize();