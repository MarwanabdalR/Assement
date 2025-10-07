import React, { useMemo } from 'react';
import { Card } from '../atoms/Card';
import { SalesData } from '@/data/mockData';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface SalesStatsProps {
  data: SalesData[];
  threshold?: number;
}

export const SalesStats: React.FC<SalesStatsProps> = ({ data, threshold = 0 }) => {
  const filteredData = useMemo(() => data.filter(item => item.sales >= threshold), [data, threshold]);

  const { totalSales, averageSales, maxSales, minSales } = useMemo(() => {
    if (filteredData.length === 0) {
      return { totalSales: 0, averageSales: 0, maxSales: 0, minSales: 0 };
    }
    const total = filteredData.reduce((sum, item) => sum + item.sales, 0);
    const avg = total / filteredData.length;
    const max = Math.max(...filteredData.map(item => item.sales));
    const min = Math.min(...filteredData.map(item => item.sales));
    return { totalSales: total, averageSales: avg, maxSales: max, minSales: min };
  }, [filteredData]);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const stats = [
    {
      title: 'Total Sales',
      value: formatCurrency(totalSales),
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Average Sales',
      value: formatCurrency(averageSales),
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Highest Sales',
      value: formatCurrency(maxSales),
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Lowest Sales',
      value: formatCurrency(minSales),
      icon: TrendingDown,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" aria-live="polite">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="p-4" title={stat.title}>
            <div className="flex items-center" aria-label={`${stat.title}: ${stat.value}`}>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
