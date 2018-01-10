import React from 'react';
import {Header} from './Header';
import {LocationSelectorContainer} from './Locations/LocationSelectorContainer';

export const httpAddress = "http://10.0.0.15:4000/locations";
//const httpAddress = "http://192.168.43.40:4000/locations";

export class App extends React.Component {
    render(){
        return(
            <html>
                <body>
                    <head>
                        <link rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
                    </head>
                    <Header/>
                    <LocationSelectorContainer/>
                </body>
            </html>
        );
    }
}