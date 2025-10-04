'use client';

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/atoms/Card';
import { FilterInput } from '@/components/molecules/FilterInput';
import { ChartTypeSelector, ChartType } from '@/components/molecules/ChartTypeSelector';
import { YearSelector } from '@/components/molecules/YearSelector';
import { SalesChart } from '@/components/organisms/SalesChart';
import { SalesStats } from '@/components/organisms/SalesStats';
import { salesData, getSalesDataByYear } from '@/data/mockData';

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number>(0);
  const [appliedThreshold, setAppliedThreshold] = useState<number>(0);

  const availableYears = salesData.map(data => data.year);

  const currentYearData = useMemo(() => {
    const yearData = getSalesDataByYear(selectedYear);
    return yearData ? yearData.data : [];
  }, [selectedYear]);

  const handleApplyFilter = () => {
    setAppliedThreshold(threshold);
  };

  const handleResetFilter = () => {
    setThreshold(0);
    setAppliedThreshold(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Dashboard</h1>
          <p className="text-gray-600">Analyze sales performance across different years and time periods</p>
        </div>

        {/* Controls Section */}
        <div className="mb-8 space-y-6">
          <Card title="Dashboard Controls">
            <div className="space-y-6">
              {/* Year Selection */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Select Year</h4>
                <YearSelector
                  selectedYear={selectedYear}
                  onYearChange={setSelectedYear}
                  availableYears={availableYears}
                />
              </div>

              {/* Chart Type Selection */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Chart Type</h4>
                <ChartTypeSelector
                  selectedType={chartType}
                  onTypeChange={setChartType}
                />
              </div>

              {/* Filter Input */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Filter by Sales Threshold</h4>
                <FilterInput
                  threshold={threshold}
                  onThresholdChange={setThreshold}
                  onApplyFilter={handleApplyFilter}
                  onResetFilter={handleResetFilter}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mb-8">
          <SalesStats data={currentYearData} threshold={appliedThreshold} />
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <Card title={`Sales Data for ${selectedYear}`}>
            <SalesChart
              data={currentYearData}
              chartType={chartType}
              threshold={appliedThreshold}
            />
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="About This Dashboard">
            <div className="space-y-3 text-sm text-gray-600">
              <p>This dashboard displays sales data for the years 2022, 2023, and 2024.</p>
              <p>You can switch between different chart types and apply filters to analyze the data.</p>
              <p>Use the threshold filter to focus on sales above a specific amount.</p>
            </div>
          </Card>
          
          <Card title="Data Source">
            <div className="space-y-3 text-sm text-gray-600">
              <p>This dashboard uses mock sales data generated for demonstration purposes.</p>
              <p>The data includes monthly sales figures for each year with realistic variations.</p>
              <p>In a production environment, this would connect to a real data source or API.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
