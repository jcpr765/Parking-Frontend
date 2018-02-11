import React from 'react';
import request from 'request';
import {httpAddress} from '../App';
import {LiveStats} from './LiveStats';

export class LiveStatsContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            liveData: [],
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
        request.get(httpAddress + 'locations/today/'+ this.props.locationId, (err, res, body) => {
                if(!err && (res.statusCode === 200 || res.statusCode === 304)){
                    const data = JSON.parse(body);
                    this.setState({
                        liveData: data,
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
                <LiveStats style={style} liveData={this.state.liveData}/>
            </div>
        );
    }
}