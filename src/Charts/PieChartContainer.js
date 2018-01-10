import React from 'react';
import {Tooltip, PieChart, Pie, Cell } from 'recharts';

export class PieChartContainer extends React.Component {

    constructor(props){
        super(props);
        this.renderCustomizedLabel = this.renderCustomizedLabel.bind(this);
        this.bulletStyle = this.bulletStyle.bind(this);
    }

    renderCustomizedLabel ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x  = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy  + radius * Math.sin(-midAngle * RADIAN);
    
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    bulletStyle (color) {
        const bulletStyle = {
            color: color,
            textAlign: 'center',
            listStylePosition: 'inside',
            listStyleType: 'square'
        }
        return bulletStyle;
    }

    render(){
        const data = this.props.pieData;
        const blue = '#0088FE';
        const red = '#f44542';
        return(
            <div className="chart-div">
                <h3>Live Lot Availability</h3>
                <PieChart style={this.props.style} width={800} height={400}>
                <Pie
                dataKey="value"
                data={data}
                label
                >
                    <Cell fill={blue}/>
                    <Cell fill={red}/>
                </Pie>
                <Tooltip/>
            </PieChart>
            <ul>
                <li style={this.bulletStyle(blue)}>Taken Spots</li>
                <li style={this.bulletStyle(red)}>Available Spots</li>
            </ul>
            </div>            
        )
    }
}