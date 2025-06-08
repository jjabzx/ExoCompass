exports.handler = async function(event, context) {
    const NASA_API_URL = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,hostname,discoverymethod,disc_year,pl_orbper,pl_masse,pl_rade+from+pscomppars&format=json';

    try {
        const response = await fetch(NASA_API_URL);

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: response.statusText
            };
        }

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
        };

    } catch (error) {
        console.error('Error fetching from NASA API:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data' })
        };
    }
};