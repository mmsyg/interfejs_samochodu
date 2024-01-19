import React, {useState, useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";


import ShowRoute from './ShowRoute'
import RouteManuvers from "./RouteManuvers";
import homeIcon from '../assets/home.svg'
import starIcon from '../assets/star.svg'

const MapSearchBar = ({map}) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null); // Dodane useState dla selectedPlace
    const [currentMarker, setCurrentMarker] = useState(null);
    const [showRoute, setShowRoute] = useState(false);
    const [routeData, setRouteData] = useState({
        coordinates: null, distance: null, duration: null
    });
    const [routeSteps, setRouteSteps] = useState({
        instruction: null, type: null, modifier: null, direction: null, maneuver: null, distance: null, duration: null,
    });

    const [starPlaces, setStarPlaces] = useState([
        {
            center: [19.9077045, 50.068653],
            place_name: 'Miasteczko Studenckie AGH, Nawojki, Kraków, województwo małopolskie 30-072, Polska'
        },
        {
            center: [16.921364, 51.107883],
            place_name: 'Wrocławski Rynek, Wrocław, województwo dolnośląskie, Polska'
        },
        {
            center: [19.944884, 50.052190],
            place_name: 'Sukiennice, Rynek Główny 1-3, 31-042 Kraków, Polska'
        },
        {
            center: [19.935255, 50.059157],
            place_name: 'Kościół Mariacki, plac Mariacki, 31-042 Kraków, Polska'
        }
    ]);
    const [showStarPlaces, setShowStarPlaces] = useState(false);


    const [homePlaces, setHomePlaces] = useState([{
        center: [19.961102, 50.065896], place_name: 'Mogilska 12, 31-547 Kraków, województwo małopolskie, Polska'
    },]);
    const [showHomePlaces, setShowHomePlaces] = useState(false);

    const [routeAsk, setRouteAsk] = useState(false);
    const [routeAccepted, setRouteAccepted] = useState(false);
    const [searchBarFocus, setSearchBarFocus] = useState(0)
    const handleShowRoute = () => {
        setShowRoute(true);
    };

    const [currentPageStar, setCurrentPageStar] = useState(1);
    const [currentPageHome, setCurrentPageHome] = useState(1);


    useEffect(() => {
        if (showRoute) {
            ShowRoute({map});
        }
    }, [showRoute, map]);
    const handleInput = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        keyboard.current.setInput(inputValue);

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${mapboxgl.accessToken}&language=pl`)
            .then((response) => response.json())
            .then((data) => {
                if (data.features) {
                    setSuggestions(data.features);
                }
            })
            .catch((error) => {
                console.error('Błąd wyszukiwania:', error);
            });
    };

    const handleKeyboardInput = (inputValue) => {
        setQuery(inputValue);
        keyboard.current.setInput(inputValue);

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${mapboxgl.accessToken}&language=pl`)
            .then((response) => response.json())
            .then((data) => {
                if (data.features) {
                    setSuggestions(data.features);
                }
            })
            .catch((error) => {
                console.error('Błąd wyszukiwania:', error);
            });
    };


    const handleSearch = (event) => {
        setInputFocused(false);
        event.preventDefault();
        if (!query) return;

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.features && data.features.length > 0) {
                    handleSelectPlace(data.features[0]);
                }
            })
            .catch((error) => {
                console.error('Błąd wyszukiwania:', error);
            });
        if (selectedPlace && selectedPlace.place_name) {
            setQuery(selectedPlace.place_name);
        }
    };

    const handleKeyboardSearch = () => {
        setInputFocused(false);
        //event.preventDefault();
        if (!query) return;

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.features && data.features.length > 0) {
                    handleSelectPlace(data.features[0]);
                }
            })
            .catch((error) => {
                console.error('Błąd wyszukiwania:', error);
            });
        if (selectedPlace && selectedPlace.place_name) {
            setQuery(selectedPlace.place_name);
        }
    };

    const addMarker = (place) => {
        if (currentMarker) {
            currentMarker.remove();
            setCurrentMarker(null);
        }

        const marker = new mapboxgl.Marker({ "color": "#FED402" })
            .setLngLat(place.center)
            .addTo(map)
        setCurrentMarker(marker);
    };

    const handleSelectPlace = (place) => {
        if (map && place && place.center) {
            map.setZoom(17);
            addMarker(place);
            map.setCenter(place.center);
            setRouteAccepted(false);
            setRouteAsk(false);
        }
        setSelectedPlace(place);
        setQuery(place.place_name);
        setSuggestions([]);
        setShowStarPlaces(false);
    };

    useEffect(() => {
        if (!map) return;

        const input = document.getElementById('search-input');

        const handleInputEvent = (event) => {
            handleInput(event);
        };

        const handleKeyDownEvent = (event) => {
            if (event.key === 'Enter') {
                handleSearch(event);
            }
        };

        input.addEventListener('input', handleInputEvent);
        input.addEventListener('keydown', handleKeyDownEvent);

        return () => {
            input.removeEventListener('input', handleInputEvent);
            input.removeEventListener('keydown', handleKeyDownEvent);
        };
    }, [map, query]);

    const formatDistance = (distance) => {
        if (distance < 1000) {
            return `${Math.round(distance)} m`;
        } else {
            return `${(distance / 1000).toFixed(2)} km`;
        }
    };

    const formatDuration = (duration) => {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);

        if (hours > 0) {
            return `${hours}h:${minutes}min`;
        } else {
            return `${minutes}min`;
        }
    };

    const handleRemoveStarPlace = (index) => {
        const newPlaces = [...starPlaces];
        newPlaces.splice(index, 1);
        setStarPlaces(newPlaces);
    };

    const addStarPlace = (place) => {
        setStarPlaces(prevPlaces => [...prevPlaces, {center: place.center, place_name: place.place_name}]);
    };
    const isStarPlace = (placeToCheck) => {
        return starPlaces.some(place => place.place_name === placeToCheck.place_name);
    };

    const removeStarPlace = (placeToRemove) => {
        setStarPlaces(prevPlaces => prevPlaces.filter(place => place.place_name !== placeToRemove.place_name));
    }

    const handleRemoveHomePlace = (index) => {
        const newPlaces = [...homePlaces];
        newPlaces.splice(index, 1);
        setHomePlaces(newPlaces);
    };
    const addHomePlace = (place) => {
        setHomePlaces(prevPlaces => [...prevPlaces, {center: place.center, place_name: place.place_name}]);
    };
    const isHomePlace = (placeToCheck) => {
        return homePlaces.some(place => place.place_name === placeToCheck.place_name);
    };

    const removeHomePlace = (placeToRemove) => {
        setHomePlaces(prevPlaces => prevPlaces.filter(place => place.place_name !== placeToRemove.place_name));
    }

    //keyboard

    const toggleKeyboard = () => {
        setInputFocused(!inputFocused);
    };
    const [inputFocused, setInputFocused] = useState(false);

    const [layout, setLayout] = useState("default");
    const keyboard = useRef();


    const onKeyPress = button => {
        if (button === "{shift}" || button === "{lock}") handleShift();
        if (button === "{enter}") handleKeyboardSearch();
        if (button === "{bksp}") handleBackspace();
    };
    const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };

    const handleBackspace = () => {
        if (query.length > 0) {
            const newQuery = query.slice(0, -1); // Usuń ostatni znak
            setQuery(newQuery);
            keyboard.current.setInput(newQuery);
        }
    };


    return <div>
        <div id="search-bar-container">
            <input
                id="search-input"
                type="text"
                placeholder="Wybierz cel podróży..."
                value={query}
                onChange={handleInput}
                onFocus={() => {
                    setInputFocused(true);
                    setShowStarPlaces(false);
                    setShowHomePlaces(false);
                    setSearchBarFocus(0)
                }}
                style={{filter: searchBarFocus === 0 ? 'invert(1)' : ''}}
            />

            <button
                id="star-tab"
                onClick={() => {
                    setShowStarPlaces(true);
                    setShowHomePlaces(false);
                    setSearchBarFocus(1);
                }}
                style={{
                    backgroundImage: `url(${starIcon})`,
                    filter: searchBarFocus === 1 ? 'invert(1)' : ''
                }}
            ></button>

            <button id="home-tab" onClick={() => {
                setShowHomePlaces(true);
                setShowStarPlaces(false);
                setSearchBarFocus(2)
            }} className={searchBarFocus === 2 ? 'focused-tab' : ''}
                    style={{
                        backgroundImage: `url(${homeIcon})`, filter: searchBarFocus === 2 ? 'invert(1)' : ''

                    }}></button>


            {suggestions.length > 0 && searchBarFocus === 0 && <div id="suggestions-list">
                {suggestions.slice(0, 3).map((place, index) => (<div key={index} onClick={() => {
                    handleSelectPlace(place);
                    setInputFocused(false);
                }}>
                    {place.place_name}
                </div>))}
            </div>}

            {showStarPlaces && searchBarFocus === 1 && (
                (starPlaces.length > 0)?(
                <div id="suggestions-list">
                    {starPlaces.slice((currentPageStar - 1) * 3, currentPageStar * 3).map((place, index) => (
                        <div key={index}>
                <span onClick={() => handleSelectPlace(place)}>
                    {place.place_name}
                </span>
                            <button className='remove-from-list'
                                    onClick={() => handleRemoveStarPlace((currentPageStar - 1) * 3 + index)}>X
                            </button>
                        </div>
                    ))}
                    {starPlaces.length > 3 && (
                        <div className="change-list-page" style={{background: '#C2C3C7'}}>
                            {Array.from({length: Math.ceil(starPlaces.length / 3)}, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPageStar(page)}
                                    className={currentPageStar === page ? 'active-page' : ''}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </div>)
                : (
                <div id="suggestions-list">
                <p style={{margin: '20px'}}>
                    Trochę tu pusto, spróbuj wyszukać interesujące Cię miejsce, a następnie dodać je naciskając ikonkę gwiazdy na dolnym pasku.
                </p>
            </div>)
            )}

            {showHomePlaces && searchBarFocus === 2 && (
                (homePlaces.length > 0)?(
                <div id="suggestions-list">
                    {homePlaces.slice((currentPageHome - 1) * 3, currentPageHome * 3).map((place, index) => (
                        <div key={index}>
                <span onClick={() => handleSelectPlace(place)}>
                    {place.place_name}
                </span>
                            <button className='remove-from-list'
                                    onClick={() => handleRemoveHomePlace((currentPageHome - 1) * 3 + index)}>X
                            </button>
                        </div>
                    ))}
                    {homePlaces.length > 3 && (
                        <div className="change-list-page" style={{background: '#C2C3C7'}}>
                            {Array.from({length: Math.ceil(homePlaces.length / 3)}, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPageHome(page)}
                                    className={currentPageHome === page ? 'active-page' : ''}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </div>)
                    : (
                        <div id="suggestions-list">
                        <p style={{margin: '20px'}}>
                        Trochę tu pusto, spróbuj wyszukać interesujące Cię miejsce, a następnie dodać je naciskając ikonkę domu na dolnym pasku.
                        </p>
                        </div>)
            )}
        </div>


        {selectedPlace && (!routeAccepted) && !inputFocused && <div id="bottomBar">
            {selectedPlace && !routeAsk && (<button id="showRoute" onClick={() => {
                ShowRoute({map, end: selectedPlace.center, setRouteData, setRouteSteps});
                setRouteAsk(true);
            }}>Pokaż trasę</button>)}

            <button id="routeAccept" onClick={() => {
                !routeAsk && ShowRoute({map, end: selectedPlace.center, setRouteData, setRouteSteps});
                setRouteAccepted(true);
                setRouteAsk(false);
                map.setZoom(17);
                map.setCenter([19.9063, 50.0298]);
            }}>Rozpocznij
            </button>
            <button id="routeCancel" onClick={() => {
                setRouteAsk(false)
                setRouteAccepted(false)
                if (map.getLayer('route')) {
                    map.removeLayer('route');
                }
                if (map.getSource('route')) {
                    map.removeSource('route');
                }
                currentMarker.remove();
                setSelectedPlace(null);
                map.setZoom(17);
                map.setCenter([19.9063, 50.0298]);
                setSearchBarFocus(0);
            }}>Anuluj
            </button>
            {isStarPlace(selectedPlace) ? <button id={'add-star'} style={{filter: 'invert(1)'}}
                                                  onClick={() => removeStarPlace(selectedPlace)}>Usuń</button> :
                <button id={'add-star'} onClick={() => addStarPlace(selectedPlace)}>Dodaj </button>}
            {isHomePlace(selectedPlace) ? <button id={'add-home'} style={{filter: 'invert(1)'}}
                                                  onClick={() => removeHomePlace(selectedPlace)}>Usuń</button> :
                <button id={'add-home'} onClick={() => addHomePlace(selectedPlace)}>Dodaj </button>}

        </div>}
        {routeAccepted && <RouteManuvers steps={routeSteps}/>}
        {routeData && (routeAsk || routeAccepted) && <div>
            {routeData.distance && <div id="distance">Trasa: {formatDistance(routeData.distance)}</div>}
            {routeData.duration && <div id="time">Dojazd za: {formatDuration(routeData.duration)}</div>}
            {routeAccepted && <button id="cancelAcceptedRoute" onClick={() => {
                setRouteAccepted(false);
                setRouteAsk(false);
                if (map.getLayer('route')) {
                    map.removeLayer('route');
                }
                if (map.getSource('route')) {
                    map.removeSource('route');
                }
                currentMarker.remove();
                setSelectedPlace(null);
                map.setZoom(17);
                map.setCenter([19.9063, 50.0298]);
            }}>Anuluj
            </button>}
        </div>}
        {inputFocused && searchBarFocus === 0 && (
            <div id='keyboard-container'>
                <button id='close-keyboard' onClick={toggleKeyboard} className="close-keyboard-button">
                    Zamknij
                </button>
                <Keyboard
                    keyboardRef={r => (keyboard.current = r)}
                    layoutName={layout}
                    onChange={handleKeyboardInput}
                    onKeyPress={onKeyPress}
                />
            </div>
        )}
    </div>;

};

export default MapSearchBar;
