import React from 'react';
import moment from 'moment';
import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

export const BarChartContainer = (props) => {
    const startOfWeek = moment().subtract(6, 'days').format('MMM Do YY');
    const today = moment().format('MMM Do YY');
    return(
        <div className="chart-div">
            <h3>Lot activity over the past week ({startOfWeek} - {today})</h3>
            <BarChart style={props.style} width={730} height={250} data={props.barData}>
            <Bar dataKey="total" fill="#8884d8"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
        </BarChart>
        </div>
    );
}