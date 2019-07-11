/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { withTheme } from 'styled-components';

const CustomLineChart = props => {
  const { theme, data } = props;
  const renderDegree = (val, name) => {
    return `${val} °C`;
  };

  return (
    <LineChart
      width={900}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid vertical={false} stroke="#8d96b2" fill="none" />
      <XAxis axisLine={false} tickLine={false} dataKey="time" />
      <YAxis
        axisLine={false}
        tickLine={false}
        orientation="right"
        tickFormatter={renderDegree}
      />
      <Tooltip formatter={renderDegree} />
      <Line
        type="natural"
        dot={{ fill: `${theme.colors.primary}`, strokeWidth: 5 }}
        dataKey="temp"
        activeDot={{ r: 10 }}
        stroke={theme.colors.primary}
        strokeWidth={2}
      />
    </LineChart>
  );
};

export default withTheme(CustomLineChart);
