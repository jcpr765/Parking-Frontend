import React from 'react';
import {WeekStatsContainer} from './Charts/WeekStatsContainer';
import {LiveStatsContainer} from './Charts/LiveStatsContainer';
import {GateStatsContainer} from './Charts/GateStatsContainer';

export const Content = (props) => {
    const locationId = props.locationId;
    if(locationId !== 0)
        return(
            <div>
                <h2>Showing statistics for {props.locationName}</h2>
                <LiveStatsContainer locationCapacity={props.locationCapacity} locationId={locationId}></LiveStatsContainer>
                <WeekStatsContainer locationCapacity={props.locationCapacity} locationId={locationId}></WeekStatsContainer>
                <GateStatsContainer locationCapacity={props.locationCapacity} locationId={locationId}></GateStatsContainer>
            </div>
            
        );
    else
        return null;
}