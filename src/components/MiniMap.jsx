import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importuj Link
import mapboxgl from "mapbox-gl";
import carIcon from "../assets/yellow_car.png";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MiniMap = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [19.9063, 50.0298],
            zoom: 17,
            attributionControl: false,
            dragRotate: false,
            interactive: false,
            language: 'pl',
        });

        new mapboxgl.Marker({
            element: createMarkerElement(carIcon),
            anchor: 'center'
        })
            .setLngLat([19.906381, 50.029823])
            .addTo(map);

        mapRef.current = map;

        return () => {
            map.remove();
        };
    }, []);

    function createMarkerElement(imageSrc) {
        const element = document.createElement('div');
        element.className = 'custom-marker';
        element.style.backgroundImage = `url(${imageSrc})`;
        element.style.backgroundSize = 'contain';
        element.style.width = '40px';
        element.style.height = '40px';
        return element;
    }

    return (
        <div id="mini-map-wrapper">
            <Link to="/4">
                <div ref={mapContainerRef} id="mini-map-container"></div>
            </Link>
        </div>
    );
};

export default MiniMap;
