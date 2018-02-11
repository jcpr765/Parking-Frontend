import React from 'react';
import moment from 'moment';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

export const WeekStats = (props) => {
    const startOfWeek = moment().subtract(6, 'days').format('MMM Do YY');
    const today = moment().format('MMM Do YY');
    return(
        <div className="chart-div">
            <h3>Lot activity over the past week ({startOfWeek} - {today})</h3>
            <ResponsiveContainer minHeight={250}>
                <BarChart style={props.style} data={props.weekData}>
                    <Bar dataKey="total" fill="#8884d8"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}