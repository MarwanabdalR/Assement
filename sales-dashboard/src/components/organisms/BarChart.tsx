import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/data/mockData';

interface BarChartProps {
  data: SalesData[];
  threshold?: number;
}

const BarChartComponent: React.FC<BarChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter(item => item.sales >= threshold);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96" role="img" aria-label="Bar chart of sales by month">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip 
            formatter={(value: number) => [formatCurrency(value), 'Sales']}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const BarChart = React.memo(BarChartComponent);
