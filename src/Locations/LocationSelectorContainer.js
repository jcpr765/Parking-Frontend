import React from 'react';
import request from 'request';
import {httpAddress} from '../App'; 
import {LocationSelector} from './LocationSelector';

/*
LocationSelectorContainer
Contains a dropdown with various lots.
Select a lot to generate the Live Parking Chart of said lot. 
*/

export class LocationSelectorContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            locList: []
        }
    }

    componentDidMount(){
        request.get(httpAddress, (err, res, body)=>{
            if(!err && (res.statusCode === 200 || res.statusCode === 304)){
                this.setState({
                    locList: JSON.parse(body)
                });
            }
        });
    }

    render(){
        return(
        <LocationSelector locationList={this.state.locList}/>);
    }
}