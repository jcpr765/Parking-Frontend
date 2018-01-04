import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import request from 'request';


export const Header = () => {
    return(
        <header className="App-header">
            <h1>Parking Lot IoT Montoring</h1>
        </header>
    );
}
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
        request.get('http://localhost:4000/locations', (err, res, body)=>{
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

class LocationSelector extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            locationId: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const id = e.target.value;
        this.setState({
            locationId: id
        });
    }

    render(){
        const locations = this.props.locationList;
        const locationList = locations.map((location)=>{
            return <option key={location.id} value={location.id}>{location.name}</option>
        });

        return(
                <div>
                    <select onChange={this.handleChange}>
                        <option>Choose One</option>
                        {locationList}
                    </select>
                    <Content locationId={this.state.locationId}/>
                </div>
            );
    }
}

const Content = (props) => {
    const locationId = props.locationId;
    if(locationId !== 0)
        return(
            <BarChartContainer locationId={locationId}></BarChartContainer>
        );
    else
        return null;
}

class BarChartContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        if(this.props.locationId !== 0){
            request.get('http://localhost:4000/locations/week/'+this.props.locationId, (err, res, body) => {
                if(!err && (res.statusCode === 200 || res.statusCode === 304)){
                    this.setState({
                        data: JSON.parse(body)
                    });
                }
            });
        }
    }

    

    render(){
        const style= {marginLeft: 'auto', marginRight: 'auto'};
        return(
            <div>
                <BarChart style={style} width={730} height={250} data={this.state.data}>
                    <Bar dataKey="total" fill="#8884d8"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                </BarChart>
            </div>
        );
    }
}

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