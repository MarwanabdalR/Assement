import React from 'react';
import { Button } from '../atoms/Button';

interface YearSelectorProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  availableYears: number[];
}

export const YearSelector: React.FC<YearSelectorProps> = ({
  selectedYear,
  onYearChange,
  availableYears,
}) => {
  return (
    <div className="flex gap-2">
      {availableYears.map((year) => (
        <Button
          key={year}
          onClick={() => onYearChange(year)}
          variant={selectedYear === year ? 'primary' : 'outline'}
          size="sm"
        >
          {year}
        </Button>
      ))}
    </div>
  );
};
