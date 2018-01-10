import React from 'react';
import {Content} from '../Content';

export class LocationSelector extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            locationId: 0,
            locationName: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const id = e.target.value;
        if(id !== 0){
            const location = this.props.locationList[id-1];
            this.setState({
                locationId: id,
                locationName: location.name,
                locationCapacity: location.capacity
            });
        }
    }

    render(){
        const locations = this.props.locationList;
        const locationList = locations.map((location)=>{
            return <option label={location.name} key={location.id} value={location.id}>{location.name}</option>
        });

        return(
                <div>
                    <select onChange={this.handleChange}>
                        <option value={0}>Choose One</option>
                        {locationList}
                    </select>
                    <Content locationCapacity={this.state.locationCapacity} locationName={this.state.locationName} locationId={this.state.locationId}/>
                </div>
            );
    }
}