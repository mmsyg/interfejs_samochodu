import mapboxgl from "mapbox-gl";
import React from "react"; // Jeśli używasz React

const ShowRoute = ({ map, end, setRouteData, setRouteSteps }) => {
    const start = [19.906381, 50.029823];

    var bounds = new mapboxgl.LngLatBounds();
    bounds.extend(start);
    bounds.extend(end);
    map.fitBounds(bounds, { padding: 200 });

    async function getRoute() {
        try {
            const query = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}&overview=full&language=pl`,
                { method: 'GET' }
            );
            const json = await query.json();

            if (!json.routes || json.routes.length === 0) {
                alert('Nie znaleziono trasy.');
                return;
            }

            const data = json.routes[0];
            const route = data.geometry.coordinates;

            setRouteData({
                coordinates: route,
                distance: data.distance,
                duration: data.duration
            });
            const steps = json.routes[0].legs[0].steps.map(step => {
                return {
                    type: step.maneuver.type,
                    modifier: step.maneuver.modifier,
                    instruction: step.maneuver.instruction,
                    distance: step.distance,
                    duration: step.duration
                };
            });

            setRouteSteps(steps);

            const geojson = {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: route
                }
            };

            if (map.getSource('route')) {
                map.getSource('route').setData(geojson);
            } else {
                map.addLayer({
                    id: 'route',
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: geojson
                    },
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#ffa500',
                        'line-width': 5,
                        'line-opacity': 0.75
                    }
                });
            }
        } catch (error) {
            alert('Wystąpił błąd podczas pobierania trasy.');
            console.error(error);
        }
    }

    getRoute();

    return (
        <></>
    );
};

export default ShowRoute;
