import React from 'react';
import {ChartsContainer} from './Charts/ChartsContainer';

export const Content = (props) => {
    const locationId = props.locationId;
    if(locationId !== 0)
        return(
            <div>
                <h2>Showing statistics for {props.locationName}</h2>
                <ChartsContainer locationCapacity={props.locationCapacity} locationId={locationId}></ChartsContainer>
            </div>
            
        );
    else
        return null;
}