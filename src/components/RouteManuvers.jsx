import React, {useState, useEffect} from 'react';
import triangleUp from '../assets/triangle-up.svg';
import triangleDown from '../assets/triangle-down.svg';

const RouteManeuvers = ({steps}) => {
    const [showMore, setShowMore] = useState(false);
    const formatDistance = (distance) => {
        if (distance < 1000) {
            return `${Math.round(distance)} m`;
        } else {
            return `${(distance / 1000).toFixed(2)} km`;
        }
    };


    return (
        <div id="route-panel">
            <ul id="maneuvers-list">
                {steps.length > 0 &&
                    <li className="maneuver-item">
                        <img className='maneuver-type'
                             src={require(`../assets/directions/${steps[0].modifier ? `${steps[0].type}_${steps[0].modifier}`.replace(/ /g, '_') : steps[0].type}.svg`)}
                             alt={`Direction ${steps[0].type}`}
                        />
                        <div className="instruction-details">
                            <strong>{formatDistance(steps[0].distance)}</strong>
                            <p>{steps[0].instruction}</p>
                        </div>
                    </li>
                }
            </ul>
            {steps.length > 1 && (
                <button id="showMoreSteps" onClick={() => setShowMore(!showMore)} style={{
                    backgroundImage: `url(${showMore ? triangleUp : triangleDown})`
                }}>
                </button>
            )}

            {showMore && (
                <ul id="additional-maneuvers">
                    {steps.slice(1, 4).map((step, index) => (
                        <li key={index} className="maneuver-item">
                            <img className='maneuver-type'
                                 src={require(`../assets/directions/${step.modifier ? `${step.type}_${step.modifier}`.replace(/ /g, '_') : step.type}.svg`)}
                                 alt={`Direction ${step.type}`}
                            />
                            <div className="instruction-details">
                                <strong>{formatDistance(step.distance)}</strong>
                                <p>{step.instruction}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default RouteManeuvers;
