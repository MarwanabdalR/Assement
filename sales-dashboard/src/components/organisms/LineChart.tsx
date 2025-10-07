import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/data/mockData';

interface LineChartProps {
  data: SalesData[];
  threshold?: number;
}

const LineChartComponent: React.FC<LineChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter(item => item.sales >= threshold);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96" role="img" aria-label="Line chart of sales by month">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip 
            formatter={(value: number) => [formatCurrency(value), 'Sales']}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="#3B82F6" 
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 2 }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const LineChart = React.memo(LineChartComponent);
