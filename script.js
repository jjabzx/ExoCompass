const planetListDiv = document.getElementById('planet-list');

const apiUrl = '/api/proxy';

async function fetchPlanets(){
    planetListDiv.innerHTML = '<p>Loading exoplanets...</p>';

    const response = await fetch(apiUrl);

    const data = await response.json();

    console.log(data);

    displayPlanets(data);
}

function displayPlanets(planets){
    planetListDiv.innerHTML = '';

    const ul = document.createElement('ul');

    const planetsToShow = planets.slice(0,20);

    planetsToShow.forEach(planet => {
        const li = document.createElement('li');
        li.innerHTML = `
        <strong>${planet.pl_name || 'N/A'}</strong> (Host: ${planet.hostname || 'N/A'})<br>
        Discovery: ${planet.discoverymethod || 'N/A'} in ${planet.disc_year || 'N/A'}<br>
        Orbital Period: ${planet.pl_orbper ? planet.pl_orbper.toFixed(2) + ' days' : 'N/A'}<br>
        Mass: ${planet.pl_masse ? planet.pl_masse.toFixed(2) + 'M' : 'N/A'}<br>
        Radius: ${planet.pl_rade ? planet.pl_rade.toFixed(2) + 'R' : 'N/A'}`;
        ul.appendChild(li);
    });

    planetListDiv.appendChild(ul);
}

fetchPlanets();