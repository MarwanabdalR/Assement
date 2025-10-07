import React from 'react';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';
import { SalesData } from '@/data/mockData';
import { ChartType } from '../molecules/ChartTypeSelector';

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
  threshold?: number;
}

const SalesChartComponent: React.FC<SalesChartProps> = ({ 
  data, 
  chartType, 
  threshold = 0 
}) => {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChart data={data} threshold={threshold} />;
      case 'line':
        return <LineChart data={data} threshold={threshold} />;
      case 'pie':
        return <PieChart data={data} threshold={threshold} />;
      default:
        return <BarChart data={data} threshold={threshold} />;
    }
  };

  return (
    <div className="w-full" role="img" aria-label={`Sales ${chartType} chart`}>
      {renderChart()}
    </div>
  );
};

export const SalesChart = React.memo(SalesChartComponent);
