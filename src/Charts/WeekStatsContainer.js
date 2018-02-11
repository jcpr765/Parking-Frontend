import React from 'react';
import request from 'request';
import {httpAddress} from '../App';
import {WeekStats} from './WeekStats';

export class WeekStatsContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            weekData: [],
        }
    }

    componentDidMount(){
        if(this.props.locationId !== 0){
            this.getData();
            setInterval(()=>{
                this.getData();
            }, 5000);
        }
    }

    getData =()=>{
        request.get(httpAddress + 'locations/week/'+this.props.locationId, (err, res, body) => {
                if(!err && (res.statusCode === 200 || res.statusCode === 304)){
                    const data = JSON.parse(body);
                    this.setState({
                        weekData: data,
                    });
                }
                });
    }

    componentWillUnmount(){
        clearInterval();
    }

    render(){
        const style= {marginLeft: 'auto', marginRight: 'auto'};
        return(
            <div>
                <WeekStats style={style} weekData={this.state.weekData}/>
            </div>
        );
    }
}