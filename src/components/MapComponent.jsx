import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';

import MapSearchBar from "./MapSearchBar";
import "../css/Navigation.css"
import carIcon from '../assets/yellow_car.png';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

const MapComponent = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const [retryCount, setRetryCount] = useState(0);
    const [mapHasBeenMoved, setMapHasBeenMoved] = useState(false);

    useEffect(() => {
        //if (map.current) return;
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [19.9063, 50.0298],
            zoom: 17,
            maxZoom: 20,
            attributionControl: false,
            dragRotate: false,
            language: 'pl',
        });

        const nav = new mapboxgl.NavigationControl({
            showZoom: true,
            showCompass: false,
            zoomInLabel: '+',
            zoomOutLabel: '-',
            compassLabel: 'N',
            className: 'custom-nav-control'
        });
        map.addControl(nav, 'bottom-right');

        new mapboxgl.Marker({
            element: createMarkerElement(carIcon),
            anchor: 'center'
        })
            .setLngLat([19.906381, 50.029823])
            .addTo(map);

        map.on('move', () => {
            const currentCenter = mapRef.current.getCenter();
            const initialCenter = new mapboxgl.LngLat(19.9063, 50.0298);
            if (
                Math.abs(currentCenter.lng - initialCenter.lng) < 0.0001 &&
                Math.abs(currentCenter.lat - initialCenter.lat) < 0.0001
            ) {
                setMapHasBeenMoved(false);
            } else {
                setMapHasBeenMoved(true);
            }
        });


        mapRef.current = map
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

    const handleCenterMap = () => {
        mapRef.current.flyTo({
            center: [19.9063, 50.0298],
            zoom: 17,
            essential: true,
        });
    };

    return (
        <div id="map-wrapper">
            <div id="map-container"></div>
            {mapRef.current && mapHasBeenMoved && (
                <div id="center-map-container" onClick={handleCenterMap}>
                    <img src={carIcon} alt="Yellow Car" className="car-icon"/>
                    <span id="center-map-button" >
                        Wyśrodkuj
                    </span>
                </div>
            )}
            {mapRef.current ? (
                <div id="mapNavBar">
                    <MapSearchBar map={mapRef.current}/>
                </div>
            ) : (
                retryCount < 6 && setTimeout(() => setRetryCount(prev => prev + 1), 2000)
            )}
        </div>
    );
};

export default MapComponent;
