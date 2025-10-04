import React from 'react';
import { Button } from '../atoms/Button';

export type ChartType = 'bar' | 'line' | 'pie';

interface ChartTypeSelectorProps {
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export const ChartTypeSelector: React.FC<ChartTypeSelectorProps> = ({
  selectedType,
  onTypeChange,
}) => {
  const chartTypes: { type: ChartType; label: string }[] = [
    { type: 'bar', label: 'Bar Chart' },
    { type: 'line', label: 'Line Chart' },
    { type: 'pie', label: 'Pie Chart' },
  ];

  return (
    <div className="flex gap-2">
      {chartTypes.map(({ type, label }) => (
        <Button
          key={type}
          onClick={() => onTypeChange(type)}
          variant={selectedType === type ? 'primary' : 'outline'}
          size="sm"
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
