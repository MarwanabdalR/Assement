import React from 'react';
import { Button } from '../atoms/Button';

interface YearSelectorProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  availableYears: number[];
}

const YearSelectorComponent: React.FC<YearSelectorProps> = ({
  selectedYear,
  onYearChange,
  availableYears,
}) => {
  return (
    <div className="flex gap-2" role="group" aria-label="Select year">
      {availableYears.map((year) => (
        <Button
          key={year}
          onClick={() => onYearChange(year)}
          variant={selectedYear === year ? 'primary' : 'outline'}
          size="sm"
          aria-pressed={selectedYear === year}
        >
          {year}
        </Button>
      ))}
    </div>
  );
};

export const YearSelector = React.memo(YearSelectorComponent);
