import React from 'react';
import moment from 'moment';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

export const GateStats = (props) => {
    const startOfWeek = moment().subtract(6, 'days').format('MMM Do YY');
    const today = moment().format('MMM Do YY');
    return(
        <div className="chart-div">
            <h3>Activity per gate over the past week ({startOfWeek} - {today})</h3>
            <ResponsiveContainer minHeight={250}>
                <BarChart style={props.style} data={props.gateData}>
                    <Bar dataKey="total" fill="#FFAA00"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}