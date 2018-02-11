import React from 'react';
import {Header} from './Header';
import {LocationSelectorContainer} from './Locations/LocationSelectorContainer';

//export const httpAddress = "http://127.0.0.1:4000/";
export const httpAddress = "http://192.168.10.199:4000/";

export class App extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <LocationSelectorContainer/>
            </div>
        );
    }
}