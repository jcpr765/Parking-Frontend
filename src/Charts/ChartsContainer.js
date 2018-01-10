import React from 'react';
import request from 'request';
import {httpAddress} from '../App';
import {PieChartContainer} from './PieChartContainer';
import {BarChartContainer} from './BarChartContainer';

export class ChartsContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            barData: [],
            pieData: []
            
        }
    }

    componentDidMount(){
        if(this.props.locationId !== 0){
            request.get(httpAddress + '/week/'+this.props.locationId, (err, res, body) => {
                if(!err && (res.statusCode === 200 || res.statusCode === 304)){
                    const data = JSON.parse(body);
                    this.setState({
                        barData: data,
                        pieData: [
                            {
                                name: 'Taken spots',
                                value: data[data.length-1].total
                            },
                            {
                                name: 'Available spots',
                                value: this.props.locationCapacity - data[data.length-1].total
                            }
                        ]
                    });
                }
            });
        }
    }

    

    render(){
        const style= {marginLeft: 'auto', marginRight: 'auto'};
        return(
            <div>
                <PieChartContainer style={style} pieData={this.state.pieData}/>
                <BarChartContainer style={style} barData={this.state.barData}/>
            </div>
        );
    }
}