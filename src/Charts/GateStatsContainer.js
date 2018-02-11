import React from 'react';
import request from 'request';
import {httpAddress} from '../App';
import {GateStats} from './GateStats';

export class GateStatsContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            gateData: [],
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
        request.get(httpAddress + 'gates/week/'+this.props.locationId, (err, res, body) => {
                if(!err && (res.statusCode === 200 || res.statusCode === 304)){
                    const data = JSON.parse(body);
                    this.setState({
                        gateData: data,
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
                <GateStats style={style} gateData={this.state.gateData}/>
            </div>
        );
    }
}